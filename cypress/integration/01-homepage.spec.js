/// <reference types="Cypress" />

describe('1 - OrangeHRM - Teste da homepage', function() {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('1.1 - Verifica o título da aplicação', function() {
        cy.validaTitulo()
    })

    it('1.2 - Verifica mensagem de erro em caso login incorreto', function() {
        cy.testeLoginIncorreto()
    })

    it('1.3 - Verifica mensagem de erro em caso de campos de login vazios', function() {
        cy.testeLoginVazio()
    })
    
    it('1.4 - Validar usuário e senha padrão', function() {
        cy.validaUsuarioPadrao()
    })
})