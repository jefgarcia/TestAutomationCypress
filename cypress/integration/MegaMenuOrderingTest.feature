Feature: MegaMenuOrderingTest
   Megamenu and Ordering Test

   Scenario: :Test Megamenu is Visible for (Dresses -> Summer dresses)
      Given I visit the Automation Practice Site
      When I hover over the Dresses Menu
      Then I should see Summer Dresses Menu

   Scenario: :Test Megamenu Navigates to the Summer Dresses Page and Orders a Dress
      Given I visit the Automation Practice Site
      When I hover over the Dresses Menu
      And I click on the see Summer Dresses Menu
      And I am be navigated to the Summer Dresses Page
      And I select Add to Cart to the Printed Chiffon Dress
      Then I should see that the Printed Chiffon Dress has been added to my shopping cart



