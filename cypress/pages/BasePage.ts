class BasePage {
  closeReleaseNotePopup(className: string) {
    // cy.closeReleasePopUp(".cursor-pointer.align-self-center");
    cy.closeReleasePopUp(className);
  }
}
