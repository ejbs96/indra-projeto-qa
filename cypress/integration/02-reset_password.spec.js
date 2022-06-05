/// <reference types="Cypress" />

describe('2 - OrangeHRM - Teste de reset de senha', function() {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/requestPasswordResetCode')
    })

    it('2.1 - Valida mensagem ao resetar senha | usuário padrão', function() {
        cy.validaResetSenhaUsuarioPadrao()
    })

    it('2.2 - Valida mensagem ao resetar senha | usuário não existente', function() {
        cy.validaResetSenhaUsuarioNaoPadrao()
    })
})