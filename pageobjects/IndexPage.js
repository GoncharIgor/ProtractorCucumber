'use strict';

let BasePage = require('./BasePage');

class IndexPage {
    constructor() {
       // super(rootElement);

        this.appNameHeader = $('.fill>a');
        this.computersAmountHeader = $('#main>h1');
        this.filterInputField = element(by.id('searchbox'));
        this.filterSubmitButton = element(by.id('searchsubmit'));
        this.addNewComputerButton = element(by.id('add'));
        this.tableHeaderColumns = element.all(by.tagName('th'));
        this.paginationBlok = element(by.id('pagination'));
    }

    getAppNameHeader() {
        return this.appNameHeader.getText().then(function (text) {
                return text;
            }
        );
    }

    getComputersCount() {
        let computersAmHeader = computersAmountHeader.getText();
        computersAmHeader.replace(/[^\/\d]/g, '');
        return computersAmHeader;
    }


}

module.exports = IndexPage;
