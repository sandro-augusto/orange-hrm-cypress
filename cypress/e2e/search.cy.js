import homePage from "../support/pages/homePage";

describe('Validate menu search', () => {

    context('Search menu validations',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })
        
        it('Search by admin', () => {
            
            homePage.validateResultSearch('Admin').then((mensagem) => {
                expect(mensagem).to.eq("Admin")
            })
        })
    })
})