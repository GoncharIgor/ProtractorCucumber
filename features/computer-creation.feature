Feature: Computer Creating

  As an End-user
  I want to create a new entry in the computer list

  Background:
    Given I navigate to AddNewComputer page

  Scenario: Check computer creating form
    When I click addNewComputerButton button
    Then I see that AddNewComputer page is is opened
    And I see that this AddNewComputer has header ""
    And I see that 'Computer name' field is enabled
    And I see that 'Computer name' field is empty
    And I see that 'Introduced date' field is enabled