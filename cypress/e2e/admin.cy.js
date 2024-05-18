import home from "../support/pages/homePage";
import admin from "../support/pages/adminPage";

describe("Admin", () => {
  context("Admin validations fields", () => {
    beforeEach(() => {
      cy.loginSuccess()
      home.ValidateOptionMenu("PIM")
      cy.registerEmployee()
      home.ValidateOptionMenu("Admin")
      cy.registerUser()
    })

    afterEach(() => {
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
        expect(mensagem).to.eq("Teste Employee")
      })
    })

    it("Validate Admin search Status field", () => {
      admin.ValidateSearchAdmin("Status").then((mensagem) => {
        expect(mensagem).to.eq("Enabled")
      })
    })
  })

  context("Admin validations fields", () => {
    beforeEach(() => {
      cy.loginSuccess()
      home.ValidateOptionMenu("PIM")
      cy.registerEmployee()
    })

    afterEach(() => {
      cy.deleteEmployee()
    })

    it("Add an admin successfully", () => {
        home.ValidateOptionMenu("Admin").then((mensagem) => {
          expect(mensagem).to.eq("System Users")
        admin.clickAdd()
        admin.fillInInformations("Admin", "Teste Automation", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
        admin.clickSave()
        admin.validateAlert("Successfully Saved")
        admin.ValidateSearchAdmin("Username").then((mensagem) => {
          expect(mensagem).to.eq("Guilherme")
          admin.clickDelete()
      })
    })
  })

    it("Add an admin disabled", () => {
        home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
        admin.clickAdd()
        admin.fillInInformations("Admin", "Teste Automation", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
        admin.clickSave()
        admin.validateAlert("Successfully Saved")
        admin.ValidateSearchAdmin("Username").then((mensagem) => {
          expect(mensagem).to.eq("Guilherme")
          admin.clickDelete()
      })
    })
  })

    it("Add an ESS successfully", () => {
        home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
        admin.clickAdd()
        admin.fillInInformations("ESS", "Teste Automation", "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
        admin.clickSave()
        admin.validateAlert("Successfully Saved")
        admin.ValidateSearchAdmin("Username").then((mensagem) => {
          expect(mensagem).to.eq("Guilherme")
          admin.clickDelete()
        })
      })
    })

    it("Register admin with ESS disabled", () => {
        home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
        admin.clickAdd()
        admin.fillInInformations("ESS", "Teste Automation", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
        admin.clickSave()
        admin.validateAlert("Successfully Saved")
        admin.ValidateSearchAdmin("Username").then((mensagem) => {
          expect(mensagem).to.eq("Guilherme")
          admin.clickDelete()
        })
      })
    })

    it("Register admin with blank role", () => {
        home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
        admin.clickAdd()
        admin.fillInInformations(null, "Teste Automation", "Disabled", "Guilherme", "Mypassword1$", "Mypassword1$")
        admin.clickSave()
        admin.validateAlertError(0).then((mensagem) => {
          expect(mensagem).to.eq("Required")
        })
      })
    })
    
    it("Register admin with blank employee name", () => {
          home.ValidateOptionMenu("Admin").then((mensagem) => {
          expect(mensagem).to.eq("System Users")
          admin.clickAdd()
          admin.fillInInformations("Admin", null, "Enabled", "Guilherme", "Mypassword1$", "Mypassword1$")
          admin.clickSave()
          admin.validateAlertError(1).then((mensagem) => {
            expect(mensagem).to.eq("Required")
          })
        })
      })

    it.only("Add an blank status", () => {
        home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
        admin.clickAdd()
        admin.fillInInformations("Admin", "Teste Automation", null, "Guilherme", "Mypassword1$", "Mypassword1$")
        admin.clickSave()
        admin.validateAlertError(2).then((mensagem) => {
          expect(mensagem).to.eq("Required")
        })
      })
    })

    it("Register admin with blank username", () => {
        home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
        admin.clickAdd()
        admin.fillInInformations("Admin", "Teste Automation", "Enabled", null, "Mypassword1$", "Mypassword1$")
        admin.clickSave()
        admin.validateAlertError(3).then((mensagem) => {
          expect(mensagem).to.eq("Required")
        })
      })
    })

    it("Register admin with blank password", () => {
        home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
        admin.clickAdd()
        admin.fillInInformations("Admin", "Teste Automation", "Enabled", "Guilherme", null, "Mypassword1$")
        admin.clickSave()
        admin.validateAlertError(4).then((mensagem) => {
          expect(mensagem).to.eq("Required")
        })
      })
    })

    it("Register admin with confirm password", () => {
        home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
        admin.clickAdd()
        admin.fillInInformations("Admin", "Teste Automation", "Enabled", "Guilherme", "Mypassword1$", null)
        admin.clickSave()
        admin.validateAlertError(5).then((mensagem) => {
          expect(mensagem).to.eq("Passwords do not match")
        })
      })
    })

    it("Register admin with blank fields", () => {
        home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users");
        admin.clickAdd()
        admin.fillInInformations(null, null, null, null, null, null)
        admin.clickSave()
        admin.validateAlertError(5).then((mensagem) => {
          expect(mensagem).to.eq("Passwords do not match")
        })
      })
    })
  })
})