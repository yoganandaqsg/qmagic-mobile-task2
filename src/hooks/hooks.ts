import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { initializeClient } from '../utils/mobileUtils/appium/appiumClient';
import { pageFixture } from './pageFixture';

setDefaultTimeout(120000);

Before({ timeout: 120000 }, async function (scenario) {
  const scenarioName = scenario.pickle.name;
  const tags = scenario.pickle.tags.map((tag) => tag.name);
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
  const testName = `${scenarioName}_${timestamp}`;
  const appId = process.env.APP_ID || process.env.APP_PATH || 'app';

  pageFixture.page = await initializeClient(appId, scenarioName, tags, testName);
  pageFixture.sessionId = pageFixture.page.sessionId;
  pageFixture.testName = testName;
});

After({ timeout: 120000 }, async function () {
  if (pageFixture.page?.deleteSession) {
    await pageFixture.page.deleteSession();
  }
  pageFixture.page = undefined;
  pageFixture.sessionId = undefined;
  pageFixture.testName = undefined;
});
