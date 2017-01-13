//browser.ignoreSynchronization = true;


// Test for Non-Angular apps
describe('Google test', function () {
    it('should search by word', function () {
        browser.driver.get('https://www.google.com.ua/');
        browser.driver.findElement(by.id('lst-ib')).sendKeys('selenium');
        browser.driver.findElement(by.id('lst-ib')).sendKeys(protractor.Key.ENTER);
        browser.driver.sleep(1000);
        //browser.driver.findElement(by.name('btnK')).click();
        //expect(browser.getTitle()).toEqual('selenium - Поиск в Google');
    });
});
