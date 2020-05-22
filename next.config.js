const withImages = require('next-images');
const path = require('path');
/* eslint-disable no-undef */
module.exports = withImages({
  exclude: path.resolve(__dirname, 'assets/images/logos'),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    });

    return config;
  }
});
