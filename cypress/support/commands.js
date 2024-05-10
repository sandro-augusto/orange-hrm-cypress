var el = require('../support/elements/loginElements').LOGIN
import login from "../support/pages/loginPage"
import home from "../support/pages/homePage"
import admin from "../support/pages/adminPage"

  Cypress.Commands.add('loginSuccess', () => {
    login.accessPage()
    login.validateLoginPage()
    login.fillLogin('Admin', 'admin123')
    login.clickLogin()
    home.validateURLHome().then((urlAtual) => {
    expect(urlAtual).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })
  })

  Cypress.Commands.add('registerUser', () => {
    home.ValidateOptionMenu('Admin')
    admin.clickAdd()
    admin.fillInInformations("Admin", "dhananjay   kumar", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
    admin.clickSave()
    admin.validateAlert("Successfully Saved")
  })