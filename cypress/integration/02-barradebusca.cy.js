/// <reference types="Cypress" />

describe('2 - Barra de Busca | Teste de Extensão', function() {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('2.1 - Scenario 1: Realizar uma pesquisa com sucesso', function() {
        cy.validaTitulo()
    })

    it('2.2 -  Scenario 2: Realizar uma pesquisa sem resultado', function() {
        cy.validaTitulo()
    })
})