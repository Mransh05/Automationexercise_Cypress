class LoginPage {
    elements = {
        baseUrl : 'https://automationexercise.com/',
        clickLogin : 'a[href="/login"]',
        useremail :'[data-qa="login-email"]',
        userpassword:'[data-qa="login-password"]',
        clicklogin :'[data-qa="login-button"]'
    
    }
    visit() {
        cy.visit(this.elements.baseUrl);
    }

    clickSignupLogin() {
        cy.get(this.elements.clickLogin).click();
    }
    enterEmail(email) {
        cy.get(this.elements.useremail).type(email);
    }
    enterPassword(password) {
        cy.get(this.elements.userpassword).type(password);
    }

    clickLoginBtn() {
        cy.get(this.elements.clicklogin).click();
    }

    verifyTitle() {
        cy.title().should('eq', 'Automation Exercise');
    }
    // clickDeleteAccount() {
    //     cy.contains('Delete Account').click();
    // }
}

export default new LoginPage();
