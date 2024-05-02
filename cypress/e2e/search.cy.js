import homePage from "../support/pages/homePage";

describe('Validate menu search', () => {

    context('Search menu validations',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })
        
        it('Search by admin', () => {
            homePage.fillInSearch("Admin")
            homePage.validateResultSearch().then((mensagem) => {
                expect(mensagem).to.eq("Admin")
            })
        })
    })
})