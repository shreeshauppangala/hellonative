module.exports = {
  root: true,
  extends: ['prettier'],
  rules: {
    "max-len": ["error", { "code": 130 }],
    "react/jsx-wrap-multilines": [
      "error",
      { "arrow": "parens", "declaration": "parens", "return": true }
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 14,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    'no-console': 'error',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 0,
    'react/jsx-props-no-spreading': 'off',
    'no-nested-ternary': 'off',
    // 'react/prop-types': 'off',
    'react/no-unstable-nested-components': 'off',
    // 'no-underscore-dangle': 'off',
  },

};
