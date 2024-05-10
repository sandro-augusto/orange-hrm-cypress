import home from "../support/pages/homePage";

describe('Validar a HomePage ', () => {

    context('Home validations',() => {
        beforeEach(() => {
            cy.loginSuccess()
        })

        it('Validar a opção Admin do Menu', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
            })
        })

        it('Validar a opção PIM do Menu', () => {
            home.ValidateOptionMenu('PIM').then((mensagem) => {
                expect(mensagem).to.eq('Employee Information')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
            })
        })

        it('Validar a opção Leave do Menu', () => {
            home.ValidateOptionMenu('Leave').then((mensagem) => {
                expect(mensagem).to.eq('Leave List')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
            })
        })

        it('Validar a opção Time do Menu', () => {
            home.ValidateOptionMenu('Time').then((mensagem) => {
                expect(mensagem).to.eq('Select Employee')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet')
            })
        })

        it('Validar a opção Recruitment do Menu', () => {
            home.ValidateOptionMenu('Recruitment').then((mensagem) => {
                expect(mensagem).to.eq('Candidates')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
            })
        })

        it('Validar a opção Performance do Menu', () => {
            home.ValidateOptionMenu('Performance').then((mensagem) => {
                expect(mensagem).to.eq('Employee Reviews')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview')
            })
        })

        it('Validar a opção DashBoard do Menu', () => {
            home.ValidateOptionMenu('DashBoard').then((mensagem) => {
                expect(mensagem).to.eq('Time at Work')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            })
        })

        it('Validar a opção Directory do Menu', () => {
            home.ValidateOptionMenu('Directory').then((mensagem) => {
                expect(mensagem).to.eq('Directory')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
            })
        })

        it('Validar a opção Maintenance do Menu', () => {
            home.ValidateOptionMenu('Maintenance').then((mensagem) => {
                expect(mensagem).to.eq('Administrator Access')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')
            })
        })

        it('Validar a opção Claim do Menu', () => {
            home.ValidateOptionMenu('Claim').then((mensagem) => {
                expect(mensagem).to.eq('Employee Claims')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim')
            })
        })

        it('Validar a opção Buzz do Menu', () => {
            home.ValidateOptionMenu('Buzz').then((mensagem) => {
                expect(mensagem).to.eq('Buzz Newsfeed')
            })
            home.validateUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz')
            })
        })
    
    })
})