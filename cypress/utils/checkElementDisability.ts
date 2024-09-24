export const checkElementDisability = (
  className: string,
  elementName: string,
) => {
  cy.get(className).contains(elementName).should("be.disabled");
};
