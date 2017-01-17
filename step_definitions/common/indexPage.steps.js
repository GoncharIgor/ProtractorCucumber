'use strict';

var IndexPage = require('./../../pageobjects/IndexPage');

module.exports = function () {
    let indexPageObject = new IndexPage();

    this.When(/^I click (.*) button$/, function (buttonName) {
        return indexPageObject.clickButton(indexPageObject.buttonName);
    });

};
