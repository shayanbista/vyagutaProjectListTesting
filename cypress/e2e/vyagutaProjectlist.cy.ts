import { vyagutaprojectListPage } from "../pages/vyagutaProjectListPage";

describe("Vyaguta  projectlist test", () => {
  beforeEach(() => {
    vyagutaprojectListPage.setRefreshToken();
    vyagutaprojectListPage.visitProjectListPage();
  });

  it("should open the projectlist page", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
  });

  it("should write the project name in the field and the result should be displayed", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
    vyagutaprojectListPage.searchByValidProjectName();
    cy.wait(2000);
    vyagutaprojectListPage.clickButton("button", "Apply Filter");
  });

  it("should write the invalid project name in the field and the result should be empty", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
    vyagutaprojectListPage.searchByInvalidProjectName();
    vyagutaprojectListPage.clickButton("button", "Apply Filter");
    cy.wait(3000);
    vyagutaprojectListPage.checkEmptySearchResult();
  });

  it("should reset the button", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
    vyagutaprojectListPage.searchByValidProjectName();
    vyagutaprojectListPage.clickButton("button", "Apply Filter");
    vyagutaprojectListPage.clickButton("button", "Reset");
    cy.wait(2000);
    vyagutaprojectListPage.checkSearchedResultLength();
  });

  it("should open the dropdown section and select the aviliable filtering option", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
    vyagutaprojectListPage.selectMoreFilterOption(1);
    vyagutaprojectListPage.selectMoreFilterOption(2);
    vyagutaprojectListPage.selectMoreFilterOption(3);
    vyagutaprojectListPage.clickButton("button", "Apply Filter");
  });

  it("should open the dropdown and select all the dropdown elements", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
    vyagutaprojectListPage.searchByFilter();
    vyagutaprojectListPage.removeAllOptionElements();
    vyagutaprojectListPage.searchByFilter();
    vyagutaprojectListPage.selectALLProjectStatus();
    vyagutaprojectListPage.clickButton("button", "Apply Filter");
    vyagutaprojectListPage.checkSearchedResultLength();
  });

  it("should open the dropdown and select the first  elements", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
    vyagutaprojectListPage.searchByFilter();
    vyagutaprojectListPage.elementClickHandler(".dropdown-select__indicator");
    vyagutaprojectListPage.searchByFilter();
    vyagutaprojectListPage.elementClickHandler(
      '[role="listbox"] [role="option"]',
    );
    vyagutaprojectListPage.clickButton("button", "Apply Filter");
    vyagutaprojectListPage.checkSearchedResultLength();
  });

  it("should display only the projectname when the selectAll option is clicked twice on book icon", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
    cy.wait(100);
    vyagutaprojectListPage.validateTableHeader();
  });

  it("should display all the header fields of table when the selectAll option is clicked once  on book icon", () => {
    vyagutaprojectListPage.closeReleaseNotePopup();
    cy.wait(100);
    vyagutaprojectListPage.validateTableHeaders();
  });
});
