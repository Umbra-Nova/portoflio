import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import playwright from 'eslint-plugin-playwright';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  // GLOBAL IGNORES (Replaces .eslintignore)
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/playwright-report/**',
      '**/test-results/**',
    ],
  },
  // TYPESCRIPT & PLAYWRIGHT CONFIG
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      playwright: playwright,
    },
    rules: {
      // Basic TypeScript rules
      ...ts.configs.recommended.rules,
      // Playwright specific rules
      ...playwright.configs.recommended.rules,

      // Custom overrides
      'playwright/no-focused-test': 'error', // Ensures you don't commit .only tests
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // PRETTIER CONFIG (Must be at the end to override conflicting rules)
  // Options are read from .prettierrc — do not duplicate them here.
  eslintPluginPrettierRecommended,
];
