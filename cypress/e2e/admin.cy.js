
import home from "../support/pages/homePage";
import admin from "../support/pages/adminPage";
import pim from  "../support/pages/pimPage";

describe('Admin', () => {

    context('Admin validations fields',() => {
        beforeEach(() => {
            cy.loginSuccess()
            home.ValidateOptionMenu('PIM')
            cy.registerEmployee()
            home.ValidateOptionMenu('Admin')
            cy.registerUser()
        })

        afterEach(() => {
            admin.clickDelete()
            pim.clickDelete()
        })

        it.only('Validate Admin search Username field', () => {
            admin.ValidateSearchAdmin('Username').then((mensagem) => {
                expect(mensagem).to.eq('Guilherme')
            })
        })

        it('Validate Admin search UserRole field', () => {
            admin.ValidateSearchAdmin('UserRole').then((mensagem) => {
                expect(mensagem).to.eq('Admin')
            })
        })

        it('Validate Admin search EmployeeName field', () => {
            admin.ValidateSearchAdmin('EmployeeName', 'Neha  Shimpi').then((mensagem) => {
                expect(mensagem).to.eq('dhananjay   kumar')
            })
        })

        it('Validate Admin search Status field', () => {
            admin.ValidateSearchAdmin('Status').then((mensagem) => {
                expect(mensagem).to.eq('Enabled')
            })
        })
    })

    context('Admin validations fields',() => {
        beforeEach(() => {
            cy.loginSuccess()
            homePage.ValidateOptionMenu('PIM')
            cy.registerEmployee()
        })

        afterEach(() => {
            admin.ValidateSearchAdmin('Username', 'Guilherme').then((mensagem) => {
                expect(mensagem).to.eq('Guilherme')
            })
            admin.clickDelete()
        })

        it('Add an admin successfully', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations("Admin", "Teste Automation", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            admin.clickSave()
            admin.validateAlert("Successfully Saved")
            })
        })

        it('Add an admin disabled', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations("Admin", "Teste Automation", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an ESS successfully', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations("ESS", "Teste Automation", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Register admin with ESS disabled', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations("ESS", "Teste Automation", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Register admin with blank role', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations(null, "Teste Automation", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Add an blank status', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations("Admin", "Teste Automation", null, "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Register admin with blank employee name', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations("Admin", null, "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
            })
        })

        it('Register admin with blank username', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations("Admin", "Teste Automation", "Enabled", null, "Mypassword1$", "Mypassword1$")
            })
        })

        it('Register admin with blank password', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations("Admin","Teste Automation", "Enabled", "Guilherme", null, "Mypassword1$")
            })
        })

        it('Register admin with confirm password', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations("Admin", "Teste Automation", "Enabled", "Guilherme", "Mypassword1$", null)
            })
        })

        it('Register admin with blank fields', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            admin.clickAdd()
            admin.fillInInformations(null, null, null, null, null, null)
            })
        })
    })
})