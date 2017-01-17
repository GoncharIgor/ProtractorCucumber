Feature: Computer Creating

  As an End-user
  I want to create a new entry in the computer list

  Background:
    Given I navigate to index page

  Scenario: Check computer creating form
    When I click 'Add new Computer' button
    Then I see that Add new computer page is is opened
    And I see that 'Computer name' field is enabled
    And I see that 'Computer name' field is empty
    And I see that 'Introduced date' field is enabled
    And I see that 'Introduced date' field is empty