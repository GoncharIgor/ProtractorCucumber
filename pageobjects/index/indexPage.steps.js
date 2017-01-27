'use strict';

let IndexPage = require('./IndexPage');
let EditComputerPage = require('./../EditComputerPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let indexPageObject = new IndexPage();
let editComputerPageObject = new EditComputerPage();

this.World = require('./../../step_definitions/support/world').World;

let indexPageSteps = {

    checkPageTitle: (title) => expect(browser.getTitle()).to.eventually.equal(title),

    clickAddNewComputerButton: () => indexPageObject.clickButton(indexPageObject.addNewComputerButton),

    clickNextButton: () => indexPageObject.clickButton(indexPageObject.paginationNextButton),

    clickPreviousButton: () => indexPageObject.clickButton(indexPageObject.paginationPreviousButton),

    checkIndexPageWasOpened: () => expect(browser.getCurrentUrl()).to.eventually.equal('http://computer-database.herokuapp.com/computers'),

    isAmountOfComputersVisible: () => expect(indexPageObject.isElementVisible(indexPageObject.computersAmountHeader)).to.eventually.be.true,

    isFilterInputVisible: () => expect(indexPageObject.isElementVisible(indexPageObject.filterInputField)).to.eventually.be.true,

    isFilterSubmitButtonVisible: () => expect(indexPageObject.isElementVisible(indexPageObject.filterSubmitButton)).to.eventually.be.true,

    isAddNewComputerButtonVisible: () => expect(indexPageObject.isElementVisible(indexPageObject.addNewComputerButton)).to.eventually.be.true,

    isMessageWarningWasDisplayed: () => expect(indexPageObject.isElementVisible(indexPageObject.messageWarning)).to.eventually.be.true,

    isMessageWarningWasNotDisplayed: () => expect(indexPageObject.isElementExist(indexPageObject.messageWarning)).to.eventually.be.false,

    isPaginationBlockVisible: () => expect(indexPageObject.isElementVisible(indexPageObject.paginationBlok)).to.eventually.be.true,

    checkAmountOFColumnsInTheTable: function (numberOfColumns) {
        expect(indexPageObject.getTableColumnsAmount()).to.eventually.equal(+numberOfColumns);
    },
    findComputer: function (name) {
        indexPageObject.findComputerInTheTable(name);
    },
    checkDataInTheTable: function (name, introducedDate, discontinuedDate, company) {
        // let expectedArray = [name, introducedDate, discontinuedDate, company];
        // let modified = indexPageObject.isComputerInfoInTheTableEqualsExpected().then((array) => array.push(123))
        expect(indexPageObject.isComputerInfoInTheTableEqualsExpected(name, introducedDate, discontinuedDate, company)).to.eventually.be.true;
    },
    deleteComputer: function (name) {
        indexPageObject.findComputerInTheTable(name).navigateToEditComputerPage();
        editComputerPageObject.deleteComputer();
    },

    checkAmountOfComputersInTheTable: function () {
        indexPageObject.getComputersCount().then((count)=> { //if we have arrow function, we don't need that=this, because function looses its context and this is referred to class context
            this.initialComputersCount = count;
            return count;
        });
    },

    checkChangeOfAmountOfComputersInTheTable: function (direction, amount) {
        let that = this;
        if (direction === 'increased') {
            indexPageObject.getComputersCount().then(function (count) {
                let countRes = +that.initialComputersCount;
                expect(+count).to.be.equal(countRes + 1);
            });

        } else if (direction === 'decreased') {
            indexPageObject.getComputersCount().then(function (count) {
                let countRes = +that.initialComputersCount;
                expect(+count).to.be.equal(countRes - 1);
            });
        }
    },

    checkAmountOfComputersInTheTableWasNotChanged: function () {
        let that = this;
        indexPageObject.getComputersCount().then(function (count) {
            let countRes = +that.initialComputersCount;
            expect(+count).to.be.equal(countRes);
        });
    },

    selectComputer: function () {
        indexPageObject.navigateToEditComputerPage();
    },

    isPaginationWorksCorrectly: function (from, to) {
        let expectedText = 'Displaying ' + from + ' to ' + to + ' of ';

        indexPageObject.getTotalAmountOfComputersInPagination().then(function (text) {
            expectedText += text;
            expect(indexPageObject.getPaginationBlockText()).to.eventually.equal(expectedText);
        });
    }

};

module.exports = indexPageSteps;