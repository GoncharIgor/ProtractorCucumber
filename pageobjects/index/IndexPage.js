'use strict';

let BasePage = require('./../BasePage');
let StringUtils = require('./../../utils/StringUtils');

class IndexPage extends BasePage {
    constructor() {
        super();
        this.computersAmountHeader = $('#main>h1');
        this.filterInputField = element(by.id('searchbox'));
        this.filterSubmitButton = element(by.id('searchsubmit'));
        this.addNewComputerButton = element(by.id('add'));
        this.tableHeaderColumns = element.all(by.tagName('th'));
        this.paginationBlok = element(by.id('pagination'));
        this.messageWarning = $('.alert-message.warning');
        this.computerNameInTheTable = $('tbody>tr>td>a');
        this.computerIntroducedDateInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(2)');
        this.computerDiscontinuedDateInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(3)');
        this.computerCompanyNameInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(4)');
    }

    getTableColumnsAmount() {
        return this.tableHeaderColumns.count().then(function (count) {
            return count;
        });
    }

    navigateToEditComputerPage() {
        this.computerNameInTheTable.click();
    }

    getComputersCount() {
        return this.computersAmountHeader.getText().then(function (text) {
            text = text.replace(/[^\/\d]/g, '');
            return text;
        });
    }

    findComputerInTheTable(computerName) {
        this.filterInputField.clear();
        this.filterInputField.sendKeys(computerName);
        this.filterSubmitButton.click();
        return this;
    };

    isComputerInfoInTheTableEqualsExpected(name, introducedDate, discontinuedDate, company) {

        let expectedComputerInfo = [name, introducedDate, discontinuedDate, company];
        let actualComputerInfo = [];

        return protractor.promise.all([
            this.computerNameInTheTable.getText().then((text) => actualComputerInfo.push(text)),
            this.computerIntroducedDateInTheTable.getText().then((text) => actualComputerInfo.push(text)),
            this.computerDiscontinuedDateInTheTable.getText().then((text) => actualComputerInfo.push(text)),
            this.computerCompanyNameInTheTable.getText().then((text) => actualComputerInfo.push(text))
        ]).then(() => {
            return StringUtils.arraysEqual(expectedComputerInfo, actualComputerInfo)
        });

        /*return protractor.promise.consume(function* () {
         let actualComputerInfo = [];
         actualComputerInfo.push(yield this.computerNameInTheTable.getText());
         actualComputerInfo.push(yield this.computerIntroducedDateInTheTable.getText());
         actualComputerInfo.push(yield this.computerDiscontinuedDateInTheTable.getText());
         actualComputerInfo.push(yield this.computerCompanyNameInTheTable.getText());
         return actualComputerInfo;
         },this)*/
    }

}

module.exports = IndexPage;
