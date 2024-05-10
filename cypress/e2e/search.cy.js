import homePage from "../support/pages/homePage";

describe('Validate menu search', () => {

    context('Search menu validations',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })
        
        it('Search by Admin', () => {
            homePage.validateResultSearch('Admin').then((message) => {
                expect(message).eq("Admin")
            })
        })

        it('Search by PIM', () => {
            homePage.validateResultSearch('PIM').then((message) => {
                expect(message).eq("PIM")
            })
        })

        it('Search by Leave', () => {
            homePage.validateResultSearch('Leave').then((message) => {
                expect(message).eq("Leave")
            })
        })

        it('Search by Time', () => {
            homePage.validateResultSearch('Time').then((message) => {
                expect(message).eq("Time")
            })
        })

        it('Search by Recruitment', () => {
            homePage.validateResultSearch('Recruitment').then((message) => {
                expect(message).eq("Recruitment");
            })
        })

        it('Search by My Info', () => {
            homePage.validateResultSearch('My Info').then((message) => {
                expect(message).eq("My Info");
            })
        })

        it('Search by Performance', () => {
            homePage.validateResultSearch('Performance').then((message) => {
                expect(message).eq("Performance");
            })
        })

        it('Search by Dashboard', () => {
            homePage.validateResultSearch('Dashboard').then((message) => {
                expect(message).eq("Dashboard");
            })
        })

        it('Search by Directory', () => {
            homePage.validateResultSearch('Directory').then((message) => {
                expect(message).eq("Directory");
            })
        })

        it('Search by Maintenance', () => {
            homePage.validateResultSearch('Maintenance').then((message) => {
                expect(message).eq("Maintenance");
            })
        })

        it('Search by Claim', () => {
            homePage.validateResultSearch('Claim').then((message) => {
                expect(message).eq("Claim");
            })
        })

        it('Search by Buzz', () => {
            homePage.validateResultSearch('Buzz').then((message) => {
                expect(message).eq("Buzz");
            })
        })
    })
})