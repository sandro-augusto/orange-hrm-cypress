import homePage from "../support/pages/homePage";
import adminPage from "../support/pages/adminPage";
import { fecharBrowser } from "../support/actions";

describe('Admin', () => {

    context('Admin validations fields',() => {
        beforeEach(() => {
            cy.LoginSucesso()
            homePage.ValidateOptionMenu('PIM')
            cy.registerEmployee()
            cy.registerUser()
        })

        afterEach(() => {
            adminPage.clickDelete()
        })

        it('Validate Admin search Username field', () => {
            adminPage.ValidateSearchAdmin('Username').then((message) => {
                expect(message).eq('Guilherme')
            })
        })

        it('Validate Admin search UserRole field', () => {
            adminPage.ValidateSearchAdmin('UserRole').then((message) => {
                expect(message).eq('Admin')
            })
        })

        it('Validate Admin search EmployeeName field', () => {
            adminPage.ValidateSearchAdmin('EmployeeName', 'Teste Automation').then((message) => {
                expect(message).eq('Teste Automation')
            })
        })

        it('Validate Admin search Status field', () => {
            adminPage.ValidateSearchAdmin('Status').then((message) => {
                expect(message).eq('Enabled')
            })
        })
    })

    context('Admin validations fields',() => {
        beforeEach(() => {
            cy.LoginSucesso()
            homePage.ValidateOptionMenu('PIM')
            cy.registerEmployee()
        })

        afterEach(() => {
            adminPage.ValidateSearchAdmin('Username').then((message) => {
                expect(message).eq('Guilherme')
            })
            adminPage.clickDelete()
        })

        it.only('Add an admin successfully', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Teste Automation", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            adminPage.clickSave()
            adminPage.validateAlert("Successfully Saved")
            cy.wait(3000)
            })
        })

        it('Add an admin disabled', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Neha  Shimpi", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an ESS successfully', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("ESS", "Neha  Shimpi", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an ESS disabled', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("ESS", "Neha  Shimpi", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an user role in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations(null, "Neha  Shimpi", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an status in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Neha  Shimpi", null, "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an employee name in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", null, "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an username in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Neha  Shimpi", "Enabled", null, "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an password in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin","Neha  Shimpi", "Enabled", "Guilherme", null, "Mypassword1$")
            })
        })

        it('Add an confirm password in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations("Admin", "Neha  Shimpi", "Enabled", "Guilherme", "Mypassword1$", null)
            })
        })

        it('Add an fields in blank', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            adminPage.clickAdd()
            adminPage.fillInInformations(null, null, null, null, null, null)
            })
        })
    })
})