/// <reference types="cypress" />
describe('App',  () => {
  it('.should() - assert that <title> is correct', () => {
      // cy.visit('http://localhost:3000');
      cy.visit('/');
      cy.title().should('equal', 'AngularUiExperimenting');
  });

  // context('Querying', () => {
  //     beforeEach(() => {
  //         cy.visit('http://localhost:3000');
  //     });

  //     it('cy.get() - query DOM elements', () => {
  //         cy.get('#appIntro').should('contain', 'This is a proof of concept Application.');
  //     })
  // });

  // context('Events', () => {
  //     it('.click() - click on a DOM element', () => {
  //         cy.get('#actionMessage').should('contain', 'Do not press the button!');
  //         cy.get('#actionBtn').click();
  //         cy.get('#actionMessage').should('contain', 'Boom!');
  //     })
  // });
});