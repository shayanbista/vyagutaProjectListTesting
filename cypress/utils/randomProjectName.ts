/**
 * Retrieves a random name from a specified type in the projectNames fixture.
 *
 * @param {string} nameType - The type of name to retrieve from the fixture.
 * @returns {Cypress.Chainable<string>} A promise that resolves to a random name of the specified type.
 * @throws {Error} Throws an error if no names are found for the specified type.
 *
 * @example
 * // Example usage
 * getRandomNameFromFixture('validNames').then((randomName) => {
 *   cy.log(randomName);
 * });
 */
export const getRandomNameFromFixture = (nameType) => {
  return cy.fixture("projectNames").then((data) => {
    const namesArray = data[nameType];

    if (!namesArray) {
      throw new Error(`No names found for type: ${nameType}`);
    }

    const randomIndex = Math.floor(Math.random() * namesArray.length);
    const randomName = namesArray[randomIndex];
    console.log("Random Name:", randomName);
    return randomName;
  });
};
