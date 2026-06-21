# AGENTS.md

## Process

- Read `docs/AGENT_WORKFLOW.md`, `docs/SPEC.md`, and `docs/PLAN.md` before
  non-trivial work.
- Work on one vertical slice at a time.
- Before non-trivial work, surface assumptions explicitly.
- Keep Phase 0 web-only unless Aga explicitly changes the scope.
- Do not add Tauri, real filesystem access, Git integration, real Codex
  execution, login, cloud sync, search, terminal, file editing, or PDF viewing
  during Phase 0.
- When project truth changes, update the matching document in `docs/`.
- Do not create risk-triggered docs before their trigger exists.
- Do not invent. If unknown, write `UNKNOWN`. If not applicable, write `N/A`
  and why.

## Commands

The app is not scaffolded yet. Intended commands after Vite setup:

- install: `npm install`
- dev: `npm run dev`
- typecheck: `npm run typecheck`
- lint: `npm run lint`
- test: `npm test`
- build: `npm run build`

## Skill Routing

- New phase or significant scope change -> `$aga-spec`.
- Task planning -> `$aga-plan`.
- UI, states, navigation, responsive polish -> `frontend-ui-engineering`.
- Implementation slice -> `$aga-build`.
- Bug -> `debugging-and-error-recovery`.
- Verification -> `$aga-test` and targeted browser/runtime proof.
- Review -> `$aga-review`.

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
- Home is the primary first screen, not a file browser.
- Dashboard UI kit PNGs are close visual inspiration, not assets to copy 1:1.
- Use real buttons, focus states, readable contrast, and statuses that do not
  rely only on color.
- Desktop and laptop are the priority; mobile is not a Phase 0 priority.
- Recent Activity stays small: three or four static cards.

## Ask First

- Adding dependencies beyond the agreed foundation.
- Introducing shadcn/Radix components.
- Creating risk-triggered docs.
- Expanding Phase 0 scope.
- Copying or using dashboard UI kit assets in the product UI rather than as
  references.

## Never

- Commit secrets, private workspace data, client data, or screenshots with
  sensitive information.
- Use real private folder names in public-safe mock data.
- Present mock data as real filesystem, Git, or Codex integration.
- Hide raw technical details entirely; make them secondary, not absent.

## Done Means

- The visible slice works in runtime.
- Typecheck, relevant tests, lint, and build pass once the scaffold exists.
- UI states and keyboard focus are checked proportionally.
- Docs are updated when project truth changes.
- Cannot-verify items are named.
