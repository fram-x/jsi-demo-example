module.exports = api => {
  api.cache(false);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "react-native-jsi-calculator": "../library"
          }
        }
      ]
    ]
  };
};
