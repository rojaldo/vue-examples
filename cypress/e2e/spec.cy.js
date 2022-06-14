describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080');
    cy.wait(500);    
    // check title
    cy.title().should('eq', 'my-project');
  })
})