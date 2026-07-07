export const GENERIC_LOGIN_ERROR = "Incorrect username or password";

export const invalidCredentials: Array<{
  label: string;
  email: string;
  password: string;
}> = [
  {
    label: "unregistered email",
    email: "no-such-user.qa-test@example.com",
    password: "Password123!",
  },
  { label: "whitespace-only input", email: "   ", password: "   " },
  {
    label: "SQL-injection-like string",
    email: "' OR '1'='1",
    password: "' OR '1'='1",
  },
];
