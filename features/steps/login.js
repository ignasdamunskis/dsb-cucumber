const { Given, When, Then } = require("@cucumber/cucumber");

Given('I am on the homepage', { timeout: 60 * 1000 }, async function () {
  await this.openUrl('/');
});

Given('I am logged out', { timeout: 60 * 1000 }, async function () {
  // TODO
});

When('I login with {string} and {string}', async function (username, password) {
  console.log({username, password})
});

Then('I should be logged in', async function () {
  // TODO
});

When('I logout', async function () {
  // TODO
});

Then('the url should match {string}', async function (url) {
  console.log({url})
});