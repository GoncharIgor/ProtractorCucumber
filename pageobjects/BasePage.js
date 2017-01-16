'use strict';

class BasePage {
    constructor() {
        this.sssss = 'ssss';
    }

    isElementVisible(element) {
        return element.isDisplayed();
    }
}

module.exports = BasePage;