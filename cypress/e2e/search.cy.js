import home from "../support/pages/homePage";

describe('Validate menu search', () => {

    context('Search menu validations',() => {
        beforeEach(() => {
            cy.loginSuccess()
        })
        
        it('Search by Admin', () => {
            home.validateResultSearch('Admin').then((mensagem) => {
                expect(mensagem).to.eq("Admin")
            })
        })

        it('Search by PIM', () => {
            home.validateResultSearch('PIM').then((mensagem) => {
                expect(mensagem).to.eq("PIM")
            })
        })

        it('Search by Leave', () => {
            home.validateResultSearch('Leave').then((mensagem) => {
                expect(mensagem).to.eq("Leave")
            })
        })

        it('Search by Time', () => {
            home.validateResultSearch('Time').then((mensagem) => {
                expect(mensagem).to.eq("Time")
            })
        })

        it('Search by Recruitment', () => {
            home.validateResultSearch('Recruitment').then((mensagem) => {
                expect(mensagem).to.eq("Recruitment")
            })
        })

        it('Search by My Info', () => {
            home.validateResultSearch('My Info').then((mensagem) => {
                expect(mensagem).to.eq("My Info")
            })
        })

        it('Search by Performance', () => {
            home.validateResultSearch('Performance').then((mensagem) => {
                expect(mensagem).to.eq("Performance")
            })
        })

        it('Search by Dashboard', () => {
            home.validateResultSearch('Dashboard').then((mensagem) => {
                expect(mensagem).to.eq("Dashboard")
            })
        })

        it('Search by Directory', () => {
            home.validateResultSearch('Directory').then((mensagem) => {
                expect(mensagem).to.eq("Directory")
            })
        })

        it('Search by Maintenance', () => {
            home.validateResultSearch('Maintenance').then((mensagem) => {
                expect(mensagem).to.eq("Maintenance")
            })
        })

        it('Search by Claim', () => {
            home.validateResultSearch('Claim').then((mensagem) => {
                expect(mensagem).to.eq("Claim")
            })
        })

        it('Search by Buzz', () => {
            home.validateResultSearch('Buzz').then((mensagem) => {
                expect(mensagem).to.eq("Buzz")
            })
        })
    })
})