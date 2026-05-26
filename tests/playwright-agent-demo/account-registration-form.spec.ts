// spec: specs/account-creation-user-story.md
// Acceptance Criteria: AC1, AC2, AC3, AC4, AC10

import { test } from "@playwright/test";
// import { RegistrationPage } from '@pages/registration-page';
// import testUser from '@testdata/user-data.json';

test.describe("Account Registration Form", () => {
  // test.beforeEach(async ({ page }) => {
  //   // Navigate to the registration page before each test
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.goto();
  // });
  // test('Verify account registration form displays with all required fields', async ({
  //   page,
  // }) => {
  //   // AC1: Account Registration Form Display - Verify form title and all fields are present
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.verifyFormTitle();
  //   await registrationPage.verifySocialTitleOptions();
  // });
  // test('Select and verify social title selection persists', async ({
  //   page,
  // }) => {
  //   // AC2: Social Title Selection - Select Mr. or Mrs. and verify persistence
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.selectSocialTitle('Mr.');
  //   // Fill form to test persistence
  //   const firstNameInput = page
  //     .locator('#field-firstname')
  //     .first();
  //   await registrationPage.fillTextField(firstNameInput, testUser.user1.firstName);
  //   // Social title should still be selected
  //   const socialRadios = page.locator('input[name="id_gender"]');
  //   const firstRadioChecked = socialRadios.first();
  //   await expect(firstRadioChecked).toBeChecked();
  //   // Switch to Mrs
  //   const secondRadio = socialRadios.nth(1);
  //   if (await secondRadio.isVisible()) {
  //     await secondRadio.click();
  //     await expect(secondRadio).toBeChecked();
  //     await expect(socialRadios.first()).not.toBeChecked();
  //   }
  // });
  // test('Enter personal information in registration form', async ({ page }) => {
  //   // AC3: Personal Information Entry - Fill all fields including optional birthdate
  //   const registrationPage = new RegistrationPage(page);
  //   await registrationPage.selectSocialTitle('Mr.');
  //   // Verify all fields are filled
  //   const firstNameInput = page
  //     .locator('#field-firstname')
  //     .first();
  //   const lastNameInput = page
  //     .locator('#field-lastname')
  //     .first();
  //   const emailInput = page.locator('input[name*='email']').first();
  //   const passwordInput = page.locator('input[name*='password']').first();
  //   await expect(firstNameInput).toHaveValue(testUser.user1.firstName);
  //   await expect(lastNameInput).toHaveValue(testUser.user1.lastName);
  //   await expect(emailInput).toHaveValue(testUser.user1.email);
  //   await expect(passwordInput).toHaveValue(testUser.user1.password);
  // });
  // test('Verify registration form checkboxes for agreements and preferences', async ({
  //   page,
  // }) => {
  //   // AC4: Agreements and Preferences - Verify all checkboxes are present
  //   const registrationPage = new RegistrationPage(page);
  // //  await registrationPage.scrollToCheckboxes();
  //   // Verify terms checkbox exists
  //   const termsCheckbox = page
  //     .locator('input[name*='terms'], input[name*='agreement']')
  //     .first();
  //   await expect(termsCheckbox).toBeVisible();
  //   // Verify other checkboxes if present
  //   const allCheckboxes = page.locator('input[type='checkbox']');
  //   const checkboxCount = await allCheckboxes.count();
  //   expect(checkboxCount).toBeGreaterThan(0);
  // });
  // test('Toggle password visibility on registration form', async ({ page }) => {
  //   // AC10: Password Visibility Toggle - Show and hide password
  //   const registrationPage = new RegistrationPage(page);
  //   const passwordInput = page.locator('input[name*='password']').first();
  //   await registrationPage.fillTextField(passwordInput, 'TestPassword123');
  //   // Verify password is masked by default
  //   const defaultType = passwordInput;
  //   await expect(defaultType).toHaveAttribute('type', 'password');
  //   // Check if toggle exists
  //   const hasToggle = await registrationPage.verifyPasswordVisibilityToggle();
  //   if (hasToggle) {
  //     await registrationPage.togglePasswordVisibility();
  //     const typeAfter = await passwordInput.getAttribute('type');
  //     if (typeAfter === 'text') {
  //       const visibleValue = passwordInput;
  //       await expect(visibleValue).toHaveValue('TestPassword123');
  //       // Toggle back
  //       await registrationPage.togglePasswordVisibility();
  //       const typeAfterHide = passwordInput;
  //       await expect(typeAfterHide).toHaveAttribute('type', 'password');
  //     }
  //   }
  // });
});
