'use strict';

var IndexPage = require('./../../pageobjects/IndexPage');
var EditComputerPage = require('./../../pageobjects/EditComputerPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
    var indexPageObject = new IndexPage();
    var editComputerPageObject = new EditComputerPage();

    this.Then(/^I see that index page has title: "([^"]*)"$/, (title) =>
        expect(browser.getTitle()).to.eventually.equal(title));

    this.When(/^I click 'Add new Computer' button$/, () =>
        indexPageObject.clickButton(indexPageObject.addNewComputerButton));

    this.Then(/^I see that index page is opened$/, () =>
        expect(browser.getCurrentUrl()).to.eventually.equal('http://computer-database.herokuapp.com/computers'));

    this.Then(/^I see that amount of computers is visible$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.computersAmountHeader)).to.eventually.be.true);

    this.Then(/^I see that 'Filter' input is visible$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.filterInputField)).to.eventually.be.true);

    this.Then(/^I see that 'Filter' submit button is visible$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.filterSubmitButton)).to.eventually.be.true);

    this.Then(/^I see that 'Add new computer' button is visible$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.addNewComputerButton)).to.eventually.be.true);

    this.Then(/^I see that page has table with "([^"]*)" columns$/, (numberOfColumns) =>
        expect(indexPageObject.getTableColumnsAmount()).to.eventually.equal(4));

    this.Then(/^I see that 'Pagination' block is visible$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.paginationBlok)).to.eventually.be.true);

    this.When(/^I find computer by name: "([^"]*)"$/, (name) =>
        indexPageObject.findComputerInTheTable(name));

    this.Then(/^I see that its data corresponds to: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, (name, introducedDate, discontinuedDate, company) =>
        expect(indexPageObject.isComputerInfoInTheTableEqualsExpected()).to.eventually.be.true);

    this.Then(/^I delete computer with name: "([^"]*)"$/, function (name) {
        indexPageObject.findComputerInTheTable(name).navigateToEditComputerPage();
        editComputerPageObject.deleteComputer();
    });

    this.Given(/^I get current amount of computers in the table$/, function () {
        indexPageObject.getComputersCount();
    });

    this.Then(/^I see that amount of computers was "([^"]*)" by (\d+)$/, function (direction, amount) {
        if (direction === 'increased') {
            //TODO
        } else if (direction === 'decreased') {
            //TODO
        }
    });

    this.Then(/^I see that amount of computers was not changed$/, function () {
        //TODO
    });


    this.Then(/^I see that Message warning is displayed$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.messageWarning)).to.eventually.be.true);

    this.Then(/^I see that Message warning is not displayed$/, () =>
        expect(indexPageObject.isElementExist(indexPageObject.messageWarning)).to.eventually.be.false);
};
