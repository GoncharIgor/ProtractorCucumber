'use strict';

class BasePage {
    constructor() {
    }

    isElementVisible(element) {
        return element.isDisplayed();
    }

    clickButton(buttonName){
        buttonName.click();
    }

    getPageHeader(pageHeaderElement) {
        return pageHeaderElement.getText().then(function (text) {
                return text;
            }
        );
    }
}

module.exports = BasePage;