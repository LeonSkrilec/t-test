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

    config.module.rules.push({
      test: /\.ttf$/,
      use: [
        {
          loader: 'ttf-loader',
          options: {
            name: './font/[hash].[ext]'
          }
        }
      ]
    });

    return config;
  }
});
