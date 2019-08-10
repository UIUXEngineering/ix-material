import { getGreeting } from '../support/app.po';

describe('uiux', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to uiux!');
  });
});
