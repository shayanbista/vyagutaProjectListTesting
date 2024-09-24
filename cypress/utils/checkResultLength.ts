/**
 * Checks that the length of the searched table results is greater than zero.
 *
 * This function verifies that there are search results displayed in the table by checking 
 * that the number of span elements within the table rows is greater than zero.
 *
 * @returns {Cypress.Chainable} A Chainable that can be used for further assertions or actions.
 *
 * @example
 * checkSearchedTableResultLength().then(() => {
 *   // Additional actions after checking the table result length
 * });
 */

export const checkSearchedTableResultLength = () => {
  cy.get("tr.lf-table__row").find("span").should("have.length.greaterThan", 0);
};
