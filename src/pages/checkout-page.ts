import { Page } from "@playwright/test";
import { PrestaShopBasePage } from "./base-page";
//import { PrestaShopBasePage } from "";

export interface ShippingAddress {
  fullName: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  country: string;
  phone?: string;
}

export interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

/**
 * Checkout page object for purchase flow
 */
export class CheckoutPage extends PrestaShopBasePage {
  constructor(page: Page) {
    super(page);
  }

  // Product management
  // async addProductToCart(quantity: number = 1): Promise<void> {
  //   const addToCartButton = this.page
  //     .locator('button:has-text("Add to cart")')
  //     .first();
  //   await expect(addToCartButton).toBeVisible();

  //   const quantityInput = this.page
  //     .locator('input[name*="qty"], input[name*="quantity"]')
  //     .first();
  //   await expect(quantityInput).toBeVisible();
  //   await quantityInput.fill(quantity.toString());

  //   await addToCartButton.click();
  //   await this.page.waitForTimeout(1000);
  // }

  // async verifyAddToCartSuccess(): Promise<void> {
  //   const confirmationMessage = this.page
  //     .locator('[class*="alert-success"], [class*="toast"], [class*="success"]')
  //     .first();
  //   // Success notification is optional on this store; no assertion error if absent
  //   await confirmationMessage.waitFor({ state: "visible", timeout: 3000 }).catch(() => {});
  // }

  // async openCart(): Promise<void> {
  //   const cartIcon = this.page
  //     .locator('a[href*='cart'], [data-testid*='cart'], .cart')
  //     .first();
  //   await expect(cartIcon).toBeVisible();
  //   await cartIcon.click();
  //   await this.page.waitForLoadState('domcontentloaded');
  // }

  // async verifyCartContainsItems(expectedMinimum: number = 1): Promise<void> {
  //   const cartItems = this.page.locator(
  //     '[class*='cart-item'], [class*='product-row']',
  //   );
  //   const itemCount = await cartItems.count();
  //   expect(itemCount).toBeGreaterThanOrEqual(expectedMinimum);
  // }

  // async removeProductFromCart(index: number = 0): Promise<void> {
  //   const removeButton = this.page
  //     .locator('button[class*='remove'], a[class*='remove']')
  //     .nth(index);
  //   await expect(removeButton).toBeVisible();
  //   await removeButton.click();
  //   await this.page.waitForTimeout(500);
  // }

  // async updateCartQuantity(
  //   newQuantity: number,
  //   itemIndex: number = 0,
  // ): Promise<void> {
  //   const quantityInput = this.page
  //     .locator('input[class*='quantity'], input[name*='qty']')
  //     .nth(itemIndex);
  //   await expect(quantityInput).toBeVisible();
  //   await quantityInput.fill(newQuantity.toString());
  //   await quantityInput.blur();
  //   await this.page.waitForTimeout(500);
  // }

  // // Checkout process
  // async proceedToCheckout(): Promise<void> {
  //   const checkoutButton = this.page
  //     .locator(
  //       'button:has-text('Checkout'), button:has-text('Continue to checkout'), button:has-text('Proceed to checkout')',
  //     )
  //     .first();
  //   await expect(checkoutButton).toBeVisible();
  //   await checkoutButton.click();
  //   await this.page.waitForLoadState('domcontentloaded');
  // }

  // async fillShippingAddress(address: ShippingAddress): Promise<void> {
  //   // Full Name
  //   const nameInput = this.page
  //     .locator(
  //       'input[name*='firstname'], input[name*='name'], input[name*='fullname']',
  //     )
  //     .first();
  //   await expect(nameInput).toBeVisible();
  //   await this.fillTextField(nameInput, address.fullName);

  //   // Street Address
  //   const streetInput = this.page
  //     .locator('input[name*='address'], input[name*='street']')
  //     .first();
  //   await expect(streetInput).toBeVisible();
  //   await this.fillTextField(streetInput, address.streetAddress);

  //   // City
  //   const cityInput = this.page.locator('input[name*='city']').first();
  //   await expect(cityInput).toBeVisible();
  //   await this.fillTextField(cityInput, address.city);

  //   // Postal Code
  //   const postalInput = this.page
  //     .locator(
  //       'input[name*='postal'], input[name*='zip'], input[name*='postcode']',
  //     )
  //     .first();
  //   await expect(postalInput).toBeVisible();
  //   await this.fillTextField(postalInput, address.postalCode);

  //   // Country
  //   const countrySelect = this.page.locator('select[name*='country']').first();
  //   if (await countrySelect.isVisible().catch(() => false)) {
  //     await this.selectDropdownOption(countrySelect, address.country);
  //   }

