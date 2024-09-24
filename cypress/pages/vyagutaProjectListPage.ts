class VyagutaprojectListPage {
  private projectListUrl: string;
  constructor() {
    this.projectListUrl = `${Cypress.env("baseUrl")}teams/projects/list?order=asc&statusIds=4,5&sortBy=projectName&size=40`;
  }
  visitProjectListPage() {
    cy.visit(this.projectListUrl);
  }
  setRefreshToken() {
    cy.setRefreshToken();
  }

  closeReleaseNotePopup() {
    cy.closeReleasePopUp(".cursor-pointer.align-self-center");
  }

  searchByValidProjectName() {
    cy.searchByValidProjectName();
  }

  searchByInvalidProjectName() {
    cy.searchByInvalidProjectName();
  }

  checkSearchedResultLength() {
    cy.checkSearchedResultLength();
  }
  checkEmptySearchResult() {
    cy.checkEmptySearchResult();
  }

  removeAllOptionElements() {
    cy.removeAllOptionElements();
  }

  selectALLProjectStatus() {
    cy.selectAllProjectStatus();
  }

  selectMoreFilterOption(index: number) {
    cy.moreFilterOption(index);
  }

  elementClickHandler(selector: string) {
    cy.elementClickHandler(selector);
  }

  searchByFilter() {
    cy.searchByFilter();
  }

  clickButton(identifier: string, innerText: string) {
    cy.handleClick(identifier, innerText);
  }

  validateTableHeader() {
    cy.validateTableHeader();
  }

  validateTableHeaders() {
    cy.validateTableHeaders();
  }
}

export const vyagutaprojectListPage = new VyagutaprojectListPage();
