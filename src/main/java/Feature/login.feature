Feature: Free CRM Login Feature

Scenario Outline: Free CRM Login Test Scenario

Given User is already on login page
When Title of the login page is Free CRM
Then User clicks on login 
Then User enters "<username>" and "<password>"
Then User clicks on login button
Then User is on home page
Then Close the browser

Examples:

   | username                | password |
   |krinz.pandya4@gmail.com	|Test@123|
