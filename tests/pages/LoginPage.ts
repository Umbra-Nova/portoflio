import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
  readonly signUpLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.submitButton = page.locator("#submit");
    this.errorMessage = page.locator("#error");
    this.signUpLink = page.getByRole("button", { name: /sign up/i });
  }

  async goto(): Promise<void> {
    await this.page.goto("/login");
  }

  async login(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.submit();
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async getErrorMessage(): Promise<string> {
    // #error is present but empty on load; text is set asynchronously after the login POST resolves.
    await expect(this.errorMessage).not.toBeEmpty();
    return (await this.errorMessage.textContent())?.trim() ?? "";
  }

  async goToSignUp(): Promise<void> {
    await this.signUpLink.click();
  }
}
