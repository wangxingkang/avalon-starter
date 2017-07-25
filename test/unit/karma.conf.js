const webpackConfig = require('../../build/webpack.test.conf');

module.exports = function (config) {
  config.set({
    // 基础路径，用在files,exclude属性上
    basePath: './',
    browsers: ['PhantomJS'],
    // 测试框架
    frameworks: ['jasmine', 'phantomjs-shim'],
    reporters: ['spec', 'coverage'],
    // 需要加载的文件列表
    files: ['./index.js'],
    // 排除的文件列表
    exclude: [],
    // 在浏览器使用之前处理匹配的文件
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-phantomjs-launcher',
      'karma-phantomjs-shim',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-webpack'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })

};
