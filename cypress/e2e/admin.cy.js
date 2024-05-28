import home from "../support/pages/homePage";
import admin from "../support/pages/adminPage";

describe("Admin", () => {
  
  context("Admin validations fields", () => {
    before(() => {
      cy.loginSuccess()
      home.ValidateOptionMenu("PIM")
      cy.registerEmployee()
      home.ValidateOptionMenu("Admin")
      cy.registerUser()
      admin.logout()
    })

    beforeEach(() => {
      cy.loginSuccess()
      home.ValidateOptionMenu("Admin")
    })

    after(() => {
      admin.clickDelete()
      cy.deleteEmployee()
    })

    it("Validate Admin search Username field", () => {
      admin.ValidateSearchAdmin("Username").then((mensagem) => {
        expect(mensagem).to.eq("Guilherme")
      })
    })

    it("Validate Admin search UserRole field", () => {
      admin.ValidateSearchAdmin("UserRole").then((mensagem) => {
        expect(mensagem).to.eq("Admin")
      })
    })

    it("Validate Admin search EmployeeName field", () => {
      admin.ValidateSearchAdmin("EmployeeName").then((mensagem) => {
        expect(mensagem).to.eq("Test Employee")
      })
    })

    it("Validate Admin search Status field", () => {
      admin.ValidateSearchAdmin("Status").then((mensagem) => {
        expect(mensagem).to.eq("Enabled")
      })
    })
  })

  context("Admin validations Add fields", () => {
    before(() => {
      cy.loginSuccess()
      home.ValidateOptionMenu("PIM")
      cy.registerEmployee()
      admin.logout()
    })

    beforeEach(() => {
      cy.loginSuccess()
      home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
      })
      admin.clickAdd()
    })

    afterEach(() => {
      admin.clickDelete()
    })

    after(() => {
      cy.deleteEmployee()
    })

    it("Add an admin successfully", () => {
        admin.fillInInformations("Admin", "Test Automation", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
        admin.clickSave()
        admin.validateAlert("Successfully Saved")
        admin.ValidateSearchAdmin("Username").then((mensagem) => {
          expect(mensagem).to.eq("Guilherme")
        })
    })

    it("Add an admin disabled", () => {
      admin.fillInInformations("Admin", "Test Automation", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
      admin.clickSave()
      admin.validateAlert("Successfully Saved")
      admin.ValidateSearchAdmin("Username").then((mensagem) => {
        expect(mensagem).to.eq("Guilherme")
      })
    })

    it("Add an ESS successfully", () => {
      admin.fillInInformations("ESS", "Test Automation", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
      admin.clickSave()
      admin.validateAlert("Successfully Saved")
      admin.ValidateSearchAdmin("Username").then((mensagem) => {
        expect(mensagem).to.eq("Guilherme")
      })
    })

    it("Register admin with ESS disabled", () => {
      admin.fillInInformations("ESS", "Test Automation", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
      admin.clickSave()
      admin.validateAlert("Successfully Saved")
      admin.ValidateSearchAdmin("Username").then((mensagem) => {
        expect(mensagem).to.eq("Guilherme")
      })
    })
  })

  context("Admin validations Add fields", () => {
    before(() => {
      cy.loginSuccess()
      home.ValidateOptionMenu("PIM")
      cy.registerEmployee()
      admin.logout()
    })

    beforeEach(() => {
      cy.loginSuccess()
      home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
      })
      admin.clickAdd()
    })

    after(() => {
      cy.deleteEmployee()
    })

    it("Register admin with blank role", () => {
      admin.fillInInformations(null, "Test Automation", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
      admin.clickSave()
      admin.validateAlertError().then((mensagem) => {
        expect(mensagem).to.eq("Required")
      })
    })
    
    it("Register admin with blank employee name", () => {
      admin.fillInInformations("Admin", null, "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
      admin.clickSave()
      admin.validateAlertError().then((mensagem) => {
        expect(mensagem).to.eq("Required")
      })
    })

    it("Add an blank status", () => {
      admin.fillInInformations("Admin", "Test Automation", null, "Guilherme", "Mypassword1$", "Mypassword1$")
      admin.clickSave()
      admin.validateAlertError().then((mensagem) => {
        expect(mensagem).to.eq("Required")
      })
    })

    it("Register admin with blank username", () => {
      admin.fillInInformations("Admin", "Test Automation", "Enabled", null, "Mypassword1$", "Mypassword1$")
      admin.clickSave()
      admin.validateAlertError().then((mensagem) => {
        expect(mensagem).to.eq("Required")
      })
    })

    // it("Register admin with blank password", () => {
    //   admin.fillInInformations("Admin", "Test Automation", "Enabled", "Guilherme", null, null)
    //   admin.clickSave()
    //   admin.validateAlertErrors().then((mensagem) => {
    //     expect(mensagem).eq("Required")
    //   })
    // })

    // it("Register admin with confirm password", () => { 
    //   admin.fillInInformations("Admin", "Test Automation", "Enabled", "Guilherme", "Mypassword1$", null)
    //   admin.clickSave()
    //   admin.validateAlertError().then((mensagem) => {
    //     expect(mensagem).to.eq("Passwords do not match")
    //   })
    // })
  })
})