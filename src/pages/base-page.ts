import { Page, Locator, expect } from '@playwright/test';

/**
 * Common selectors and utilities for PrestaShop demo store
 */
export class PrestaShopBasePage {
  constructor(protected page: Page) {}

  // Navigation
  async navigateToHome(): Promise<void> {
    await this.page.goto('https://prime-lip.demo.prestashop.com/');
    await this.waitForPageReady();
  }

  async navigateToRegistration(): Promise<void> {
    await this.page.goto('https://prime-lip.demo.prestashop.com/registration');
    await this.waitForPageReady();
  }

  async navigateToLogin(): Promise<void> {
    await this.page.goto('https://prime-lip.demo.prestashop.com/login');
    await this.waitForPageReady();
  }

  // Wait utilities
  protected async waitForPageReady(): Promise<void> {
    // Wait for page to finish loading and main content to be visible
    await this.page.waitForLoadState('domcontentloaded');
    // Give page a moment to render, but limit to 2 seconds
    await this.page.waitForTimeout(500);
  }

  // Form field interactions
  async fillTextField(
    selector: string | Locator,
    value: string,
    options?: { clear?: boolean },
  ): Promise<void> {
    const locator =
      typeof selector === 'string' ? this.page.locator(selector) : selector;
    await expect(locator).toBeVisible();
    if (options?.clear !== false) {
      await locator.fill(''); // Clear first
    }
    await locator.fill(value);
  }

  async selectDropdownOption(
    selector: string | Locator,
    value: string,
  ): Promise<void> {
    const locator =
      typeof selector === 'string' ? this.page.locator(selector) : selector;
    await expect(locator).toBeVisible();
    await locator.selectOption(value);
  }

  async checkCheckbox(selector: string | Locator): Promise<void> {
    const locator =
      typeof selector === 'string' ? this.page.locator(selector) : selector;
    await expect(locator).toBeVisible();
    if (!(await locator.isChecked())) {
      await locator.check();
    }
  }

  async clickButton(text: string): Promise<void> {
    const button = this.page.locator(`button:has-text('${text}')`).first();
    await expect(button).toBeVisible();
    await button.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickLink(text: string): Promise<void> {
    const link = this.page.locator(`a:has-text('${text}')`).first();
    await expect(link).toBeVisible();
    await link.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  // Verification utilities
  async verifyErrorMessage(expectedPattern: string | RegExp): Promise<boolean> {
    const errorLocator = this.page
      .locator('[class*='error'], [class*='alert-danger'], [role='alert']')
      .first();

    try {
      await expect(errorLocator).toBeVisible({ timeout: 3000 });
      const errorText = await errorLocator.textContent();

      if (typeof expectedPattern === 'string') {
        return (
          errorText?.toLowerCase().includes(expectedPattern.toLowerCase()) ??
          false
        );
      } else {
        return expectedPattern.test(errorText?.toLowerCase() ?? '');
      }
    } catch {
      return false;
    }
  }

  async verifyPageUrl(urlPart: string): Promise<void> {
    const currentUrl = this.page.url();
    expect(currentUrl).toContain(urlPart);
  }

  async verifyPageUrlExcludes(urlPart: string): Promise<void> {
    const currentUrl = this.page.url();
    expect(currentUrl).not.toContain(urlPart);
  }

  async getElementCount(selector: string): Promise<number> {
    return this.page.locator(selector).count();
  }

  async isElementVisible(selector: string): Promise<boolean> {
    try {
      return await this.page.locator(selector).isVisible({ timeout: 2000 });
    } catch {
      return false;
    }
  }
}
