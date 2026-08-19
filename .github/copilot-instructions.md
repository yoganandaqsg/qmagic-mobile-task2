# Workspace Copilot Instructions

This repository uses a generic mobile automation stack:
- Cucumber + TypeScript
- WebdriverIO `remote()` with Appium

## Read First

- `.github/skills/SKILL.md`
- `.github/skills/generic-test-builder/SKILL.md`

## Use When Needed

- `.github/skills/generic-pattern/SKILL.md`
- `.github/skills/generic-code-review/SKILL.md`

## Strict Rules

1. Do not guess. If behavior, selector, or requirement is unclear, stop and ask.
2. Reuse before creating. Search existing pages, steps, and helpers first.
3. Appium MCP is the source of truth for selector validation. Use live hierarchy/accessibility inspection before creating or changing locators.
4. Keep locators in page objects. Do not place selectors in step definitions.
5. If no emulator/simulator/device is connected for MCP inspection, stop and return: `Local device is not connected. Connect an Android emulator / iOS simulator or a device, then re-run.`
6. Keep page objects structured as Arrange -> Act -> Assert.
7. Keep assertions explicit. Assert methods must validate behavior, not only wait.
8. Keep step callbacks as `async function () {}` when `this` context is used.
9. Do not add hard waits (`pause`, fixed sleep). Use shared wait/action methods.
10. Keep manual Appium session flow intact:
    - Session creation: `src/utils/mobileUtils/appium/appiumClient.ts`
    - Hook lifecycle: `src/hooks/hooks.ts`
    - Shared driver fixture: `src/hooks/pageFixture.ts`
11. Keep changes scoped to this framework structure unless user asks otherwise.
12. Validate changes with:
    - `npm run typecheck`
    - `npm run test`
