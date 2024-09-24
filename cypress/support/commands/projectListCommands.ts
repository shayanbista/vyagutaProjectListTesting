import { checkSearchedTableResultLength } from "../../utils/checkResultLength";
import { clickButton } from "../../utils/clickButton";
import { closeReleasePopUp } from "../../utils/closePopUp";
import { getRandomNameFromFixture } from "../../utils/randomProjectName";

Cypress.Commands.add("closeReleasePopUp", (className: string) => {
  closeReleasePopUp(".cursor-pointer.align-self-center");
});

Cypress.Commands.add("handleClick", (identifier: string, innerText: string) => {
  clickButton(identifier, innerText);
});

Cypress.Commands.add("moreFilterOption", (index: number) => {
  clickButton(".filter__item--more", "More Filter");
  cy.get(".dropdown-select__option").should("be.visible");
  cy.get(".dropdown-select__option").eq(index).click();
});

Cypress.Commands.add("searchByValidProjectName", () => {
  return getRandomNameFromFixture("validNames").then((validName) => {
    cy.get("input[placeholder='Search by project name']").type(validName);
    cy.get(".d-flex.align-items-center.project-name").should(
      "contain.text",
      validName,
    );
  });
});

Cypress.Commands.add("searchByInvalidProjectName", () => {
  return getRandomNameFromFixture("invalidNames").then((invalidName) => {
    cy.get("input[placeholder='Search by project name']").type(invalidName);
  });
});

Cypress.Commands.add("checkSearchedResultLength", () => {
  checkSearchedTableResultLength();
});

Cypress.Commands.add("checkEmptySearchResult", () => {
  cy.contains("h5", "We cannot find the project you are searching.").should(
    "be.visible",
  );
});

Cypress.Commands.add("selectAllProjectStatus", () => {
  cy.get('[role="listbox"] [role="option"]').then(($options) => {
    const optionTexts = $options.map((_, el) => Cypress.$(el).text()).get();

    optionTexts.forEach((optionText) => {
      cy.get('[role="listbox"] [role="option"]')
        .contains(optionText)
        .click({ force: true });
      cy.wait(500);
      cy.searchByFilter();
    });

    cy.get('button[type="button"][class*="dropdown-button"]')
      .contains("Project Status")
      .click({ force: true });
  });
});

Cypress.Commands.add("searchByFilter", () => {
  cy.get('button[type="button"][class*="dropdown-button"]')
    .contains("Project Status")
    .click();
});

Cypress.Commands.add("validateTableHeader", () => {
  cy.get('button[aria-label="add-columns"]').click();
  cy.get('label[for="dropdownSelectAll"]').dblclick();
  cy.get("th").contains("Project Name").should("be.visible");
});

Cypress.Commands.add("validateTableHeaders", () => {
  cy.get('button[aria-label="add-columns"]').click();
  cy.get('label[for="dropdownSelectAll"]').click();

  cy.fixture("tableHeaders").then((data) => {
    const expectedHeaders = data.headers;

    cy.get("thead th").each(($th, index) => {
      const actualText = $th.text().trim();
      expect(actualText).to.include(expectedHeaders[index]);
    });
  });
});

Cypress.Commands.add("closeReleasePopUp", (className: string) => {
  closeReleasePopUp(className);
});

Cypress.Commands.add("removeAllOptionElements", () => {
  cy.get(".dropdown-select__indicator").last().click();
});
