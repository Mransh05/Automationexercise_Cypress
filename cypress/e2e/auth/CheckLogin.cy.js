import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import { beforeEach } from 'mocha';

describe('Check login, user and logout', () => {

    // Create session only once
    beforeEach(() => {
        cy.session('Store user session', () => {
            LoginPage.visit();
            LoginPage.clickSignupLogin();
            LoginPage.login('Ansh02@yopmail.com', 'Test@123');
            LoginPage.assertLoginSuccess();
            cy.wait(2000);
        });
    });

    it('Sign in test (should already be logged in)', () => {
        LoginPage.visit();
        LoginPage.assertLoginSuccess();
    });

    it('Validate logged user name', () => {
        LoginPage.visit();
        HomePage.validateLoggedUser('Ansh');
    });

    it('Use Logout', () => {
        LoginPage.visit();
        LoginPage.logout();
    });

});
