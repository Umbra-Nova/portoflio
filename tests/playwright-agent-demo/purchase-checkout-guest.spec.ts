// spec: specs/purchase-user-story.md
// Acceptance Criteria: AC9, AC10, AC11, AC12, AC13, AC14, AC16

import { test } from "@playwright/test";

test.describe("Complete Purchase as Guest", () => {
  // test('Proceed to checkout and enter shipping address', async ({ page }) => {
  //   // AC9: Proceed to Checkout
  //   // AC10: Enter Shipping Address
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   // Add product to cart
  //   const firstProduct = page.locator('[class*='product-item']').first();
  //   await firstProduct.click();
  //   await page.waitForLoadState(1000);
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
  //   await page.waitForLoadState(1000);
  //   // Click Proceed to Checkout button
  //   const checkoutButton = page
  //     .locator(
  //       'button:has-text('Checkout'), button:has-text('Continue to checkout')',
  //     )
  //     .first();
  //   await checkoutButton.click();
  //   await page.waitForLoadState(1000);
  //   // Fill in shipping address form
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
  //   // Select country from dropdown
  //   const countrySelect = page.locator('select[name*='country']').first();
  //   if (await countrySelect.isVisible()) {
  //     await countrySelect.selectOption('US');
  //   }
  //   // Fill optional phone number
  //   const phoneInput = page.locator('input[name*='phone']').first();
  //   if (await phoneInput.isVisible()) {
  //     await phoneInput.fill('555-1234567');
  //   }
  //   // Verify form is filled
  //   const nameValue = fullNameInput;
  //   await expect(nameValue).toHaveValue('Jane Doe');
  //   const addressValue = streetAddressInput;
  //   await expect(addressValue).toHaveValue('123 Main Street');
  // });
  // test('Select shipping method and review order', async ({ page }) => {
  //   // AC11: Select Shipping Method
  //   // AC12: Review Order Summary
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   // Add product to cart
  //   const firstProduct = page.locator('[class*='product-item']').first();
  //   await firstProduct.click();
  //   await page.waitForLoadState(1000);
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
  //   // Continue to shipping method
  //   const continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await continueButton.click();
  //   await page.waitForLoadState(1000);
  //   // Verify shipping method options are displayed
  //   const shippingMethods = page.locator(
  //     '[class*='shipping-method'], [class*='carrier']',
  //   );
  //   const methodCount = await shippingMethods.count();
  //   expect(methodCount).toBeGreaterThan(0);
  //   // Select first shipping method
  //   const firstShippingMethod = page
  //     .locator('input[name*='shipping'], input[type='radio']')
  //     .first();
  //   await firstShippingMethod.click();
  //   // Continue to order review
  //   const continueButton2 = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await continueButton2.click();
  //   await page.waitForLoadState(1000);
  //   // Verify order summary is displayed
  //   const orderItems = page.locator(
  //     '[class*='order-item'], [class*='product']',
  //   );
  //   expect(await orderItems.count()).toBeGreaterThan(0);
  //   const subtotal = page.locator('[class*='subtotal']').first();
  //   await expect(subtotal).toBeVisible();
  //   const total = page.locator('[class*='total']').first();
  //   await expect(total).toBeVisible();
  // });
  // test('Enter payment information and complete purchase', async ({ page }) => {
  //   // AC13: Select Payment Method
  //   // AC14: Complete Payment and Order
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   // Add product and proceed through checkout
  //   const firstProduct = page.locator('[class*='product-item']').first();
  //   await firstProduct.click();
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
  //   // Continue through shipping
  //   let continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await continueButton.click();
  //   await page.waitForLoadState(1000);
  //   // Select shipping method
  //   const firstShippingMethod = page
  //     .locator('input[name*='shipping'], input[type='radio']')
  //     .first();
  //   await firstShippingMethod.click();
  //   continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await continueButton.click();
  //   await page.waitForLoadState(1000);
  //   // Continue to payment
  //   continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await continueButton.click();
  //   await page.waitForLoadState(1000);
  //   // Select credit card payment method
  //   const creditCardOption = page.locator('input[name*='payment']').first();
  //   await creditCardOption.click();
  //   continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await continueButton.click();
  //   await page.waitForLoadState(1000);
  //   // Enter payment information
  //   const cardNumberInput = page
  //     .locator('input[name*='number'], input[name*='cardnumber']')
  //     .first();
  //   if (await cardNumberInput.isVisible()) {
  //     await cardNumberInput.fill('4532111111111111');
  //     const expiryInput = page
  //       .locator('input[name*='expiry'], input[name*='expire']')
  //       .first();
  //     await expiryInput.fill('12/25');
  //     const cvvInput = page
  //       .locator('input[name*='cvv'], input[name*='cvc']')
  //       .first();
  //     await cvvInput.fill('123');
  //     const holderInput = page
  //       .locator('input[name*='holder'], input[name*='cardholder']')
  //       .first();
  //     await holderInput.fill('Jane Doe');
  //   }
  //   // Click Place Order button
  //   const placeOrderButton = page
  //     .locator(
  //       'button:has-text('Place Order'), button:has-text('Complete Purchase')',
  //     )
  //     .first();
  //   await placeOrderButton.click();
  //   await page.waitForLoadState(1000);
  //   // Verify order confirmation page
  //   const confirmationMessage = page.locator('h1, [class*='success']').first();
  //   await expect(confirmationMessage).toBeVisible({ timeout: 10000 });
  //   const confirmationText = confirmationMessage;
  //   await expect(confirmationText).toHaveText();
  //   // Verify order number is displayed
  //   const orderNumber = page
  //     .locator('[class*='order-number'], [class*='order-id']')
  //     .first();
  //   if (await orderNumber.isVisible()) {
  //     const orderNumberText = orderNumber;
  //     await expect(orderNumberText).toHaveText();
  //   }
  //   // Verify order details are displayed
  //   const orderTotal = page.locator('[class*='total']').first();
  //   await expect(orderTotal).toBeVisible();
  //   const shippingAddress = page.locator('[class*='address']').first();
  //   await expect(shippingAddress).toBeVisible();
  // });
});
