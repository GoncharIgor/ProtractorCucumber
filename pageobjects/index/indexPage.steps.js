'use strict';

let IndexPage = require('./IndexPage');
let EditComputerPage = require('./../EditComputerPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let indexPageObject = new IndexPage();
var editComputerPageObject = new EditComputerPage();

let indexPageSteps = {

    checkPageTitle: function (title) {
        expect(browser.getTitle()).to.eventually.equal(title)
    },

    clickAddNewComputerButton: function () {
        indexPageObject.clickButton(indexPageObject.addNewComputerButton);
    },
    ckeckIndexPageWasOpened: function () {
        expect(browser.getCurrentUrl()).to.eventually.equal('http://computer-database.herokuapp.com/computers');
    },
    isAmountOfComputersVisible: function () {
        expect(indexPageObject.isElementVisible(indexPageObject.computersAmountHeader)).to.eventually.be.true;
    },
    isFilterInputVisible: function () {
        expect(indexPageObject.isElementVisible(indexPageObject.filterInputField)).to.eventually.be.true;
    },
    isFilterSubmitButtonVisible: function () {
        expect(indexPageObject.isElementVisible(indexPageObject.filterSubmitButton)).to.eventually.be.true;
    },
    isAddNewComputerButtonVisible: function () {
        expect(indexPageObject.isElementVisible(indexPageObject.addNewComputerButton)).to.eventually.be.true;
    },
    checkAmountOFColumnsInTheTable: function (numberOfColumns) {
        expect(indexPageObject.getTableColumnsAmount()).to.eventually.equal(4);
    },
    isPaginationBlockVisible: function () {
        expect(indexPageObject.isElementVisible(indexPageObject.paginationBlok)).to.eventually.be.true;
    },
    findComputer: function (name) {
        indexPageObject.findComputerInTheTable(name);
    },
    checkDataInTheTable: function (name, introducedDate, discontinuedDate, company) {
        // let expectedArray = [name, introducedDate, discontinuedDate, company];
        expect(indexPageObject.isComputerInfoInTheTableEqualsExpected(name, introducedDate, discontinuedDate, company)).to.eventually.be.true;
    },
    deleteComputer: function (name) {
        indexPageObject.findComputerInTheTable(name).navigateToEditComputerPage();
        editComputerPageObject.deleteComputer();
    },
    checkAmountOfComputersInTheTable: function () {
        indexPageObject.getComputersCount();
    },

    checkChangeOfAmountOfComputersInTheTable: function (direction, amount) {
        if (direction === 'increased') {
            //TODO
        } else if (direction === 'decreased') {
            //TODO
        }
    },
    checkAmountOfComputersInTheTableWasNotChanged: function () {
        //TODO
    },

    isMessageWarningWasDisplayed: function () {
        expect(indexPageObject.isElementVisible(indexPageObject.messageWarning)).to.eventually.be.true;
    },

    isMessageWarningWasNotDisplayed: function () {
        expect(indexPageObject.isElementExist(indexPageObject.messageWarning)).to.eventually.be.false;
    }
};

module.exports = indexPageSteps;