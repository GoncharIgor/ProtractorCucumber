Feature: Computer Creating

  As an End-user
  I want to create a new entry in the computer list

  Scenario: Check computer creating form
    Given I navigate to index page
    When I click 'Add new Computer' button
    Then I see that AddNewComputer page is is opened
