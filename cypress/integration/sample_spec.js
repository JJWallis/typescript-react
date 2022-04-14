/// <reference types="cypress" />

beforeEach(() => {
   cy.visit('/')
})

describe('input field', () => {
   it('updates correctly on user input', () => {
      const title = cy.contains('TODO')
      cy.get('.bmEWna').type('Hello').should('have.value', 'Hello')
      //   this is a test commit
   })
})
