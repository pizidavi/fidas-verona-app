module.exports = {
  root: true,
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    radix: 'off',
    curly: 'off',
    'no-var': 'error',
    'comma-dangle': 'off',
    'no-unused-vars': 'off',
    'jsx-quotes': [1, 'prefer-single'],
    'prefer-arrow-callback': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    'prettier/prettier': 'warn',
    'react-hooks/exhaustive-deps': 'off',
  },
};
