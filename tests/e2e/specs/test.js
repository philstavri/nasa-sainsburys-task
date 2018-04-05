// https://docs.cypress.io/api/introduction/api.html

describe('Welcome page', () => {
  it('loads with welcome text', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome')
  })

  describe('when click on link to Search', function () {
    before(function () {
      cy.get('a').click()
    })

    it('should go to search page', function () {
      cy.url().should('include', '/search')
    })
  })
})
