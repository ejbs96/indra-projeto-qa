/// <reference types="Cypress" />

describe('OrangeHRM - Sistema Open Source de Gestão de RH', function() {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/requestPasswordResetCode')
    })
})