import homePage from "../support/pages/homePage";
import pimPage from "../support/pages/pimPage";

describe('PIM', () => {

    context('Add an Employee',() => {
        beforeEach(() => {
            cy.LoginSucesso()
            homePage.ValidateOptionMenu('PIM')
        })

        it('Add Employee success', () => {
            pimPage.fillInformationsPIM('Teste', 'Automation', 'Employee', '1010')
            pimPage.validateMessSuccess().then((mensagem) => {
                expect(mensagem).eq('Successfully Saved')
            })
        })

    })
})