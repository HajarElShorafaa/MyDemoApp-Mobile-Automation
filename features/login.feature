Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given the user launches the app
    When the user enters credentials for "STANDARD" user
    And the user clicks the login button
    Then the user should see the dashboard

  Scenario Outline: Unsuccessful login with invalid credentials
    Given the user launches the app
    When the user enters credentials for "<credentials>" user
    And the user clicks the login button
    Then error should be displayed based on "<credentials>"

    Examples:
      | credentials      | 
      | LOCKED           | 
      | NO_MATCH         | 
      | NO_USER_DETAILS  | 
      | NO_PASSWORD      | 
