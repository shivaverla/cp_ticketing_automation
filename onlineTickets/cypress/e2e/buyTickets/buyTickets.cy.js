
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { searchTickets } from "../../support/pages/searchTicketsPage";
import { selectJourney } from "../../support/pages/selectJourneyPage";
const data = require("../../fixtures/testData.json");

Given("I navigate to the website", () => {
  searchTickets.visitWebsite()
});

When("I enter travel details Lagos to Porto Campanha with departure in 3 days and return in 5 days", () => {
  searchTickets.enterTravelDetails()
});

And("I submit the ticket request", () => {
  searchTickets.clickSubmitButton()
});

Then("I should see the Online Ticket Office screen", () => {
  selectJourney.verifyPageTitle(data.title)
});

When("I click Cancel, I am redirected to the Buy Tickets screen", () => {
  selectJourney.clickCancelButton()
  searchTickets.getURL().should("include", "passageiros/en/buy-tickets", { timeout: 5000 })
});

Then("All previously entered search parameters are retained and displayed", () => {
  searchTickets.validateFormFields()
});
