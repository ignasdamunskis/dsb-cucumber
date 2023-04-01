const { setWorldConstructor } = require("@cucumber/cucumber");
const { webkit, devices } = require('@playwright/test');

class CustomWorld {
  constructor(options) {
    this.baseURL = options.parameters.baseURL
  }

  async openUrl(uri) {
    const browser = await webkit.launch({
      // headless: false
    });
    const context = await browser.newContext({
      baseURL: this.baseURL,
      ...devices['iPhone 12']
    });
    this.page = await context.newPage();
    await this.page.goto(uri);
  }
}

setWorldConstructor(CustomWorld);