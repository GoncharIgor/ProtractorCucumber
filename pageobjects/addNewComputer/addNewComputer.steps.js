'use strict';

let AddNewComputerPage = require('./AddNewComputerPage');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

let addNewComputerPageObject = new AddNewComputerPage();

let addNewComputerSteps = {

    checkPageTitle: (title) => expect(browser.getTitle()).to.eventually.equal(title),

    checkAddNewComputerPageWasOpened: () => expect(addNewComputerPageObject.getPageHeader()).to.eventually.equal('Add a computer'),

    checkAppHeader: (appHeader) => expect(addNewComputerPageObject.getAppHeader()).to.eventually.equal(appHeader),

    isComputerNameFieldVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.computerNameInputField)).to.eventually.be.true,

    isLabelForComputerNameFieldVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.computerNameInputFieldLabel)).to.eventually.be.true,

    isIntroducedDateFieldVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.introducedDateInputField)).to.eventually.be.true,

    isLabelForIntroducedDateFieldVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.introducedDateInputFieldLabel)).to.eventually.be.true,

    isDiscontinuedDateFieldVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.discontinuedDateInputField)).to.eventually.be.true,

    isLabelForDiscontinuedDateFieldVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.discontinuedDateInputFieldLabel)).to.eventually.be.true,

    isCompanySelectboxVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.companySelectBox)).to.eventually.be.true,

    isLabelForCompanySelectboxVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.companySelectBoxLabel)).to.eventually.be.true,

    isCreateThisComputerButtonVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.createThisComputerButton)).to.eventually.be.true,

    isCancelButtonVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.cancelButton)).to.eventually.be.true,

    isEmptyNameErrorNotificationVisible: () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.emptyComputerNameErrorNotification)).to.eventually.be.true,

    addNewComputer: function (table) {
        let name = table.raw()[1][0];
        let introducedDate = table.raw()[1][1];
        let discontinuedDate = table.raw()[1][2];
        let company = table.raw()[1][3];
        addNewComputerPageObject.addComputer(name, introducedDate, discontinuedDate, company);
    },
    clickCancelButton: () => addNewComputerPageObject.clickCancelButton(),

    fillAllFields: function (table) {
        addNewComputerPageObject.fillInAllFields(table.raw()[1][0], table.raw()[1][1], table.raw()[1][2], table.raw()[1][3])
    }
};

module.exports=addNewComputerSteps;

