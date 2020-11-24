$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_Workspace/FreeCrmBDDFramework/src/main/java/Feature/homePage.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Creating New Contact",
  "description": "",
  "id": "free-crm-creating-new-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "New Contact Test Scenario",
  "description": "",
  "id": "free-crm-creating-new-contact;new-contact-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Clicks on New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters contactInfo \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Save",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "free-crm-creating-new-contact;new-contact-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 18,
      "id": "free-crm-creating-new-contact;new-contact-test-scenario;;1"
    },
    {
      "cells": [
        "krinz.pandya4@gmail.com",
        "Test@123",
        "Test1",
        "A"
      ],
      "line": 19,
      "id": "free-crm-creating-new-contact;new-contact-test-scenario;;2"
    },
    {
      "cells": [
        "krinz.pandya4@gmail.com",
        "Test@123",
        "Test2",
        "B"
      ],
      "line": 20,
      "id": "free-crm-creating-new-contact;new-contact-test-scenario;;3"
    },
    {
      "cells": [
        "krinz.pandya4@gmail.com",
        "Test@123",
        "Test3",
        "C"
      ],
      "line": 21,
      "id": "free-crm-creating-new-contact;new-contact-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "New Contact Test Scenario",
  "description": "",
  "id": "free-crm-creating-new-contact;new-contact-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters \"krinz.pandya4@gmail.com\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Clicks on New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters contactInfo \"Test1\" and \"A\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Save",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.User_already_on_LoginPage()"
});
formatter.result({
  "duration": 6418322400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 5095400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login()"
});
formatter.result({
  "duration": 1361554900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krinz.pandya4@gmail.com",
      "offset": 13
    },
    {
      "val": "Test@123",
      "offset": 43
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 115745700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_page()"
});
formatter.result({
  "duration": 236758500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 2004711800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 256654100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Clicks_on_New_Button()"
});
formatter.result({
  "duration": 235834800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1",
      "offset": 25
    },
    {
      "val": "A",
      "offset": 37
    }
  ],
  "location": "LoginStepDefination.user_enters_contactInfo(String,String)"
});
formatter.result({
  "duration": 605340300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Save()"
});
formatter.result({
  "duration": 409211300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.Close_the_browser()"
});
formatter.result({
  "duration": 722142500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "New Contact Test Scenario",
  "description": "",
  "id": "free-crm-creating-new-contact;new-contact-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters \"krinz.pandya4@gmail.com\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Clicks on New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters contactInfo \"Test2\" and \"B\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Save",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.User_already_on_LoginPage()"
});
formatter.result({
  "duration": 5447772900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 3416000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login()"
});
formatter.result({
  "duration": 1332924100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krinz.pandya4@gmail.com",
      "offset": 13
    },
    {
      "val": "Test@123",
      "offset": 43
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 123056900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_page()"
});
formatter.result({
  "duration": 227482400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 2003878200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 256127100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Clicks_on_New_Button()"
});
formatter.result({
  "duration": 235336000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test2",
      "offset": 25
    },
    {
      "val": "B",
      "offset": 37
    }
  ],
  "location": "LoginStepDefination.user_enters_contactInfo(String,String)"
});
formatter.result({
  "duration": 551589300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Save()"
});
formatter.result({
  "duration": 424622100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.Close_the_browser()"
});
formatter.result({
  "duration": 738460200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "New Contact Test Scenario",
  "description": "",
  "id": "free-crm-creating-new-contact;new-contact-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters \"krinz.pandya4@gmail.com\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Clicks on New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters contactInfo \"Test3\" and \"C\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User clicks on Save",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.User_already_on_LoginPage()"
});
formatter.result({
  "duration": 5094654700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 8205900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login()"
});
formatter.result({
  "duration": 1178022700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "krinz.pandya4@gmail.com",
      "offset": 13
    },
    {
      "val": "Test@123",
      "offset": 43
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 105917400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_page()"
});
formatter.result({
  "duration": 237298000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 2002664100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 257329400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Clicks_on_New_Button()"
});
formatter.result({
  "duration": 232422300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test3",
      "offset": 25
    },
    {
      "val": "C",
      "offset": 37
    }
  ],
  "location": "LoginStepDefination.user_enters_contactInfo(String,String)"
});
formatter.result({
  "duration": 609832600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Save()"
});
formatter.result({
  "duration": 407244400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.Close_the_browser()"
});
formatter.result({
  "duration": 826288400,
  "status": "passed"
});
});