const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    scrollBehavior: false,
    chromeWebSecurity: false,
    video: false,
    downloads: false,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./allure-results",
      })

      return config;
    },
  },
});
