'use strict';
let navigationSteps = require('./../pageobjects/index/navigation.steps.js');

module.exports = function () {
    this.Given(/^I navigate to (.*) page$/,navigationSteps.navigateTo);
};