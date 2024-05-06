import homePage from "../support/pages/homePage";
import adminPage from "../support/pages/adminPage";

describe('Admin', () => {

    context('Admin validations',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })

        it('Validate Admin search Username field', () => {
            adminPage.ValidateSearchAdmin('Username').then((mensagem) => {
                expect(mensagem).to.eq('FMLName1')
            })
        })

        it('Validate Admin search UserRole field', () => {
            adminPage.ValidateSearchAdmin('UserRole').then((mensagem) => {
                expect(mensagem).to.eq('ESS')
            })
        })

        it('Validate Admin search EmployeeName field', () => {
            adminPage.ValidateSearchAdmin('EmployeeName').then((mensagem) => {
                expect(mensagem).to.eq('Qwerty LName')
            })
        })

        it('Validate Admin search Status field', () => {
            adminPage.ValidateSearchAdmin('Status').then((mensagem) => {
                expect(mensagem).to.eq('Enabled')
            })
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