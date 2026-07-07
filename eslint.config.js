import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  // GLOBAL IGNORES (Replaces .eslintignore)
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/playwright-report/**',
      '**/test-results/**',
    ],
  },

  // TYPESCRIPT CONFIG (all source, page objects, fixtures, utils, and tests)
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [tseslint.configs.recommended],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // PLAYWRIGHT CONFIG — scoped to spec files only, since these rules assume
  // a test()/describe() context and don't apply to page objects/fixtures/utils.
  {
    files: ['**/*.spec.ts'],
    ...playwright.configs['flat/recommended'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/no-focused-test': 'error', // Ensures you don't commit .only tests
      'playwright/no-skipped-test': 'warn', // Flags forgotten .skip tests
      'playwright/no-wait-for-timeout': 'error', // Disallow arbitrary waitForTimeout in favor of web-first assertions
      'playwright/no-conditional-in-test': 'error', // Conditionals in tests are a common source of flakiness
    },
  },

  // PRETTIER CONFIG (Must be at the end to override conflicting rules)
  // Options are read from .prettierrc — do not duplicate them here.
  eslintPluginPrettierRecommended,
);
