---
name: generic-code-review
description: Review mobile automation changes for correctness and framework consistency in this generic Cucumber + WebdriverIO + Appium project.
---

# Generic Code Review

Review changes under `src/test/**`, `src/hooks/**`, and `src/utils/mobileUtils/**`.

## Process

1. Scope the scenario or tag being changed.
2. Trace feature -> steps -> page objects -> shared helpers.
3. Report issues by severity with a smallest-safe fix.

## Check First

1. Does the scenario actually assert behavior?
2. Are selectors kept in page objects, not steps?
3. Were locator changes validated from Appium MCP live hierarchy (no guessed selectors)?
4. Are hard waits avoided?
5. Is `remote()` session flow still intact?
6. Are changes aligned with current project structure?
7. Is step context usage correct (`async function () {}` when using `this`)?
8. Is world state usage consistent with `CustomWorld.state`?

## Common Findings

- Step definitions contain selectors.
- Page methods perform actions but no assertions are used.
- Platform logic is duplicated across files.
- Hooks are modified in a way that breaks setup/teardown.
- Scenario state is stored outside the world pattern without need.

## Output Style

- Report findings by severity.
- Include file and line references.
- Suggest the smallest safe fix.
