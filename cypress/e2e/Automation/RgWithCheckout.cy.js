describe('Place Order: Register while Checkout', () => {
    it('', () => {
        cy.visit('https://automationexercise.com/');
        cy.title().should('eq', 'Automation Exercise');

        cy.contains('Products').click();
        cy.url().should('include', '/products');
        cy.get('div.col-sm-4').eq(1)
        cy.contains('Add to cart').click()
        cy.get('.modal-body p.text-center').contains('View Cart').click()
        cy.url().should('include', '/view_cart');
        cy.get('a.check_out').click()
        cy.get('.modal-body p.text-center').contains('Register / Login').click()

        //Sign up code 
        cy.get("[name='name']").type('Ansh')
        cy.get("[data-qa='signup-email']").type('Ansh03@yopmail.com')
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
                cy.get('div.pull-right').contains('Continue').click()

            }
        })
        //check user name
        cy.contains('Logged in as')
            .find('b')
            .invoke('text')
            .then((username) => {
                expect(username.trim()).to.equal('Ansh');
            });
        cy.contains('Cart').click();
        cy.get('a.check_out').click()
        cy.get('textarea[name="message"]').type('This is new order ')
        cy.get('a.check_out').click()
        cy.get('input[name="name_on_card"]').type('Ansh')
        cy.get('input[name="card_number"]').type('4242424242424242')
        cy.get('input[name="cvc"]').type('123')
        cy.get('input[name="expiry_month"]').type('12')
        cy.get('input[name="expiry_year"]').type('2030')
        cy.get('button#submit').click()
        // cy.get('#success_message > .alert-success', { timeout: 10000 })
        //     .should('be.visible').and('contain', 'Your order has been placed successfully!')
        cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!')


    })
})