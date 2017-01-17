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

    this.Then(/^I see that amount of computers is visible$/, () => expect(indexPageObject.isElementVisible(indexPageObject.computersAmountHeader)).to.eventually.be.true);

    this.Then(/^I see that 'Filter' input is visible$/, () => expect(indexPageObject.isElementVisible(indexPageObject.filterInputField)).to.eventually.be.true);

    this.Then(/^I see that 'Filter' submit button is visible$/, () => expect(indexPageObject.isElementVisible(indexPageObject.filterSubmitButton)).to.eventually.be.true);

    this.Then(/^I see that 'Add new computer' button is visible$/, () => expect(indexPageObject.isElementVisible(indexPageObject.addNewComputerButton)).to.eventually.be.true);

    this.Then(/^I see that page has table with "([^"]*)" columns$/, (numberOfColumns) => expect(indexPageObject.getTableColumnsAmount()).to.eventually.equal(4));

    this.Then(/^I see that 'Pagination' block is visible$/, () => expect(indexPageObject.isElementVisible(indexPageObject.paginationBlok)).to.eventually.be.true);
};
