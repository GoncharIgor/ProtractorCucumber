'use strict';

let indexPageSteps = require('./../pageobjects/index/indexPage.steps.js');

module.exports = function () {
    this.Then(/^I see that index page has title: "([^"]*)"$/, indexPageSteps.checkPageTitle);

    this.When(/^I click 'Add new Computer' button$/, indexPageSteps.clickAddNewComputerButton);

    this.Then(/^I see that index page is opened$/, indexPageSteps.checkIndexPageWasOpened);

    this.Then(/^I see that amount of computers is visible$/, indexPageSteps.isAmountOfComputersVisible);

    this.Then(/^I see that 'Filter' input is visible$/, indexPageSteps.isFilterInputVisible);

    this.Then(/^I see that 'Filter' submit button is visible$/, indexPageSteps.isFilterSubmitButtonVisible);

    this.Then(/^I see that 'Add new computer' button is visible$/, indexPageSteps.isAddNewComputerButtonVisible);

    this.Then(/^I see that page has table with "([^"]*)" columns$/, indexPageSteps.checkAmountOFColumnsInTheTable);

    this.Then(/^I see that 'Pagination' block is visible$/, indexPageSteps.isPaginationBlockVisible);

    this.When(/^I find computer by name: "([^"]*)"$/, indexPageSteps.findComputer);

    this.Then(/^I see that its data corresponds to: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, indexPageSteps.checkDataInTheTable);

    this.Then(/^I delete computer with name: "([^"]*)"$/, indexPageSteps.deleteComputer);

    this.Given(/^I get current amount of computers in the table$/, indexPageSteps.checkAmountOfComputersInTheTable);

    this.Then(/^I see that amount of computers was "([^"]*)" by (\d+)$/, indexPageSteps.checkChangeOfAmountOfComputersInTheTable);

    this.Then(/^I see that amount of computers was not changed$/, indexPageSteps.checkAmountOfComputersInTheTableWasNotChanged);

    this.Then(/^I see that Message warning is displayed$/, indexPageSteps.isMessageWarningWasDisplayed);

    this.Then(/^I see that Message warning is not displayed$/, indexPageSteps.isMessageWarningWasNotDisplayed);

    this.Then(/^I click ot the selected computer name$/, indexPageSteps.selectComputer);

    this.When(/^I click 'Next' button$/, indexPageSteps.clickNextButton);

    this.When(/^I click 'Previous' button$/, indexPageSteps.clickPreviousButton);

    this.Then(/^Computers are displayed from "([^"]*)" to "([^"]*)"$/, indexPageSteps.isPaginationWorksCorrectly);

    this.Then(/^Previous button is disabled$/, indexPageSteps.isPreviousButtonDisabled);
};