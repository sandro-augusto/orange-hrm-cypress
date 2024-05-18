import login from "../support/pages/loginPage";
import home from "../support/pages/homePage";

describe("Access the Orange HRM Page to perform Login validations", () => {
  context("Login", () => {
    beforeEach(() => {
      login.accessPage()
      login.validateLoginPage()
    })

    it("Success Login", () => {
      login.fillLogin("Admin", "admin123")
      login.clickLogin()
      home.validateURLHome().then((currentUrl) => {
        expect(currentUrl).eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
        )
      })
    })

    it("Login with blank UserName field", () => {
      login.fillLogin(null, "admin123")
      login.clickLogin()
      login.validateMessError().then((message) => {
        expect(message).eq("Required")
      })
    })

    it("Login with blank Password field", () => {
      login.fillLogin("Admin", null)
      login.clickLogin()
      login.validateMessError().then((message) => {
        expect(message).eq("Required")
      })
    })

    it("Login with blank UserName and Password field", () => {
      login.fillLogin(null, null)
      login.clickLogin()
      login.validateMessError().then((mesOne) => {
        expect(mesOne).eq("Required")
      })
      login.validateMessError2().then((mesTwo) => {
        expect(mesTwo).eq("Required")
      })
    })

    it("Login with blank UserName invalid", () => {
      login.fillLogin("@$%#@!!@", "admin123")
      login.clickLogin()
      login.validateAlertError().then((message) => {
        expect(message).eq("Invalid credentials")
      })
    })

    it("Login with blank Password invalid", () => {
      login.fillLogin("Admin", "@$%#@!!@")
      login.clickLogin()
      login.validateAlertError().then((message) => {
        expect(message).eq("Invalid credentials")
      })
    })

    it("Login with blank UserName and Password invalid", () => {
      login.fillLogin("@((#!@$$@", "@$%#@!!@")
      login.clickLogin()
      login.validateAlertError().then((message) => {
        expect(message).eq("Invalid credentials")
      })
    })
  })
})