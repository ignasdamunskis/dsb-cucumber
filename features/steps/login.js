const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require('@playwright/test');
const Homepage = require("../../pages/Homepage");
// const Homepage = require('dsb-playwright/pages/Homepage');

Given('I am on the homepage', async function () {
  this.homepage = new Homepage(this.page);
  await this.homepage.navigate();
});

Given('I am logged out', async function () {
  await this.homepage.header.isLoggedOut();
});

When('I login with {string} and {string}', async function (username, password) {
  await this.homepage.header.login(username, password);
});

Then('I should be logged in', async function () {
  await this.homepage.header.isLoggedIn();
});

When('I logout', async function () {
  await this.homepage.header.logout();
});

Then('the url should match {string}', async function (url) {
  await expect(this.page).toHaveURL(new RegExp(url));
});