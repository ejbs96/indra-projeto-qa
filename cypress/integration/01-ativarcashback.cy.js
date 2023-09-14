/// <reference types="Cypress" />

describe('1 - Ativar Cashback | Teste de Extensão', function() {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('1.1 - Carregamento da extensão Chrome', function() {
        cy.validaTitulo()
    })

    it('1.2 - Scenario 1: Ativar cashback na tela do seller', function() {
        cy.validaTitulo()
    })

    it('1.3 - Scenario 2: Ativar cashback em uma tela comum', function() {
        cy.validaTitulo()
    })
    
    it('1.4 - Scenario 3: Validar se o cashback continua ativo', function() {
        cy.validaTitulo()
    })
})