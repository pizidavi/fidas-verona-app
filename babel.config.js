module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          crypto: 'react-native-quick-crypto',
          stream: 'stream-browserify',
          buffer: '@craftzdog/react-native-buffer',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
