'use strict';

var IndexPage = require('./../../pageobjects/IndexPage');

module.exports = function () {
    var indexPageObject = new IndexPage();

    this.When(/^I click (.*) button$/, function (buttonName) {
        return indexPageObject.clickButton(indexPageObject.buttonName);
    });

    this.Then(/^I see that (.*) page is is opened$/, function (pageName) {
        var actualUrl = browser.getCurrentUrl();
        this.expect('http://computer-database.herokuapp.com/computers').to.eventually.be.eql(browser.getCurrentUrl());
    });
// "([^\"]*)"
};
