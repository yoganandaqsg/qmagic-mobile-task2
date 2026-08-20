# Workspace Copilot Instructions

This repository uses a mobile automation stack:
- Cucumber + TypeScript
- WebdriverIO `remote()` with Appium

## Required Reading

- `.github/skills/SKILL.md`
- `.github/skills/mobile-test-builder/SKILL.md`

## Reference Skills

- `.github/skills/mobile-pattern/SKILL.md`
- `.github/skills/mobile-code-review/SKILL.md`

## Strict Rules

1. Do not guess. If behavior, selector, or requirement is unclear, stop and ask.
2. Reuse before creating. Search existing pages, steps, and helpers first.
3. Appium MCP is the source of truth for selector validation. Use live hierarchy/accessibility inspection before creating or changing locators.
4. Keep locators in page objects. Do not place selectors in step definitions.
5. Place all new test artifacts in domain folders (`src/test/features/<domain>/**`, `src/test/steps/<domain>/**`, `src/test/pages/<domain>/**`). Do not use `src/test/**/generic` for domain scenarios.
6. For multi-screen flows, split page objects by screen/component responsibility.
7. Create one page object per app screen. Do not combine multiple screens into one page object.
8. If no emulator/simulator/device is connected for MCP inspection, stop and return: `Local device is not connected. Connect an Android emulator / iOS simulator or a device, then re-run.`
9. Keep page objects structured in strict AAA order: Locators -> Actions -> Asserts.
10. Page object classes must extend `uiActions` from `src/utils/mobileUtils/actions/uiActions.ts`.
11. Keep assertions explicit. Assert methods must validate behavior, not only wait.
12. Keep step callbacks as `async function () {}` when `this` context is used.
13. Do not add hard waits (`pause`, fixed sleep). Use shared wait/action methods.
14. Keep manual Appium session flow intact:
    - Session creation: `src/utils/mobileUtils/appium/appiumClient.ts`
    - Hook lifecycle: `src/hooks/hooks.ts`
    - Shared driver fixture: `src/hooks/pageFixture.ts`
15. Keep changes scoped to this framework structure unless user asks otherwise.
16. Validate changes with:
    - `npm run typecheck`
    - `npm run test`
