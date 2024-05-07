import homePage from "../support/pages/homePage";
import adminPage from "../support/pages/adminPage";

describe('Admin', () => {

    context('Admin validations',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })

        it('Validate Admin search Username field', () => {
            adminPage.ValidateSearchAdmin('Username').then((mensagem) => {
                expect(mensagem).to.eq('Admin')
            })
        })

        it('Validate Admin search UserRole field', () => {
            adminPage.ValidateSearchAdmin('UserRole').then((mensagem) => {
                expect(mensagem).to.eq('ESS')
            })
        })

        it('Validate Admin search EmployeeName field', () => {
            adminPage.ValidateSearchAdmin('EmployeeName').then((mensagem) => {
                expect(mensagem).to.eq('Mohan user')
            })
        })

        it('Validate Admin search Status field', () => {
            adminPage.ValidateSearchAdmin('Status').then((mensagem) => {
                expect(mensagem).to.eq('Enabled')
            })
        })
    
        it.only('Add an admin successfully', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Charles Carter", "Enabled", "Nagato", "Mypassword1$", "Mypassword1$")
            adminPage.clickSave()
            adminPage.validateAlert("Successfully Saved")
            })
        })

        it('Add an admin disabled', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Charles Carter", "Disabled", "Nagato", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an ESS successfully', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("ESS", "Charles Carter", "Enabled", "Nagato", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an ESS disabled', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("ESS", "Charles Carter", "Disabled", "Nagato", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an user role in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations(null, "Charles Carter", "Disabled", "Nagato", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an status in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Charles Carter", null, "Nagato", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an employee name in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", null, "Enabled", "Nagato", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an username in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Charles Carter", "Enabled", null, "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an password in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin","Charles Carter", "Enabled", "Nagato", null, "Mypassword1$")
            })
        })

        it('Add an confirm password in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Charles Carter", "Enabled", "Nagato", "Mypassword1$", null)
            })
        })

        it('Add an fields in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations(null, null, null, null, null, null)
            })
        })
    })
})