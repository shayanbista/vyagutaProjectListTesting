/**
 * Retrieves a random name from a specified type in the projectNames fixture.
 *
 * @param {string} nameType - The type of names to retrieve from the fixture.
 * @returns {Cypress.Chainable<string>} A Chainable that resolves to a random name from the specified type.
 * @throws {Error} Throws an error if no names are found for the specified type.
 *
 * @example
 * getRandomNameFromFixture('validNames').then((randomName) => {
 *   // Use the random name in a test
 *   cy.log(randomName);
 * });
 */

export function clickButton(identifier: string, innerText: string) {
  cy.contains(identifier, innerText).click();
}
