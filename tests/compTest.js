var IndexPage = require('./../pageobjects/IndexPage');
var AddNewComputerPage = require('./../pageobjects/AddNewComputerPage');

describe('Computer-database mainPage layout verification', function () {
    let indexPageObject = new IndexPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://computer-database.herokuapp.com/computers');
    });

    it('Page should have a title', function () {
        expect(browser.getTitle()).toEqual('Computers database');
    });

    it('App should have expected header', function () {
        indexPageObject.getAppNameHeader().then(function (pageHeader) {
            expect(pageHeader).toEqual("Play sample application — Computer database");
        });
    });

    it('App should have visible amount of computers on the page header', function () {
        expect(indexPageObject.computersAmountHeader.isDisplayed()).toBe(true);
    });

    it('App should have visible filter input field', function () {
        expect(indexPageObject.filterInputField.isDisplayed()).toBe(true);
    });

    it('App should have visible filter submit button', function () {
        expect(indexPageObject.filterSubmitButton.isDisplayed()).toBe(true);
    });

    it('App should have visible \'Add new computer\' button', function () {
        expect(indexPageObject.addNewComputerButton.isDisplayed()).toBe(true);
    });

    it('App should have visible pagination block', function () {
        expect(indexPageObject.paginationBlok.isDisplayed()).toBe(true);
    });
    it('App should have table with 4 columns', function () {
        indexPageObject.getTableColumnsAmount().then(function (tableColumnsAmount) {
            expect(tableColumnsAmount).toEqual(5);
        });
    });

});


/*
 describe('Computers Demo App', function () {
 let indexPageObject = new IndexPage();
 let addNewComputerPageObject = new AddNewComputerPage();

 beforeEach(function () {
 browser.ignoreSynchronization = true;
 browser.get('http://computer-database.herokuapp.com/computers');
 });

 });
 */
