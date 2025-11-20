class RegisterPage {

    elements = {
        baseUrl: 'https://automationexercise.com/',
        signupButton: 'a[href="/login"]',
        nameInput: 'input[name="name"]',
        signupEmail: '[data-qa="signup-email"]',
        signupSubmit: '[data-qa="signup-button"]',
        emailExistMsg: 'Email Address already exist!',
        
        genderMale: '#id_gender1',
        password: '#password',
        days: '#days',
        months: '#months',
        years: '#years',

        firstName: '#first_name',
        lastName: '#last_name',
        address1: '#address1',
        address2: '#address2',
        country: '#country',
        state: '#state',
        city: '#city',
        zipcode: '#zipcode',
        mobileNumber: '#mobile_number',

        createAccountBtn: '[data-qa="create-account"]',
        accountCreatedMsg: '[data-qa="account-created"]'
    }

    visit() {
        cy.visit(this.elements.baseUrl);
        cy.title().should('eq', 'Automation Exercise');
    }

    clickSignup() {
        cy.contains('Signup').click();
    }

    fillSignupForm(name, email) {
        cy.get(this.elements.nameInput).type(name);
        cy.get(this.elements.signupEmail).type(email);
        cy.get(this.elements.signupSubmit).click();
    }

    checkEmailExist() {
        return cy.get('body').then($body => {
            return $body.text().includes(this.elements.emailExistMsg);
        });
    }

    fillRegistrationDetails() {
        cy.get(this.elements.genderMale).check();
        cy.get(this.elements.password).type('Test@123');
        cy.get(this.elements.days).select('10');
        cy.get(this.elements.months).select('March');
        cy.get(this.elements.years).select('1995');
        cy.get(this.elements.firstName).type('Ansh');
        cy.get(this.elements.lastName).type('Singh');
        cy.get(this.elements.address1).type('Address one');
        cy.get(this.elements.address2).type('Address two');
        cy.get(this.elements.country).select('India');
        cy.get(this.elements.state).type('India');
        cy.get(this.elements.city).type('India');
        cy.get(this.elements.zipcode).type('111222');
        cy.get(this.elements.mobileNumber).type('87877878877');
    }

    submitAccountCreation() {
        cy.get(this.elements.createAccountBtn).click();
        cy.get(this.elements.accountCreatedMsg)
            .should('be.visible')
            .and('contain', 'Account Created');
    }

}

export default new RegisterPage();
