# Login E2E Test Plan — Thinking Tester Contact List App

**Application Under Test (AUT):** Thinking Tester Contact List App **Page Under Test:** `/login` (`https://thinking-tester-contact-list.herokuapp.com/login`) **Document Location:** `tests/login-page-e2e/test-plan.md` **Purpose:** This document is the authoritative, self-contained specification for the login page E2E test suite. It is intended to be consumed by an automated "generator" step that will produce Playwright `.spec.ts` files, page objects, fixtures, and test data strictly from the contents of this document. No information outside this document should be assumed.

---

## 1. Overview / Scope

### 1.1 In Scope

This plan covers end-to-end functional testing of the **Login page** (`/login`) of the Thinking Tester Contact List App, specifically:

- Successful authentication with valid, previously-registered credentials.
- Server-side error handling for all classes of invalid login attempts (wrong password, unregistered email, empty fields, whitespace-only fields, injection-like strings).
- Verification that the generic error message is displayed correctly and consistently, including the asynchronous timing of its appearance.
- Case-insensitivity of email matching during login.
- Navigation from the Login page to the Sign Up page (`/addUser`) via the on-page "Sign up" button.

### 1.2 Explicitly Out of Scope

The following are **not** covered by this plan and must **not** be included by the generator:

- Contact list CRUD operations (create/read/update/delete contacts) — this is a separate feature area, tested elsewhere.
- Logout functionality.
- Password reset / "forgot password" flows — **this app has no password-reset feature**; no such flow exists to test.
- Sign-up / registration flow validation itself (field-level validation on `/addUser`) — registration is used only as **setup/precondition tooling** for scenarios in this plan that require a pre-existing valid user. The registration form's own validation behavior is out of scope here (see `tests/registration-page-e2e/test-plan.md`).
- Security/penetration testing. Scenario 4.8 (injection-like string) is a **basic negative-path sanity check only**, not a security assessment.
- Accessibility (a11y) auditing.
- Visual/pixel regression testing.
- Performance/load testing.

---

## 2. Preconditions / Starting State Assumptions

