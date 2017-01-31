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
  Scenario: Pagination should be increased after clicking next button
    Given I navigate to index page
    When I click 'Next' button
    Then Computers are displayed from "11" to "20"
    When I click 'Next' button
    Then Computers are displayed from "21" to "30"
    When I click 'Previous' button
    Then Computers are displayed from "11" to "20"
    When I click 'Previous' button
    Then Computers are displayed from "1" to "10"
    And Previous button is disabled


  @regression
  Scenario: Computer should be added after filling all the inputs
    Given I navigate to index page
    And I click 'Add new Computer' button
    When I add new computer with data
      | Computer Name | Introduced Date | Discontinued Date | Company |
      | RandomName    | 2017-01-14      | 2017-01-15        | Sony    |
    Then I see that Message warning is displayed
    When I find computer by name: "RandomName"
    Then I see that its data corresponds to: "RandomName", "14 Jan 2017", "15 Jan 2017", "Sony"
    And I delete computer with name: "RandomName"

  @regression
  Scenario: Computer should not be added if all fields are entered but Cancel button is clicked
    Given I navigate to AddNewComputer page
    When I fill all fields on AddNewComputer page with data
      | Computer Name | Introduced Date | Discontinued Date | Company |
      | RandomName    | 2017-01-14      | 2017-01-15        | Sony    |
    And Click 'Cancel' button
    Then I see that index page is opened
    And I see that Message warning is not displayed


  @regression
  Scenario: Computer should not be added if Computer name field is empty
    Given I navigate to AddNewComputer page
    When I add new computer with data
      | Computer Name | Introduced Date | Discontinued Date | Company |
      |               | 2017-01-14      | 2017-01-15        | Sony    |
    Then I see that AddNewComputer page is opened
    And I see that'Empty name' Error notification is shown


  @regression @amount
  Scenario: Computers total amount should be increased by 1 after adding new computer
    Given I navigate to index page
    And I get current amount of computers in the table
    And I click 'Add new Computer' button
    When I add new computer with data
      | Computer Name | Introduced Date | Discontinued Date | Company |
      | RandomName    | 2017-01-14      | 2017-01-15        | Sony    |
    Then I see that amount of computers was "increased" by 1

  @regression @amount
  Scenario: Computers total amount should be decreased by 1 after deleting the computer
    Given I navigate to index page
    And I get current amount of computers in the table
    When I delete computer with name: "RandomName"
    Then I see that amount of computers was "decreased" by 1


  @regression @amount
  Scenario: Computers total amount should not be changed if computer adding is canceled
    Given I navigate to index page
    And I get current amount of computers in the table
    When I click 'Add new Computer' button
    And Click 'Cancel' button
    And I get current amount of computers in the table
    Then I see that amount of computers was not changed


  @regression
  Scenario: Check computers are sorted correctly
    Given I navigate to AddNewComputer page
    When I add new computer with data
      | Computer Name | Introduced Date | Discontinued Date | Company |
      |       AA        | 2017-01-14      | 2017-01-15        | Sony    |
    And I find computer by name: "AA"