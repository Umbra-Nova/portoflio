// spec: specs/purchase-user-story.md
// Acceptance Criteria: AC17

import { test } from "@playwright/test";
//import { EXISTING_TEST_USER } from '../../src/fixtures/test-user';

test.describe("Logged-In User Checkout", () => {
  // test('Complete checkout with saved address as logged-in user', async ({
  //   page,
  // }) => {
  //   // AC17: Logged-In User Checkout - Use saved addresses and pre-populated information
  //   // First, log in to an existing account
  //   await page.goto('https://prime-lip.demo.prestashop.com/login');
  //   await page.waitForLoadState('domcontentloaded');
  //   // Enter login credentials
  //   const emailInput = page.locator('input[name*='email']').first();
  //   await emailInput.fill(EXISTING_TEST_USER.email);
  //   const passwordInput = page.locator('input[name*=‘password’]').first();
  //   await passwordInput.fill(EXISTING_TEST_USER.password);
  //   // Click Sign in button
  //   const signInButton = page.locator('button:has-text('Sign in')').first();
  //   await signInButton.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Navigate to home page
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   await page.waitForLoadState('domcontentloaded');
  //   // Add product to cart
  //   const firstProduct = page.locator('[class*='product-item']').first();
  //   await firstProduct.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   const quantityInput = page.locator('input[name*='qty']').first();
  //   await quantityInput.fill('1');
  //   const addToCartButton = page
  //     .locator('button:has-text('Add to cart')')
  //     .first();
  //   await addToCartButton.click();
  //   await page.waitForTimeout(1000);
  //   // Navigate to cart
  //   const cartIcon = page.locator('[class*='cart']').first();
  //   await cartIcon.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Click Proceed to Checkout
  //   const checkoutButton = page
  //     .locator(
  //       'button:has-text('Checkout'), button:has-text('Continue to checkout')',
  //     )
  //     .first();
  //   await checkoutButton.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Verify saved addresses are pre-populated
  //   const addressSelect = page.locator('select[name*='address']').first();
  //   if (await addressSelect.isVisible()) {
  //     // Verify dropdown shows saved addresses
  //     const options = page.locator('select[name*='address'] option');
  //     const optionCount = await options.count();
  //     expect(optionCount).toBeGreaterThan(0);
  //     // Select first saved address
  //     await addressSelect.selectOption({ index: 1 });
  //     // Verify address details are populated
  //     const savedAddressText = addressSelect;
  //     await expect(savedAddressText).not.toHaveValue('');
  //   }
  //   // Verify name field is pre-populated
  //   const fullNameInput = page
  //     .locator('input[name*='name'], input[name*='firstname']')
  //     .first();
  //   if (await fullNameInput.isVisible()) {
  //     const nameValue = await fullNameInput.inputValue();
  //     // Name may be pre-populated if address is selected
  //     if (nameValue) {
  //       expect(nameValue.length).toBeGreaterThan(0);
  //     }
  //   }
  //   // Option to enter new address
  //   const newAddressButton = page
  //     .locator(
  //       'button:has-text('Enter new address'), label:has-text('Add new address')',
  //     )
  //     .first();
  //   if (await newAddressButton.isVisible()) {
  //     // Verify user can select option to enter new address
  //     await expect(newAddressButton).toBeVisible();
  //   }
  // });
  // test('Checkout with new address as logged-in user', async ({ page }) => {
  //   // AC17: Logged-In User Checkout - Enter new address while logged in
  //   await page.goto('https://prime-lip.demo.prestashop.com/login');
  //   await page.waitForLoadState('domcontentloaded');
  //   // Log in
  //   const emailInput = page.locator('input[name*='email']').first();
  //   await emailInput.fill(EXISTING_TEST_USER.email);
  //   const passwordInput = page.locator('input[name*=‘password’]').first();
  //   await passwordInput.fill(EXISTING_TEST_USER.password);
  //   const signInButton = page.locator('button:has-text('Sign in')').first();
  //   await signInButton.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Add product to cart
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   const firstProduct = page.locator('[class*='product-item']').first();
  //   await firstProduct.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   const quantityInput = page.locator('input[name*='qty']').first();
  //   await quantityInput.fill('1');
  //   const addToCartButton = page
  //     .locator('button:has-text('Add to cart')')
  //     .first();
  //   await addToCartButton.click();
  //   await page.waitForTimeout(1000);
  //   // Go to checkout
  //   const cartIcon = page.locator('[class*='cart']').first();
  //   await cartIcon.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   const checkoutButton = page
  //     .locator(
  //       'button:has-text('Checkout'), button:has-text('Continue to checkout')',
  //     )
  //     .first();
  //   await checkoutButton.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Click option to enter new address
  //   const newAddressButton = page
  //     .locator(
  //       'button:has-text('Enter new address'), label:has-text('Add new address')',
  //     )
  //     .first();
  //   if (await newAddressButton.isVisible()) {
  //     await newAddressButton.click();
  //   }
  //   // Fill in new address
  //   const fullNameInput = page
  //     .locator('input[name*='name'], input[name*='firstname']')
  //     .first();
  //   if (await fullNameInput.isVisible()) {
  //     // Clear pre-populated value if any
  //     await fullNameInput.clear();
  //     await fullNameInput.fill('Jane Smith');
  //   }
  //   const streetAddressInput = page
  //     .locator('input[name*='address'], input[name*='street']')
  //     .first();
  //   await streetAddressInput.fill('456 Oak Avenue');
  //   const cityInput = page.locator('input[name*='city']').first();
  //   await cityInput.fill('Boston');
  //   const postalInput = page
  //     .locator('input[name*='postal'], input[name*='zip']')
  //     .first();
  //   await postalInput.fill('02101');
  //   const countrySelect = page.locator('select[name*='country']').first();
  //   if (await countrySelect.isVisible()) {
  //     await countrySelect.selectOption('US');
  //   }
  //   // Verify new address is entered
  //   const nameValue = fullNameInput;
  //   const addressValue = streetAddressInput;
  //   const cityValue = cityInput;
  //   await expect(nameValue).toHaveValue('Jane Smith');
  //   await expect(addressValue).toHaveValue('456 Oak Avenue');
  //   await expect(cityValue).toHaveValue('Boston');
  //   // Continue to next step
  //   const continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   if (await continueButton.isVisible()) {
  //     await continueButton.click();
  //     await page.waitForLoadState('domcontentloaded');
  //   }
  //   // Verify new address is displayed in order summary
  //   const summaryAddress = page
  //     .locator('[class*='address'], [class*='shipping']')
  //     .first();
  //   if (await summaryAddress.isVisible()) {
  //     await expect(summaryAddress).not.toHaveText('');
  //   }
  // });
  // test('Verify logged-in user information is preserved in checkout', async ({
  //   page,
  // }) => {
  //   // AC17: Logged-In User - Verify user info preservation
  //   await page.goto('https://prime-lip.demo.prestashop.com/login');
  //   await page.waitForLoadState('domcontentloaded');
  //   // Log in
  //   const emailInput = page.locator('input[name*='email']').first();
  //   await emailInput.fill(EXISTING_TEST_USER.email);
  //   const passwordInput = page.locator('input[name*=‘password’]').first();
  //   await passwordInput.fill(EXISTING_TEST_USER.password);
  //   const signInButton = page.locator('button:has-text('Sign in')').first();
  //   await signInButton.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Verify user is logged in (check for account menu or user greeting)
  //   const userGreeting = page
  //     .locator('[class*='welcome'], [class*='hello']')
  //     .first();
  //   if (await userGreeting.isVisible()) {
  //     const greetingText = await userGreeting.textContent();
  //     expect(greetingText).toContain('John');
  //   }
  //   // Add product to cart
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   const firstProduct = page.locator('[class*='product-item']').first();
  //   await firstProduct.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   const quantityInput = page.locator('input[name*='qty']').first();
  //   await quantityInput.fill('1');
  //   const addToCartButton = page
  //     .locator('button:has-text('Add to cart')')
  //     .first();
  //   await addToCartButton.click();
  //   await page.waitForTimeout(1000);
  //   // Go to checkout
  //   const cartIcon = page.locator('[class*='cart']').first();
  //   await cartIcon.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   const checkoutButton = page
  //     .locator(
  //       'button:has-text('Checkout'), button:has-text('Continue to checkout')',
  //     )
  //     .first();
  //   await checkoutButton.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Verify user information is pre-filled
  //   const userEmail = page
  //     .locator('[class*='email'], input[name*='email']')
  //     .first();
  //   if (await userEmail.isVisible()) {
  //     const emailValue = await userEmail.inputValue();
  //     // Email might be pre-filled or displayed as read-only
  //     if (emailValue) {
  //       expect(emailValue).toBe(EXISTING_TEST_USER.email);
  //     }
  //   }
  //   // Verify account/customer information section
  //   const customerSection = page
  //     .locator('[class*='customer'], [class*='account']')
  //     .first();
  //   if (await customerSection.isVisible()) {
  //     const customerText = await customerSection.textContent();
  //     expect(customerText).toContain('John');
  //   }
  // });
});
