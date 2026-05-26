// spec: specs/account-creation-user-story.md
// Acceptance Criteria: AC5

import { test } from "@playwright/test";

test.describe("Successful Account Creation", () => {
  // test("Complete account registration with valid data", async ({ page }) => {
  //   // AC5: Successful Account Creation - Create account and verify redirect and login capability
  //   const registrationPage = new RegistrationPage(page);
  //   //const loginPage = new LoginPage(page);
  //   await registrationPage.goto();
  //   const testUser = createTestUser({
  //     firstName: 'Jane',
  //     lastName: 'Doe',
  //   });
  //   await registrationPage.selectSocialTitle('Mrs.');
  //   await registrationPage.scrollToCheckboxes();
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.checkOptionalCheckboxes();
  //   await registrationPage.createAccount();
  //   // Verify redirect - should not be on registration page
  //   await registrationPage.verifyPageUrlExcludes('registration');
  //   // Verify logout link appears (indicates we're logged in)
  //   await loginPage.verifyLogoutLinkPresent();
  //   // Log out
  //   await loginPage.logout();
  //   // Test: Log in with new credentials
  //   await loginPage.goto();
  //   await loginPage.login(testUser);
  //   await loginPage.verifyLoginSuccess();
  //   // Verify logout link appears again
  //   await loginPage.verifyLogoutLinkPresent();
  // });
  // test('Verify account creation with minimal required fields', async ({
  //   page,
  // }) => {
  //   // AC5: Successful Account Creation - Create with only required fields
  //   const registrationPage = new RegistrationPage(page);
  //   const loginPage = new LoginPage(page);
  //   await registrationPage.goto();
  //   const testUser = createTestUser({
  //     firstName: 'Robert',
  //     lastName: 'Johnson',
  //     birthDate: undefined, // Don't include optional field
  //   });
  //   await registrationPage.selectSocialTitle('Mr.');
  //   await registrationPage.fillRegistrationForm(testUser);
  //   await registrationPage.scrollToCheckboxes();
  //   // Only check required terms checkbox, skip optional ones
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.createAccount();
  //   // Verify account was created
  //   await registrationPage.verifyPageUrlExcludes('registration');
  //   await loginPage.verifyLogoutLinkPresent();
  //   // Log out
  //   await loginPage.logout();
  //   // Test: Log in with new credentials
  //   await loginPage.goto();
  //   await loginPage.login(testUser);
  //   await loginPage.verifyLoginSuccess();
  //   // Verify logout link appears again
  //   await loginPage.verifyLogoutLinkPresent();
  // });
  //});
  //});
  //   page,
  // }) => {
  //   // AC5: Verify successful redirect to home page or confirmation page
  //   const registrationPage = new RegistrationPage(page);
  //     await registrationPage.goto();
  //     const testUser = createTestUser({
  //       firstName: 'Michael',
  //       lastName: 'Brown',
  //     });
  //     await registrationPage.selectSocialTitle('Mr.');
  //     await registrationPage.fillRegistrationForm(testUser);
  //     await registrationPage.scrollToCheckboxes();
  //     await registrationPage.acceptTermsAndConditions();
  //     await registrationPage.createAccount();
  //     // Verify page is no longer registration page
  //     await registrationPage.verifyPageUrlExcludes('registration');
  //     // Verify registration form is not visible
  //     const formPresent = await registrationPage.isElementVisible('#customer-form',);
  //     expect(formPresent).toBe(false);
  //   });
  //  });
});
