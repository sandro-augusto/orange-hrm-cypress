import login from "../support/pages/loginPage";
import resetPassword from "../support/pages/forgetPasswordPage";

describe("Validate or forgot my password", () => {
  context("Forgot my password", () => {
    beforeEach(() => {
      login.acessarPage()
      login.validaLoginPage()
    })

    it("Forgot my password with success", () => {
      login.clickForgetPassword()
      resetPassword.validatePasswordResetPageTitle().then((mensagem) => {
        console.log(mensagem)
        expect(mensagem).to.eq("Reset Password")
      })
      resetPassword.fillInUsername("usernameTeste")
      resetPassword.clickResetPassword()
      resetPassword.validatePasswordResetPageTitle().then((mensagem) => {
        expect(mensagem).to.eq("Reset Password link sent successfully")
      })
    })
    
    it("Forgot my password with username in blank", () => {
      login.clickForgetPassword()
      resetPassword.validatePasswordResetPageTitle().then((mensagem) => {
        console.log(mensagem)
        expect(mensagem).to.eq("Reset Password")
      })
      resetPassword.fillInUsername(null)
      resetPassword.clickResetPassword()
      resetPassword.validateRequiredAlert().then((mensagem) => {
        expect(mensagem).to.eq("Required")
      })
    })

    it("Forgot my password by clicking the cancel button", () => {
      login.clickForgetPassword()
      resetPassword.validatePasswordResetPageTitle().then((mensagem) => {
        console.log(mensagem)
        expect(mensagem).to.eq("Reset Password")
      })
      resetPassword.clickCancel()
      login.validaLoginPage()
    })
  })
})