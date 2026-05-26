// spec: specs/purchase-user-story.md
// Acceptance Criteria: AC5, AC6, AC7, AC8

import { test } from "@playwright/test";

test.describe("Manage Shopping Cart", () => {
  // test('View shopping cart contents', async ({ page }) => {
  //   // AC5: View Shopping Cart - Display all items, quantities, prices, and totals
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   // Add product to cart first
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
  //   // Click cart icon to view cart
  //   const cartIcon = page.locator('[class*='cart']').first();
  //   await cartIcon.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Verify cart page shows products
  //   const cartItems = page.locator('[class*='cart-item']');
  //   const itemCount = await cartItems.count();
  //   expect(itemCount).toBeGreaterThan(0);
  //   // Verify product information is displayed
  //   const productNames = page.locator('[class*='product-name']');
  //   const quantities = page.locator('input[class*='quantity']');
  //   const prices = page.locator('[class*='price']');
  //   expect(await productNames.count()).toBeGreaterThan(0);
  //   expect(await quantities.count()).toBeGreaterThan(0);
  //   expect(await prices.count()).toBeGreaterThan(0);
  //   // Verify subtotal is displayed
  //   const subtotal = page
  //     .locator('[class*='subtotal'], [class*='total']')
  //     .first();
  //   await expect(subtotal).toBeVisible();
  // });
  // test('Update product quantity in cart', async ({ page }) => {
  //   // AC6: Update Cart Quantity - Change quantity and verify totals recalculate
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   // Add product to cart
  //   const firstProduct = page.locator('[class*='product-item']').first();
  //   await firstProduct.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   const quantityInput = page.locator('input[name*='qty']').first();
  //   await quantityInput.fill('2');
  //   const addToCartButton = page
  //     .locator('button:has-text('Add to cart')')
  //     .first();
  //   await addToCartButton.click();
  //   await page.waitForTimeout(1000);
  //   // Navigate to cart
  //   const cartIcon = page.locator('[class*='cart']').first();
  //   await cartIcon.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Get initial total
  //   const subtotalBefore = page.locator('[class*='total']').first();
  //   const totalBefore = subtotalBefore;
  //   // Update quantity in cart
  //   const cartQuantityInput = page.locator('input[class*='quantity']').first();
  //   await cartQuantityInput.clear();
  //   await cartQuantityInput.fill('3');
  //   // Trigger update (could be blur event or click update button)
  //   await cartQuantityInput.blur();
  //   await page.waitForTimeout(500);
  //   // Verify total updated
  //   const subtotalAfter = page.locator('[class*='total']').first();
  //   const totalAfter = await subtotalAfter.textContent();
  //   // Totals should be different after quantity change
  //   await expect(totalBefore).not.toHaveText(totalAfter);
  //   // Verify quantity persists
  //   const updatedQtyValue = cartQuantityInput;
  //   await expect(updatedQtyValue).toHaveValue('3');
  // });
  // test('Remove product from cart', async ({ page }) => {
  //   // AC7: Remove Product from Cart - Remove item and verify cart updates
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
  //   // Navigate to cart
  //   const cartIcon = page.locator('[class*='cart']').first();
  //   await cartIcon.click();
  //   await page.waitForLoadState('domcontentloaded');
  //   // Count items before removal
  //   const cartItemsBefore = page.locator('[class*='cart-item']');
  //   const countBefore = await cartItemsBefore.count();
  //   // Click remove button
  //   const removeButton = page.locator('button[class*='remove']').first();
  //   await removeButton.click();
  //   await page.waitForTimeout(500);
  //   // Verify item removed
  //   const cartItemsAfter = page.locator('[class*='cart-item']');
  //   const countAfter = await cartItemsAfter.count();
  //   expect(countAfter).toBeLessThan(countBefore);
  //   // Verify cart total updated
  //   const cartTotal = page.locator('[class*='total']').first();
  //   await expect(cartTotal).toBeVisible();
  // });
  // test('View discounted product in cart', async ({ page }) => {
  //   // AC8: View Discounts in Cart - Verify original and discounted prices display
  //   await page.goto('https://prime-lip.demo.prestashop.com/');
  //   // Find and click on a discounted product
  //   const discountedProduct = page
  //     .locator('[class*='product-item']:has([class*='discount'])')
  //     .first();
  //   if (await discountedProduct.isVisible()) {
  //     await discountedProduct.click();
  //     await page.waitForLoadState('domcontentloaded');
  //     const quantityInput = page.locator('input[name*='qty']').first();
  //     await quantityInput.fill('1');
  //     const addToCartButton = page
  //       .locator('button:has-text('Add to cart')')
  //       .first();
  //     await addToCartButton.click();
  //     await page.waitForTimeout(1000);
  //     // Navigate to cart
  //     const cartIcon = page.locator('[class*='cart']').first();
  //     await cartIcon.click();
  //     await page.waitForLoadState('domcontentloaded');
  //     // Verify original price is displayed
  //     const originalPrice = page
  //       .locator('[class*='original-price'], [class*='old-price']')
  //       .first();
  //     if (await originalPrice.isVisible()) {
  //       const originalText = await originalPrice.textContent();
  //       expect(originalText).toBeTruthy();
  //     }
  //     // Verify discounted price is displayed
  //     const discountedPrice = page.locator('[class*='price']').first();
  //     const discountedText = await discountedPrice.textContent();
  //     expect(discountedText).toBeTruthy();
  //     // Verify discount amount or percentage
  //     const discountBadge = page.locator('[class*='discount']').first();
  //     if (await discountBadge.isVisible()) {
  //       const discountText = await discountBadge.textContent();
  //       expect(discountText).toMatch(/%/);
  //     }
  //   }
  // });
});
