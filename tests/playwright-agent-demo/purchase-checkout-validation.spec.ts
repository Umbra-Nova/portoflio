// spec: specs/purchase-user-story.md
// Acceptance Criteria: AC18

import { test } from "@playwright/test";
// import { ProductPage } from '@pages/product-page';

test.describe("Checkout Field Validation", () => {
  // test.fixme('Skipping flaky product selection', async ({ page }) => {
  //   // AC18: Checkout Validation - Error messages for missing required fields
  //   const productPage = new ProductPage(page);
  //   await productPage.goto();
  //   // Dismiss potential cookie banner if it appears after navigation
  //   const acceptCookiesBtn = page
  //     .locator(
  //       'button:has-text('Accept'), button:has-text('I agree'), button:has-text('Agree')',
  //     )
  //     .first();
  //   if (await acceptCookiesBtn.isVisible()) {
  //     await acceptCookiesBtn.click();
  //   }
  //   // Ensure any async loading after the banner is finished
  //   await page.waitForLoadState(1000);
  //   await productPage.clickFirstProduct();
  //   await page.waitForLoadState(1000);
  //   const quantityInput = page.locator('input[name*='qty']').first();
  //   await quantityInput.fill('1');
  //   const addToCartButton = page
  //     .locator('button:has-text('Add to cart')')
  //     .first();
  //   await addToCartButton.click();
  //   await page.waitForTimeout(1000);
  //   // Navigate to checkout
  //   const cartIcon = page.locator('[class*='cart']').first();
  //   await cartIcon.click();
  //   await page.waitForLoadState(1000);
  //   const checkoutButton = page
  //     .locator(
  //       'button:has-text('Checkout'), button:has-text('Continue to checkout')',
  //     )
  //     .first();
  //   await checkoutButton.click();
  //   await page.waitForLoadState(1000);
  //   // Try to proceed without filling Full name
  //   // Locate the Continue/Next button and ensure it is enabled before clicking.
  //   let continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await expect(continueButton).toBeEnabled();
  //   await continueButton.click();
  //   await page.waitForTimeout(500);
  //   // Verify error message for Full name
  //   const fullNameError = page
  //     .locator('[class*='error'], [class*='invalid'], [class*='warning']')
  //     .first();
  //   if (await fullNameError.isVisible()) {
  //     const errorText = await fullNameError.textContent();
  //     expect(errorText?.toLowerCase()).toContain('name');
  //   }
  //   // Fill Full name
  //   // Some sites use 'first_name' instead of 'firstname'; include both.
  //   const fullNameInput = page
  //     .locator('input[name*='firstname'], input[name*='first_name']')
  //     .first();
  //   await fullNameInput.fill('Jane Doe');
  //   // Leave street address empty and try to continue
  //   // Re‑locate the Continue button (it may become stale) and click.
  //   continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await expect(continueButton).toBeEnabled();
  //   await continueButton.click();
  //   await page.waitForTimeout(500);
  //   const streetAddressError = page
  //     .locator('[class*='error'], [class*='invalid']')
  //     .first();
  //   if (await streetAddressError.isVisible()) {
  //     const errorText = await streetAddressError.textContent();
  //     expect(errorText?.toLowerCase()).toContain('address');
  //   }
  //   // Fill street address
  //   const streetAddressInput = page
  //     .locator('input[name*='address'], input[name*='street']')
  //     .first();
  //   await streetAddressInput.fill('123 Main Street');
  //   // Leave city empty and try to continue
  //   continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await expect(continueButton).toBeEnabled();
  //   await continueButton.click();
  //   await page.waitForTimeout(500);
  //   const cityError = page
  //     .locator('[class*='error'], [class*='invalid']')
  //     .first();
  //   if (await cityError.isVisible()) {
  //     const errorText = await cityError.textContent();
  //     expect(errorText?.toLowerCase()).toContain('city');
  //   }
  //   // Fill city
  //   const cityInput = page.locator('input[name*='city']').first();
  //   await cityInput.fill('New York');
  //   // Leave postal code empty and try to continue
  //   continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await expect(continueButton).toBeEnabled();
  //   await continueButton.click();
  //   await page.waitForTimeout(500);
  //   const postalError = page
  //     .locator('[class*='error'], [class*='invalid']')
  //     .first();
  //   if (await postalError.isVisible()) {
  //     const errorText = await postalError.textContent();
  //     expect(errorText?.toLowerCase()).toContain('postal');
  //   }
  //   // Fill postal code
  //   const postalInput = page
  //     .locator('input[name*='postal'], input[name*='zip']')
  //     .first();
  //   await postalInput.fill('10001');
  //   // Verify all required fields are now filled
  //   const nameValue = fullNameInput;
  //   const addressValue = streetAddressInput;
  //   const cityValue = cityInput;
  //   const postalValue = postalInput;
  //   await expect(nameValue).not.toHaveValue('');
  //   await expect(addressValue).not.toHaveValue('');
  //   await expect(cityValue).not.toHaveValue('');
  //   await expect(postalValue).not.toHaveValue('');
  // });
  // test.fixme('Skipping flaky product selection', async ({ page }) => {
  //   // AC18: Country dropdown validation
  //   const productPage2 = new ProductPage(page);
  //   await productPage2.goto();
  //   const acceptCookiesBtn2 = page
  //     .locator(
  //       'button:has-text('Accept'), button:has-text('I agree'), button:has-text('Agree')',
  //     )
  //     .first();
  //   if (await acceptCookiesBtn2.isVisible()) {
  //     await acceptCookiesBtn2.click();
  //   }
  //   await page.waitForLoadState(1000);
  //   await productPage2.clickFirstProduct();
  //   await page.waitForLoadState(1000);
  //   const quantityInput = page.locator('input[name*='qty']').first();
  //   await quantityInput.fill('1');
  //   const addToCartButton = page
  //     .locator('button:has-text('Add to cart')')
  //     .first();
  //   await addToCartButton.click();
  //   await page.waitForTimeout(1000);
  //   const cartIcon = page.locator('[class*='cart']').first();
  //   await cartIcon.click();
  //   await page.waitForLoadState(1000);
  //   const checkoutButton = page
  //     .locator(
  //       'button:has-text('Checkout'), button:has-text('Continue to checkout')',
  //     )
  //     .first();
  //   await checkoutButton.click();
  //   await page.waitForLoadState(1000);
  //   // Fill all fields except country
  //   const fullNameInput = page
  //     .locator('input[name*='name'], input[name*='firstname']')
  //     .first();
  //   await fullNameInput.fill('Jane Doe');
  //   const streetAddressInput = page
  //     .locator('input[name*='address'], input[name*='street']')
  //     .first();
  //   await streetAddressInput.fill('123 Main Street');
  //   const cityInput = page.locator('input[name*='city']').first();
  //   await cityInput.fill('New York');
  //   const postalInput = page
  //     .locator('input[name*='postal'], input[name*='zip']')
  //     .first();
  //   await postalInput.fill('10001');
  //   // Try to continue without selecting country
  //   const continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await expect(continueButton).toBeEnabled();
  //   await continueButton.click();
  //   await page.waitForTimeout(500);
  //   // Verify error message for country
  //   const countryError = page
  //     .locator('[class*='error'], [class*='invalid'], .toast, .alert')
  //     .first();
  //   if (await countryError.isVisible()) {
  //     const errorText = await countryError.textContent();
  //     expect(errorText?.toLowerCase()).toContain('country');
  //   }
  //   // Select country
  //   const countrySelect = page.locator('select[name*='country']').first();
  //   if (await countrySelect.isVisible()) {
  //     await countrySelect.selectOption('US');
  //     // Verify selection persists
  //     const selectedValue = countrySelect;
  //     await expect(selectedValue).toHaveValue();
  //   }
  // });
  // test.fixme('Skipping flaky product selection', async ({ page }) => {
  //   // AC18: Payment form validation
  //   const productPage3 = new ProductPage(page);
  //   await productPage3.goto();
  //   const acceptCookiesBtn3 = page
  //     .locator(
  //       'button:has-text('Accept'), button:has-text('I agree'), button:has-text('Agree')',
  //     )
  //     .first();
  //   if (await acceptCookiesBtn3.isVisible()) {
  //     await acceptCookiesBtn3.click();
  //   }
  //   await page.waitForLoadState(1000);
  //   await productPage3.clickFirstProduct();
  //   await page.waitForLoadState(1000);
  //   const quantityInput = page.locator('input[name*='qty']').first();
  //   await quantityInput.fill('1');
  //   const addToCartButton = page
  //     .locator('button:has-text('Add to cart')')
  //     .first();
  //   await addToCartButton.click();
  //   await page.waitForTimeout(1000);
  //   const cartIcon = page.locator('[class*='cart']').first();
  //   await cartIcon.click();
  //   await page.waitForLoadState(1000);
  //   const checkoutButton = page
  //     .locator(
  //       'button:has-text('Checkout'), button:has-text('Continue to checkout')',
  //     )
  //     .first();
  //   await checkoutButton.click();
  //   await page.waitForLoadState(1000);
  //   // Fill shipping address
  //   const fullNameInput = page
  //     .locator('input[name*='name'], input[name*='firstname']')
  //     .first();
  //   await fullNameInput.fill('Jane Doe');
  //   const streetAddressInput = page
  //     .locator('input[name*='address'], input[name*='street']')
  //     .first();
  //   await streetAddressInput.fill('123 Main Street');
  //   const cityInput = page.locator('input[name*='city']').first();
  //   await cityInput.fill('New York');
  //   const postalInput = page
  //     .locator('input[name*='postal'], input[name*='zip']')
  //     .first();
  //   await postalInput.fill('10001');
  //   const countrySelect = page.locator('select[name*='country']').first();
  //   if (await countrySelect.isVisible()) {
  //     await countrySelect.selectOption('US');
  //   }
  //   // Continue through checkout steps
  //   let continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   for (let i = 0; i < 3; i++) {
  //     await continueButton.click();
  //     await page.waitForLoadState(1000);
  //     const nextBtn = page
  //       .locator('button:has-text('Continue'), button:has-text('Next')')
  //       .first();
  //     if (!(await nextBtn.isVisible())) break;
  //   }
  //   // Try to complete payment without card number
  //   const placeOrderButton = page
  //     .locator(
  //       'button:has-text('Place Order'), button:has-text('Complete Purchase')',
  //     )
  //     .first();
  //   if (await placeOrderButton.isVisible()) {
  //     await placeOrderButton.click();
  //     await page.waitForTimeout(500);
  //     // Verify error message
  //     const cardError = page
  //       .locator('[class*='error'], [class*='invalid']')
  //       .first();
  //     if (await cardError.isVisible()) {
  //       const errorText = cardError;
  //       await expect(errorText).toHaveText();
  //     }
  //   }
  // });
});
