import home from "../support/pages/homePage";

describe("Validate the HomePage", () => {
  context("Home validations", () => {
    beforeEach(() => {
      cy.loginSuccess()
    })

    it("Validate the Admin menu option", () => {
      home.ValidateOptionMenu("Admin").then((mensagem) => {
        expect(mensagem).to.eq("System Users")
      })
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
        )
      })
    })

    it("Validate the PIM menu option", () => {
      home.ValidateOptionMenu("PIM").then((mensagem) => {
        expect(mensagem).to.eq("Employee Information")
      })
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
        )
      })
    })

    it("Validate the Leave menu option", () => {
      home.ValidateOptionMenu("Leave").then((mensagem) => {
        expect(mensagem).to.eq("Leave List");
      });
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList"
        );
      });
    });

    it("Validate the Time menu option", () => {
      home.ValidateOptionMenu("Time").then((mensagem) => {
        expect(mensagem).to.eq("Select Employee")
      })
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet"
        )
      })
    })

    it("Validate the Recruitment menu option", () => {
      home.ValidateOptionMenu("Recruitment").then((mensagem) => {
        expect(mensagem).to.eq("Candidates")
      })
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"
        )
      })
    })

    it("Validate the Performance menu option", () => {
      home.ValidateOptionMenu("Performance").then((mensagem) => {
        expect(mensagem).to.eq("Employee Reviews")
      })
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview"
        )
      })
    })

    it("Validate the DashBoard menu option", () => {
      home.ValidateOptionMenu("DashBoard").then((mensagem) => {
        expect(mensagem).to.eq("Time at Work")
      })
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
        )
      })
    })

    it("Validate the Directory menu option", () => {
      home.ValidateOptionMenu("Directory").then((mensagem) => {
        expect(mensagem).to.eq("Directory")
      })
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory"
        )
      })
    })

    it("Validate the Maintenance menu option", () => {
      home.ValidateOptionMenu("Maintenance").then((mensagem) => {
        expect(mensagem).to.eq("Administrator Access")
      })
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee"
        )
      })
    })

    it("Validate the Claim menu option", () => {
      home.ValidateOptionMenu("Claim").then((mensagem) => {
        expect(mensagem).to.eq("Employee Claims")
      })
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim"
        )
      })
    })

    it("Validate the Buzz menu option", () => {
      home.ValidateOptionMenu("Buzz").then((mensagem) => {
        expect(mensagem).to.eq("Buzz Newsfeed")
      })
      home.validateUrlAdmin().then((url) => {
        expect(url).to.eq(
          "https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz"
        )
      })
    })
  })
})