import homePage from "../support/pages/homePage";
import adminPage from "../support/pages/adminPage";

describe('Admin', () => {

    context('Admin validations',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })
    
        it('Add an admin successfully', () => {
            homePage.ValidarOpcoesMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInEmployeeName("Charles Carter")
            adminPage.fillInUsername("Testing")
            adminPage.fillInPassword("Mypassword1$")
            adminPage.fillInConfirmPassword("Mypassword1$")
            adminPage.clickSave()
            })
        })
    })
})