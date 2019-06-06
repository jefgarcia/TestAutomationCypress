# TestAutomationCypress
Pre-requisites:
https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing
https://www.npmjs.com/package/cypress-cucumber-preprocessor

After installing simply add this in cypress\integration

To run the test there are two options
1. You can run it using the Cypress Test Runner
2. Run it using command prompt (npx cypress run)

Structure
MegaMenuOrderingTest contains all the test steps
Pages will contain the page object (please note Cypress does not reccomend page objets however it is still possible - vhttps://cypress-io.ghost.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)
MegaMenuOrderingTest.feature contains all the BDD test scenarios

Other Resources
testresultscommandprompt.png contains a screenshot of running the test via the command prompt
Cypress also comes a video capturing of the test (see MegaMenuOrderingTest.feature.mp4)
