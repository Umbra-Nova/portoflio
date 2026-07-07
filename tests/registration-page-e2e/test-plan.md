# Test Plan: Registration Page (Add User) E2E

**Application under test:** Thinking Tester Contact List App **Target URL:** `https://thinking-tester-contact-list.herokuapp.com/addUser` **Document location:** `tests/registration-page-e2e/test-plan.md` **Status:** Ready for generator consumption

---

## 1. Overview / Scope

### 1.1 Purpose

This document defines the complete set of end-to-end test scenarios for the **user registration ("Add User") page** of the Thinking Tester Contact List App. It is intended to be consumed directly by an automated "generator" step that will produce Playwright `.spec.ts` files, page objects, fixtures, and test data **strictly from the contents of this document**. All locators, expected strings, and steps below are final and verified against the live application; the generator must not invent, guess, or paraphrase alternatives.

### 1.2 In Scope

- The registration form at `/addUser` and its four inputs: `firstName`, `lastName`, `email`, `password`.
- Client-triggered, server-validated form submission behavior (there is no native/client-side HTML5 validation on this form).
- Server-side validation error messages surfaced via the `#error` span for each field, individually and in combination where specified.
- Successful registration flow, including the resulting redirect and implicit login.
- Duplicate-email registration rejection.
- The `Cancel` button navigation behavior.

### 1.3 Out of Scope

- Any contact-list CRUD functionality after a successful registration/redirect to `/contactList` (adding, editing, deleting contacts).
- Profile editing / "Edit User" functionality.
- The login page (`/login`) and its own validation behavior, except as a navigation target for the Cancel button assertion (see `tests/login-page-e2e/test-plan.md`).
- Password reset / account recovery flows (not present in this app).
- Accessibility (a11y) audits, visual regression, and performance testing.
- Any bulk/parallel-load or security penetration testing beyond the single SQL-injection-like string style input already covered by shared login test data (not part of this plan).

---

## 2. Preconditions / Starting State Assumption

Unless a scenario explicitly states otherwise:

- Every test scenario begins with a **fresh, unauthenticated browser context** (no cookies, no localStorage, no active session).
- The browser navigates directly to `https://thinking-tester-contact-list.herokuapp.com/addUser` as the first action of the scenario.
- On initial page load, the `#error` span is present in the DOM but **empty** (no text content). This is the expected baseline state before any submission.
- All four form inputs (`#firstName`, `#lastName`, `#email`, `#password`) are empty on initial load.
- Every scenario that performs a **successful** registration must use a **freshly generated, never-before-used email address** (e.g. `qa-test.<uuid>@example.com`, generated via a UUID or similarly collision-resistant random value at test-run time). Hardcoded/fixed email literals must never be used for registration attempts, because this is a live, shared, public Heroku instance with no data reset mechanism between test runs.
- Scenarios that require an already-registered email (e.g. duplicate-email testing) must first perform their own successful registration within the same test (or a dedicated setup step) using a freshly generated email, then attempt the duplicate registration against that same email — see Section 4.2 for the required context-isolation handling.

---

## 3. Locator Reference Table

| Field / Element | Exact Selector | Notes |
| --- | --- | --- |
| Page heading | `h1` (text: `Add User`) | Use for basic page-loaded sanity check; text is exactly `Add User`. |
| Subheading text | `p` (text: `Sign up to begin adding your contacts!`) | Optional sanity check only. |
| Error message span | `#error` | Present in DOM from initial page load, but **empty** until a failed submit completes. **Timing caveat: this is populated asynchronously after clicking Submit.** The generator must wait for the element to become non-empty (e.g. `await expect(page.locator('#error')).not.toBeEmpty()`) before reading or asserting its text. Reading `textContent` immediately after `click()` without this wait is a race condition and will produce false negatives/flaky failures. |
| Form container | `#add-user` | The `<form id="add-user">` element; inputs are children of this form. Submit button is outside the form but linked via `form="add-user"`. |
| First Name input | `#firstName` | Placeholder text: `First Name`. No `required` attribute, no pattern validation — purely server-validated. |
| Last Name input | `#lastName` | Placeholder text: `Last Name`. No `required` attribute — purely server-validated. |
| Email input | `#email` | Placeholder text: `Email`. **Not** `type="email"` — no native browser email validation occurs. All email format/presence validation is server-side. |
| Password input | `#password` | Placeholder text: `Password`. `type="password"`. No `required` attribute. Server enforces a **minimum length of 7 characters**; no other complexity rules (uppercase/digit/symbol) are confirmed. |
| Submit button | `#submit` | `<button id="submit" type="submit" form="add-user">Submit</button>`. Triggers form submission and the server-side validation round trip. |
| Cancel button | `#cancel` | `<button id="cancel" onclick="location.href='/login'">Cancel</button>`. Navigates directly to `/login` via inline `onclick`, not a standard anchor link. There is **no separate "back to login" text link** on this page — use this button for that scenario. |

