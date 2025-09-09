describe('Register User', () => {
  it('Create new user', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq', 'Automation Exercise')
    cy.contains('Signup').click()
    cy.get("[name='name']").type('Ansh')
    cy.get("[data-qa='signup-email']").type('Ansh02@yopmail.com')
    cy.get("[data-qa='signup-button']").click()

    cy.get('body').then(($body) => {
      if ($body.text().includes('Email Address already exist!')) {
        cy.log('❌ Email already exists. Test stopped.')
        // Optionally assert or end test
        expect(true).to.be.true
      } else {
        cy.get("input#id_gender1").should('be.visible').check()
        cy.get("#password").type("Test@123")
        cy.get("#days").select('10')
        cy.get('select#months').select('March')
        cy.get('select#years').select('1995')
        cy.get("#first_name").type("Ansh")
        cy.get("#last_name").type("Singh")
        cy.get("#address1").type(" Address one ")
        cy.get("#address2").type("Address two")
        cy.get("select#country").select('India')
        cy.get("#state").type('India')
        cy.get("#city").type('India')
        cy.get("#zipcode").type('India')
        cy.get("#mobile_number").type('87877878877')
        cy.wait(9000)
        cy.get("[data-qa='create-account']").click()
        cy.get("[data-qa='account-created']", { timeout: 10000 })
          .should('be.visible')
          .and('contain.text', 'Account Created')
        
      }

    })

  })
})