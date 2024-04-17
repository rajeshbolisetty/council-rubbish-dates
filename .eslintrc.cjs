/* eslint-env node */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.js'],
      extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      plugins: ['prettier'],
      rules: {
        'node/no-unpublished-require': 'off',
        'no-control-regex': 'warn',
        'no-unsafe-finally': 'warn',
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'no-useless-catch': 'warn',
        'no-useless-escape': 'warn',
      },
    },
  ],
};
