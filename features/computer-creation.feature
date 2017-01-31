Feature: Computer Creating

  As an End-user
  I want to create a new entry in the computer list

  @regression
  Scenario: Check index page
    Given I navigate to index page
    Then I see that index page is opened
    And I see that index page has title: "Computers database"
    And I see that App has header: "Play sample application — Computer database"
    And I see that amount of computers is visible
    And I see that 'Filter' input is visible
    And I see that 'Filter' submit button is visible
    And I see that 'Add new computer' button is visible
    And I see that page has table with "4" columns
    And I see that 'Pagination' block is visible