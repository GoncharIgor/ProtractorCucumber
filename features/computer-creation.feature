Feature: Computer Creating

  As an End-user
  I want to create a new entry in the computer list

  @regression
  Scenario: Check computers are sorted correctly
    Given I navigate to AddNewComputer page
    When I add new computer with data
      | Computer Name | Introduced Date | Discontinued Date | Company |
      |       AA        | 2017-01-14      | 2017-01-15        | Sony    |
    And I find computer by name: "AA"

