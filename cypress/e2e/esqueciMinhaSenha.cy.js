import login from "../support/pages/loginPage";
import resetPassword from "../support/pages/esqueciMinhaSenhaElements";

describe("Validar o esqueci minha senha", () => {
  context("Esqueci minha senha", () => {
    beforeEach(() => {
      login.acessarPage()
      login.validaLoginPage()
    })

    it("Esqueci minha senha com sucesso", () => {
      login.clicarEsqueciMinhaSenha()
      resetPassword.validaReseteSenhaPage().then((mensagem) => {
        console.log(mensagem)
        expect(mensagem).to.eq("Reset Password")
      })
      resetPassword.preencheResetPassword("usernameTeste")
      resetPassword.clicarResetPassword()
      resetPassword.validaReseteSenhaPage().then((mensagem) => {
        expect(mensagem).to.eq("Reset Password link sent successfully")
      })
    })
    
    it("Esqueci minha senha com username em branco", () => {
      login.clicarEsqueciMinhaSenha()
      resetPassword.validaReseteSenhaPage().then((mensagem) => {
        console.log(mensagem)
        expect(mensagem).to.eq("Reset Password")
      })
      resetPassword.preencheResetPassword(null)
      resetPassword.clicarResetPassword()
      resetPassword.validaAlertRequired().then((mensagem) => {
        expect(mensagem).to.eq("Required")
      })
    })

    it("Esqueci minha senha clicando no botão cancelar", () => {
      login.clicarEsqueciMinhaSenha()
      resetPassword.validaReseteSenhaPage().then((mensagem) => {
        console.log(mensagem)
        expect(mensagem).to.eq("Reset Password")
      })
      resetPassword.clicarBotaoCancel()
      login.validaLoginPage()
    })
  })
})