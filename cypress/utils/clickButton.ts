export function clickButton(identifier: string, innerText: string) {
  cy.contains(identifier, innerText).click();
}
