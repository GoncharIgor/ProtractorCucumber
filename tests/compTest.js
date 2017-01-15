var IndexPage = require('./../pageobjects/IndexPage');

describe('Computers Demo App', function () {
    let indexPageObject = new IndexPage();

    beforeEach(function () {
        // var driver = ptor.driver;
        browser.ignoreSynchronization = true;
        browser.get('http://computer-database.herokuapp.com/computers');
    });

    it('should have visible elements', function () {
        var a = indexPageObject.getAppNameHeader().then(function (pageHeader) {
            expect(pageHeader).toEqual("Play sample application — Computer database");
        });
        expect(indexPageObject.appNameHeader.isDisplayed()).toBe(true);
    });

});