import './commands';

declare global {
	namespace Cypress {
		interface Chainable {
			dataCy(value: string): Chainable<JQuery<HTMLElement>>;
		}
	}
}

Cypress.Commands.add('dataCy', (value) => {
	return cy.get(`[data-cy=${value}]`);
});
