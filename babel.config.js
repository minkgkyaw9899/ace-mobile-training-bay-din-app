module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          app: './src/app',
          asserts: './src/assets',
          features: './src/features',
          navigations: './src/navigaitons',
          screens: './src/screens',
          old2: './src/screens/old2',
        },
      },
    ],
  ],
};
