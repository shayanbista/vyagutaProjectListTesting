class VyagutaHighlightsPage {
  private highlightsUrl: string;

  constructor() {
    this.highlightsUrl = `${Cypress.env("baseUrl")}teams/highlights`;
  }
  visitHighlightsPage() {
    cy.visit(this.highlightsUrl);
  }
  setRefreshToken() {
    cy.setRefreshToken();
  }

  handleClick(identifier: string, innerText: string) {
    cy.handleClick(identifier, innerText);
  }

  closeReleaseNotePopup() {
    cy.closeReleasePopUp(".cursor-pointer.align-self-center");
  }
}

export const vyagutaHighlightsPage = new VyagutaHighlightsPage();
