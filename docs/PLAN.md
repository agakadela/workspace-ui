# PLAN.md

Execution source of truth: current phase and active tasks only.

## Current Phase: Phase 0 Foundation And Visual Prototype

### Goal / Visible Result

Create a Tauri-compatible web prototype that proves the Visual Workspace Layer
concept with Home, Visual Explorer + Preview, Project Desk, and a mock Agent
Context Panel on public-safe mock data.

### Acceptance Criteria

- [ ] `workspace-ui` has accepted foundation docs.
- [ ] Vite + React + TypeScript + Tailwind skeleton runs locally.
- [ ] Home renders as the first screen and answers where to continue, what
      changed, what is next, and what context can be prepared.
- [ ] Visual Explorer renders artifact cards with role/status/privacy and a
      readable Preview Pane.
- [ ] Project Desk renders one project as a work surface, not a folder listing.
- [ ] Agent Context Panel shows selected, excluded, private/review-first files,
      and a suggested prompt.
- [ ] Recent Activity is limited to three or four static cards.
- [ ] UI is visually coherent, calm, premium, work-focused, and close to the
      dashboard UI kit references without copying them.
- [ ] At least two agent-work rounds are documented.
- [ ] Phase 0 decision is made: move to Tauri, improve concept, or stop.

### Not Building In This Phase

- Tauri / `src-tauri`.
- Real filesystem access.
- Real Git integration.
- Real Codex/Claude execution.
- Terminal.
- Login/auth.
- Cloud sync.
- PDF viewer.
- Full-text or semantic search.
- Review workflow.
- File editing or moving files.
- Automatic AI summaries.

### Constraints And Assumptions

- Mock data must be fictional and public-safe.
- Home is the primary mental center, not Explorer.
- Agent Context Panel is a composer, not a chat.
- Dashboard UI kit PNGs are design references only.
- Future Tauri compatibility is protected through `src/shared/platform/`.
- Desktop/laptop are priority; mobile is not a Phase 0 priority.

### Risk Classification

- Overall phase risk: standard.
- High-risk areas touched: N/A.
- Required high-risk override: N/A.

## Active Tasks

### Task 1 — Foundation Docs And Project Shell

- Status: ready for review.
- User-visible result: `workspace-ui` folder contains accepted product,
  architecture, plan, context, ADR, source brief, and design references.
- Acceptance criteria:
  - [x] `docs/SPEC.md` reflects accepted Phase 0 scope.
  - [x] `docs/ARCHITECTURE.md` records stack, module convention, and Tauri path.
  - [x] `docs/decisions/ADR-0001-project-foundation.md` records foundation decisions.
  - [x] `CONTEXT.md` records canonical product terms.
  - [x] Dashboard UI kit PNGs are copied as references, not product assets.
- Verification:
  - Automated: N/A.
  - Runtime/manual: file tree inspection.
  - Data/provider proof: N/A.
- Likely touched files:
  - `README.md`
  - `AGENTS.md`
  - `CONTEXT.md`
  - `docs/SPEC.md`
  - `docs/ARCHITECTURE.md`
  - `docs/PLAN.md`
  - `docs/decisions/ADR-0001-project-foundation.md`
  - `docs/design/references/dashboard-ui-kit/`
- Do not touch:
  - Source PNG originals outside `workspace-ui`.
  - Phase 0 app code before spec confirmation.
- Risk level: standard.
- Skill routing:
  - `$aga-spec`.
- Assumptions:
  - This folder becomes the target app repo.
- Cannot verify yet:
  - Runtime UI, because scaffold is not created yet.

### Task 2 — Vite/Tailwind Skeleton

- Status: not started.
- User-visible result: local app boots to a minimal workspace shell.
- Acceptance criteria:
  - [ ] `npm run dev` starts Vite.
  - [ ] `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build`
        exist.
  - [ ] App structure follows `src/features` and `src/shared/platform`.
  - [ ] First empty shell reflects the dashboard-kit-inspired direction without full feature UI.
- Verification:
  - Automated: typecheck, lint, test, build.
  - Runtime/manual: browser opens local shell.
  - Data/provider proof: N/A.
- Likely touched files:
  - `package.json`
  - `vite.config.ts`
  - `tsconfig*.json`
  - `src/`
  - Tailwind config files.
- Do not touch:
  - `src-tauri/`.
- Risk level: standard.
- Skill routing:
  - `frontend-ui-engineering`.
- Assumptions:
  - npm is the package manager.
- Cannot verify yet:
  - Final visual quality.

## Deferred For This Phase

- Real desktop/Tauri setup.
- Real workspace scanning.
- Real HTML preview sandbox.
- Git awareness.
- Real provider/agent integrations.

## Rejected For This Phase

- Starting from Tauri.
- Starting from a raw file browser.
- Building an AI chat surface.
- Building a full Git/change timeline.
- Using real private data in demo.

## Phase Closing Gate

- [ ] Acceptance criteria met and verified in runtime.
- [ ] Simplification pass completed on touched areas, or explicitly not useful.
- [ ] Agent output verified against task contract and evidence.
- [ ] Review completed on the feature/phase diff.
- [ ] Relevant docs updated.
- [ ] `docs/VERIFY_LOG.md` entry added with checks, runtime proof,
      cannot-verify, and verdict.