  //   // Phone (optional)
  //   if (address.phone) {
  //     const phoneInput = this.page.locator('input[name*='phone']').first();
  //     if (await phoneInput.isVisible().catch(() => false)) {
  //       await this.fillTextField(phoneInput, address.phone);
  //     }
  //   }
  // }

  // async continueToNextStep(): Promise<void> {
  //   const continueButton = this.page
  //     .locator(
  //       'button:has-text('Continue'), button:has-text('Next'), button:has-text('Proceed')',
  //     )
  //     .first();
  //   await expect(continueButton).toBeVisible();
  //   await continueButton.click();
  //   await this.page.waitForLoadState('domcontentloaded');
  // }

  // async selectShippingMethod(methodIndex: number = 0): Promise<void> {
  //   const shippingRadio = this.page
  //     .locator(
  //       'input[name*='shipping'], input[name*='carrier'], input[type='radio']',
  //     )
  //     .nth(methodIndex);
  //   await expect(shippingRadio).toBeVisible();
  //   await shippingRadio.click();
  //   await this.page.waitForTimeout(300);
  // }

  // async verifyOrderSummary(): Promise<void> {
  //   const orderItems = this.page.locator(
  //     '[class*='order-item'], [class*='product-row'], [class*='cart-item']',
  //   );
  //   const itemCount = await orderItems.count();
  //   expect(itemCount).toBeGreaterThan(0);

  //   const total = this.page
  //     .locator('[class*='total'], [class*='amount']')
  //     .first();
  //   await expect(total).toBeVisible();
  // }

  // async fillPaymentInformation(payment: PaymentInfo): Promise<void> {
  //   // Card Number
  //   const cardNumberInput = this.page
  //     .locator(
  //       'input[name*='number'], input[name*='cardnumber'], input[name*='card']',
  //     )
  //     .first();

  //   if (await cardNumberInput.isVisible().catch(() => false)) {
  //     await expect(cardNumberInput).toBeVisible();
  //     await this.fillTextField(cardNumberInput, payment.cardNumber);

  //     // Expiry Date
  //     const expiryInput = this.page
  //       .locator(
  //         'input[name*='expiry'], input[name*='expire'], input[name*='date']',
  //       )
  //       .first();
  //     await this.fillTextField(expiryInput, payment.expiryDate);

  //     // CVV
  //     const cvvInput = this.page
  //       .locator(
  //         'input[name*='cvv'], input[name*='cvc'], input[name*='security']',
  //       )
  //       .first();
  //     await this.fillTextField(cvvInput, payment.cvv);

  //     // Cardholder Name
  //     const holderInput = this.page
  //       .locator(
  //         'input[name*='holder'], input[name*='cardholder'], input[name*='name']',
  //       )
  //       .first();
  //     await this.fillTextField(holderInput, payment.cardholderName);
  //   }
  // }

  // async selectPaymentMethod(methodName: string = 'credit card'): Promise<void> {
  //   const paymentOption = this.page
  //     .locator(
  //       `input[value*='${methodName}'], label:has-text('${methodName}') >> input`,
  //     )
  //     .first();

  //   if (await paymentOption.isVisible().catch(() => false)) {
  //     await paymentOption.click();
  //     await this.page.waitForTimeout(300);
  //   }
  // }

  // async placeOrder(): Promise<void> {
  //   const placeOrderButton = this.page
  //     .locator(
  //       'button:has-text('Place Order'), button:has-text('Complete Purchase'), button:has-text('Confirm Order')',
  //     )
  //     .first();
  //   await expect(placeOrderButton).toBeVisible();
  //   await placeOrderButton.click();
  //   await this.page.waitForLoadState('domcontentloaded');
  // }

  // async verifyOrderConfirmation(): Promise<void> {
  //   const confirmationMessage = this.page
  //     .locator('h1, h2, [class*='success'], [class*='confirmation']')
  //     .first();
  //   await expect(confirmationMessage).toBeVisible({ timeout: 5000 });
  // }

  // async getOrderNumber(): Promise<string | null> {
  //   const orderNumber = this.page
  //     .locator('[class*='order-number'], [class*='order-id']')
  //     .first();

  //   if (await orderNumber.isVisible().catch(() => false)) {
  //     return await orderNumber.textContent();
  //   }
  //   return null;
  // }

  // async verifyCheckoutFieldError(fieldName: string): Promise<boolean> {
  //   const errorPatterns: Record<string, RegExp> = {
  //     name: /name.*required|first.*name|last.*name/i,
  //     address: /address.*required|street/i,
  //     city: /city.*required/i,
  //     postal: /postal.*required|zip.*required|postcode/i,
  //     country: /country.*required/i,
  //     email: /email.*required/i,
  //   };

  //   return await this.verifyErrorMessage(
  //     errorPatterns[fieldName] || new RegExp(fieldName, 'i'),
  //   );
  // }
}
