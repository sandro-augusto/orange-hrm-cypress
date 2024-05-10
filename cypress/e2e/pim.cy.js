import homePage from "../support/pages/homePage";
import pimPage from "../support/pages/pimPage";

describe('PIM', () => {

    context('Add an Employee',() => {
        beforeEach(() => {
            cy.LoginSucesso()
            homePage.ValidateOptionMenu('PIM')
        })

        it('Add Employee success', () => {
            pimPage.clickAdd()
            pimPage.fillInformationsPIM('Teste', 'Automation', 'Employee', '1010')
            pimPage.clickSave()
            pimPage.validateMessSuccess().then((message) => {
                expect(message).eq('Successfully Saved')
            })
        })

        it.only('Delete Employee success', () => {
            pimPage.searchEmployee('Teste Automation')
            pimPage.clickSearch()
            console.log(pimPage.validateGrid())
            cy.wait(10000)
            // expect(pimPage.validateGrid()).to.eq('1010')
            pimPage.validateGrid().then((message) => {
                expect(message).to.equal('1010')
            })
            // pimPage.clickDelete()
            // pimPage.validateMessSuccess().then((message) => {
            //     expect(message).eq('Successfully Deleted')
            // })
        })

    })
})