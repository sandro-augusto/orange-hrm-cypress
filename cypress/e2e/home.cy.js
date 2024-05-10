import home from "../support/pages/homePage";

describe('Validate the HomePage', () => {

    context('Home validations',() => {
        beforeEach(() => {
            cy.loginSuccess()
        })

        it('Validate the Menu Admin option', () => {
            home.ValidateOptionMenu('Admin').then((mensagem) => {
                expect(mensagem).to.eq('System Users')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
            })
        })

        it('Validate the PIM Menu option', () => {
            home.ValidateOptionMenu('PIM').then((mensagem) => {
                expect(mensagem).to.eq('Employee Information')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
            })
        })

        it('Validate the Leave menu option', () => {
            home.ValidateOptionMenu('Leave').then((mensagem) => {
                expect(mensagem).to.eq('Leave List')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
            })
        })

        it('Validate the Menu Time option', () => {
            home.ValidateOptionMenu('Time').then((mensagem) => {
                expect(mensagem).to.eq('Select Employee')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet')
            })
        })

        it('Validate the Recruitment option in the Menu', () => {
            home.ValidateOptionMenu('Recruitment').then((mensagem) => {
                expect(mensagem).to.eq('Candidates')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
            })
        })

        it('Validate the Menu Performance option', () => {
            home.ValidateOptionMenu('Performance').then((mensagem) => {
                expect(mensagem).to.eq('Employee Reviews')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview')
            })
        })

        it('Validate the Menu DashBoard option', () => {
            home.ValidateOptionMenu('DashBoard').then((mensagem) => {
                expect(mensagem).to.eq('Time at Work')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            })
        })

        it('Validate the Menu Directory option', () => {
            home.ValidateOptionMenu('Directory').then((mensagem) => {
                expect(mensagem).to.eq('Directory')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
            })
        })

        it('Validate the Menu Maintenance option', () => {
            home.ValidateOptionMenu('Maintenance').then((mensagem) => {
                expect(mensagem).to.eq('Administrator Access')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')
            })
        })

        it('Validate the Claim menu option', () => {
            home.ValidateOptionMenu('Claim').then((mensagem) => {
                expect(mensagem).to.eq('Employee Claims')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim')
            })
        })

        it('Validate the Menu Buzz option', () => {
            home.ValidateOptionMenu('Buzz').then((mensagem) => {
                expect(mensagem).to.eq('Buzz Newsfeed')
            })
            home.validaUrlAdmin().then((url) => {
                expect(url).to.eq('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz')
            })
        })
    
    })
})