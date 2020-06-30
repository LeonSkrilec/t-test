const withImages = require('next-images');
const path = require('path');
/* eslint-disable no-undef */
module.exports = withImages({
  exclude: [path.resolve(__dirname, 'assets/images/logos'), path.resolve(__dirname, 'calculators/sample-size')],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    });

    return config;
  },
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/kalkulatorji': { page: '/kalkulatorji' },
      '/kalkulatorji/t-test': { page: '/kalkulatorji/t-test', query: { title: 'Studentov t-test kalkulator' } },
      '/kalkulatorji/velikost-vzorca': {
        page: 'kalkulatorji/velikost-vzorca',
        query: { title: 'Izračun velikosti vzorca' }
      }
    };
  }
});
