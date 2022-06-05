/// <reference types="Cypress" />

describe('3 - OrangeHRM - Teste em interface de usário [login:yes]', function() {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    
    it('3.1 - Valida se todos os menus foram carregados ao fazer login com sucesso', function() {
        cy.validaUsuarioPadrao()
        cy.validaMenus()
    })

    it('3.2 - Valida se o marketplace está diponível ao fazer login com sucesso', function() {
        cy.validaUsuarioPadrao()
        cy.validaMarketplace()
    })
})