- **Default starting state for every scenario:** a fresh, blank browser context/page navigated directly to `/login`, with **no prior session, no cookies, no cached login state**. Each test must start from an unauthenticated navigation to `/login` unless otherwise stated.
- The application is a **live, shared, public third-party Heroku deployment** with **no database reset mechanism** available to tests. Any state created (e.g., registered users) is **permanent and shared** across all test runs and workers, forever (or until the app's own data is purged by its maintainers, which is outside test control).
- **No fixed/reusable seed account exists or should be assumed.** Any scenario that requires "a valid registered user" must **register that user fresh, inline, as part of that scenario's own setup steps**, using a unique, randomly generated email (see Section 5 for uniqueness requirements). Do not hardcode or reuse any specific email address across scenarios or test runs.
- Registration (when required as setup) is performed via the app's `/addUser` sign-up form using a generated unique email and a fixed known password chosen by the test/fixture. The mechanics of the registration form itself are not specified in this document beyond what is needed to produce a valid logged-out user account for use as login test input; the generator should treat "register a user" as a reusable setup helper/fixture, not a scenario under test.
- No scenario in this plan depends on the outcome or side effects of any other scenario. Each scenario must be independently executable and re-runnable.

---

## 3. Locator Reference Table

All locators below are relative to the `/login` page. These are the **only** locators to be used by the generator for this page — do not invent alternate selectors.

| Field / Element | Exact Selector | Notes |
| --- | --- | --- |
| Email input | `#email` | `<input id="email" placeholder="Email">`. No `type="email"`, no `required` attribute — there is no native/client-side HTML5 validation on this field. |
| Password input | `#password` | `<input id="password" type="password" placeholder="Password">`. No `required` attribute — no native/client-side validation on this field. |
| Submit button | `#submit` | `<button id="submit">Submit</button>`. Submits the form regardless of field contents (empty, whitespace, etc.) — nothing blocks submission client-side. |
| Error message container | `#error` | `<span id="error"></span>`. **Timing caveat (critical):** This span exists in the DOM from initial page load and is **empty** at that point. After clicking Submit, its text is populated **asynchronously via client-side JS** following the server round-trip. Test/generator code must use a **web-first assertion that waits for the text to become non-empty** (e.g., `await expect(page.locator('#error')).toHaveText('Incorrect username or password')` or `await expect(page.locator('#error')).not.toBeEmpty()` before reading/asserting content). Reading `textContent()` immediately after clicking Submit without waiting **will race the async update and observe an empty string** — this is a known failure mode to guard against, not a hypothetical. |
| Sign up button | `#signup` | `<button id="signup">Sign up</button>` — this is a **button**, not an anchor/link. It performs a client-side redirect via inline `onclick="location.href='/addUser'"`. Clicking it navigates the browser to `/addUser`. |
| Page heading label | `text=Log In:` | Static `<p>Log In:</p>` label, present on page load. Useful only as a page-loaded sanity marker if needed; not required for core assertions. |

**Exact expected error text (verbatim, case-sensitive, used for every negative scenario in this plan):**

```
Incorrect username or password
```

---

## 4. Test Scenarios

Each scenario is independently executable, starts from a fresh unauthenticated page load of `/login` (unless a setup step is described first), and is numbered for reliable parsing by the generator.

---

### 4.1 Scenario: Valid login succeeds and redirects to `/contactList`

**Preconditions:**

- No pre-existing user assumed. A valid registered user must be created fresh as part of this scenario's setup.

**Steps:**

1. Setup (inline, not part of the timed test steps below): register a new user via `/addUser` using a freshly generated unique email (e.g. `qa-test.<uuid>@example.com`) and a known password (e.g. `Test1234!`). Confirm registration succeeds and results in a logged-out or loggable-out state, then navigate to `/login`.
2. Navigate to `/login`.
3. Click the Email input (`#email`) and type the registered user's exact email.
4. Click the Password input (`#password`) and type the registered user's exact password.
5. Click the Submit button (`#submit`).
6. Wait for navigation away from `/login`.

**Expected Result / Success Criteria:**

- The browser navigates to a URL ending in `/contactList`.
- No error text is shown (the `#error` span is not asserted in this scenario since navigation occurs).

**Failure Condition:**

- The page remains on `/login`.
- The `#error` span becomes populated with any text.
- Navigation goes to any URL other than `/contactList`.

---

### 4.2 Scenario: Invalid password for a registered email

**Preconditions:**

- A valid registered user must exist. Register a new user fresh inline as setup (unique generated email + known password), same as 4.1 step 1.

**Steps:**

1. Complete setup: register a fresh unique user as in 4.1.
2. Navigate to `/login`.
3. Type the registered user's exact email into `#email`.
4. Type an incorrect password (any string different from the registered password, e.g. `WrongPassword999!`) into `#password`.
5. Click `#submit`.
6. Wait for the `#error` span to become non-empty (web-first assertion; do not read immediately).

**Expected Result / Success Criteria:**

- The `#error` span's text equals exactly: `Incorrect username or password`.
- The page URL remains `/login` (no navigation occurred).

**Failure Condition:**

- Navigation away from `/login` occurs.
- `#error` text is empty, or does not exactly match `Incorrect username or password`.

---

### 4.3 Scenario: Unregistered / non-existent email

**Preconditions:**

- None required — no user needs to be registered. The email used must be guaranteed not to exist (freshly generated unique value, never registered).

**Steps:**

1. Navigate to `/login`.
2. Type a freshly generated, never-registered email (e.g. `qa-nonexistent.<uuid>@example.com`) into `#email`.
3. Type any arbitrary password (e.g. `AnyPassword123!`) into `#password`.
4. Click `#submit`.
5. Wait for the `#error` span to become non-empty.

**Expected Result / Success Criteria:**

- The `#error` span's text equals exactly: `Incorrect username or password`.
- The page URL remains `/login`.

**Failure Condition:**

- Navigation away from `/login` occurs.
- `#error` text is empty or does not exactly match the expected string.

---

### 4.4 Scenario: Empty email field (password filled)

**Preconditions:**

- None required. This scenario deliberately does not need a registered user since no login can succeed with a blank email.

**Note for generator (explicit, verified finding, not a guess):** Because the `#email` input has no `required` attribute and no client-side validation exists on this page, submitting the form with a blank email is **not blocked by the browser**. It is sent to the server like any other login attempt, and the server treats it as invalid credentials, returning the **same generic error** used for all other invalid attempts. Do **not** implement or expect a "required field" / native validation message (e.g. `:invalid` pseudo-class, validation bubble) for this scenario — none exists.

**Steps:**

1. Navigate to `/login`.
2. Leave `#email` empty (do not type anything into it).
3. Type any non-empty password (e.g. `SomePassword123!`) into `#password`.
4. Click `#submit`.
5. Wait for the `#error` span to become non-empty.

**Expected Result / Success Criteria:**

- The `#error` span's text equals exactly: `Incorrect username or password`.
- The page URL remains `/login`.
- No native browser validation UI/blocking occurs.

**Failure Condition:**

- Any native validation prevents submission (would indicate an app change from documented behavior).
- `#error` text is empty or does not exactly match the expected string.
- Navigation away from `/login` occurs.

---

### 4.5 Scenario: Empty password field (email filled)

**Preconditions:**

- None required, for the same reasons as 4.4. An arbitrary or even a real registered email may be used; a registered user is **not required** since the blank password guarantees failure regardless.

**Note for generator:** Same reasoning as 4.4 — `#password` has no `required` attribute and no client-side validation. This is a deliberate, verified finding: blank password is submitted to the server and treated as an ordinary invalid-credentials case.

**Steps:**

1. Navigate to `/login`.
2. Type any email string into `#email` (e.g. `qa-test.<uuid>@example.com` — does not need to be registered).
3. Leave `#password` empty (do not type anything into it).
4. Click `#submit`.
5. Wait for the `#error` span to become non-empty.

**Expected Result / Success Criteria:**

- The `#error` span's text equals exactly: `Incorrect username or password`.
- The page URL remains `/login`.

**Failure Condition:**

- Any native validation prevents submission.
- `#error` text is empty or does not exactly match the expected string.
- Navigation away from `/login` occurs.

---

### 4.6 Scenario: Both fields empty

**Preconditions:**

- None required.

**Steps:**

1. Navigate to `/login`.
2. Leave `#email` empty.
3. Leave `#password` empty.
4. Click `#submit`.
5. Wait for the `#error` span to become non-empty.

**Expected Result / Success Criteria:**

- The `#error` span's text equals exactly: `Incorrect username or password`.
- The page URL remains `/login`.

**Failure Condition:**

- Any native validation prevents submission.
- `#error` text is empty or does not exactly match the expected string.
- Navigation away from `/login` occurs.

---

### 4.7 Scenario: Whitespace-only input in both fields

**Preconditions:**

- None required.

**Steps:**

1. Navigate to `/login`.
2. Type a whitespace-only string into `#email` (e.g. `"   "` — three space characters).
3. Type a whitespace-only string into `#password` (e.g. `"   "` — three space characters).
4. Click `#submit`.
5. Wait for the `#error` span to become non-empty.

**Expected Result / Success Criteria:**

- The `#error` span's text equals exactly: `Incorrect username or password`.
- The page URL remains `/login`.

**Failure Condition:**

- Any native validation prevents submission (e.g. trimming causing an unexpected client-side block).
- `#error` text is empty or does not exactly match the expected string.
- Navigation away from `/login` occurs.

---

### 4.8 Scenario: SQL-injection-like string as basic negative-path sanity check

**Preconditions:**

- None required. **This is not a security test** — it is a functional sanity check confirming the app neither crashes nor allows an authentication bypass when fed a classic injection-style payload, and that it degrades to the same ordinary error path as any other invalid input.

**Steps:**

1. Navigate to `/login`.
2. Type the following exact string into `#email`: `' OR '1'='1`
3. Type the following exact string into `#password`: `' OR '1'='1`
4. Click `#submit`.
5. Wait for the `#error` span to become non-empty.

**Expected Result / Success Criteria:**

- The `#error` span's text equals exactly: `Incorrect username or password`.
- The page URL remains `/login` (no authentication bypass occurred).
- No unhandled application error, crash, blank page, or 500-level response is observed as a result of this input.

**Failure Condition:**

- Navigation to `/contactList` occurs (would indicate an authentication bypass — critical finding).
- Any server error page, blank error/crash state, or unexpected page content appears instead of the standard login page with populated `#error`.
- `#error` text is empty or does not exactly match the expected string.

---

### 4.9 Scenario: Case-insensitive email match on login

**Preconditions:**

- A valid registered user must exist, registered with a **mixed-case email**, created fresh inline as part of this scenario's setup.

**Steps:**

1. Setup: register a new user via `/addUser` using a freshly generated unique email that contains mixed case, e.g. `QA.Test.<uuid>@Example.com`, and a known password (e.g. `Test1234!`). Confirm registration succeeds, then ensure a logged-out state and navigate to `/login`.
2. Navigate to `/login`.
3. Type the **lowercased** version of the exact same email into `#email` (e.g. if registered as `QA.Test.<uuid>@Example.com`, type `qa.test.<uuid>@example.com`).
4. Type the correct password (matching what was used at registration) into `#password`.
5. Click `#submit`.
6. Wait for navigation away from `/login`.

**Expected Result / Success Criteria:**

- The browser navigates to a URL ending in `/contactList` (login succeeds despite the case difference between the registered email and the login-time email — email comparison is case-insensitive server-side, as verified).

**Failure Condition:**

- The page remains on `/login`.
- `#error` becomes populated with any text.
- Navigation goes to any URL other than `/contactList`.

---

### 4.10 Scenario: Navigating from Login to Sign Up via the "Sign up" button

**Preconditions:**

- None required.

**Steps:**

1. Navigate to `/login`.
2. Click the Sign up button (`#signup`).
3. Wait for navigation to complete.

**Expected Result / Success Criteria:**

- The browser navigates to a URL ending in `/addUser`.

**Failure Condition:**

- The page remains on `/login`.
- Navigation goes to any URL other than `/addUser`.
- No navigation occurs at all (e.g. if the button's `onclick` handler silently fails).

---

## 5. Risks / Flakiness Notes

The following risks are specific to testing against this **live, shared, third-party Heroku application** and must be accounted for by the generator when producing test code:

1. **Persistent shared state, no reset mechanism.** Every user registered by tests (scenarios 4.1 and 4.9) is created permanently in a shared production-like database with no teardown/reset API available. Tests must never assume a clean slate of registered users and must never rely on a specific, hardcoded email existing — every scenario needing a registered user creates its own fresh one inline (see Section 2).

2. **Unique email generation is mandatory, not optional.** Because state persists indefinitely and tests may run concurrently across parallel workers (and across repeated runs over time, including re-runs on the same day), every registration must use a cryptographically/sufficiently-random unique identifier embedded in the email local-part (e.g., a UUID v4 or equivalent high-entropy token) to avoid collisions between parallel workers or repeated test runs — e.g. `qa-test.<uuid>@example.com`. Reusing a fixed email string across runs will eventually collide with a previously-registered account and produce false failures (e.g., "already registered" behavior on the sign-up form, which is out of scope to handle beyond avoiding it).

3. **Heroku free/eco dyno cold starts.** The app may be in a "sleeping" state if unused, causing the first request in a test run (or after a period of inactivity) to take significantly longer than normal to respond (sometimes 10-30+ seconds). Navigation and initial-load waits, as well as the post-submit wait for `#error`/navigation, should use generous timeouts rather than tight fixed waits, to avoid false failures caused purely by dyno wake-up latency rather than actual application defects.

4. **`#error` async-population race condition (critical implementation risk).** As detailed in Section 3, the `#error` `<span>` is present and empty on initial page load, and its text is set asynchronously by client-side JavaScript after the login POST resolves. Any generated test code that reads the error text via a non-waiting method (e.g., an immediate `.textContent()` or `.innerText()` call right after `.click()` on `#submit`, without an intervening web-first assertion/auto-wait) will intermittently or consistently observe an **empty string**, producing a flaky or falsely-failing test. The generator must use Playwright's web-first, auto-retrying assertions (e.g. `await expect(page.locator('#error')).toHaveText('Incorrect username or password')`) for every negative-path scenario in this plan, rather than manual polling, `waitForTimeout`, or synchronous reads.

5. **No network-level mocking.** Because this suite targets a real live backend with no test doubles, all timing assumptions must be based on actual network/round-trip latency, which is inherently more variable than a mocked/local environment. Retries and timeouts configured at the test-runner level should account for this variability.

6. **Shared app used by other test suites/users.** Since this is a public demo app used by many independent testers and courses worldwide, do not assume any exclusivity over the app's state, other than the guarantee that a sufficiently unique, freshly generated email will not have been registered by anyone else.
