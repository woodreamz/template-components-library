module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['testing-library'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'coverage', 'node_modules', 'storybook-static'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:vitest/all'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-relative-packages': 'off',
        'vitest/max-expects': 'off',
        'vitest/prefer-snapshot-hint': 'off',
        'vitest/prefer-strict-equal': 'off',
      },
    },
    {
      files: ['**/vite.config.ts', '**/tests/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-relative-packages': 'off',
      },
    },
  ],
  globals: {
    JSX: 'readonly',
  },
  rules: {
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/function-component-definition': [
      'off',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          ['builtin', 'external'],
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    'react/require-default-props': [
      'error',
      {
        classes: 'ignore',
        functions: 'defaultArguments',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/vite.config.ts', '**/tests/*', '**/*.stories.*', '**/*.test.*'],
      },
    ],
  },
};
