'use strict';

class BasePage {
    constructor() {
    }

    isElementVisible(element) {
        return element.isDisplayed();
    }
}

module.exports = BasePage;