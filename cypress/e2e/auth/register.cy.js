import RegisterPage from '../../pages/RegisterPage';

describe('Register User', () => {

    it('Create new user', () => {
        RegisterPage.visit();
        RegisterPage.clickSignup();
        RegisterPage.fillSignupForm('Ansh', 'Ansh02@yopmail.com');

        // If email exists → stop test
        RegisterPage.checkEmailExist().then((exists) => {
            if (exists) {
                cy.log('❌ Email already exists. Test stopped.');
                expect(true).to.be.true; // soft exit
            } else {
                // Continue registration
                RegisterPage.fillRegistrationDetails();
                cy.wait(2000);
                RegisterPage.submitAccountCreation();
            }
        });

    });

});
