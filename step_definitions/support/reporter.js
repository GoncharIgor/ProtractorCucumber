'use strict';

let reporter = require('cucumberjs-allure-reporter');
reporter.config(
    {targetDir: '../reports/allure-results'}
);
module.exports = reporter;