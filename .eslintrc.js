module.exports = {
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
      ],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      files: ['*.ts', '*.tsx'],
      rules: {
        // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        'react/prop-types': ['off', { customValidators: 'children' }],
        'import/order': [
          'error',
          {
            groups: ['external'],
          },
        ],
        'import/no-unresolved': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
  globals: {
    globalThis: false,
  },
};
