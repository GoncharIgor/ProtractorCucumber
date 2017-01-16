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
        this.messageWarning = $('.alert-message.warning');
        this.computerNamesInTheTable = element.all(by.css('.computers.zebra-striped>tbody>tr>td>a'));
        this.computerIntroducedDateInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(2)');
        this.computerDiscontinuedDateInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(3)');
        this.computerCompanyNameInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(4)');
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

    findComputerInTheTable(computerName) {
        this.filterInputField.sendKeys(computerName);
        this.filterSubmitButton.click();
    };

    isComputerInfoEqualsExpected(computerName) {
        this.findComputerInTheTable(computerName);

        var computerInfo = [];
        this.computerNamesInTheTable.get(0).getText().then(function (text) {
            computerInfo.push(text);
            return text;
        });
        this.computerIntroducedDateInTheTable.getText().then(function (text) {
            computerInfo.push(text);
            return text;
        });
        this.computerDiscontinuedDateInTheTable.getText().then(function (text) {
            computerInfo.push(text);
            return text;
        });
        this.computerCompanyNameInTheTable.getText().then(function (text) {
            computerInfo.push(text);
            return text;
        });
    }

}

module.exports = IndexPage;
