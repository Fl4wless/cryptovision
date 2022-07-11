/** @type {import('next').NextConfig} */

const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSvgr = require('@newhighsco/next-plugin-svgr');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  optimizeFonts: true,
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude:
        process.env.NODE_ENV === 'development' ? ['log', 'warn', 'error', 'debug'] : ['error'],
    },
  },
};

module.exports = withPlugins(
  [
    [
      withSvgr,
      {
        svgrOptions: {
          titleProp: true,
          icon: true,
          svgProps: {
            // height: 'auto',
            // width: 'auto',
          },
          removeViewBox: false,
        },
      },
    ],
  ],
  nextConfig,
);
