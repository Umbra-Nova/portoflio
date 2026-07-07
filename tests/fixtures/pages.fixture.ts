import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { RegistrationPage } from "../pages/RegistrationPage";

type Fixtures = {
  loginPage: LoginPage;
  registrationPage: RegistrationPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
});

export { expect } from "@playwright/test";
