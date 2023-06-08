// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

beforeEach(() => {
  cy.log(`current retry **${Cypress.currentRetry}**`)
  if (Cypress.currentRetry) {
    // control the sleep duration based on the retry index
    cy.wait(Cypress.currentRetry * 5_000)
  }
})

it(
  'retries the test with longer backoff',
  { retries: 2, defaultCommandTimeout: 1000 },
  () => {
    cy.visit('/cypress-examples/')
    // this element does not exist
    cy.get('#foo')
  },
)
