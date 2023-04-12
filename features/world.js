const { setWorldConstructor, setDefaultTimeout, Before, After } = require("@cucumber/cucumber");
const { webkit, devices } = require('@playwright/test');
const DEFAULT_TIMEOUT = 60000; // 60 seconds

class CustomWorld {
  async init() {
    this.browser = await webkit.launch({
      // headless: false,
      timeout: DEFAULT_TIMEOUT
    });
    const context = await this.browser.newContext({
      baseURL: process.env.BASE_URL,
      ...devices['iPhone 12']
    });
    this.page = await context.newPage();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

Before(async function () {
  await this.init();
});

After(async function () {
  await this.browser.close();
});