const webpack = require('webpack');

module.exports = function override(config, env) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        toast: 'react-toastify',
      })
    );
    return config;
  };
  