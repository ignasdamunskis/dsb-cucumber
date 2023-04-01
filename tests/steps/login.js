const { Given, When, Then } = require("@cucumber/cucumber");

Given('I am on the homepage', { timeout: 60 * 1000 }, async function () {
  await this.openUrl('https://als-df-stg.elysium-dfbt.com/m/en');
});

Given('I am logged out', { timeout: 60 * 1000 }, async function () {
  // TODO
});

When('I login with "AUTODAFATEST002" and "Qat456123"', async function () {
  // TODO
});

Then('I should be logged in', async function () {
  // TODO
});

When('I logout', async function () {
  // TODO
});

Then('the url should match "https://istg-m.elysium-dfbt.com/"', async function () {
  // TODO
});