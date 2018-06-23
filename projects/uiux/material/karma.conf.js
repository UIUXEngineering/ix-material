// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const {customLaunchers, platformMap} = require('../../../test/browser-providers');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    files: [
      // {pattern: '../../../node_modules/core-js/client/core.js', included: true, watched: false},
      // {pattern: '../../../node_modules/tslib/tslib.js', included: true, watched: false},
      // {pattern: '../../../node_modules/zone.js/dist/zone.js', included: true, watched: false},
      // {pattern: '../../../node_modules/zone.js/dist/proxy.js', included: true, watched: false},
      // {pattern: '../../../node_modules/zone.js/dist/sync-test.js', included: true, watched: false},
      // {pattern: '../../../node_modules/zone.js/dist/jasmine-patch.js', included: true, watched: false},
      // {pattern: '../../../node_modules/zone.js/dist/async-test.js', included: true, watched: false},
      // {pattern: '../../../node_modules/zone.js/dist/fake-async-test.js', included: true, watched: false},
      {pattern: '../../../node_modules/hammerjs/hammer.min.js', included: true, watched: false},
      {pattern: '../../../node_modules/hammerjs/hammer.min.js.map', included: false, watched: false},
      {pattern: '../../../node_modules/moment/min/moment-with-locales.min.js', included: true, watched: false},

      // Include all Angular dependencies
      // {pattern: '../../../node_modules/@angular/**/*', included: false, watched: false},
      // {pattern: '../../../node_modules/rxjs/**/*', included: false, watched: false},


      {pattern: '../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css', included: true, watched: false},
      {pattern: '../../../dist/@uiux/material/prebuilt-themes/indigo-pink.css', included: true, watched: true}
    ],
    customLaunchers: customLaunchers,
    browserConsoleLogOptions: {
      terminal: true,
      level: 'log'
    },
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        random: false
      }
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../../coverage/material'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['dots'],
    specReporter: {
      maxLogLines: Infinity, // Log out the entire stack trace on errors and failures.
      suppressSkipped: true,
      showSpecTiming: true,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessLocal'],
    singleRun: false
  });
};