---

## 4. Test Scenarios

Each scenario below is numbered and self-contained. Steps are written to be executed literally by an automated browser-driving generator agent. All expected error strings are given verbatim in quotes and must be asserted as **exact string equality** (not substring/contains) unless explicitly marked otherwise.

### 4.1 Scenario: Valid registration succeeds and redirects to /contactList

**ID:** REG-001 **Preconditions:** Fresh, unauthenticated browser context. No prior session.

**Steps:**

1. Navigate to `https://thinking-tester-contact-list.herokuapp.com/addUser`.
2. Generate a fresh, never-used email address (e.g. `qa-test.<uuid>@example.com`).
3. Fill `#firstName` with a valid non-empty string, e.g. `"Test"`.
4. Fill `#lastName` with a valid non-empty string, e.g. `"User"`.
5. Fill `#email` with the freshly generated email address from step 2.
6. Fill `#password` with a valid string of 7 or more characters, e.g. `"Password123!"`.
7. Click `#submit`.
8. Wait for the page URL to change (navigation/redirect) away from `/addUser`.

**Expected Result:**

- The browser URL becomes `https://thinking-tester-contact-list.herokuapp.com/contactList` (path `/contactList`).
- The user is implicitly logged in — no separate login step or credentials re-entry is required or expected.
- The `#error` span is not asserted in this scenario (page has navigated away).

**Failure Condition:**

- The URL remains at `/addUser` after submit.
- The `#error` span becomes populated with any error text.
- The redirect target path is anything other than `/contactList`.

---

### 4.2 Scenario: Registering with an email that is already in use fails

**ID:** REG-002 **Preconditions:** Fresh, unauthenticated browser context at the start of the scenario.

**Important context-isolation note:** A successful registration immediately logs the user in and redirects to `/contactList`. To attempt a duplicate registration afterward, the active session/cookies from the first (successful) registration must not interfere with reloading `/addUser`. The generator must either (a) use a brand-new isolated browser context (e.g. a new incognito/private context with no shared storage) for the duplicate attempt, or (b) explicitly clear all cookies and localStorage/sessionStorage before navigating to `/addUser` again for the duplicate attempt.

**Steps:**

1. In browser context A, navigate to `/addUser`.
2. Generate a fresh, never-used email address, e.g. `qa-test.<uuid>@example.com`. Retain this exact value for reuse in step 7.
3. Fill `#firstName` with `"Test"`, `#lastName` with `"User"`, `#email` with the email from step 2, `#password` with `"Password123!"`.
4. Click `#submit`.
5. Confirm the redirect to `/contactList` succeeds (this is the setup/precondition for this scenario, per REG-001 behavior).
6. Open a **new, isolated browser context** (no shared cookies/localStorage with context A), or explicitly clear all cookies and local/session storage if reusing the same context.
7. In the new/cleared context, navigate to `/addUser`.
8. Fill `#firstName` with `"Test"`, `#lastName` with `"User"`, `#email` with the **same email address used in step 2/3**, `#password` with `"Password123!"` (or any valid 7+ character password).
9. Click `#submit`.
10. Wait for `#error` to become non-empty (see Section 3 async timing caveat).

**Expected Result:**

- The browser URL remains at `/addUser` (no redirect to `/contactList` occurs).
- The `#error` span becomes populated with a non-empty error message related to the duplicate/already-registered email.

**Exact error string status: UNCONFIRMED.** The precise server-side error text for a duplicate-email registration attempt was not fully captured during verification (the test run was interrupted before the exact string could be recorded). The generator/implementer must do ONE of the following before finalizing this scenario's assertion:

- (Preferred) Run this scenario once manually or via a throwaway script against the live app, capture the exact `#error` text, and hardcode that exact string as the expected value (matching the exact-string-equality convention used in all other scenarios in this plan).
- (Fallback, if the above is not done before generation) Assert only that `#error` is non-empty AND that its text contains the word "email" (case-insensitive substring match), explicitly documented in the generated test as a soft assertion pending exact-string confirmation. Do not assert an exact string that has not been verified.

