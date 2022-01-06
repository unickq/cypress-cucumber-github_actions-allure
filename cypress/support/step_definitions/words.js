import { When } from "cypress-cucumber-preprocessor/steps";

When("I click on word {string}", (word) => {
  //   cy.xpath(
  //     `//span[@class='letter-card__word']/span/span[text()='${word}']`
  //   ).click();
  cy.contains(word).click();
});

When("I click on word #{string}", (number) => {
  cy.xpath(`(//span[@class='letter-card__word']/span/span)[${number}]`).click();
});

When("I see word definition popup", () => {
  cy.get(".modal-content").should("be.visible");
});
