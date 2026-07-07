import { test, expect } from "../../fixtures/pages.fixture";
import { generateTestUser } from "../../utils/userFactory";
import {
  requiredFieldMatrix,
  INVALID_EMAIL_FORMAT_ERROR,
  SHORT_PASSWORD_ERROR,
} from "../../utils/registrationTestData";

test.describe("Registration", () => {
  test.use({ baseURL: process.env.THINK_TESTER_BASE_URL });

  test.beforeEach(async ({ registrationPage }) => {
    await registrationPage.goto();
  });

  test("REG-001 valid registration succeeds and redirects to /contactList", async ({
    page,
    registrationPage,
  }) => {
    const user = generateTestUser();
    await registrationPage.register(user);

    await expect(page).toHaveURL(/\/contactList/);
  });

  test("REG-002 registering with an email already in use fails", async ({
    page,
    context,
    registrationPage,
  }) => {
    const user = generateTestUser();
    await registrationPage.register(user);
    await expect(page).toHaveURL(/\/contactList/);

    await context.clearCookies();
    await page.evaluate(() => localStorage.clear());
    await registrationPage.goto();
    await registrationPage.register(user);

    await expect(page).toHaveURL(/\/addUser/);
    // Exact duplicate-email error string unconfirmed (see test-plan.md Section 4.2) -
    // fallback soft assertion pending live confirmation.
    expect((await registrationPage.getErrorMessage()).toLowerCase()).toContain(
      "email",
    );
  });

  for (const { omit, expectedError } of requiredFieldMatrix) {
    test(`REG-003..006 missing ${omit} shows the field-specific error`, async ({
      registrationPage,
    }) => {
      const user = generateTestUser({ [omit]: "" });
      await registrationPage.register(user);

      expect(await registrationPage.getErrorMessage()).toBe(expectedError);
    });
  }

  test("REG-007 invalid email format shows the field-specific error", async ({
    registrationPage,
  }) => {
    const user = generateTestUser({ email: "not-an-email" });
    await registrationPage.register(user);

    expect(await registrationPage.getErrorMessage()).toBe(
      INVALID_EMAIL_FORMAT_ERROR,
    );
  });

  test("REG-008 password shorter than 7 characters shows the field-specific error", async ({
    registrationPage,
  }) => {
    const user = generateTestUser({ password: "1" });
    await registrationPage.register(user);

    expect(await registrationPage.getErrorMessage()).toBe(SHORT_PASSWORD_ERROR);
  });

  test("REG-009 cancel button navigates back to /login", async ({
    page,
    registrationPage,
  }) => {
    await registrationPage.cancel();

    await expect(page).toHaveURL(/\/login/);
  });
});
