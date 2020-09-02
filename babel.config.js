module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@emotion/babel-preset-css-prop",
    ],
  };
};
