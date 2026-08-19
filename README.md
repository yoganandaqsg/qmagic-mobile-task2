# Generic Mobile Automation Framework

This repository is a clean starter framework for mobile test automation using Cucumber, Playwright, and WebdriverIO `remote()` to create Appium sessions manually.

## Design Goals

- Keep manual Appium session flow with WebdriverIO `remote()`.
- Keep capabilities-driven platform and provider configuration.
- Keep only common action methods: click, wait, scroll, assert.
- Keep a reusable folder structure with placeholders.

## Core Flow

1. Cucumber hook starts before each scenario.
2. `initializeClient()` creates a driver session using `remote()`.
3. Tests run with generic step definitions and page objects.
4. Cucumber hook closes the session after each scenario.

## Run

```bash
npm install
npm run test
```

## Environment Variables

Use `.env` files such as `local.env` to configure:

- `LOCATION=OnPremise|LambdaTest`
- `PLATFORM=android|ios`
- `PLATFORM_VERSION=<platform-version>`
- `DEVICE_NAME=<device-name-or-regex>`
- `APP_PATH=<local-app-path>`
- `APP_ID=<cloud-app-id>`
- `LAMBDATEST_USERNAME=<username>`
- `LAMBDATEST_ACCESS_KEY=<access-key>`

## Notes

This skeleton intentionally contains placeholders instead of project-specific automation code.
