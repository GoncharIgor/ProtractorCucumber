'use strict';

var IndexPage = require('./../../pageobjects/IndexPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
    var indexPageObject = new IndexPage();

    this.When(/^I click 'Add new Computer' button$/, function () {
        return indexPageObject.clickButton(indexPageObject.addNewComputerButton);
    });

    this.Then(/^I see that AddNewComputer page is is opened$/, function () {
        return this.expect(browser.getCurrentUrl()).to.eventually.equal('http://computer-database.herokuapp.com/computers');
    });
};
// "([^\"]*)"
