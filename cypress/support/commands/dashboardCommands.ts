import { closeReleasePopUp } from "../../utils/closePopUp";

Cypress.Commands.add("setRefreshToken", () => {
  const refreshToken = Cypress.env("refreshToken");
  console.log("refreshToken", refreshToken);
  if (refreshToken) {
    cy.setCookie("refreshToken", refreshToken);
  } else {
    throw new Error("Access token not found in Cypress environment.");
  }
});

Cypress.Commands.add("checkDashboardVisibility", () => {
  cy.get("div[role='dialog']").should("be.visible");
  closeReleasePopUp(".releaseNote_module_closeIcon__d63012a8");
  cy.get("h4")
    .first()
    .parents("div")
    .first()
    .should("exist")
    .invoke("text")
    .then((text) => {
      expect(text).to.not.be.undefined;
      expect(text.trim()).to.not.be.empty;
    });
});
