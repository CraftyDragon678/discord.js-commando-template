module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin', 'external', 'internal', 'parent', 'sibling', 'index',
        ],
        pathGroups: [{
          pattern: '@src/**',
          group: 'internal',
        }, {
          pattern: '@/**',
          group: 'internal',
        }],
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        allow: ['_'],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: 'next|_' },
    ],
    'no-underscore-dangle': ['error', { allow: ['_id', '_model'] }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts'] },
    ],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: ['run', 'runGame'],
      },
    ],
    'no-dupe-class-members': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
      alias: {
        map: [
          ['@src', './src'],
          ['@', './'],
        ],
        extensions: ['.ts', '.json'],
      },
    },
  },
  overrides: [{
    files: ['*.test.ts'],
    rules: {
      'no-unused-expressions': 'off',
    },
  }],
};
