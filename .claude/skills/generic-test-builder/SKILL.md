---
name: generic-test-builder
description: "Add or update mobile UI tests using the generic Cucumber + WebdriverIO remote() + Appium + TypeScript framework in this repo. Trigger phrases: automate android scenario, automate ios scenario, update android/ios scenario, extend android scenario to ios"
---

# Generic Test Builder

Use this skill to create or update scenarios in this repo without changing the core runtime flow.

## Project Structure

- `src/test/features/**`: feature files
- `src/test/steps/**`: step definitions
- `src/test/pages/**`: page objects
- `src/hooks/**`: scenario lifecycle hooks
- `src/utils/mobileUtils/appium/**`: capabilities and session creation
- `src/utils/mobileUtils/actions/uiActions.ts`: shared click/wait/scroll/assert helpers

When creating new files, place them inside domain folders (do not create files at the root of these directories):

- `src/test/features/<domainName>/**`
- `src/test/steps/<domainName>/**`
- `src/test/pages/<domainName>/**`

## Prerequisites

1. Confirm scenario intent and target platform (`android` or `ios`).
2. Confirm whether the scenario is new or an update.
3. Search existing pages/steps/features before creating files.
4. Validate selector strategy from a live app session via Appium MCP before authoring new locators.

## Source Of Truth

- Live locator decisions: `mcp__appium-mcp` (accessibility ids, visible text, view hierarchy)
- Session lifecycle: `src/hooks/hooks.ts`
- Driver bootstrap: `src/utils/mobileUtils/appium/appiumClient.ts`
- Capabilities and platform wiring: `src/utils/mobileUtils/appium/capabilities.ts`
- Shared interactions: `src/utils/mobileUtils/actions/uiActions.ts`

If no Android emulator, iOS simulator, or device is connected for MCP inspection, stop and return:
`Local device is not connected. Connect an Android emulator / iOS simulator or a device, then re-run.`

## Procedure

1. Discover and reuse existing assets first.
2. Use Appium MCP to inspect/capture selector truth before adding or changing page selectors.
3. Add or update page object locators and methods in `src/test/pages/**`.
4. Add or update step definitions in `src/test/steps/**`.
5. Add or update feature scenarios in `src/test/features/**`.
6. Keep `src/hooks/hooks.ts` and `src/utils/mobileUtils/appium/appiumClient.ts` lifecycle logic intact unless user asks.
7. Run self-review using `.claude/skills/generic-code-review/SKILL.md` before final verification.

## Guardrails

- Do not invent missing requirements; ask if unclear.
- Keep selectors out of step files.
- Do not guess selectors from code alone when MCP inspection is possible.
- Avoid hardcoded waits.
- Keep naming and wording generic (no product-specific terms).
- Reuse shared action helpers before adding new utility methods.
- When using world context, use `CustomWorld.state` from `src/test/support/world.ts`.

## Debugging (Quick)

1. Read terminal output first.
2. Classify issue as timing, selector, session lifecycle, or environment.
3. Fix the smallest responsible layer (page -> step -> feature).
4. Re-run targeted scenario before broad test run.

## Verify

- `npm run typecheck`
- `npm run test`

## How To Run

```bash
# Full validation
npm run typecheck
npm run test

# Run with tags
npm run test -- --tags "@smoke"

# Run in local Appium mode
LOCATION=OnPremise PLATFORM=android npm run test

# Run in cloud mode
LOCATION=LambdaTest PLATFORM=android npm run test
```

## Output Format

1. Summary
2. Files changed
3. How to run
4. Follow-ups
