const { resolve } = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const createDefaultConfig = require('@open-wc/building-webpack/modern-and-legacy-config');

// If you don't need IE11 support, use the modern-config instead
// import createDefaultConfig from '@open-wc/building-webpack/modern-config';

const config = createDefaultConfig({
  entry: resolve(__dirname, './src/kuestions-app.js'),
  indexHTML: resolve(__dirname, './src/index.html'),
});

const mergedConfig = merge(config, {
  output: {
    filename: `[name].[hash].js`,
    chunkFilename: `[name].[hash].js`,
    publicPath: '/dist/',
  },
  devServer: {
    // host: '0.0.0.0',
    port: process.env.WEBPACK_PORT || 8000,
    // contentBase: resolve(__dirname, 'src'),
    historyApiFallback: true,
    compress: false,
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
});

module.exports = {
  ...mergedConfig,
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html'),
      inject: false,
      alwaysWriteToDisk: true,
    }),
    // Write HtmlWebpackPlugin to path
    new HtmlWebpackHarddiskPlugin({
      outputPath: resolve(__dirname),
    }),
    mergedConfig.plugins[1],
  ],
};
