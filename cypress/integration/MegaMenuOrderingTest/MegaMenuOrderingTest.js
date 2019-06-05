import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given('I visit the Automation Practice Site', () => {
  cy.visit('http://automationpractice.com/')
})

 When('I hover over the Dresses Menu', () => {
   cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').focus();
})

Then('I should see Summer Dresses Menu', () => {
  cy.get('.sfHover > .submenu-container > :nth-child(2) > a').should('be.visible');
})

And('I click on the see Summer Dresses Menu', () => {
  cy.get('.sfHover > .submenu-container > :nth-child(3) > a').click();
})

And('I am be navigated to the Summer Dresses Page', () => {
  cy.url().should('eq','http://automationpractice.com/index.php?id_category=11&controller=category');
  cy.get('.category-name').should('be.visible');
})

And('I select Add to Cart to the Printed Chiffon Dress', () => {
  cy.get('.last-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
})

Then('I should be navigated to the Summer Dresses Page', () => {
  cy.url().should('eq','http://automationpractice.com/index.php?id_category=11&controller=category');
  cy.get('.category-name').should('be.visible');
})

Then('I should see that the Printed Chiffon Dress has been added to my shopping cart', () => {
   cy.get('.layer_cart_product > h2').should('be.visible');
   cy.get('#layer_cart_product_title').contains("Printed Chiffon Dress");
})

