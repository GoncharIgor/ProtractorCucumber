'use strict';

let BasePage = require('./BasePage');

class EditComputerPage extends BasePage {
    constructor() {
        super();
        this.deleteThisComputerButton = $('.btn.danger');
    }

    deleteComputer(){
        this.deleteComputer().click();
    }

}

module.exports = EditComputerPage;
