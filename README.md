# Vyaguta E2E Testing

This README provides an overview of the end-to-end (e2e) testing setup for the Vyaguta project using Cypress.

## Table of Contents

- [Project Structure](#project-structure)
- [Test Files](#test-files)
- [Pages](#pages)
- [Commands and Utility Functions](#commands-and-utility-functions)
- [Setting Up Cypress](#setting-up-cypress)
- [Running Tests](#running-tests)

## Project Structure

The e2e tests are organized into the following structure:

```
cypress/
├── e2e/
│   ├── vyagutaHighlights.cy.ts
│   ├── vyagutaLogin.cy.ts
│   ├── vyagutaProjectlistPage.cy.ts
│   └── vyagutaProjectListPagination.cy.ts
├── pages/
│   ├── vyagutaHighlightsPage.ts
│   ├── vyagutaDashboardPage.ts
│   ├── vyagutaProjectListPage.ts
│   └── vyagutaProjectListPaginationPage.ts
├── commands/
│   ├── dashboardCommands.ts
│   ├── highlightCommands.ts
│   ├── projectListCommands.ts
│   └── projectListPaginationCommands.ts
└── utils/
    ├── closePopUp.ts
    ├── checkResultLength.ts
    ├── clickButton.ts
    ├── randomProjectName.ts
    └── checkElementDisability.ts
```

## Test Files

### vyagutaHighlights.cy.ts

- Tests for the highlights page functionality.
- Checks if the highlights page opens correctly.
- Verifies the release note popup modal behavior.

### vyagutaLogin.cy.ts

- Tests for the login process and dashboard access.
- Verifies successful login and dashboard loading.

### vyagutaProjectlistPage.cy.ts

- Tests for the project list page functionality.
- Includes tests for search, filtering, and table display.
- Verifies behavior with valid and invalid project names.
- Tests reset functionality and dropdown filtering options.

### vyagutaProjectListPagination.cy.ts

- Tests for pagination functionality on the project list page.
- Verifies record selection and display.
- Checks navigation through available pages and button states.

## Pages

The `pages` directory contains Page Object Model (POM) files for different pages in the application:

- **vyagutaHighlightsPage.ts**
- **vyagutaDashboardPage.ts**
- **vyagutaProjectListPage.ts**
- **vyagutaProjectListPaginationPage.ts**

These files encapsulate the selectors and actions for each page, making the tests more maintainable and readable.

## Commands and Utility Functions

Some custom commands and utility functions are used throughout the tests.

- `setRefreshToken()`: Sets the refresh token for authentication.
- `visitHighlightsPage()`: Navigates to the highlights page.
- `closeReleaseNotePopup()`: Closes the release note popup modal.
- `searchByValidProjectName()`: Performs a search using a valid project name.
- `searchByInvalidProjectName()`: Tests search functionality with an invalid project name.
- `checkEmptySearchResult()`: Verifies that the search result is empty.
- `selectMoreFilterOption()`: Selects filtering options from the dropdown.
- `validateTableHeader()`: Checks the table headers.
- `handlePaginationFilter()`: Manages pagination and filtering.
- `navigateAndCheckAllPages()`: Navigates through all available pages and checks button states.

## Setting Up Cypress

To set up Cypress for this project, follow these steps:

1. **Install Node.js:**

   If you don't have Node.js installed, download and install it from [Node.js official website](https://nodejs.org/). Verify the installation by running:

   ```bash
   node -v
   npm -v
   ```

2. **Initialize npm (if not already initialized):**

   Run the following command in the root directory of your project to initialize npm and create a `package.json` file:

   ```bash
   npm init -y
   ```

3. **Install dependencies:**

   Install the required project dependencies by running:

   ```bash
   npm install
   ```

4. **Install Cypress:**

   If Cypress is not already installed, install it as a development dependency:

   ```bash
   npm install cypress --save-dev
   ```

5. **Set up TypeScript (if not already set up):**

   Install TypeScript and its Cypress types:

   ```bash
   npm install --save-dev typescript @types/node @types/cypress
   ```

6. **Configure Cypress for TypeScript by creating a `tsconfig.json` file in your project root:**

   Create the `tsconfig.json` file with the following content:

   ```json
   {
     "compilerOptions": {
       "target": "es5",
       "lib": ["es5", "dom"],
       "types": ["cypress", "node"]
     },
     "include": ["**/*.ts"]
   }
   ```

7. **Create a `cypress.config.ts` file in your project root:**

   Create the `cypress.config.ts` file with the following content:

   ```typescript
   import { defineConfig } from "cypress";

   export default defineConfig({
     e2e: {
       setupNodeEvents(on, config) {
         // implement node event listeners here
       },
       specPattern: "cypress/e2e/**/*.cy.ts",
     },
   });
   ```

## Running Tests

To run the Cypress tests:

1. **Open Cypress Test Runner:**

   Run the following command to open the Cypress Test Runner:

   ```bash
   npx cypress open
   ```

2. Select "E2E Testing" from the Cypress Test Runner.
3. Choose a browser to run the tests.
4. Click on a test file to run individual tests, or run all tests by clicking "Run all specs".

To run tests in headless mode:

```bash
npx cypress run
```
