import { closeReleasePopUp } from "../../utils/closePopUp";

Cypress.Commands.add("closeReleasePopUp", (className: string) => {
  closeReleasePopUp(className);
});
