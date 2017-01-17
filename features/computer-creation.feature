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

  @regression
  Scenario: Check computer creating form
    Given I navigate to index page
    When I click 'Add new Computer' button
    Then I see that AddNewComputer page is opened
    And I see that AddNewComputer page has title: "Computers database"
    And I see that App has header: "Play sample application — Computer database"
    And I see that 'Computer name' field is visible
    And I see that label for 'Computer name' field is visible
    And I see that 'Introduced date' field is visible
    And I see that label for 'Introduced date' field is visible
    And I see that 'Discontinued date' field is visible
    And I see that label for 'Discontinued date' field is visible
    And I see that 'Company' select-box is visible
    And I see that label for 'Company' select-box is visible
    And I see that 'Create this computer' button is visible
    And I see that 'Cancel' button is visible

  @regression
  Scenario: Check computer adding functionality
    Given I navigate to index page
    And I click 'Add new Computer' button
    When I add new computer
    Then I see new computer is added to the table on the index page