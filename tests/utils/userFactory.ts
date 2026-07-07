import { randomUUID } from "node:crypto";

export type TestUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export function generateUniqueEmail(prefix = "qa-test"): string {
  return `${prefix}.${randomUUID()}@example.com`;
}

export function generateTestUser(overrides: Partial<TestUser> = {}): TestUser {
  return {
    firstName: "Test",
    lastName: "User",
    email: generateUniqueEmail(),
    password: "Password123!",
    ...overrides,
  };
}