**Failure Condition:**

- The duplicate registration attempt succeeds (redirects to `/contactList`) instead of failing.
- The `#error` span remains empty after the wait.
- (Once the exact string is confirmed and hardcoded) The error text does not exactly match the confirmed string.

---

### 4.3 Scenario: Missing firstName produces field-specific error

**ID:** REG-003 **Preconditions:** Fresh, unauthenticated browser context.

**Steps:**

1. Navigate to `/addUser`.
2. Leave `#firstName` empty (do not fill it).
3. Fill `#lastName` with `"User"`.
4. Fill `#email` with a freshly generated unique email address.
5. Fill `#password` with `"Password123!"`.
6. Click `#submit`.
7. Wait for `#error` to become non-empty.

**Expected Result:**

- The browser URL remains at `/addUser`.
- The `#error` span text is exactly: `User validation failed: firstName: Path `firstName` is required.`

**Failure Condition:**

- The URL navigates away from `/addUser`.
- The `#error` text is empty or does not exactly match the string above.

---

### 4.4 Scenario: Missing lastName produces field-specific error

**ID:** REG-004 **Preconditions:** Fresh, unauthenticated browser context.

**Steps:**

1. Navigate to `/addUser`.
2. Fill `#firstName` with `"Test"`.
3. Leave `#lastName` empty (do not fill it).
4. Fill `#email` with a freshly generated unique email address.
5. Fill `#password` with `"Password123!"`.
6. Click `#submit`.
7. Wait for `#error` to become non-empty.

**Expected Result:**

- The browser URL remains at `/addUser`.
- The `#error` span text is exactly: `User validation failed: lastName: Path `lastName` is required.`

**Failure Condition:**

- The URL navigates away from `/addUser`.
- The `#error` text is empty or does not exactly match the string above.

---

### 4.5 Scenario: Missing email produces field-specific error

**ID:** REG-005 **Preconditions:** Fresh, unauthenticated browser context.

**Steps:**

1. Navigate to `/addUser`.
2. Fill `#firstName` with `"Test"`.
3. Fill `#lastName` with `"User"`.
4. Leave `#email` empty (do not fill it).
5. Fill `#password` with `"Password123!"`.
6. Click `#submit`.
7. Wait for `#error` to become non-empty.

**Expected Result:**

- The browser URL remains at `/addUser`.
- The `#error` span text is exactly: `User validation failed: email: Email is invalid`
- Note: this is the identical string produced for a malformed (non-empty) email — see REG-007. The server has no distinct "email is required" message; an empty email is treated the same as an invalid email string.

**Failure Condition:**

- The URL navigates away from `/addUser`.
- The `#error` text is empty or does not exactly match the string above.

---

### 4.6 Scenario: Missing password produces field-specific error

**ID:** REG-006 **Preconditions:** Fresh, unauthenticated browser context.

**Steps:**

1. Navigate to `/addUser`.
2. Fill `#firstName` with `"Test"`.
3. Fill `#lastName` with `"User"`.
4. Fill `#email` with a freshly generated unique email address.
5. Leave `#password` empty (do not fill it).
6. Click `#submit`.
7. Wait for `#error` to become non-empty.

**Expected Result:**

- The browser URL remains at `/addUser`.
- The `#error` span text is exactly: `User validation failed: password: Path `password` is required.`

**Failure Condition:**

- The URL navigates away from `/addUser`.
- The `#error` text is empty or does not exactly match the string above.

---

### 4.7 Scenario: Invalid email format (non-empty but malformed) produces field-specific error

**ID:** REG-007 **Preconditions:** Fresh, unauthenticated browser context.

**Steps:**

1. Navigate to `/addUser`.
2. Fill `#firstName` with `"Test"`.
3. Fill `#lastName` with `"User"`.
4. Fill `#email` with the literal malformed string `"not-an-email"` (non-empty, but not a valid email format).
5. Fill `#password` with `"Password123!"`.
6. Click `#submit`.
7. Wait for `#error` to become non-empty.

**Expected Result:**

- The browser URL remains at `/addUser`.
- The `#error` span text is exactly: `User validation failed: email: Email is invalid`
- Note: this is the identical string to the missing-email case (REG-005) — the server does not differentiate between "empty" and "malformed" email values.

**Failure Condition:**

- The URL navigates away from `/addUser`.
- The `#error` text is empty or does not exactly match the string above.

---

### 4.8 Scenario: Password shorter than 7 characters produces field-specific error

