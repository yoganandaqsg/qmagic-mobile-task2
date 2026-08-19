# .claude Workspace Setup

This folder contains concise, generic agent and skill instructions for this mobile automation workspace.

## Available Guidance

- `agents/generic-test-builder.md`: task agent for test authoring and updates.
- `skills/generic-test-builder/SKILL.md`: implementation recipe.
- `skills/generic-pattern/SKILL.md`: architecture and flow reference.
- `skills/generic-code-review/SKILL.md`: review checklist.

## Strict Rules (Always Active)

1. Do not guess. If behavior, selector, or requirement is unclear, stop and ask.
2. Reuse before creating. Search existing pages, steps, and helpers first.
3. Appium MCP (sometimes referred to as appium-cpm in team notes) is the source of truth for selector validation. Use live hierarchy/accessibility inspection before creating or changing locators.
4. Keep locators in page objects. Do not place selectors in step definitions.
5. If no emulator/simulator/device is connected for MCP inspection, stop and return: "Local device is not connected. Connect an Android emulator / iOS simulator or a device, then re-run."
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
