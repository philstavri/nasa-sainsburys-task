// https://docs.cypress.io/api/introduction/api.html

describe('Welcome page', () => {
  it('loads with welcome text', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome')
  })
})
