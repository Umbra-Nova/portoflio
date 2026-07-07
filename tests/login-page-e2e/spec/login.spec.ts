import { test, expect } from "../../fixtures/pages.fixture";
import { generateTestUser } from "../../utils/userFactory";
import {
  GENERIC_LOGIN_ERROR,
  invalidCredentials,
} from "../../utils/loginTestData";

test.describe("Login", () => {
  test.use({ baseURL: process.env.THINK_TESTER_BASE_URL });

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test("4.1 valid login succeeds and redirects to /contactList", async ({
    page,
    registrationPage,
    loginPage,
  }) => {
    const user = generateTestUser();
    await registrationPage.goto();
    await registrationPage.register(user);
    await expect(page).toHaveURL(/\/contactList/);

    await page.context().clearCookies();
    await loginPage.goto();
    await loginPage.login(user.email, user.password);

    await expect(page).toHaveURL(/\/contactList/);
  });

  test("4.2 invalid password for a registered email shows the generic error", async ({
    page,
    registrationPage,
    loginPage,
  }) => {
    const user = generateTestUser();
    await registrationPage.goto();
    await registrationPage.register(user);
    await expect(page).toHaveURL(/\/contactList/);

    await page.context().clearCookies();
    await loginPage.goto();
    await loginPage.login(user.email, `${user.password}x`);

    await expect(page).toHaveURL(/\/login/);
    expect(await loginPage.getErrorMessage()).toBe(GENERIC_LOGIN_ERROR);
  });

  for (const { label, email, password } of invalidCredentials) {
    test(`4.3/4.7/4.8 login is rejected for ${label}`, async ({
      page,
      loginPage,
    }) => {
      await loginPage.login(email, password);

      await expect(page).toHaveURL(/\/login/);
      expect(await loginPage.getErrorMessage()).toBe(GENERIC_LOGIN_ERROR);
    });
  }

  test("4.4 empty email field (password filled) is rejected with the generic error", async ({
    page,
    loginPage,
  }) => {
    await loginPage.fillPassword("SomePassword123!");
    await loginPage.submit();

    await expect(page).toHaveURL(/\/login/);
    expect(await loginPage.getErrorMessage()).toBe(GENERIC_LOGIN_ERROR);
  });

  test("4.5 empty password field (email filled) is rejected with the generic error", async ({
    page,
    loginPage,
  }) => {
    await loginPage.fillEmail(`qa-test.${Date.now()}@example.com`);
    await loginPage.submit();

    await expect(page).toHaveURL(/\/login/);
    expect(await loginPage.getErrorMessage()).toBe(GENERIC_LOGIN_ERROR);
  });

  test("4.6 both fields empty is rejected with the generic error", async ({
    page,
    loginPage,
  }) => {
    await loginPage.submit();

    await expect(page).toHaveURL(/\/login/);
    expect(await loginPage.getErrorMessage()).toBe(GENERIC_LOGIN_ERROR);
  });

  test("4.9 login with a lowercased email succeeds for a mixed-case registered account", async ({
    page,
    registrationPage,
    loginPage,
  }) => {
    const user = generateTestUser();
    const mixedCaseEmail = user.email.replace(/^./, (c) => c.toUpperCase());
    await registrationPage.goto();
    await registrationPage.register({ ...user, email: mixedCaseEmail });
    await expect(page).toHaveURL(/\/contactList/);

    await page.context().clearCookies();
    await loginPage.goto();
    await loginPage.login(mixedCaseEmail.toLowerCase(), user.password);

    await expect(page).toHaveURL(/\/contactList/);
  });

  test("4.10 navigating from login to sign up goes to /addUser", async ({
    page,
    loginPage,
  }) => {
    await loginPage.goToSignUp();

    await expect(page).toHaveURL(/\/addUser/);
  });
});
