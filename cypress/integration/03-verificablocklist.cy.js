/// <reference types="Cypress" />

describe('3 - Verificar funcionamento da blocklist | Teste de Extensão', function() {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
    
    it('3.1 - Scenario 1: Blocklist com cashback ativo em um seller', function() {
        cy.validaTitulo()
    })

    it('3.2 - Scenario 2: Blocklist com cashback ativo em mais de um seller', function() {
        cy.validaTitulo()
    })

    it('3.3 - Scenario 3: Blocklist após fechar todas as abas do seller', function() {
        cy.validaTitulo()
    })
})
