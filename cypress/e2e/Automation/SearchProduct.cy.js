describe('Search Product', () => {
    it('Search the product and open the product', () => {
        cy.visit('https://automationexercise.com/');
        cy.title().should('eq', 'Automation Exercise');
        cy.contains('Products').click();
        cy.url().should('include', '/products');
        cy.get('input[name="search"]').type('Men Tshirt')
        cy.get('button#submit_search').click()
        cy.get('div.col-sm-9 div.col-sm-4').should('be.visible').and('contain.text', 'Men Tshirt')
        cy.get('div.col-sm-9 div.col-sm-4').should('have.length.gt', 0).then(($products) => {
            cy.log(`Product count is: ${$products.length}`);
        });

    })
})