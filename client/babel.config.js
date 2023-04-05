const { Transform } = require("stream");

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Transformer : {
    //     assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    // }
  };
  
};
