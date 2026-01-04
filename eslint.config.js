// eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked, // Enables type-aware linting
  playwright.configs['flat/recommended'], // Recommended Playwright rules
  {
    // Configuration specific to Playwright test files
    files: ['tests/**/*.ts', '*.spec.ts'],
    rules: {
      // Add or override specific rules here
      // e.g., to enforce awaiting promises in tests
      '@typescript-eslint/no-floating-promises': 'error',
    },
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'], // Path to your tsconfig.json
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // Ignore test-results, reports, etc.
    ignores: ['.vscode/', 'node_modules/', 'test-results/', 'reports/'],
  }
);
