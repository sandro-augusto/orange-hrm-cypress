import homePage from "../support/pages/homePage";

describe('Validar a HomePage ', () => {

    context('Home validações',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })

        it('Validar a opção Admin do Menu', () => {
            homePage.ValidarOpcoesMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
            })
        })

        it('Validar a opção PIM do Menu', () => {
            homePage.ValidarOpcoesMenu('PIM').then((mensagem) => {
                expect(mensagem).to.eq('Employee Information')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
            })
        })

        it('Validar a opção Leave do Menu', () => {
            homePage.ValidarOpcoesMenu('Leave').then((mensagem) => {
                expect(mensagem).to.eq('Leave List')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
            })
        })

        it('Validar a opção Time do Menu', () => {
            homePage.ValidarOpcoesMenu('Time').then((mensagem) => {
                expect(mensagem).to.eq('Select Employee')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet')
            })
        })

        it('Validar a opção Recruitment do Menu', () => {
            homePage.ValidarOpcoesMenu('Recruitment').then((mensagem) => {
                expect(mensagem).to.eq('Candidates')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
            })
        })

        it('Validar a opção Performance do Menu', () => {
            homePage.ValidarOpcoesMenu('Performance').then((mensagem) => {
                expect(mensagem).to.eq('Employee Reviews')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview')
            })
        })

        it('Validar a opção DashBoard do Menu', () => {
            homePage.ValidarOpcoesMenu('DashBoard').then((mensagem) => {
                expect(mensagem).to.eq('Time at Work')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            })
        })

        it('Validar a opção Directory do Menu', () => {
            homePage.ValidarOpcoesMenu('Directory').then((mensagem) => {
                expect(mensagem).to.eq('Directory')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
            })
        })

        it('Validar a opção Maintenance do Menu', () => {
            homePage.ValidarOpcoesMenu('Maintenance').then((mensagem) => {
                expect(mensagem).to.eq('Administrator Access')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')
            })
        })

        it('Validar a opção Claim do Menu', () => {
            homePage.ValidarOpcoesMenu('Claim').then((mensagem) => {
                expect(mensagem).to.eq('Employee Claims')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim')
            })
        })

        it('Validar a opção Buzz do Menu', () => {
            homePage.ValidarOpcoesMenu('Buzz').then((mensagem) => {
                expect(mensagem).to.eq('Buzz Newsfeed')
            })
            homePage.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz')
            })
        })

        Context('Pesquisas', () => {




        })



    })
})