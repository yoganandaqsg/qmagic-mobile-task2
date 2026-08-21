@mobile @text
Feature: Text LogTextBox

  @smoke @QA-001
  Scenario: Adding a log line displays the test message
    Given the user navigates to the "LogTextBox" screen from the "Text" menu
    When the user clicks on the "ADD" button
    Then the "this is a test" message is displayed
