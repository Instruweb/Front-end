import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4200'
  },
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,

  env: {
    CYPRESS_USERNAME: 'nickwelles',
    CYPRESS_PASSWORD: 'Nickwelles'
  }
});
