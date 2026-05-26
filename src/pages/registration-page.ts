import { Page, expect } from '@playwright/test';
import { PrestaShopBasePage } from './base-page';
import { TestUser } from '../fixtures/test-user';

/**
 * Account Registration page object
 */
export class RegistrationPage extends PrestaShopBasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await this.navigateToRegistration();
  }

  async verifySocialTitleOptions(): Promise<void> {
    const socialTitleRadios = this.page.locator(
      'input[type='radio'][name*='social']',
    );
    const radioCount = await socialTitleRadios.count();
    expect(radioCount).toBeGreaterThanOrEqual(2);
  }

  async selectSocialTitle(title: 'Mr.' | 'Mrs.' | 'Ms.'): Promise<void> {
    const labelText = title === 'Mr.' ? 'Mr\\.' : title;
    const radio = this.page
      .locator(
        `input[type='radio'] ~ label:has-text('${labelText}') ~ input[type='radio']`,
      )
      .first();

    // Fallback: Try to find by value or position
    if (!(await radio.isVisible().catch(() => false))) {
      const allRadios = this.page.locator('input[type='radio']');
      const index = title === 'Mr.' ? 0 : 1;
      await allRadios.nth(index).click();
    } else {
      await radio.click();
    }
  }

  async fillRegistrationForm(user: TestUser): Promise<void> {
    // First name
    const firstNameInput = this.page
      .locator('input[name*='firstname'], input[name*='first_name']')
      .first();
    await this.fillTextField(firstNameInput, user.firstName);

    // Last name
    const lastNameInput = this.page
      .locator('input[name*='lastname'], input[name*='last_name']')
      .first();
    await this.fillTextField(lastNameInput, user.lastName);

    // Email
    const emailInput = this.page.locator('input[name*='email']').first();
    await this.fillTextField(emailInput, user.email);

    // Password
    const passwordInput = this.page.locator('input[name*='password']').first();
    await this.fillTextField(passwordInput, user.password);

    // Birthdate (optional)
    if (user.birthDate) {
      const birthdateInput = this.page
        .locator('input[name*='birthday'], input[name*='birthdate']')
        .first();
      if (await birthdateInput.isVisible().catch(() => false)) {
        await this.fillTextField(birthdateInput, user.birthDate);
      }
    }
  }

  async scrollToCheckboxes(): Promise<void> {
    await this.page.evaluate(() => window.scrollBy(0, 500));
    await this.page.waitForTimeout(300);
  }

  async acceptTermsAndConditions(): Promise<void> {
    const termsCheckbox = this.page
      .locator(
        'input[name*='terms'], input[name*='conditions'], input[name*='agreement']',
      )
      .first();
    await expect(termsCheckbox).toBeVisible();
    await this.checkCheckbox(termsCheckbox);
  }

  async checkOptionalCheckboxes(): Promise<void> {
    // Check all visible optional checkboxes
    const offersCheckbox = this.page
      .locator('input[name*='partner'], input[name*='offer']')
      .first();
    if (await offersCheckbox.isVisible().catch(() => false)) {
      await this.checkCheckbox(offersCheckbox);
    }

    const newsletterCheckbox = this.page
      .locator('input[name*='newsletter']')
      .first();
    if (await newsletterCheckbox.isVisible().catch(() => false)) {
      await this.checkCheckbox(newsletterCheckbox);
    }

    const privacyCheckbox = this.page.locator('input[name*='privacy']').first();
    if (await privacyCheckbox.isVisible().catch(() => false)) {
      await this.checkCheckbox(privacyCheckbox);
    }
  }

  async createAccount(): Promise<void> {
    await this.clickButton('Create account');
  }

  async verifyFormTitle(): Promise<void> {
    const formTitle = this.page.locator('h1, [class*='title']').first();
    await expect(formTitle).toBeVisible();
    const titleText = await formTitle.textContent();
    expect(titleText?.toLowerCase()).toContain('create');
    expect(titleText?.toLowerCase()).toContain('account');
  }

  async verifyPasswordVisibilityToggle(): Promise<boolean> {
    const showPasswordButton = this.page
      .locator('button:has-text('Show'), [class*='toggle-password']')
      .first();
    return await showPasswordButton.isVisible().catch(() => false);
  }

  async togglePasswordVisibility(): Promise<void> {
    const showPasswordButton = this.page
      .locator('button:has-text('Show'), [class*='toggle-password']')
      .first();
    await expect(showPasswordButton).toBeVisible();
    await showPasswordButton.click();
    await this.page.waitForTimeout(300);
  }

  async verifyRequiredFieldError(
    fieldType: 'firstName' | 'lastName' | 'email' | 'password',
  ): Promise<boolean> {
    const patterns: Record<string, RegExp> = {
      firstName: /first.*name.*required|first.*required/i,
      lastName: /last.*name.*required|last.*required/i,
      email: /email.*required|invalid.*email/i,
      password: /password.*required/i,
    };

    return await this.verifyErrorMessage(patterns[fieldType]);
  }

  async verifyEmailFormatError(): Promise<boolean> {
    return await this.verifyErrorMessage(
      /email.*invalid|invalid.*email|invalid.*format/i,
    );
  }

  async verifyNameFormatError(): Promise<boolean> {
    return await this.verifyErrorMessage(
      /letters.*dot|dot.*character|special.*character|only.*letters/i,
    );
  }

  async verifyTermsError(): Promise<boolean> {
    return await this.verifyErrorMessage(
      /terms.*conditions|agreement|must.*agree/i,
    );
  }
}
