@mobile @text
Feature: Text LogTextBox

  @smoke @QA-001
  Scenario: Adding a log line displays the test message
    Given the user navigates to the "LogTextBox" screen from the "Text" menu
    When the user clicks on the "ADD" button
    Then the "this is a test" message is displayed

  @regression @QA-001-COVERAGE
  Scenario: Log message is empty before adding any log line
    Given the user navigates to the "LogTextBox" screen from the "Text" menu
    Then no log message is displayed
