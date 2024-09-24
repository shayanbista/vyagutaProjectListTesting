export function closeReleasePopUp(className: string) {
  cy.get(className).click();
}
