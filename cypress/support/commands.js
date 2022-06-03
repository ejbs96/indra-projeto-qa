Cypress.Commands.add('testeLoginIncorreto', function() {
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin1!23')
    cy.get('.button[type="submit"]').click()
    cy.get('#spanMessage').should('have.text', 'Invalid credentials')
})

Cypress.Commands.add('testeLoginVazio', function() {
    cy.get('#txtUsername').type('{enter}')
    cy.get('#txtPassword').type('{enter}')
    cy.get('.button[type="submit"]').click()
    cy.get('#spanMessage').should('have.text', 'Username cannot be empty')
})

Cypress.Commands.add('validaUsuarioPadrao', function() {
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('.button[type="submit"]').click()
})