import { remote } from 'webdriverio';
import { capabilities } from './capabilities';
import { pageFixture } from '../../../hooks/pageFixture';

export const initializeClient = async (
  appId: string,
  scenarioName: string,
  tags: string[],
  testName: string
) => {
  const location = (process.env.LOCATION || 'OnPremise') as 'OnPremise' | 'LambdaTest';
  const platform = (process.env.PLATFORM || 'android').toLowerCase();

  const desiredCaps = capabilities(scenarioName, tags)[location]?.[platform] || {};
  const isLambda = location !== 'OnPremise';

  const config: any = {
    logLevel: 'info',
    hostname: isLambda ? 'mobile-hub.lambdatest.com' : 'localhost',
    port: isLambda ? 443 : 4723,
    path: isLambda ? '/wd/hub' : undefined,
    protocol: isLambda ? 'https' : 'http',
    connectionRetryTimeout: 300000,
    connectionRetryCount: 3,
    capabilities: {
      ...desiredCaps,
      ...(isLambda && {
        name: testName,
        app: appId,
      }),
    },
    ...(isLambda && {
      user: process.env.LAMBDATEST_USERNAME,
      key: process.env.LAMBDATEST_ACCESS_KEY,
    }),
  };

  const client = await remote(config);

  pageFixture.page = client;
  pageFixture.sessionId = client.sessionId;
  pageFixture.testName = testName;
  pageFixture.deviceName = (client.capabilities as any)?.deviceName || '';
  
  return client;
};
