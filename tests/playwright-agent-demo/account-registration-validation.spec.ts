// spec: specs/account-creation-user-story.md
// Acceptance Criteria: AC6, AC7, AC8, AC9

import { test } from "@playwright/test";
//import { RegistrationPage } from '../../src/pages/registration-page';

test.describe("Account Registration Form Validation", () => {
  // test('Display error messages for missing required fields', async ({
  //   page,
  // }) => {
  //   // AC6: Form Validation - Missing Required Fields
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  //   // Test missing first name
  //   await registrationPage.selectSocialTitle('Mr.');
  //   const lastNameInput = page
  //     .locator('input[name*='lastname'], input[name*='last']')
  //     .first();
  //   await registrationPage.fillTextField(lastNameInput, 'Test');
  //   const emailInput = page.locator('input[name*='email']').first();
  //   await registrationPage.fillTextField(emailInput, generateUniqueEmail());
  //   const passwordInput = page.locator('input[name*='password']').first();
  //   await registrationPage.fillTextField(passwordInput, 'TestPass123!');
  //   await registrationPage.scrollToCheckboxes();
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.createAccount();
  //   // Verify error for missing first name
  //   const hasFirstNameError =
  //     await registrationPage.verifyRequiredFieldError('firstName');
  //   expect(hasFirstNameError).toBe(true);
  // });
  // test('Display error for missing last name field', async ({ page }) => {
  //   // AC6: Form Validation - Missing Last Name
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  //   await registrationPage.selectSocialTitle('Mr.');
  //   const firstNameInput = page
  //     .locator('input[name*='firstname'], input[name*='first']')
  //     .first();
  //   await registrationPage.fillTextField(firstNameInput, 'Test');
  //   const emailInput = page.locator('input[name*='email']').first();
  //   await registrationPage.fillTextField(emailInput, generateUniqueEmail());
  //   const passwordInput = page.locator('input[name*='password']').first();
  //   await registrationPage.fillTextField(passwordInput, 'TestPass123!');
  //   await registrationPage.scrollToCheckboxes();
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.createAccount();
  //   const hasLastNameError =
  //     await registrationPage.verifyRequiredFieldError('lastName');
  //   expect(hasLastNameError).toBe(true);
  // });
  // test('Display error for missing email field', async ({ page }) => {
  //   // AC6: Form Validation - Missing Email
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  //   await registrationPage.selectSocialTitle('Mr.');
  //   const firstNameInput = page
  //     .locator('input[name*='firstname'], input[name*='first']')
  //     .first();
  //   await registrationPage.fillTextField(firstNameInput, 'Test');
  //   const lastNameInput = page
  //     .locator('input[name*='lastname'], input[name*='last']')
  //     .first();
  //   await registrationPage.fillTextField(lastNameInput, 'User');
  //   const passwordInput = page.locator('input[name*='password']').first();
  //   await registrationPage.fillTextField(passwordInput, 'TestPass123!');
  //   await registrationPage.scrollToCheckboxes();
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.createAccount();
  //   const hasEmailError =
  //     await registrationPage.verifyRequiredFieldError('email');
  //   expect(hasEmailError).toBe(true);
  // });
  // test('Display error for missing password field', async ({ page }) => {
  //   // AC6: Form Validation - Missing Password
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  //   const testUser = createTestUser();
  //   await registrationPage.selectSocialTitle('Mr.');
  //   const firstNameInput = page
  //     .locator('input[name*='firstname'], input[name*='first']')
  //     .first();
  //   await registrationPage.fillTextField(firstNameInput, testUser.firstName);
  //   const lastNameInput = page
  //     .locator('input[name*='lastname'], input[name*='last']')
  //     .first();
  //   await registrationPage.fillTextField(lastNameInput, testUser.lastName);
  //   const emailInput = page.locator('input[name*='email']').first();
  //   await registrationPage.fillTextField(emailInput, testUser.email);
  //   await registrationPage.scrollToCheckboxes();
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.createAccount();
  //   const hasPasswordError =
  //     await registrationPage.verifyRequiredFieldError('password');
  //   expect(hasPasswordError).toBe(true);
  // });
  // test('Display error for invalid email format', async ({ page }) => {
  //   // AC7: Email Format Validation
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  //   const testUser = createTestUser({ email: 'notanemail' });
  //   await registrationPage.selectSocialTitle('Mr.');
  //   await registrationPage.fillRegistrationForm(testUser);
  //   await registrationPage.scrollToCheckboxes();
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.createAccount();
  //   const hasEmailFormatError = await registrationPage.verifyEmailFormatError();
  //   expect(hasEmailFormatError).toBe(true);
  // });
  // test('Correct invalid email and proceed', async ({ page }) => {
  //   // AC7: Email Format Validation - Correct email after error
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  //   const testUser = createTestUser({ email: 'invalidemail' });
  //   await registrationPage.selectSocialTitle('Mr.');
  //   await registrationPage.fillRegistrationForm(testUser);
  //   await registrationPage.scrollToCheckboxes();
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.createAccount();
  //   // Verify error first
  //   const hasError = await registrationPage.verifyEmailFormatError();
  //   if (hasError) {
  //     // Correct the email
  //     const emailInput = page.locator('input[name*='email']').first();
  //     await registrationPage.fillTextField(emailInput, generateUniqueEmail());
  //     await registrationPage.createAccount();
  //     // Either account created or different error (not email format)
  //     const currentUrl = page.url();
  //     if (currentUrl.includes('registration')) {
  //       const stillHasEmailError =
  //         await registrationPage.verifyEmailFormatError();
  //       expect(stillHasEmailError).toBe(false);
  //     }
  //   }
  // });
  // test('Display error for special characters in name fields', async ({
  //   page,
  // }) => {
  //   // AC8: Name Format Validation - Special characters
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  //   const testUser = createTestUser({ firstName: '@#$%' });
  //   await registrationPage.selectSocialTitle('Mr.');
  //   await registrationPage.fillRegistrationForm(testUser);
  //   await registrationPage.scrollToCheckboxes();
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.createAccount();
  //   const hasNameFormatError = await registrationPage.verifyNameFormatError();
  //   expect(hasNameFormatError).toBe(true);
  // });
  // test('Display error for numbers in name fields', async ({ page }) => {
  //   // AC8: Name Format Validation - Numbers
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  //   const testUser = createTestUser({ firstName: '123456' });
  //   await registrationPage.selectSocialTitle('Mr.');
  //   await registrationPage.fillRegistrationForm(testUser);
  //   await registrationPage.scrollToCheckboxes();
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.createAccount();
  //   const hasNameFormatError = await registrationPage.verifyNameFormatError();
  //   expect(hasNameFormatError).toBe(true);
  // });
  // test('Display error when terms and conditions are not accepted', async ({
  //   page,
  // }) => {
  //   // AC9: Terms and Conditions Agreement - Error when unchecked
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  //   const testUser = createTestUser();
  //   await registrationPage.selectSocialTitle('Mr.');
  //   await registrationPage.fillRegistrationForm(testUser);
  //   await registrationPage.scrollToCheckboxes();
  //   // Do NOT accept terms
  //   await registrationPage.createAccount();
  //   const hasTermsError = await registrationPage.verifyTermsError();
  //   expect(hasTermsError).toBe(true);
  // });
  // test('Error clears after accepting terms and conditions', async ({
  //   page,
  // }) => {
  //   // AC9: Terms and Conditions - Error resolves when checked
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  //   const testUser = createTestUser();
  //   await registrationPage.selectSocialTitle('Mr.');
  //   await registrationPage.fillRegistrationForm(testUser);
  //   await registrationPage.scrollToCheckboxes();
  //   await registrationPage.createAccount();
  //   // Verify error for unchecked terms
  //   let hasTermsError = await registrationPage.verifyTermsError();
  //   expect(hasTermsError).toBe(true);
  //   // Now accept terms
  //   await registrationPage.acceptTermsAndConditions();
  //   await registrationPage.createAccount();
  //   // Either account created or different error (not terms error)
  //   const currentUrl = page.url();
  //   if (currentUrl.includes('registration')) {
  //     hasTermsError = await registrationPage.verifyTermsError();
  //     expect(hasTermsError).toBe(false);
  //   }
  // });
});
