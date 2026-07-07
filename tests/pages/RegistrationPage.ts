import { expect, type Locator, type Page } from "@playwright/test";
import type { TestUser } from "../utils/userFactory";

export class RegistrationPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly cancelButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#firstName");
    this.lastNameInput = page.locator("#lastName");
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.submitButton = page.locator("#submit");
    this.cancelButton = page.locator("#cancel");
    this.errorMessage = page.locator("#error");
  }

  async goto(): Promise<void> {
    await this.page.goto("/addUser");
  }

  async register(user: TestUser): Promise<void> {
    await this.fillField("firstName", user.firstName);
    await this.fillField("lastName", user.lastName);
    await this.fillField("email", user.email);
    await this.fillField("password", user.password);
    await this.submit();
  }

  fieldInput(field: keyof TestUser): Locator {
    const inputs: Record<keyof TestUser, Locator> = {
      firstName: this.firstNameInput,
      lastName: this.lastNameInput,
      email: this.emailInput,
      password: this.passwordInput,
    };
    return inputs[field];
  }

  async fillField(field: keyof TestUser, value: string): Promise<void> {
    if (!value) return;
    await this.fieldInput(field).fill(value);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  async getErrorMessage(): Promise<string> {
    // #error is present but empty on load; text is set asynchronously after the submit resolves.
    await expect(this.errorMessage).not.toBeEmpty();
    return (await this.errorMessage.textContent())?.trim() ?? "";
  }
}
