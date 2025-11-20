class HomePage {

    elements = {
        loggedUserText: 'Logged in as'
    }

    validateLoggedUser(expectedName) {
        cy.contains(this.elements.loggedUserText)
            .within(() => {
                cy.get('b')
                    .invoke('text')
                    .then((username) => {
                        expect(username.trim()).to.equal(expectedName)
                    })
            })
    }
}

export default new HomePage();
