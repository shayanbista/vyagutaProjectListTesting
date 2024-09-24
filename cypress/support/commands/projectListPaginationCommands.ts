import { checkElementDisability } from "../../utils/checkElementDisability";

Cypress.Commands.add("navigateAndCheckAllPages", () => {
  cy.getTotalPages().then((totalPages) => {
    const iteratePages = (currentPage) => {
      if (currentPage < totalPages) {
        currentPage === 1
          ? checkElementDisability(".lf-table__pagination-btn", "Prev")
          : null;
        cy.get(".lf-table__pagination-btn").contains("Next").click();
        cy.wait(500);
        iteratePages(currentPage + 1);
      } else {
        checkElementDisability(".lf-table__pagination-btn", "Next");
      }
    };
    iteratePages(1);
  });
});

Cypress.Commands.add("getTotalPages", () => {
  return cy
    .get(".lf-table__pagination-status")
    .invoke("text")
    .then((paginationText) => {
      const match = paginationText.match(/Page \d+ of (\d+)/);
      return parseInt(match ? match[1] : "1", 10);
    });
});

Cypress.Commands.add("handlePaginationFilter", () => {
  cy.get(".lf-table__pagination-dropdown").select("20");
  cy.get("tr.lf-table__row")
    .filter((index, el) => {
      return true;
    })
    .should("have.length", 20);
});
