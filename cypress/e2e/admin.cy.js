import homePage from "../support/pages/homePage";
import adminPage from "../support/pages/adminPage";

describe('Admin', () => {

    context('Admin validações',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })
    
        it('Adicionar um admin com sucesso', () => {
            homePage.ValidarOpcoesMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            // adminPage.preencheUsername("Teste")
            adminPage.clickSearch()
            })
        })
    })
})