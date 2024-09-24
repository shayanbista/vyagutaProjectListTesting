/**
 * Checks that a specified element is disabled.
 *
 * This function looks for an element matching the provided class name that contains 
 * the specified text and asserts that it is disabled.
 *
 * @param {string} className - The CSS class name of the element to check.
 * @param {string} elementName - The text contained in the element to locate it.
 * @returns {Cypress.Chainable} A Chainable that can be used for further assertions or actions.
 *
 * @example
 * checkElementDisability('.submit-button', 'Submit').then(() => {
 *   // Additional actions after verifying the element is disabled
 * });
 */

export const checkElementDisability = (
  className: string,
  elementName: string,
) => {
  cy.get(className).contains(elementName).should("be.disabled");
};
