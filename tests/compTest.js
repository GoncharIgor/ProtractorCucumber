var IndexPage = require('./../pageobjects/IndexPage');
var AddNewComputerPage = require('./../pageobjects/AddNewComputerPage');
var StringUtils = require('./../utils/StringUtils');

/*describe('Computer-database mainPage layout verification', function () {
    let indexPageObject = new IndexPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://computer-database.herokuapp.com/computers');
    });

    it('Page should have a title', function () {
        expect(browser.getTitle()).toEqual('Computers database');
    });

    it('App should have expected header', function () {
        indexPageObject.getPageHeader().then(function (pageHeader) {
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
            expect(tableColumnsAmount).toEqual(4);
        });
    });

});


describe('Add new computer page layout verification', function () {
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://computer-database.herokuapp.com/computers');
        indexPageObject.clickAddNewComputerButton();
    });

    it('Add new computer page should have a title', function () {
        expect(browser.getTitle()).toEqual('Computers database');
    });

    it('Add new computer page should have expected header', function () {
        addNewComputerPageObject.getPageHeader().then(function (pageHeader) {
            expect(pageHeader).toEqual('Add a computer');
        });
    });

    it('Add new computer page should have visible computer name input', function () {
        expect(addNewComputerPageObject.computerNameInputField.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible label for computer name input', function () {
        expect(addNewComputerPageObject.computerNameInputFieldLabel.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible Introduced date input', function () {
        expect(addNewComputerPageObject.introducedDateInputField.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible label for Introduced date input', function () {
        expect(addNewComputerPageObject.introducedDateInputFieldLabel.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible Discontinued date input', function () {
        expect(addNewComputerPageObject.discontinuedDateInputField.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible label for Discontinued date input', function () {
        expect(addNewComputerPageObject.discontinuedDateInputFieldLabel.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible Select company selectbox', function () {
        expect(addNewComputerPageObject.companySelectBox.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible label for Select company selectbox', function () {
        expect(addNewComputerPageObject.companySelectBoxLabel.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible Create this computer button', function () {
        expect(addNewComputerPageObject.createThisComputerButton.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible Cancel button', function () {
        expect(addNewComputerPageObject.cancelButton.isDisplayed()).toBe(true);
    });

});*/


describe('Add new computer functionality works correctly', function () {
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://computer-database.herokuapp.com/computers');
        indexPageObject.clickAddNewComputerButton();
    });

    it('Computer should be added after filling all the inputs', function () {
        let name = StringUtils.generateRandomString(10);
        addNewComputerPageObject.addComputer(name, '2017-01-14', '2017-01-15', 'Sony');
    });
});
