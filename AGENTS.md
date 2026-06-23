# AGENTS.md

## Process

- Read `docs/AGENT_WORKFLOW.md`, `docs/SPEC.md`, and `docs/PLAN.md` before
  non-trivial work. Read `docs/UI_SYSTEM.md` before UI work.
- Use `using-agent-skills` at session start or when the right skill is unclear.
- Addy Osmani `agent-skills` are the primary workflow system. Matt Pocock is
  limited to `grill-with-docs` for repeated terminology/plan confusion. gstack
  is only a focused browser/visual verification helper.
- Work on one vertical slice at a time; every task ends in a user-visible,
  verifiable result.
- Run the smallest relevant test loop while editing. Run typecheck, relevant
  tests, lint, and build before PR/merge when the scaffold supports them.
- Routine browser proof is a targeted flow/state check, not gstack `/qa`.
  Do not invoke or suggest gstack `/qa` for small changes or ordinary task
  verification. Use `/qa` or `/qa-only` only when Aga explicitly asks for QA,
  testing, or a bug report, or for larger release/client handoff/regression
  passes. Browser tooling defaults to an isolated or dedicated testing profile;
  attaching to Aga's everyday logged-in browser is a security exception
  requiring explicit need.
- Larger or riskier changes are PR-first: create a short-lived branch, commit
  the verified slice there, push it, and open a PR. Do not land substantial work
  directly on `main` unless Aga explicitly asks for that.
- If work happens on a non-default branch, or a `docs/PLAN.md` task has a
  suggested branch, the turn is not done until the branch is pushed and a draft
  PR exists, unless Aga explicitly asks not to open one. Report the PR URL and
  draft/ready status in the final response.
- PR titles must use the `[agent]` prefix, not tool-specific prefixes such as
  `[codex]`. Branch names should use `agent/...`; if a GitHub plugin/skill such
  as `yeet` defaults to `codex/...` or `[codex]`, override it.
- Before non-trivial work, surface assumptions explicitly:
  `ASSUMPTIONS I'M MAKING: 1... 2... -> Correct me now or I proceed.`
- STOP RULE: after 3 failed fix attempts, stop. Report what you tried and what
  you observed.
- Keep Phase 0 web-only unless Aga explicitly changes the scope.
- Do not add Tauri, real filesystem access, Git integration, real Codex
  execution, login, cloud sync, search, terminal, file editing, or PDF viewing
  during Phase 0.
- When a domain term is decided or disambiguated, update `CONTEXT.md`.
- When project truth changes, update the matching document in `docs/`.
- Do not create risk-triggered docs before their trigger exists, except
  `docs/UI_SYSTEM.md`, which Aga requested early as the UI reference for agents.
- Do not invent. If unknown, write `UNKNOWN`. If not applicable, write `N/A`
  and why.
- Use `observability-and-instrumentation` while building production-facing
  endpoints, integrations, jobs, queues/retries, external I/O, high-risk flows,
  or behavior hard to diagnose from current data. Start with 2-4 on-call
  questions and add only telemetry that answers them.

## Commands

The app is scaffolded. Use:

- install: `npm ci`
- dev: `npm run dev`
- typecheck: `npm run typecheck`
- lint: `npm run lint`
- test: `npm test`
- build: `npm run build`

## Source-Checked Tooling

- Use `source-driven-development` before changing framework, library,
  provider, browser API, or tooling behavior where the correct pattern may
  depend on the installed version or current official docs.
- This especially applies to scaffolding, dependency upgrades, config files,
  provider integrations, security-sensitive features, browser/platform APIs,
  and shared patterns that future agents or humans are likely to copy.
- Do not rely on memory for version-sensitive setup or APIs. Detect the
  installed version, check the relevant official docs, implement the documented
  pattern, and cite the source in the work summary or PR.

## Verification Logs

- `docs/VERIFY_LOG.md` is tracked and reserved for meaningful verification
  milestones: phase close, feature verification, deploy/ship checks, high-risk
  work, provider/database/browser proof, or explicit cannot-verify decisions.
