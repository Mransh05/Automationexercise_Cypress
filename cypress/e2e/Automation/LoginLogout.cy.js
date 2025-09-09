describe('Check login, user and logout', () => {
    before(() => {
        cy.session('Store user session', () => {
            cy.visit('https://automationexercise.com/')
            cy.title().should('eq', 'Automation Exercise')
            cy.contains('Signup').click()
            cy.get("[data-qa='login-email']").type('Ansh02@yopmail.com')
            cy.get("[data-qa='login-password']").type('Test@123')
            cy.get("[data-qa='login-button']").click()
            cy.url().should('include', 'https://automationexercise.com/')
            cy.contains('Logged in as').should('exist')  // ensure login worked
            cy.wait(10000)

        })
    })

    it('Sign in test (should already be logged in)', () => {
        cy.visit('https://automationexercise.com/');
        cy.contains('Logged in as').should('exist');

    })
    it('Validate logged user name', () => {

        cy.visit('https://automationexercise.com/')
        cy.contains('Logged in as').within(() => {
            cy.get('b')
                .invoke('text')
                .then((username) => {
                    expect(username.trim()).to.equal('Ansh')
                })
        })
    })
    it('Use Logout', () => {
        cy.visit('https://automationexercise.com/');
        cy.contains('Logout').click()


    })
})