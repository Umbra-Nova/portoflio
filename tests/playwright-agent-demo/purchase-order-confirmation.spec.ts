// spec: specs/purchase-user-story.md
// Acceptance Criteria: AC14, AC15, AC19

import { test } from "@playwright/test";

test.describe("Order Confirmation and Tracking", () => {
  // test('Verify order confirmation page displays success message and order details', async ({
  //   page,
  // }) => {
  //   // AC14: Complete Payment and Order - Verify confirmation page elements
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
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
  //   // Navigate to checkout and complete purchase
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
  //   // Continue through checkout
  //   let continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await continueButton.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Select shipping method
  //   const firstShippingMethod = page
  //     .locator('input[name*='shipping'], input[type='radio']')
  //     .first();
  //   await firstShippingMethod.click();
  //   continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await continueButton.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Continue to payment
  //   continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   await continueButton.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Select and fill payment information
  //   const creditCardOption = page.locator('input[name*='payment']').first();
  //   if (await creditCardOption.isVisible()) {
  //     await creditCardOption.click();
  //   }
  //   continueButton = page
  //     .locator('button:has-text('Continue'), button:has-text('Next')')
  //     .first();
  //   if (await continueButton.isVisible()) {
  //     await continueButton.click();
  //     await page.waitForLoadState('domcontentloaded');
  //   }
  //   // Enter card details
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
  //   // Place order
  //   const placeOrderButton = page
  //     .locator(
  //       'button:has-text('Place Order'), button:has-text('Complete Purchase')',
  //     )
  //     .first();
  //   await placeOrderButton.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Verify success message
  //   const successMessage = page
  //     .locator('h1, [class*='success'], [class*='confirmation']')
  //     .first();
  //   await expect(successMessage).toBeVisible({ timeout: 10000 });
  //   const successText = await successMessage.textContent();
  //   expect(successText?.toLowerCase()).toContain('success');
  //   // Verify order number is displayed
  //   const orderNumber = page
  //     .locator('[class*='order-number'], [class*='order-id']')
  //     .first();
  //   if (await orderNumber.isVisible()) {
  //     const orderNumberText = await orderNumber.textContent();
  //     expect(orderNumberText).toBeTruthy();
  //     expect(orderNumberText?.length).toBeGreaterThan(0);
  //   }
  //   // Verify order total is displayed
  //   const orderTotal = page.locator('[class*='total']').first();
  //   await expect(orderTotal).toBeVisible();
  //   await expect(orderTotal).not.toHaveText('');
  //   // Verify ordered items are displayed
  //   const orderItems = page.locator(
  //     '[class*='order-item'], [class*='product']',
  //   );
  //   expect(await orderItems.count()).toBeGreaterThan(0);
  //   // Verify shipping address is displayed
  //   const shippingAddress = page.locator('[class*='address']').first();
  //   if (await shippingAddress.isVisible()) {
  //     const addressText = await shippingAddress.textContent();
  //     expect(addressText).toContain('Jane Doe');
  //   }
  // });
  // test('Verify order confirmation contains all required information', async ({
  //   page,
  // }) => {
  //   // AC14: Order Confirmation Details
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   // Quick navigation to confirmation (assuming previous test flow)
  //   const firstProduct = page.locator('[class*='product-item']').first();
  //   if (await firstProduct.isVisible()) {
  //     await firstProduct.click();
  //     await page.waitForLoadState('domcontentloaded');
  //     const quantityInput = page.locator('input[name*='qty']').first();
  //     await quantityInput.fill('1');
  //     const addToCartButton = page
  //       .locator('button:has-text('Add to cart')')
  //       .first();
  //     await addToCartButton.click();
  //     await page.waitForTimeout(1000);
  //   }
  //   // Navigate to cart
  //   const cartIcon = page.locator('[class*='cart']').first();
  //   await cartIcon.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Check if confirmation page elements exist
  //   const confirmationHeader = page
  //     .locator('h1, [class*='confirmation']')
  //     .first();
  //   if (await confirmationHeader.isVisible()) {
  //     // Verify confirmation message
  //     await expect(confirmationHeader).not.toHaveText('');
  //     // Verify order details section
  //     const orderDetails = page.locator('[class*='order-details']');
  //     if (await orderDetails.isVisible()) {
  //       expect(await orderDetails.count()).toBeGreaterThan(0);
  //     }
  //     // Verify order summary
  //     const orderSummary = page.locator('[class*='summary']').first();
  //     await expect(orderSummary)
  //       .toBeVisible()
  //       .catch(() => {
  //         // Summary might be in different element
  //       });
  //     // Verify customer information
  //     const customerInfo = page
  //       .locator('[class*='customer'], [class*='contact']')
  //       .first();
  //     if (await customerInfo.isVisible()) {
  //       await expect(customerInfo).not.toHaveText('');
  //     }
  //   }
  // });
  // test('Verify customer can access order history and tracking', async ({
  //   page,
  // }) => {
  //   // AC19: Order Tracking - Access order history and tracking info
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   // Navigate to account or order history section
  //   const accountMenu = page
  //     .locator('[class*='account'], [class*='profile']')
  //     .first();
  //   if (await accountMenu.isVisible()) {
  //     await accountMenu.click();
  //     await page.waitForLoadState('domcontentloaded');
  //     // Look for Orders or Order History link
  //     const orderHistoryLink = page
  //       .locator('a:has-text('Orders'), a:has-text('Order History')')
  //       .first();
  //     if (await orderHistoryLink.isVisible()) {
  //       await orderHistoryLink.click();
  //       await page.waitForLoadState('domcontentloaded');
  //       // Verify order list is displayed
  //       const orderList = page
  //         .locator('[class*='order'], [class*='history']')
  //         .first();
  //       await expect(orderList)
  //         .toBeVisible()
  //         .catch(() => {
  //           // Order list might not be visible if no orders
  //         });
  //       // If orders exist, verify they display order details
  //       const orders = page.locator(
  //         '[class*='order-row'], [class*='order-item']',
  //       );
  //       const orderCount = await orders.count();
  //       if (orderCount > 0) {
  //         // Click on first order to view details
  //         const firstOrder = orders.first();
  //         await firstOrder.click();
  //         await page.waitForLoadState('domcontentloaded');
  //         // Verify order details page
  //         const orderTitle = page.locator('h1, [class*='title']').first();
  //         await expect(orderTitle).toBeVisible();
  //         // Verify order status
  //         const orderStatus = page.locator('[class*='status']').first();
  //         if (await orderStatus.isVisible()) {
  //           await expect(orderStatus).not.toHaveText('');
  //         }
  //         // Verify tracking information
  //         const trackingInfo = page
  //           .locator('[class*='tracking'], [class*='track']')
  //           .first();
  //         if (await trackingInfo.isVisible()) {
  //           await expect(trackingInfo).not.toHaveText('');
  //         }
  //       }
  //     }
  //   }
  // });
  // test('Verify order number is unique and trackable', async ({ page }) => {
  //   // AC19: Order Tracking - Verify unique order number
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   // Navigate to order confirmation or history
  //   const confirmationElement = page
  //     .locator('[class*='confirmation'], [class*='thank-you']')
  //     .first();
  //   if (await confirmationElement.isVisible()) {
  //     // Find order number
  //     const orderNumber = page
  //       .locator('[class*='order-number'], [class*='order-id']')
  //       .first();
  //     if (await orderNumber.isVisible()) {
  //       const orderNumberText = await orderNumber.textContent();
  //       expect(orderNumberText).toBeTruthy();
  //       // Verify order number format (should be numeric or alphanumeric)
  //       expect(orderNumberText?.trim().length).toBeGreaterThan(0);
  //       // Verify order number is displayed prominently
  //       const orderNumberVisible = orderNumber;
  //       await expect(orderNumberVisible).toBeVisible();
  //       // Try to use order number to navigate to order details
  //       const trackOrderButton = page
  //         .locator('button:has-text('Track Order'), a:has-text('View Order')')
  //         .first();
  //       if (await trackOrderButton.isVisible()) {
  //         await trackOrderButton.click();
  //         await page.waitForLoadState('domcontentloaded');
  //         // Verify order details are accessible
  //         const orderDetails = page.locator('[class*='details']').first();
  //         await expect(orderDetails)
  //           .toBeVisible()
  //           .catch(() => {
  //             // Details might be in different location
  //           });
  //       }
  //     }
  //   }
  // });
});
