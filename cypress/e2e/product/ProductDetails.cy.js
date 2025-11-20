describe('View First Product details', () => {
    it('Get first product details ', () => {

        cy.visit('https://automationexercise.com/');
        cy.title().should('eq', 'Automation Exercise');

        cy.contains('Products').click();
        cy.url().should('include', '/products');
        //select the product
        //and click on the view product
        cy.get('div.col-sm-9 div.col-sm-4').each(($el) => {
            const productName = $el.find('div.overlay-content > p').text().trim();
            if (productName.includes('Stylish Dress')) {
                cy.wrap($el).trigger('mouseover');
                cy.wait(1000)
                cy.wrap($el).contains('View Product').click()
            }

        });

        cy.get('div.product-information >h2').should('be.visible').and('have.text', 'Stylish Dress')
        cy.get('div.product-information >p').first().should('contain.text', 'Category: Women > Dress')
        cy.get('div.product-information >span').should('contain.text', '1500')
        cy.get('div.product-information >p').eq(1).should('contain.text', 'Availability: In Stock')
        cy.get('div.product-information >p').eq(2).should('contain.text', 'Condition: New')
        cy.get('div.product-information >p').eq(3).should('contain.text', 'Brand: Madame')




    });
});
