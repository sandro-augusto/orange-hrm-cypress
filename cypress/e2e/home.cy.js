import homePage from "../support/pages/homePage";

describe('Validate the HomePage ', () => {

    context('Home validações',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })

        it('Validate the Menu Admin option', () => {
            homePage.ValidateOptionMenu('Admin').then((message) => {
                expect(message).eq('System Users')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
            })
        })

        it('Validate the Menu PIM option', () => {
            homePage.ValidateOptionMenu('PIM').then((message) => {
                expect(message).eq('Employee Information')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
            })
        })

        it('Validate the Menu Leave option', () => {
            homePage.ValidateOptionMenu('Leave').then((message) => {
                expect(message).eq('Leave List')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
            })
        })

        it('Validate the Menu Time option', () => {
            homePage.ValidateOptionMenu('Time').then((message) => {
                expect(message).eq('Select Employee')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet')
            })
        })

        it('Validate the Menu Recruitment option', () => {
            homePage.ValidateOptionMenu('Recruitment').then((message) => {
                expect(message).eq('Candidates')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
            })
        })

        it('Validate the Menu Performance option', () => {
            homePage.ValidateOptionMenu('Performance').then((message) => {
                expect(message).eq('Employee Reviews')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview')
            })
        })

        it('Validate the Menu DashBoard option', () => {
            homePage.ValidateOptionMenu('DashBoard').then((message) => {
                expect(message).eq('Time at Work')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            })
        })

        it('Validate the Menu Directory option', () => {
            homePage.ValidateOptionMenu('Directory').then((message) => {
                expect(message).eq('Directory')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory')
            })
        })

        it('Validate the Menu Maintenance option', () => {
            homePage.ValidateOptionMenu('Maintenance').then((message) => {
                expect(message).eq('Administrator Access')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee')
            })
        })

        it('Validate the Menu Claim option', () => {
            homePage.ValidateOptionMenu('Claim').then((message) => {
                expect(message).eq('Employee Claims')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim')
            })
        })

        it('Validate the Menu Buzz option', () => {
            homePage.ValidateOptionMenu('Buzz').then((message) => {
                expect(message).eq('Buzz Newsfeed')
            })
            homePage.validateUrlAdmin().then((url) => {
                expect(url).eq('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz')
            })
        })
    
    })
})