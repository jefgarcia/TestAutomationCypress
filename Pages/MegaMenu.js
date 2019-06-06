/// <reference types="Cypress" />

export class MegaMenu {

    hoverDresses(){
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').focus(); 
    }
    hoverSummerDresses(){
        cy.get('.sfHover > .submenu-container > :nth-child(2) > a').should('be.visible');
    }
    clickSummerDresses(){
        cy.get('.sfHover > .submenu-container > :nth-child(3) > a').click();
    }
}

export const megamenu = new MegaMenu();