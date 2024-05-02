import login from "../support/pages/loginPage"
import home from "../support/pages/homePage"

describe('Acessar a Pagina do Orange HRM para realizar as validações de Login', () => {

    context('Login',() => {
        beforeEach(() => {
            login.acessarPage()
            login.validaLoginPage()
        });
    
        it('Login com sucesso', () => {
          login.preencheLogin('Admin', 'admin123')
          login.clicarLogin()
          home.validaHome().then((mensagem) => {
            console.log(mensagem)
            expect(mensagem).to.eq('Punched Out')
          })
          home.validaURLHome().then((urlAtual) => {
            expect(urlAtual).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
          })
        })
      
        it('Login com campo UserName em branco', () => {
          login.preencheLogin(null, 'admin123')
          login.clicarLogin()
          login.validaMensErro().then((mensagem) => {
            expect(mensagem).to.eq('Required')
          })
        })

        it('Login com campo Password em branco', () => {
          login.preencheLogin('Admin', null)
          login.clicarLogin()
          login.validaMensErro().then((mensagem) => {
            expect(mensagem).to.eq('Required')
          })
        })

        it('Login com campo UserName e o Password em branco', () => {
          login.preencheLogin(null, null)
          login.clicarLogin()
          login.validaMensErro().then((mensagem) => {
            expect(mensagem).to.eq('Required')
          })
          login.validaMensErro2().then((mensDois) => {
            expect(mensDois).to.eq('Required')
          })
        })

        it('Login com campo Username Invalido', () => {
          login.preencheLogin('@$%#@!!@', 'admin123')
          login.clicarLogin()
          login.validaAlertaErro().then((mensagem) => {
            expect(mensagem).to.eq('Invalid credentials')
          })
        })

        it('Login com campo Senha Invalido', () => {
          login.preencheLogin('Admin', '@$%#@!!@')
          login.clicarLogin()
          login.validaAlertaErro().then((mensagem) => {
            expect(mensagem).to.eq('Invalid credentials')
          })
        })

        it('Login com os campos Username e Senha Invalidos', () => {
          login.preencheLogin('@((#!@$$@', '@$%#@!!@')
          login.clicarLogin()
          login.validaAlertaErro().then((mensagem) => {
            expect(mensagem).to.eq('Invalid credentials')
          })
        })


    })
});

