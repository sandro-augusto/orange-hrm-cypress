var el = require('../support/elements/loginElements').LOGIN
import login from "../support/pages/loginPage"
import home from "../support/pages/homePage"

  Cypress.Commands.add('LoginSucesso', () => {
    login.accessPage()
    login.validateLoginPage()
    login.fillLogin('Admin', 'admin123')
    login.clickLogin()
    home.validateURLHome().then((urlAtual) => {
    expect(urlAtual).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })
  })

  Cypress.Commands.add('registerUser', () => {
    adminPage.ValidateSearchAdmin('Username').then((mensagem) => {
      expect(mensagem).to.eq('Admin')
    adminPage.clickAdd()
    adminPage.fillInInformations("Admin", "Charles Carter", "Enabled", "Nagato", "Mypassword1$", "Mypassword1$")
    adminPage.clickSave()
    adminPage.validateAlert("Successfully Saved")
  })
}) 