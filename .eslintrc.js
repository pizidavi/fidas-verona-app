module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    radix: 'off',
    curly: 'off',
    'comma-dangle': [1, 'always-multiline'],
    'jsx-quotes': [1, 'prefer-single'],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
};
