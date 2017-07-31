const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const es3ifyWebpackPlugin = require('es3ify-webpack-plugin');
const ReplacePlugin = require('replace-bundle-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');

Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

function resolveApp(relativePath) {
  return path.resolve(relativePath);
}

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')({ browsers: ['ie>=8','>1% in CN'] })
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devtool: 'source-map',
  cache: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new es3ifyWebpackPlugin(),
    new ReplacePlugin([
      {
        partten: /Object\.defineProperty\((__webpack_exports__|exports),\s*"__esModule",\s*\{\s*value:\s*true\s*\}\);/g,
        replacement: function (str, p1) {
          return p1 + '.__esModule = true;';
        }
      },
      {
        partten: /\/\**\/\s*Object\.defineProperty\(exports,\s*name,\s*\{[^})]*\}\);/g,
        replacement: function () {
          return '/******/            exports[name] = getter;';
        }
      },
      {
        partten: /,\s*hotCreateRequire\(moduleId\)/g,
        replacement: function () {
          return ', (this.noHotCreateRequire ? __webpack_require__ : hotCreateRequire(moduleId))'
        }
      },
      {
        partten: /return\s*?(hotCreateRequire\(\d+\)\((.*)\))/g,
        replacement: function (str, p1, p2) {
          return `return this.noHotCreateRequire ? __webpack_require__(${p2}) : ${p1}`
        }
      },
      {
        partten: /var\s*hotClient\s*=\s*__webpack_require__\(\d+\)/g,
        replacement: function (str) {
          return `if(window.noHotCreateRequire){return}\n${str}`
        }
      }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      favicon: resolveApp('favicon.ico'),
      assetsPath: config.dev.assetsPublicPath,
      inject: true,
      path:config.dev.staticPath
    }),
    new FriendlyErrorsPlugin()
  ]
});

module.exports = webpackConfig;
