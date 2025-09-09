describe('Login User', () => {
  it('Login user acoount and delete', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq', 'Automation Exercise')
    cy.contains('Signup').click()
    cy.get("[data-qa='login-email']").type('Ansh02@yopmail.com')
    cy.get("[data-qa='login-password']").type('Test@123')
    cy.get("[data-qa='login-button']").click()
   /* cy.wait(5000)
    cy.get('body').then(($body) => {
      if ($body.text().includes('Your email or password is incorrect!')) {
        cy.log('This Account May be Deleted or Incorrect details')
        // Optionally assert or end test
        expect(true).to.be.true
      } else
        cy.contains('Delete Account').should('be.visible').click()
        
    })*/
  })
})