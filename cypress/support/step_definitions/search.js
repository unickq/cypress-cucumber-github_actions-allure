import { Then } from "cypress-cucumber-preprocessor/steps";
/// <reference types="cypress-xpath" />

Then(`I input {string} in {string} field`, (value, input) => {
  let element;
  switch (input) {
    case "letters":
      element = cy.get("input[name='letters']");
      break;
    case "starts":
      element = cy.xpath("//*[contains(@id,'starts_with')]").filter(":visible");
      break;
    case "ends":
      element = cy.xpath("//*[contains(@id,'ends_with')]").filter(":visible");
      break;
    case "contains":
      element = cy.xpath("//*[contains(@id,'contains-')]").filter(":visible");
      break;
    case "lenght":
      element = cy.xpath("//*[contains(@id,'length-')]").filter(":visible");
      break;
  }
  element.click();
  element.type(value);
});

Then(`I click {string} button`, (button) => {
  switch (button) {
    case "search":
      cy.get(".search-advanced__buttons > button").click();
      break;
  }
});
