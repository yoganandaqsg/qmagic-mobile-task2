import path from 'path';

type CapabilitiesByLocation = {
  OnPremise: Record<string, Record<string, unknown>>;
  LambdaTest: Record<string, Record<string, unknown>>;
};

export const capabilities = (
  scenarioName: string,
  tags: string[]
): CapabilitiesByLocation => {
  const platformVersion = process.env.PLATFORM_VERSION || 'latest';
  const deviceName = process.env.DEVICE_NAME || 'Android.*';
  const lambdaAppiumVersion = process.env.LAMBDATEST_APPIUM_VERSION || '2.0.0';

  return {
    OnPremise: {
      android: {
        'appium:platformName': 'Android',
        'appium:deviceName': process.env.DEVICE_NAME || 'Android Emulator',
        'appium:automationName': 'UiAutomator2',
        'appium:udid': process.env.UDID,
        'appium:app': process.env.APP_PATH || path.resolve('apps/android/ApiDemos-debug.apk'),
        'appium:noReset': false,
        'appium:autoGrantPermissions': true,
      },
      ios: {
        'appium:platformName': 'iOS',
        'appium:platformVersion': process.env.PLATFORM_VERSION || '17',
        'appium:deviceName': process.env.DEVICE_NAME || 'iPhone 15',
        'appium:automationName': 'XCUITest',
        'appium:udid': process.env.UDID,
        'appium:app': process.env.APP_PATH || path.resolve('apps/iOS/ApiDemos-debug.ipa'),
        'appium:noReset': false,
      },
    },
    LambdaTest: {
      android: {
        platformName: 'Android',
        platformVersion,
        deviceName,
        automationName: 'UiAutomator2',
        isRealMobile: true,
        project: process.env.PROJECT_NAME || 'Generic Mobile Automation',
        build: process.env.BUILD_NAME || 'generic-build',
        name: scenarioName,
        tags,
        appiumVersion: lambdaAppiumVersion,
      },
      ios: {
        platformName: 'iOS',
        platformVersion,
        deviceName,
        automationName: 'XCUITest',
        isRealMobile: true,
        project: process.env.PROJECT_NAME || 'Generic Mobile Automation',
        build: process.env.BUILD_NAME || 'generic-build',
        name: scenarioName,
        tags: tags.join(','),
        appiumVersion: lambdaAppiumVersion,
      },
    },
  };
};