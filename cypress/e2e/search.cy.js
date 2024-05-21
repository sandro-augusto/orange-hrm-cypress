import home from "../support/pages/homePage";

describe("Validate search menu", () => {
  context("Search menu validations", () => {
    beforeEach(() => {
      cy.loginSuccess()
    })

    it("Search by Admin", () => {
      home.validateSearchResult("Admin").then((mensagem) => {
        expect(mensagem).to.eq("Admin")
      })
    })

    it("Search by PIM", () => {
      home.validateSearchResult("PIM").then((mensagem) => {
        expect(mensagem).to.eq("PIM")
      })
    })

    it("Search by Leave", () => {
      home.validateSearchResult("Leave").then((mensagem) => {
        expect(mensagem).to.eq("Leave")
      })
    })

    it("Search by Time", () => {
      home.validateSearchResult("Time").then((mensagem) => {
        expect(mensagem).to.eq("Time")
      })
    })

    it("Search by Recruitment", () => {
      home.validateSearchResult("Recruitment").then((mensagem) => {
        expect(mensagem).to.eq("Recruitment")
      })
    })

    it("Search by My Info", () => {
      home.validateSearchResult("My Info").then((mensagem) => {
        expect(mensagem).to.eq("My Info")
      })
    })

    it("Search by Performance", () => {
      home.validateSearchResult("Performance").then((mensagem) => {
        expect(mensagem).to.eq("Performance")
      })
    })

    it("Search by Dashboard", () => {
      home.validateSearchResult("Dashboard").then((mensagem) => {
        expect(mensagem).to.eq("Dashboard")
      })
    })

    it("Search by Directory", () => {
      home.validateSearchResult("Directory").then((mensagem) => {
        expect(mensagem).to.eq("Directory")
      })
    })

    it("Search by Maintenance", () => {
      home.validateSearchResult("Maintenance").then((mensagem) => {
        expect(mensagem).to.eq("Maintenance")
      })
    })

    it("Search by Claim", () => {
      home.validateSearchResult("Claim").then((mensagem) => {
        expect(mensagem).to.eq("Claim")
      })
    })

    it("Search by Buzz", () => {
      home.validateSearchResult("Buzz").then((mensagem) => {
        expect(mensagem).to.eq("Buzz")
      })
    })
  })
})