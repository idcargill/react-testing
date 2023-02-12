/** @type {import('next').NextConfig} */
// const pluginOptions = require('swc-plugin-vanilla-extract');
const {
  createVanillaExtractPlugin,
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true,
  },
  experimental: {
    swcPlugins: [
      ["swc-plugin-vanilla-extract"]
    ],
  },
};

module.exports = withVanillaExtract(nextConfig);
