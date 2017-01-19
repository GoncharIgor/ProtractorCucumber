Feature: Computer Creating

  As an End-user
  I want to create a new entry in the computer list

  @NeedsEdit
  @regression
  Scenario: Computers total amount should be decreased by 1 after deleting the computer
    Given I navigate to index page
    And I get current amount of computers in the table
    When I find computer by name: "RandomName"
    And I navigate to edit computer page
    And I delete computer with name: "RandomName"
    Then I see that amount of computers was "decreased" by 1
