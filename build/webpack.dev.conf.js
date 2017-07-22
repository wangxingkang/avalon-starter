const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

function resolveApp(relativePath) {
  return path.resolve(relativePath);
}

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: '#cheap-module-eval-source-map',
  cache: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: resolveApp('favicon.ico'),
      inject: true,
      path:config.dev.staticPath
    }),
    new FriendlyErrorsPlugin()
  ]
});

module.exports = devWebpackConfig;
