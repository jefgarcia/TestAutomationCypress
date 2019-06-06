/// <reference types="Cypress" />

export class Dresses {

    landDressespage(){
        cy.url().should('eq','http://automationpractice.com/index.php?id_category=11&controller=category');
        cy.get('.category-name').should('be.visible');
        
    }

    addtocartChiffonDresses(){
        cy.get('.last-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
    }

    verifycartChiffonDresses(){
        cy.get('.layer_cart_product > h2').should('be.visible');
        cy.get('#layer_cart_product_title').contains("Printed Chiffon Dress");
    }

}

export const dressespage = new Dresses();