- Do not add noisy command-by-command scratch notes to `docs/VERIFY_LOG.md`.
- Use `docs/VERIFY_LOG.local.md` for temporary local notes, repeated command
  output, exploration logs, and pre-commit scratch verification. This file is
  ignored by git.

## Skill Routing

- If routing is unclear, use `using-agent-skills` first and state the chosen
  skill path.
- New phase or significant scope change -> `$aga-spec`.
- Task planning -> `$aga-plan`.
- UI, states, navigation, responsive polish -> `frontend-ui-engineering`.
- Endpoint/server action/webhook/shared interface -> `api-and-interface-design`.
- Version-sensitive framework, library, provider, browser API, or tooling
  changes -> `source-driven-development` first.
- Production endpoint/integration/job/retry/I/O or hard-to-diagnose path ->
  `observability-and-instrumentation`.
- Auth/access/tenant data/secrets/payments/provider callbacks/AI actions ->
  `security-and-hardening` + `doubt-driven-development`.
- Implementation slice -> `$aga-build`.
- Bug -> `debugging-and-error-recovery`.
- Completed agent work, commit, PR, or final answer -> `$aga-verify-agent`.
- Verification -> `$aga-test` and targeted browser/runtime proof.
- Review -> `$aga-review`.
- gstack `/browse` -> focused visual inspection only, when visual proof is
  needed.
- Do not route normal work through Matt `ask-matt`, `implement`, `to-prd`,
  `to-issues`, `tdd`, `codebase-design`, or `diagnosing-bugs`.

Routine visual checks should use the gstack `/browse` skill when visual
inspection is needed. Do not invoke full `/qa` unless Aga explicitly asks for
QA/testing/bug-report coverage or a larger release/regression pass.

## Architecture Guardrails

- Frontend stays at repo top level so it can later be bundled by Tauri.
- Future Tauri code belongs in `src-tauri/`, not in Phase 0.
- Product areas live under `src/features/`.
- Cross-cutting primitives live under `src/shared/`.
- Platform-specific behavior goes behind `src/shared/platform/` so Phase 0 can
  use mock adapters and Phase 1 can use Tauri adapters.
- Avoid global dumping grounds such as broad `components/`, `utils/`,
  `services/`, or `types/` folders for application logic.

## Design Guardrails

- Human-readable first, developer-readable second.
- Follow `docs/UI_SYSTEM.md` for visual direction, components, states, and
  reference-image boundaries.
- Home is the primary first screen, not a file browser.
- Dashboard UI kit PNGs are close visual inspiration, not assets to copy 1:1.
- Use real buttons, focus states, readable contrast, and statuses that do not
  rely only on color.
- Desktop and laptop are the priority; mobile is not a Phase 0 priority.
- Recent Activity stays small: three or four static cards.

## Ask First

- Adding dependencies beyond the agreed foundation.
- Introducing shadcn/Radix components.
- Creating risk-triggered docs other than the already-approved
  `docs/UI_SYSTEM.md`.
- Expanding Phase 0 scope.
- Copying or using dashboard UI kit assets in the product UI rather than as
  references.

## High-Risk Override

- High-risk areas: Auth/AuthZ/RLS, payments/entitlements, tenant data,
  migrations, secrets/env, production config, AI actions/costs.
- For high-risk work: pause before commit and show the diff.
- Migration work must include rollback/backfill plan before execution.
- Auth/data isolation work must include a manual two-user test.
- Payment work must be checked in provider dashboard and database.
- AI endpoint work must prove cost cap, retry cap, logging, and failure path.
- High-risk production paths must name on-call questions and prove or
  cannot-verify telemetry.

## Never

- Commit secrets, private workspace data, client data, or screenshots with
  sensitive information.
- Use real private folder names in public-safe mock data.
- Present mock data as real filesystem, Git, or Codex integration.
- Hide raw technical details entirely; make them secondary, not absent.

## Done Means

- The visible slice works in runtime.
- Typecheck, relevant tests, lint, and build pass once the scaffold exists.
- UI states and keyboard focus are checked proportionally, with triggered
  telemetry proof when observability was required.
- Docs are updated when project truth changes.
- Cannot-verify items are named.
