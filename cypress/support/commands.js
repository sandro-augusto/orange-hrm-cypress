import login from "../support/pages/loginPage"
import home from "../support/pages/homePage"
import admin from "../support/pages/adminPage"
import pimPage from "./pages/pimPage"

// LOGIN
  Cypress.Commands.add('LoginSucesso', () => {
    login.accessPage()
    login.validateLoginPage()
    login.fillLogin('Admin', 'admin123')
    login.clickLogin()
    home.validateURLHome().then((urlAtual) => {
    expect(urlAtual).eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })
  })

//  ADMIN
  Cypress.Commands.add('registerUser', () => {
    home.ValidateOptionMenu('Admin')
    admin.clickAdd()
    admin.fillInInformations("Admin", "Teste Automation", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
    admin.clickSave()
    admin.validateAlert().then((message) => {
      expect(message).eq('Successfully Saved')
    })
  
  })

//  PIM EMPLOYEE
  Cypress.Commands.add('registerEmployee', () => {
    pimPage.clickAdd()
    pimPage.fillInformationsPIM('Teste', 'Automation', 'Employee', '1010')
    pimPage.clickSave()
    pimPage.validateMessSuccess().then((message) => {
        expect(message).eq('Successfully Saved')
    })
    cy.window().then(win => win.close())
  })
