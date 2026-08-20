---
name: mobile-pattern
description: Pattern reference for this mobile automation framework using Cucumber + WebdriverIO remote() + Appium.
---

# Mobile Pattern

Use this as the architecture reference when implementing tests.

## Runtime Pattern

- Session starts in `src/hooks/hooks.ts`.
- Driver is created via `remote()` in `src/utils/mobileUtils/appium/appiumClient.ts`.
- Capabilities are resolved from `src/utils/mobileUtils/appium/capabilities.ts`.
- Driver is shared through `src/hooks/pageFixture.ts`.

## Source Of Truth Order

1. Live UI hierarchy and accessibility attributes from Appium MCP for selector decisions.
2. Runtime ownership in `src/hooks/hooks.ts` and `src/utils/mobileUtils/appium/appiumClient.ts`.
3. Capability/platform behavior in `src/utils/mobileUtils/appium/capabilities.ts`.
4. Reusable interaction behavior in `src/utils/mobileUtils/actions/uiActions.ts`.

Never bypass this order by inventing selectors in steps or hardcoding platform behavior in feature/step files.

## World Pattern

- Scenario state is stored in `CustomWorld.state`.
- Keep step callbacks as `async function () {}` when using `this`.

## Authoring Pattern

1. Keep locators and page actions in `src/test/pages/**`.
2. Keep page object members in strict AAA order: Locators first, then Actions, then Asserts.
3. Make each page object class extend `uiActions` from `src/utils/mobileUtils/actions/uiActions.ts`.
4. Keep steps thin in `src/test/steps/**`.
5. Keep behavior definitions in `src/test/features/**`.
6. Keep reusable interactions in `src/utils/mobileUtils/actions/uiActions.ts`.

## Current Shared Actions

- Wait: `waitForElement`
- Click: `clickElement`
- Scroll: `scrollToElement`
- Assert: `assertElementText`

## Conventions

- Do not inline selectors in step files.
- Page objects should inherit from `uiActions` instead of composing it as a separate member.
- Use one page object per app screen. Do not combine multiple screens into a single page object.
- Do not add hard sleeps.
- Keep platform-specific selectors in one place.
- Prefer small, reusable page methods.
- Keep `LOCATION`, `PLATFORM`, and app capability behavior inside appium config files, not step files.
