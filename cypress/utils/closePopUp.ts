/**
 * Closes a release popup by clicking on an element specified by its class name.
 *
 * @param {string} className - The class name of the popup element to be clicked.
 * @returns {Cypress.Chainable<void>} A chainable Cypress command.
 *
 * @example
 * // Example usage
 * closeReleasePopUp('.release-popup');
 */

export function closeReleasePopUp(className: string) {
  cy.get(className).click();
}
