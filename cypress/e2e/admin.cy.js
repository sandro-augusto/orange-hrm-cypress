import homePage from "../support/pages/homePage";
import adminPage from "../support/pages/adminPage";

describe('Admin', () => {

    context('Admin validations fields',() => {
        beforeEach(() => {
            cy.LoginSucesso()
            cy.registerUser()
        })

        afterEach(() => {
            adminPage.clickDelete()
        })

        it('Validate Admin search Username field', () => {
            adminPage.ValidateSearchAdmin('Username').then((mensagem) => {
                expect(mensagem).to.eq('Guilherme')
            })
        })

        it.only('Validate Admin search UserRole field', () => {
            adminPage.ValidateSearchAdmin('UserRole').then((mensagem) => {
                expect(mensagem).to.eq('Admin')
            })
        })

        it('Validate Admin search EmployeeName field', () => {
            adminPage.ValidateSearchAdmin('EmployeeName', 'Neha  Shimpi').then((mensagem) => {
                expect(mensagem).to.eq('dhananjay   kumar')
            })
        })

        it('Validate Admin search Status field', () => {
            adminPage.ValidateSearchAdmin('Status').then((mensagem) => {
                expect(mensagem).to.eq('Enabled')
            })
        })
    })

    context('Admin validations fields',() => {
        beforeEach(() => {
            cy.LoginSucesso()

        })

        afterEach(() => {
            adminPage.ValidateSearchAdmin('Username', 'Guilherme').then((mensagem) => {
                expect(mensagem).to.eq('Guilherme')
            })
            adminPage.clickDelete()
        })

        it('Add an admin successfully', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Neha  Shimpi", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            adminPage.clickSave()
            adminPage.validateAlert("Successfully Saved")
            })
        })

        it('Add an admin disabled', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Neha  Shimpi", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an ESS successfully', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("ESS", "Neha  Shimpi", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an ESS disabled', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("ESS", "Neha  Shimpi", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an user role in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations(null, "Neha  Shimpi", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an status in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Neha  Shimpi", null, "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an employee name in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", null, "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an username in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Neha  Shimpi", "Enabled", null, "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an password in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin","Neha  Shimpi", "Enabled", "Guilherme", null, "Mypassword1$")
            })
        })

        it('Add an confirm password in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Neha  Shimpi", "Enabled", "Guilherme", "Mypassword1$", null)
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