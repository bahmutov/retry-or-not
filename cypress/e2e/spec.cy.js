// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('retries this test', { retries: 2, defaultCommandTimeout: 1000 }, () => {
  cy.visit('/cypress-examples/')
  // this element does not exist
  cy.get('#foo')
})

afterEach(() => {
  cy.log('**after each**')
  if (cy.state('test').state === 'failed') {
    console.log(cy.state('test').err)
    if (cy.state('test').err.message.includes('cy.visit')) {
      console.error('test failed because of cy.visit')
      console.error('skipping retries')
      cy.state('test')._testConfig.testConfigList[0].overrides.retries = -1
    }
  }
})
