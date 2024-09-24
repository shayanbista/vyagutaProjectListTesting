class VyagutaDashboardPage {
  private baseUrl: string;

  constructor() {
    this.baseUrl = Cypress.env("baseUrl");
  }
  visit() {
    cy.visit(this.baseUrl);
  }
  setRefreshToken() {
    cy.setRefreshToken();
  }
  checkNotes() {
    cy.checkDashboardVisibility();
  }
}

export const vyagutaDashboardPage = new VyagutaDashboardPage();
