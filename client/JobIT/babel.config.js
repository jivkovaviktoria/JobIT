module.exports = function (api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];

  return {
    presets,
  };
};