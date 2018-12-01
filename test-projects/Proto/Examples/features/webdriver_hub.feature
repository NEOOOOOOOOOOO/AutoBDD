Feature: Use browser inside steps

  As a developer
  I want to open browser and visit Selenium Standalone

  Scenario: Visit Webdriver Hub - check page element
    When  I visit "http://localhost:4444/wd/hub"
    Then  I should see the page title to contain "webdriver hub"
    When  I click the "Create Session" button on the page
    Then  I should see the "Create a New Session" modal-dialog
    And   the "Create a New Session" modal-dialoag should contain these select-option
    | browser_name      |
    | android           |  
    | chrome            |  
    | firefox           |  
    | internet explorer |  
    | iphone            |  
    | opera             |  

  Scenario: Visit Webdriver Hub - check page image
    When  I visit "http://localhost:4444/wd/hub"
    And   I should see the "Selenium_CreateSession_button" image on the page
    When  I click the "Selenium_CreateSession_button" image on the page
    Then  I should see the "Selenium_CreateNewSession_modal" image on the screen

  Scenario: File Open and Download - check PDF file
    When  I visit "http://www.orimi.com/pdf-test.pdf"
    And   I should see the "Yukon_Logo" image on the page
    When  I save the PDF file
    And   the downloaded file should contain "PDF Test File"

  Scenario: File Download - check XLS file
    When  I visit "http://go.microsoft.com/fwlink/?LinkID=521962"
    And   the downloaded file should contain the following fields
    | Segment :: Country :: Product :: Discount Band :: Units Sold :: Manufacturing Price :: Sale Price :: Gross Sales :: Discounts :: Sales :: COGS :: Profit :: Date :: Month Number :: Month Name :: Year |
    And   the downloaded file should contain "700" rows
