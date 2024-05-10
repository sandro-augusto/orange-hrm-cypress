import home from "../support/pages/homePage";
import pim from "../support/pages/pimPage";

describe('PIM', () => {

    context('Add an Employee',() => {
        beforeEach(() => {
            cy.loginSuccess()
            home.ValidateOptionMenu('PIM')
        })

        it('Add Employee success', () => {
            pim.fillInformationsPIM('Teste', 'Automation', 'Employee', '1010')
            pim.validateMessSuccess().then((mensagem) => {
                expect(mensagem).eq('Successfully Saved')
            })
        })

    })
})