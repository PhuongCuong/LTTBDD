module.exports = function(api) {
  api.cache(true);
  const isWeb = process.env.EXPO_PUBLIC_PLATFORM === 'web'; // Check the platform here
  const aliasConfig = isWeb? {'react-native-linear-gradient': 'react-native-web-linear-gradient'}: {};
  return {
    presets: [['babel-preset-expo']],
    plugins: [
      [
        'module-resolver',
        {
          alias: aliasConfig
        },
      ],
    ]
  };
};