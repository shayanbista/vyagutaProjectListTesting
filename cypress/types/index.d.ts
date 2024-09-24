declare namespace Cypress {
  interface Chainable {
    setRefreshToken(): Chainable<Element>;
    checkDashboardVisibility(): Chainable<Element>;
    closeReleasePopUp(text: string): Chainable<Element>;
    handleClick(identifier: string, innerText: string): Chainable<Element>;
    moreFilterOption(index: number): Chainable<Element>;
    searchByValidProjectName(): Chainable<Element>;
    searchByInvalidProjectName(): Chainable<Element>;
    checkSearchedResultLength(): Chainable<Element>;
    checkEmptySearchResult(): Chainable<Element>;
    selectAllProjectStatus(): Chainable<Element>;
    searchByFilter(): Chainable<Element>;
    validateTableHeader(): Chainable<Element>;
    validateTableHeaders(): Chainable<Element>;
    removeAllOptionElements(): Chainable<Element>;
    navigateAndCheckAllPages(query: number): Chainable<Element>;
    getTotalPages(): Chainable<number>;
    handlePaginationFilter(): Chainable<void>;
  }
}
