Feature: Free CRM Creating New Contact

Scenario Outline: New Contact Test Scenario

Given User is already on login page
When Title of the login page is Free CRM
Then User clicks on login 
Then User enters "<username>" and "<password>"
Then User clicks on login button
Then User is on home page
Then User moves to new contacts page
Then User Clicks on New Button
Then User enters contactInfo "<firstname>" and "<lastname>"
Then User clicks on Save
Then Close the browser

Examples:
	|username				|password|firstname|lastname|
	|krinz.pandya4@gmail.com|Test@123|Test1		|A|
	|krinz.pandya4@gmail.com|Test@123|Test2		|B|
	|krinz.pandya4@gmail.com|Test@123|Test3		|C|