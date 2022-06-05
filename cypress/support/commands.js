Cypress.Commands.add('validaTitulo', function(){
    cy.title().should('be.equal', 'OrangeHRM')
})

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
    cy.get('#welcome').should('be.visible')
})

Cypress.Commands.add('validaResetSenhaUsuarioPadrao', function() {
    cy.get('#securityAuthentication_userName').type('Admin')
    cy.get('#btnSearchValues').should('be.visible').click()
    cy.get('.message').should('be.visible', {delay: 1000}) || cy.get('#divContent').should('have.text', 'Instructions for resetting your password have been sent to paul1@osohrm.com')
})

Cypress.Commands.add('validaResetSenhaUsuarioNaoPadrao', function() {
    cy.get('#securityAuthentication_userName').type('Admin@')
    cy.get('#btnSearchValues').should('be.visible').click()
    cy.get('.message').should('be.visible', {delay: 1000})
    ///cy.get('h1').should('have.text', 'Instruction Sent !')
})

Cypress.Commands.add('validaMenus', function() {
    cy.get('#menu_admin_viewAdminModule > b').should('be.visible')
    cy.get('#menu_pim_viewPimModule > b').should('be.visible')
    cy.get('#menu_leave_viewLeaveModule > b').should('be.visible')
    cy.get('#menu_time_viewTimeModule > b').should('be.visible')
    cy.get('#menu_recruitment_viewRecruitmentModule > b').should('be.visible')
    cy.get('#menu_pim_viewMyDetails > b').should('be.visible')
    cy.get('#menu__Performance > b').should('be.visible')
    cy.get('#menu_dashboard_index > b').should('be.visible')
    cy.get('#menu_directory_viewDirectory > b').should('be.visible')
    cy.get(':nth-child(10) > .firstLevelMenu > b').should('be.visible')
    cy.get(':nth-child(10) > .firstLevelMenu > b').should('be.visible')
})

Cypress.Commands.add('validaMarketplace', function() {
    cy.get('#MP_link').should('be.visible').click()
    cy.get('#content').should('be.visible')
})