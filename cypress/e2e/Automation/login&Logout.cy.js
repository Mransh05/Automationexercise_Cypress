describe('Login User', () => {
  it('Login user acoount and delete', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq', 'Automation Exercise')
    cy.contains('Signup').click()
    cy.get("[data-qa='login-email']").type('Ansh02@yopmail.com')
    cy.get("[data-qa='login-password']").type('Test@123')
    cy.get("[data-qa='login-button']").click()
    cy.contains('Logged in as')
      .find('b')
      .invoke('text')
      .then((username) => {
        expect(username.trim()).to.equal('Ansh');
      });
    cy.contains('Logout').click()

  })
})