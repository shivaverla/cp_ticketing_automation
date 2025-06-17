
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    baseUrl: "https://www.cp.pt/passageiros/en",
    chromeWebSecurity: false,
    screenshotOnRunFailure: false,
    defaultCommandTimeout: 60000,
     retries: {
      runMode: 2,
      openMode: 1,
    },
    specPattern: "cypress/e2e/*.feature",
    
    
  },
});
