describe('Add First product in to cart', () => {
    it('Should add First product to cart and verify success message', () => {

        cy.visit('https://automationexercise.com/');
        cy.title().should('eq', 'Automation Exercise');

        cy.contains('Products').click();
        cy.url().should('include', '/products');

        // Log total product count
        cy.get('div.col-sm-4').should('have.length.gt', 0).then(($products) => {
            cy.log(`Product count is: ${$products.length}`);
        });

        // Find and click "Blue Top"
        cy.get('div.col-sm-9 div.col-sm-4').each(($el) => {
            const productName = $el.find('div.overlay-content > p').text().trim();
            if (productName.includes('Stylish Dress')) {
                cy.wrap($el).trigger('mouseover');
                cy.wrap($el).find('a.add-to-cart:visible').click({ force: true });
                // Verify modal success message
                cy.get('.modal-body p.text-center')
                    .should('contain.text', 'Your product has been added to cart.');
                // Exit the loop early
                cy.wait(1000)
                cy.contains('Continue Shopping').click()
                return false;
            }

        });

    });
});
