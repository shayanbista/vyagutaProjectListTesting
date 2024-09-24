import { vyagutaDashboardPage } from "../pages/vyagutaDashboardPage";

describe("Vyaguta Login Test", () => {
  it("should login and open the dashboard", () => {
    cy.log("refreshtoken", process.env.REFRESH_TOKEN);
    vyagutaDashboardPage.setRefreshToken();
    vyagutaDashboardPage.visit();
    vyagutaDashboardPage.checkNotes();
  });
});
