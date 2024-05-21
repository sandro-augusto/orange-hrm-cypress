import login from "../support/pages/loginPage";
import resetPassword from "../support/pages/forgetPasswordPage";

describe("Validate or forgot my password", () => {
  context("Forgot my password", () => {
    beforeEach(() => {
      login.accessPage()
      login.validateLoginPage()
    })

    it("Forgot my password with success", () => {
      login.clickForgetPassword()
      resetPassword.validatePasswordResetPageTitle().then((message) => {
        console.log(message)
        expect(message).eq("Reset Password")
      })
      resetPassword.fillInUsername("usernameTest")
      resetPassword.clickResetPassword()
      resetPassword.validatePasswordResetPageTitle().then((message) => {
        expect(message).eq("Reset Password link sent successfully")
      })
    })

    it("Forgot my password with blank username", () => {
      login.clickForgetPassword()
      resetPassword.validatePasswordResetPageTitle().then((message) => {
        console.log(message)
        expect(message).eq("Reset Password")
      })
      resetPassword.fillInUsername(null)
      resetPassword.clickResetPassword()
      resetPassword.validateRequiredAlert().then((message) => {
        expect(message).eq("Required")
      })
    })

    it("Forgot my password by clicking the cancel button", () => {
      login.clickForgetPassword()
      resetPassword.validatePasswordResetPageTitle().then((message) => {
        console.log(message)
        expect(message).eq("Reset Password")
      })
      resetPassword.clickCancel()
      login.validateLoginPage()
    })
  })
})
