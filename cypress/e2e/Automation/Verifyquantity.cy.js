describe('Verify Product quantity in Cart', () => {
    it('Verify that product is displayed in cart page with exact quantity', () => {
        cy.visit('https://automationexercise.com/');
        cy.title().should('eq', 'Automation Exercise');
        cy.contains('Products').click();
        cy.url().should('include', '/products');
        cy.get('div.col-sm-9 div.col-sm-4').contains('View Product').click()
        cy.url().should('include', '/product_details');
        cy.get('#quantity').clear().type(4)
        cy.get('button.cart').click()
        cy.get('.modal-body p.text-center').contains('View Cart').click()
        cy.get('button.disabled').should('contain.text', '4');

        //select for specfic product
        // cy.get('div.col-sm-9 div.col-sm-4').each(($el) => {
        //     const productName = $el.find('div.overlay-content > p').text().trim();
        //     if (productName.includes('Stylish Dress')) {
        //         cy.wrap($el).trigger('mouseover');
        //         cy.wait(1000)
        //         cy.wrap($el).contains('View Product').click()
        //     }
        // });

    })
})

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'View Product' for any product on home page
// 5. Verify product detail is opened
// 6. Increase quantity to 4
// 7. Click 'Add to cart' button
// 8. Click 'View Cart' button
// 9. Verify that product is displayed in cart page with exact quantity