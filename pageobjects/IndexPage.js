'use strict';

let BasePage = require('./BasePage');

class IndexPage extends BasePage {
    constructor() {
        super();

        this.appNameHeader = $('.fill>a');
        this.computersAmountHeader = $('#main>h1');
        this.filterInputField = element(by.id('searchbox'));
        this.filterSubmitButton = element(by.id('searchsubmit'));
        this.addNewComputerButton = element(by.id('add'));
        this.tableHeaderColumns = element.all(by.tagName('th'));
        this.paginationBlok = element(by.id('pagination'));
    }

    getPageHeader() {
        return this.appNameHeader.getText().then(function (text) {
                return text;
            }
        );
    }

    getTableColumnsAmount() {
        return this.tableHeaderColumns.count().then(function (count) {
            return count;
        });

    }

    clickAddNewComputerButton() {
        this.addNewComputerButton.click();
    }




    getComputersCount() {
        let computersAmHeader = computersAmountHeader.getText();
        computersAmHeader.replace(/[^\/\d]/g, '');
        return computersAmHeader;
    }

    isHeaderVisible() {
        return super.isElementVisible(this.appNameHeader);
    }

    //Overrides
    isElementVisible(element) {
        super.isElementVisible(element);
    }

}

module.exports = IndexPage;
