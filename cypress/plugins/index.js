const cucumber = require('cypress-cucumber-preprocessor').default
const dotenvPlugin = require('cypress-dotenv');

module.exports = (on, config) => {
  // Hook Cypress events with Cucumber
  on('file:preprocessor', cucumber())
  config = dotenvPlugin(config);

  // Return the modified configuration object
  return config
}
