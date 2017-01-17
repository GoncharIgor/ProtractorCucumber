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
}

module.exports = BasePage;