**ID:** REG-008 **Preconditions:** Fresh, unauthenticated browser context.

**Steps:**

1. Navigate to `/addUser`.
2. Fill `#firstName` with `"Test"`.
3. Fill `#lastName` with `"User"`.
4. Fill `#email` with a freshly generated unique email address.
5. Fill `#password` with the literal single-character string `"1"`.
6. Click `#submit`.
7. Wait for `#error` to become non-empty.

**Expected Result:**

- The browser URL remains at `/addUser`.
- The `#error` span text is exactly: `User validation failed: password: Path `password` (`1`) is shorter than the minimum allowed length (7).`

**Failure Condition:**

- The URL navigates away from `/addUser`.
- The `#error` text is empty or does not exactly match the string above.

---

### 4.9 Scenario: Cancel button navigates back to /login

**ID:** REG-009 **Preconditions:** Fresh, unauthenticated browser context.

**Steps:**

1. Navigate to `/addUser`.
2. Optionally fill in any subset of the form fields (not required for this scenario — the Cancel button performs an unconditional client-side redirect regardless of form state).
3. Click `#cancel`.
4. Wait for the page URL to change.

**Expected Result:**

- The browser URL becomes `https://thinking-tester-contact-list.herokuapp.com/login` (path `/login`).
- No form submission occurs; no `#error` text is expected to appear as a result of this action.

**Failure Condition:**

- The URL does not change to `/login`.
- Any network request resembling a form submission (e.g. POST to a users/registration endpoint) is observed as a result of clicking Cancel.

---

## 5. Risks / Flakiness Notes

The following risks are specific to testing against this **live, third-party, publicly shared** Heroku application, and must be accounted for by the generator when producing tests and by anyone maintaining them:

1. **Persistent shared state, no reset mechanism.** This app has no test-data reset/cleanup endpoint and no isolated per-run database. Any user successfully registered during a test run persists indefinitely and is visible to/affected by other concurrent or future test runs (including runs by other people using the same public instance).

2. **Mandatory unique email generation per test.** Every scenario that performs a successful registration (REG-001, and the setup portion of REG-002) MUST generate a cryptographically/randomly unique email address at runtime (e.g. via `randomUUID()`), never a hardcoded literal. This is required both to avoid collisions across parallel test workers within a single run and to avoid collisions across repeated CI runs over time, since previously used emails remain permanently registered on the shared instance.

3. **Session/cookie interference on the duplicate-email scenario (REG-002).** Because a successful registration immediately authenticates the session and redirects to `/contactList`, attempting to revisit `/addUser` afterward in the same browser context may behave differently than a true fresh visit (e.g. redirect behavior, session state bleed). REG-002 must use either a brand-new isolated browser context or explicit cookie/localStorage/sessionStorage clearing between the initial successful registration and the subsequent duplicate-email attempt.

4. **Unconfirmed duplicate-email error string (REG-002).** The exact `#error` text returned for a duplicate-email registration attempt was not fully confirmed during verification. Do not hardcode a guessed string. Either capture and confirm the exact string via one live run before finalizing the generated test, or implement the documented fallback assertion (non-empty error text containing "email", case-insensitive) as an explicitly flagged soft assertion pending confirmation.

5. **Asynchronous `#error` population (race condition).** The `#error` span exists in the DOM from initial page load but is empty until the server round-trip completes after a submit. Any generated test that clicks `#submit` and then immediately reads `#error`'s `textContent` without waiting risks reading stale/empty content and producing a false pass or a flaky failure. Every scenario in this plan that expects an error explicitly includes a "wait for `#error` to become non-empty" step (e.g. via `expect(locator).not.toBeEmpty()` or an equivalent auto-retrying assertion) — this must be preserved in the generated code and must not be replaced with a fixed/arbitrary timeout.

6. **No native client-side validation to short-circuit against.** Because the form has no `required` attributes and the email field is not `type="email"`, the browser will always submit the form as-is and always trigger a real network round-trip to the server for validation, even for obviously empty/invalid input. Generated tests should not assume or assert any native browser validation UI (e.g. `:invalid` pseudo-class, browser validation bubbles) — all validation feedback comes exclusively from the server via the `#error` span.

7. **Parallel worker collision risk on shared instance.** If tests are run with multiple parallel Playwright workers, ensure the unique-email generation strategy (Risk #2) provides sufficient entropy (e.g. full UUIDv4) so that concurrent workers cannot generate colliding emails within the same run.
