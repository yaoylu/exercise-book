
module.exports = {

  extends: [
    'eslint-config-tencent',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'html',
  ],
  rules: {
    '@typescript-eslint/no-empty-interface': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'no-trailing-spaces': 'error',
    'linebreak-style': ['error', 'windows'],
    'no-underscore-dangle': 'off',
  },
};
