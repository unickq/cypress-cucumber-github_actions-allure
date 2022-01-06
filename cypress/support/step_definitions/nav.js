import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import "cypress-network-idle";

Given("I open {string} page", (url) => {
  cy.visit(url);
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});

Then(`I see {string} in the h1`, (text) => {
  cy.get("h1").should("contain.text", text);
});

Then(`Page url contain {string}`, (value) => {
  cy.url().should("include", value);
});

Then(`I press {string} key`, (key) => {
  cy.get("input[name='letters']").type(`{${key}}`);
});
