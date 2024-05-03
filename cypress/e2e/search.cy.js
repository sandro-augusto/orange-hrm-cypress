import homePage from "../support/pages/homePage";

describe('Validate menu search', () => {

    context('Search menu validations',() => {
        beforeEach(() => {
            cy.LoginSucesso()
        })
        
        it('Search by Admin', () => {
            homePage.validateResultSearch('Admin').then((mensagem) => {
                expect(mensagem).to.eq("Admin")
            })
        })

        it('Search by PIM', () => {
            homePage.validateResultSearch('PIM').then((mensagem) => {
                expect(mensagem).to.eq("PIM")
            })
        })

        it('Search by Leave', () => {
            homePage.validateResultSearch('Leave').then((mensagem) => {
                expect(mensagem).to.eq("Leave")
            })
        })

        it('Search by Time', () => {
            homePage.validateResultSearch('Time').then((mensagem) => {
                expect(mensagem).to.eq("Time")
            })
        })

        it('Search by Recruitment', () => {
            homePage.validateResultSearch('Recruitment').then((mensagem) => {
                expect(mensagem).to.eq("Recruitment");
            })
        })

        it('Search by My Info', () => {
            homePage.validateResultSearch('My Info').then((mensagem) => {
                expect(mensagem).to.eq("My Info");
            })
        })

        it('Search by Performance', () => {
            homePage.validateResultSearch('Performance').then((mensagem) => {
                expect(mensagem).to.eq("Performance");
            })
        })

        it('Search by Dashboard', () => {
            homePage.validateResultSearch('Dashboard').then((mensagem) => {
                expect(mensagem).to.eq("Dashboard");
            })
        })

        it('Search by Directory', () => {
            homePage.validateResultSearch('Directory').then((mensagem) => {
                expect(mensagem).to.eq("Directory");
            })
        })

        it('Search by Maintenance', () => {
            homePage.validateResultSearch('Maintenance').then((mensagem) => {
                expect(mensagem).to.eq("Maintenance");
            })
        })

        it('Search by Claim', () => {
            homePage.validateResultSearch('Claim').then((mensagem) => {
                expect(mensagem).to.eq("Claim");
            })
        })

        it('Search by Buzz', () => {
            homePage.validateResultSearch('Buzz').then((mensagem) => {
                expect(mensagem).to.eq("Buzz");
            })
        })
    })
})