import login from "../support/pages/loginPage";
import home from "../support/pages/homePage";
import admin from "../support/pages/adminPage";
import pim from "./pages/pimPage";

Cypress.Commands.add("loginSuccess", () => {
  login.accessPage()
  login.validateLoginPage()
  login.fillLogin("Admin", "admin123")
  login.clickLogin()
  home.validateURLHome().then((urlAtual) => {
    expect(urlAtual).eq(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    )
  })
})

//  ADMIN
Cypress.Commands.add("registerUser", () => {
  home.ValidateOptionMenu("Admin");
  admin.clickAdd();
  admin.fillInInformations("Admin", "Teste Automation", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
  admin.clickSave()
  admin.validateAlert().then((message) => {
    expect(message).eq("Successfully Saved");
  })
})

//  PIM EMPLOYEE
Cypress.Commands.add("registerEmployee", () => {
  pim.clickAdd()
  pim.fillInformationsPIM("Teste", "Automation", "Employee", "1010")
  pim.clickSave()
  pim.validateMessSuccess().then((message) => {
    expect(message).eq("Successfully Saved")
  })
  cy.window().then((win) => win.close())
})

Cypress.Commands.add("deleteEmployee", () => {
  cy.wait(5000)
  home.ValidateOptionMenu("PIM")
  pim.searchEmployee("Teste Automation")
  pim.clickSearch()
  pim.validateGrid().then((message) => {
    expect(message).to.equal("1010")
  })
  pim.clickDelete()
  pim.validateMessSuccess().then((message) => {
    expect(message).eq("Successfully Deleted")
  })

  Cypress.Commands.add("deleteUser", () => {
    cy.wait(5000)
    home.ValidateOptionMenu("ADMIN");
    admin.ValidateSearchAdmin("Username", "Guilherme").then((mensagem) => {
      expect(mensagem).to.eq("Guilherme")
      admin.clickDelete()
    })
  })
})
