import type { TestUser } from "../utils/userFactory";

export const requiredFieldMatrix: Array<{
  omit: keyof TestUser;
  expectedError: string;
}> = [
  {
    omit: "firstName",
    expectedError:
      "User validation failed: firstName: Path `firstName` is required.",
  },
  {
    omit: "lastName",
    expectedError:
      "User validation failed: lastName: Path `lastName` is required.",
  },
  {
    omit: "email",
    expectedError: "User validation failed: email: Email is invalid",
  },
  {
    omit: "password",
    expectedError:
      "User validation failed: password: Path `password` is required.",
  },
];

export const INVALID_EMAIL_FORMAT_ERROR =
  "User validation failed: email: Email is invalid";

export const SHORT_PASSWORD_ERROR =
  "User validation failed: password: Path `password` (`1`) is shorter than the minimum allowed length (7).";
