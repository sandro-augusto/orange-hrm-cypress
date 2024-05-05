import homePage from "../support/pages/homePage";
import adminPage from "../support/pages/adminPage";

describe('Admin', () => {

    context('Admin validações',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })

        it('Validar pesquisa do Admin campo Username', () => {
            adminPage.ValidarPesquisaAdmin('Username').then((mensagem) => {
                expect(mensagem).to.eq('FMLName1')
            })
        })

        it.only('Validar pesquisa do Admin campo UserRole', () => {
            adminPage.ValidarPesquisaAdmin('UserRole').then((mensagem) => {
                expect(mensagem).to.eq('ESS')
            })
        })

        it('Validar pesquisa do Admin campo EmployeeName', () => {
            adminPage.ValidarPesquisaAdmin('EmployeeName').then((mensagem) => {
                expect(mensagem).to.eq('Qwerty LName')
            })
        })

        it('Validar pesquisa do Admin campo Status', () => {
            adminPage.ValidarPesquisaAdmin('Status').then((mensagem) => {
                expect(mensagem).to.eq('Enabled')
            })
        })
    
        // it('Adicionar um admin com sucesso', () => {
        //     homePage.ValidarOpcoesMenu('Admin').then((mensagem) => {
        //         expect(mensagem).to.eq('System Users')
        //     // adminPage.preencheUsername("Teste")
        //     adminPage.teste()
        //     })
        // })


    })
})