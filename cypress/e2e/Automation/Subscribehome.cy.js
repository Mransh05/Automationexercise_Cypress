describe('Verify Subscription in home page', () => {
    it('Subscribe the home page and validate message', () => {
        cy.visit('https://automationexercise.com/');
        cy.title().should('eq', 'Automation Exercise');
        cy.get('#footer').scrollIntoView()
        cy.get('div.single-widget >h2').should('have.text', 'Subscription')
        cy.get('#susbscribe_email').type('Anshul@yopmail.com')
        cy.get('#subscribe').click()
        cy.get('#success-subscribe .alert-success.alert', { timeout: 10000 })
            .should('be.visible').and('contain', 'You have been successfully subscribed!')

    })
})