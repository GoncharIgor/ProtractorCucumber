'use strict';

var AddNewComputrPage = require('./../../pageobjects/AddNewComputerPage');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
    var addNewComputerPageObject = new AddNewComputrPage();

    this.Then(/^I see that AddNewComputer page has title: "([^"]*)"$/, (title) => expect(browser.getTitle()).to.eventually.equal(title));

    this.Then(/^I see that AddNewComputer page is opened$/, () => expect(browser.getCurrentUrl()).to.eventually.equal('http://computer-database.herokuapp.com/computers/new'));

    this.Then(/^I see that App has header: "([^"]*)"$/, (appHeader) => expect(addNewComputerPageObject.getPageHeader()).to.eventually.equal(appHeader));

    this.Then(/^I see that 'Computer name' field is visible$/, () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.computerNameInputField)).to.eventually.be.true);

    this.Then(/^I see that label for 'Computer name' field is visible$/, () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.computerNameInputField)).to.eventually.be.true);

    this.Then(/^I see that 'Introduced date' field is visible$/, () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.introducedDateInputField)).to.eventually.be.true);

    this.Then(/^I see that label for 'Introduced date' field is visible$/, () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.introducedDateInputFieldLabel)).to.eventually.be.true);

    this.Then(/^I see that 'Discontinued date' field is visible$/, () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.discontinuedDateInputField)).to.eventually.be.true);

    this.Then(/^I see that label for 'Discontinued date' field is visible$/, () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.discontinuedDateInputFieldLabel)).to.eventually.be.true);

    this.Then(/^I see that 'Company' select\-box is visible$/, () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.companySelectBox)).to.eventually.be.true);

    this.Then(/^I see that label for 'Company' select\-box is visible$/, () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.companySelectBoxLabel)).to.eventually.be.true);

    this.Then(/^I see that 'Create this computer' button is visible$/, () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.createThisComputerButton)).to.eventually.be.true);

    this.Then(/^I see that 'Cancel' button is visible$/, () => expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.cancelButton)).to.eventually.be.true);

};
