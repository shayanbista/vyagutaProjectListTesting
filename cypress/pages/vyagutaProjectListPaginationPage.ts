class VyagutaprojectListPaginationPage {
  private projectListUrl: string;
  constructor() {
    this.projectListUrl = `${Cypress.env("baseUrl")}teams/projects/list?order=asc&statusIds=4,5&sortBy=projectName&size=40`;
  }
  visitProjectListPage() {
    cy.visit(this.projectListUrl);
  }

  handlePaginationFilter() {
    cy.handlePaginationFilter();
  }

  getTotalPages() {
    return cy.getTotalPages();
  }

  navigateAndCheckAllPages(pages: number) {
    cy.navigateAndCheckAllPages(pages);
  }
}

export const vyagutaprojectListPaginationPage =
  new VyagutaprojectListPaginationPage();
