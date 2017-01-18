'use strict';

class BasePage {
    constructor() {
        this.appNameHeader = $('.fill>a');
        this.addComputerHeader = $('#main>h1');
    }

    isElementVisible(element) {
        return element.isDisplayed();
    }

    isElementExist(element) {
        return element.isPresent();
    }

    clickButton(buttonName) {
        buttonName.click();
    }

    getPageHeader() {
        return this.addComputerHeader.getText().then(function (text) {
                return text;
            }
        );
    }

    getAppHeader() {
        return this.appNameHeader.getText().then(function (text) {
                return text;
            }
        );
    }
}

module.exports = BasePage;