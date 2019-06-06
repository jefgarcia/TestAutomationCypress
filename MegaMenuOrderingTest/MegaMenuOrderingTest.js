import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import { MegaMenu, megamenu } from "../Pages/MegaMenu";
import { dressespage } from "../Pages/Dresses";

Given('I visit the Automation Practice Site', () => {
  cy.visit('http://automationpractice.com/')
})

 When('I hover over the Dresses Menu', () => {
   megamenu.hoverDresses();
})

Then('I should see Summer Dresses Menu', () => {
  megamenu.hoverSummerDresses();
})

And('I click on the see Summer Dresses Menu', () => {
  megamenu.clickSummerDresses();
})

And('I am be navigated to the Summer Dresses Page', () => {
  dressespage.landDressespage();
})

And('I select Add to Cart to the Printed Chiffon Dress', () => {
  dressespage.addtocartChiffonDresses();
})

Then('I should be navigated to the Summer Dresses Page', () => {
  dressespage.landDressespage();
})

Then('I should see that the Printed Chiffon Dress has been added to my shopping cart', () => {
  dressespage.verifycartChiffonDresses();
})

