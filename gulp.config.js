/* jshint node:true */
'use strict';

module.exports = function() {
  var config = {
    alljs: [
      './src/**/*.js',
      './test/**/*.js',
      './*.js'
    ],
    testjs: [
      './test/**/*.js'
    ]
  };

  return config;
};