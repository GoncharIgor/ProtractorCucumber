'use strict';

let addNewComputerSteps = require('./../pageobjects/index/indexPage.steps.js');

module.exports = function () {

    this.Then(/^I see that AddNewComputer page has title: "([^"]*)"$/, addNewComputerSteps.checkPageTitle);

    this.Then(/^I see that AddNewComputer page is opened$/, addNewComputerSteps.ckeckAddNewComputerPageWasOpened);

    this.Then(/^I see that App has header: "([^"]*)"$/, addNewComputerSteps.checkAppHeader);

    this.Then(/^I see that 'Computer name' field is visible$/, addNewComputerSteps.isComputerNameFieldVisible);

    this.Then(/^I see that label for 'Computer name' field is visible$/, addNewComputerSteps.isLabelForComputerNameFieldVisible);

    this.Then(/^I see that 'Introduced date' field is visible$/, addNewComputerSteps.isIntroducedDateFieldVisible);

    this.Then(/^I see that label for 'Introduced date' field is visible$/, addNewComputerSteps.isLabelForIntroducedDateFieldVisible);

    this.Then(/^I see that 'Discontinued date' field is visible$/, addNewComputerSteps.isDiscontinuedDateFieldVisible);

    this.Then(/^I see that label for 'Discontinued date' field is visible$/, addNewComputerSteps.isLabelForDiscontinuedDateFieldVisible);

    this.Then(/^I see that 'Company' select\-box is visible$/, addNewComputerSteps.isCompanySelectboxVisible);

    this.Then(/^I see that label for 'Company' select\-box is visible$/, addNewComputerSteps.isLabelForCompanySelectboxVisible);

    this.Then(/^I see that 'Create this computer' button is visible$/, addNewComputerSteps.isCreateThisComputerButtonVisible);

    this.Then(/^I see that 'Cancel' button is visible$/, addNewComputerSteps.isCancelButtonVisible);

    this.When(/^I add new computer with data: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, addNewComputerSteps.addNewComputer);

    this.When(/^Click 'Cancel' button$/, addNewComputerSteps.clickCanvelButton);

    this.When(/^I fill all fields on AddNewComputer page with data: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, addNewComputerSteps.fillAllFields);

    this.Then(/^I see that'Empty name' Error notification is shown$/, addNewComputerSteps.isEmptyNameErrorNotificationVisible);

};