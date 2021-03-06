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
        this.paginationNextButton = element(by.xpath('//a[contains(text(), "Next")]'));
        this.paginationPreviousButton = element(by.xpath('//a[contains(text(), "Previous")]'));
        this.paginationPreviousButtonWrapper = $('ul>li:nth-child(1)');
        this.currentPaginationInfo = $('.current a');
        this.tableHeaderColumns = element.all(by.tagName('th'));
        this.paginationBlok = element(by.id('pagination'));
        this.messageWarning = $('.alert-message.warning');
        this.computerNameInTheTable = $('tbody>tr>td>a');
        this.computerIntroducedDateInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(2)');
        this.computerDiscontinuedDateInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(3)');
        this.computerCompanyNameInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(4)');
        this.allComputerNamesInTheTable = $$('tbody>tr>td>a');
    }

    getTableColumnsAmount() {
        return this.tableHeaderColumns.count().then(function (count) {
            return count;
        });
    }

    getPaginationBlockText(){
        return this.currentPaginationInfo.getText().then(function (text) {
            return text;
        })
    }

     getTotalAmountOfComputersInPagination(){
        return this.currentPaginationInfo.getText().then(function (text) {
            return StringUtils.splitStringIntoArrayByAndGetIndex(text, ' ', 'last');
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
    }

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

    checkPositionOfComputerInTheTable(name, position) {
        let elem;

        if(position === 1){
            elem = this.allComputerNamesInTheTable.first();
        } else {
            elem =  this.allComputerNamesInTheTable.get(position -1)
        }

        return elem.getText().then(function (text) {
            return text === name;
        });
    }

}

module.exports = IndexPage;
