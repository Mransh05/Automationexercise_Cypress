describe('Validate the Contact form', () => {
    it('', () => {
        cy.visit('https://automationexercise.com/')
        cy.title().should('eq', 'Automation Exercise')
        cy.contains('Contact us').click()
        cy.url().should('include', 'https://automationexercise.com/contact_us')
        cy.get('input[name="name"]').type('Anshul Test')
        cy.get('input[name="email"]').type('Ansh@yopmail.com')
        cy.get('input[name="subject"]').type('This is test contact form')
        cy.get('#message').type("Below contact form is for testing purpose.")
        cy.get('input[type="file"]').selectFile("D:\\automationexercise\\cypress\\e2e\\Automation\\Image\\download.jpeg")
        cy.get('input[type="submit"]').click()
        //confirm the aleart
        cy.on('window:alert', (t) => {
            expect(t).to.contains('Press OK to proceed!')
        })
        //Checking the msg after clicking on
        cy.get('div.status').should('have.text',"Success! Your details have been submitted successfully.")



    })
})