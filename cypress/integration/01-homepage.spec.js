/// <reference types="Cypress" />

describe('OrangeHRM - Sistema Open Source de Gestão de RH', function() {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })

    it('Verifica o título da aplicação', function() {
        cy.validaTitulo()
    })

    it('Verifica mensagem de erro em caso login incorreto', function() {
        cy.testeLoginIncorreto()
    })

    it('Verifica mensagem de erro em caso de campos de login vazios', function() {
        cy.testeLoginVazio()
    })
    
    it('Validar usuário e senha padrão', function() {
        cy.validaUsuarioPadrao()
    })
})