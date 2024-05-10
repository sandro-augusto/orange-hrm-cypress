import home from "../support/pages/homePage";
import pim from "../support/pages/pimPage";

describe('PIM', () => {

    context('Add an Employee',() => {
        beforeEach(() => {
            cy.loginSuccess()
            home.ValidateOptionMenu('PIM')
        })

        it('Add Employee success', () => {
            pim.clickAdd()
            pim.fillInformationsPIM('Teste', 'Automation', 'Employee', '1010')
            pim.clickSave()
            pim.validateMessSuccess().then((message) => {
                expect(message).eq('Successfully Saved')
            })
        })

        it('Delete Employee success', () => {
            pim.searchEmployee('Teste Automation')
            pim.clickSearch()
            pim.validateGrid().then((message) => {
                expect(message).to.equal('1010')
            })
            pim.clickDelete()
            pim.validateMessSuccess().then((message) => {
                expect(message).eq('Successfully Deleted')
            })
        })

    })
})