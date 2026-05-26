import { Page, expect } from "@playwright/test";
import { PrestaShopBasePage } from "./base-page";
import { TestUser } from "../fixtures/test-user";

/**
 * Login page object
 */
export class LoginPage extends PrestaShopBasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await this.navigateToLogin();
  }

  async login(
    user: TestUser | { email: string; password: string }
  ): Promise<void> {
    const emailInput = this.page.locator('input[name*="email"]').first();
    await expect(emailInput).toBeVisible();
    await this.fillTextField(emailInput, user.email);

    const passwordInput = this.page.locator('input[name*="password"]').first();
    await expect(passwordInput).toBeVisible();
    await this.fillTextField(passwordInput, user.password);

    await this.clickButton("Sign in");
  }

  async verifyLoginSuccess(): Promise<void> {
    // After login, should not be on login page
    await this.verifyPageUrlExcludes("login");
  }

  async verifyLogoutLinkPresent(): Promise<void> {
    const logoutLink = this.page
      .locator(
        'a:has-text("Log out"), a:has-text("Logout"), a:has-text("Sign out")'
      )
      .first();
    await expect(logoutLink).toBeVisible();
  }

  async logout(): Promise<void> {
    const logoutLink = this.page
      .locator(
        'a:has-text("Log out"), a:has-text("Logout"), a:has-text("Sign out")'
      )
      .first();
    await expect(logoutLink).toBeVisible();
    await logoutLink.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async verifyInvalidCredentialsError(): Promise<boolean> {
    return await this.verifyErrorMessage(
      /invalid|authentication.*failed|credentials/i
    );
  }

  async verifyEmptyFieldError(
    fieldType: "email" | "password"
  ): Promise<boolean> {
    const pattern =
      fieldType === "email" ? /email.*required/i : /password.*required/i;
    return await this.verifyErrorMessage(pattern);
  }

  async navigateToForgotPassword(): Promise<void> {
    await this.clickLink("Forgot your password");
  }

  async navigateToCreateAccount(): Promise<void> {
    await this.clickLink("Create your account");
  }
}
