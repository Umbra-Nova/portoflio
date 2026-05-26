import { Page } from "@playwright/test";
import { PrestaShopBasePage } from "./base-page";

/**
 * Products browsing page object
 */
export class ProductPage extends PrestaShopBasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await this.navigateToHome();
  }

  // async verifyFeaturedProductsLoaded(): Promise<void> {
  //   // Wait for at least one product to be visible
  //   const products = this.page.locator(
  //     '[class*="product-item"], [class*="product-grid"] >> [class*="product"]',
  //   );
  //   await expect(products.first()).toBeVisible({ timeout: 5000 });
  // }

  // async getProductCount(): Promise<number> {
  //   return this.page.locator('[class*="product-item"]').count();
  // }

  // async verifyProductDetails(): Promise<void> {
  //   // Verify product images exist
  //   const productImages = this.page.locator('img[class*="product"]');
  //   expect(await productImages.count()).toBeGreaterThan(0);

  //   // Verify product prices exist
  //   const prices = this.page.locator('[class*="price"]');
  //   expect(await prices.count()).toBeGreaterThan(0);
  // }

  // async verifyDiscountBadgesVisible(): Promise<number> {
  //   const discountBadges = this.page.locator(
  //     '[class*='discount'], [class*='badge-discount']',
  //   );
  //   return await discountBadges.count();
  // }

  // async clickFirstProduct(): Promise<void> {
  //   const productItem = this.page.locator('[class*=‘product-item’]').first();
  //   await expect(productItem).toBeVisible({ timeout: 30000 });
  //   await productItem.scrollIntoViewIfNeeded();
  //   await productItem.click();
  //   await this.page.waitForLoadState('domcontentloaded');
  // }

  // async clickProductByIndex(index: number): Promise<void> {
  //   const product = this.page.locator('[class*='product-item']').nth(index);
  //   await expect(product).toBeVisible();
  //   await product.click();
  //   await this.page.waitForLoadState('domcontentloaded');
  // }

  // async verifyProductDetailPage(): Promise<void> {
  //   // Verify we're on product detail page
  //   const productTitle = this.page.locator('h1').first();
  //   await expect(productTitle).toBeVisible();

  //   const productImage = this.page.locator('img[class*='product']').first();
  //   await expect(productImage).toBeVisible();

  //   const addToCartButton = this.page
  //     .locator('button:has-text('Add to cart')')
  //     .first();
  //   await expect(addToCartButton).toBeVisible();

  //   const quantityInput = this.page.locator('input[name*='qty']').first();
  //   await expect(quantityInput).toBeVisible();
  // }

  // async selectVariant(
  //   variantType: 'size' | 'color',
  //   value: string,
  // ): Promise<void> {
  //   const variantSelector =
  //     variantType === 'size'
  //       ? this.page.locator('[class*='size']')
  //       : this.page.locator('[class*='color']');

  //   const variant = variantSelector.first();
  //   if (await variant.isVisible().catch(() => false)) {
  //     await variant.click();

  //     const option = this.page
  //       .locator(`[class*='${variantType}'] >> text=${value}`)
  //       .first();
  //     if (await option.isVisible().catch(() => false)) {
  //       await option.click();
  //     }
  //   }
  // }

  // async verifyVariantsSelected(): Promise<void> {
  //   const sizeSelector = this.page.locator('[class*='size']').first();
  //   const colorSelector = this.page.locator('[class*='color']').first();

  //   if (await sizeSelector.isVisible().catch(() => false)) {
  //     await expect(sizeSelector).not.toHaveValue('');
  //   }

  //   if (await colorSelector.isVisible().catch(() => false)) {
  //     await expect(colorSelector).not.toHaveValue('');
  //   }
  // }

  // async getProductTitle(): Promise<string | null> {
  //   const title = this.page.locator('h1').first();
  //   return await title.textContent();
  // }

  // async getProductPrice(): Promise<string | null> {
  //   const price = this.page.locator('[class*='price']').first();
  //   return await price.textContent();
  // }

  // async verifyDiscountedProduct(): Promise<boolean> {
  //   const originalPrice = this.page
  //     .locator('[class*='original-price'], [class*='old-price']')
  //     .first();
  //   const discountedPrice = this.page.locator('[class*='price']').first();
  //   const discountBadge = this.page.locator('[class*='discount']').first();

  //   const hasBoth =
  //     (await originalPrice.isVisible().catch(() => false)) &&
  //     (await discountBadge.isVisible().catch(() => false));
  //   return hasBoth;
  // }
}
