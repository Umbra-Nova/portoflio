// spec: specs/purchase-user-story.md
// Acceptance Criteria: AC4

import { test } from "@playwright/test";
// import { ProductPage } from "../../src/pages/product-page";
// import { CheckoutPage } from "../../src/pages/checkout-page";

test.describe("Add Products to Cart", () => {
  // test("Add single product with quantity to cart", async ({ page }) => {
  //   // AC4: Add Product to Cart - Enter quantity and click Add to Cart
  //   const productPage = new ProductPage(page);
  //   const checkoutPage = new CheckoutPage(page);
  //   await productPage.goto();
  //   await productPage.clickFirstProduct();
  //   await checkoutPage.addProductToCart(2);
  //   await checkoutPage.verifyAddToCartSuccess();
  // });
  // test("Add multiple products to cart", async ({ page }) => {
  //   // AC4: Add multiple products - Verify cart counter increments correctly
  //   const productPage = new ProductPage(page);
  //   const checkoutPage = new CheckoutPage(page);
  //   await productPage.goto();
  //   // Add first product
  //   await productPage.clickFirstProduct();
  //   await checkoutPage.addProductToCart(1);
  //   // Go back and add second product
  //   await productPage.goto();
  //   await productPage.clickProductByIndex(1);
  //   await checkoutPage.addProductToCart(1);
  //   // Verify cart has items
  //   await checkoutPage.openCart();
  //   await checkoutPage.verifyCartContainsItems(1);
  // });
});
