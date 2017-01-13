var IndexPage = require('./../pageobjects/IndexPage');

describe('Computers Demo App', function () {
    let indexPageObject = new IndexPage();

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://computer-database.herokuapp.com/computers');
    });

    it('should have visible elements', function () {
        let a = indexPageObject.getAppNameHeader();
        console.log(a);
        // expect(browser.getTitle()).toEqual('Super Calculator');
    });

});