// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('retries this test', { retries: 3 }, () => {
  cy.visit('/cypress-examples/')
})
