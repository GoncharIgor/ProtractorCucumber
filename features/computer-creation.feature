Feature: Computer Creating

  As an End-user
  I want to create a new entry in the computer list

  Background:
    Given I navigate to index page

  Scenario: Check computer creating form
    When I click addNewComputerButton button
    Then I see that AddNewComputer page is is opened
