export const checkSearchedTableResultLength = () => {
  cy.get("tr.lf-table__row").find("span").should("have.length.greaterThan", 0);
};
