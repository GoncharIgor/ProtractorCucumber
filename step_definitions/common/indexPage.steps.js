'use strict';

var IndexPage = require('./../../pageobjects/IndexPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
    var indexPageObject = new IndexPage();

    this.Then(/^I see that index page has title: "([^"]*)"$/, (title) => expect(browser.getTitle()).to.eventually.equal(title));

    this.When(/^I click 'Add new Computer' button$/, () => indexPageObject.clickButton(indexPageObject.addNewComputerButton));

    this.Then(/^I see that index page is opened$/, () => expect(browser.getCurrentUrl()).to.eventually.equal('http://computer-database.herokuapp.com/computers'));



};
