/// <reference types="Cypress" />

describe('OrangeHRM - Sistema Open Source de Gestão de RH', function() {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    
    it('Valida se todos os menus foram carregado ao fazer login com sucesso', function() {
        cy.validaUsuarioPadrao()
        cy.validaMenus()
    })

    it('Valida se o marketplace está diponível ao fazer login com sucesso', function() {
        cy.validaUsuarioPadrao()
        cy.validaMarketplace()
    })
})