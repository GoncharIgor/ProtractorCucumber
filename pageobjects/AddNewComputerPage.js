'use strict';

let BasePage = require('./BasePage');

class AddNewComputerPage extends BasePage {
    constructor() {
        super();

        this.addComputerHeader = $('#main>h1');
        this.computerNameInputField = element(by.id('name'));
        this.computerNameInputFieldLabel = $("label[for='name']");
        this.introducedDateInputField = element(by.id('introduced'));
        this.introducedDateInputFieldLabel = $("label[for='introduced']");
        this.discontinuedDateInputField = element(by.id('discontinued'));
        this.discontinuedDateInputFieldLabel = $("label[for='discontinued']");
        this.companySelectBox = element(by.id('company'));
        this.companySelectBoxLabel =  $("label[for='company']");
        this.createThisComputerButton =  $('.btn.primary');
        this.cancelButton =  element(by.linkText('Cancel'));
    }

    getPageHeader() {
        return this.addComputerHeader.getText().then(function (text) {
                return text;
            }
        );
    }

}

module.exports = AddNewComputerPage;