import LoginPage from '../../pageObjects/login'

describe('Login User', () => {

  it('Login user account and delete', () => {

    LoginPage.visit();
    LoginPage.verifyTitle();
    LoginPage.clickSignupLogin();
    LoginPage.enterEmail('Ansh02@yopmail.com');
    LoginPage.enterPassword('Test@123');
    LoginPage.clickLoginBtn();

    // Optional: delete account if visible
    cy.contains('Delete Account').should('be.visible').click();
  });

});
