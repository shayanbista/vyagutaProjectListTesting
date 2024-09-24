import { vyagutaprojectListPage } from "../pages/vyagutaProjectListPage";
import { vyagutaprojectListPaginationPage } from "../pages/vyagutaProjectListPaginationPage";

describe("Vyaguta  projectlistPagination test", () => {
  beforeEach(() => {
    vyagutaprojectListPage.setRefreshToken();
    vyagutaprojectListPage.visitProjectListPage();
  });

  it("should select the 20 records option  and display the assinged number or records", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
    cy.wait(100);
    vyagutaprojectListPaginationPage.handlePaginationFilter();
  });

  it("should navigate through all the aviliable pages and check the buttons disablility ", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
    cy.wait(100);
    const totalPages = vyagutaprojectListPaginationPage
      .getTotalPages()
      .then((pages) => {
        vyagutaprojectListPaginationPage.navigateAndCheckAllPages(pages);
      });
  });
});
