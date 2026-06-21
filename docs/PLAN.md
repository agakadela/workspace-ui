# PLAN.md

Execution source of truth: current phase and active tasks only.

## Current Phase: Phase 0 Foundation And Visual Prototype

### Goal / Visible Result

Create a Tauri-compatible web prototype that proves the Visual Workspace Layer
concept with Home, Visual Explorer + Preview, Project Desk, and a mock Agent
Context Panel on public-safe mock data.

### Acceptance Criteria

- [x] `workspace-ui` has accepted foundation docs.
- [x] Vite + React + TypeScript + Tailwind skeleton runs locally.
- [x] Home renders as the first screen and answers where to continue, what
      changed, what is next, and what context can be prepared.
- [ ] Visual Explorer renders artifact cards with role/status/privacy and a
      readable Preview Pane.
- [ ] Project Desk renders one project as a work surface, not a folder listing.
- [ ] Agent Context Panel shows selected, excluded, private/review-first files,
      and a suggested prompt.
- [x] Recent Activity is limited to three or four static cards.
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

## Completed This Phase

- Foundation docs and ADR are accepted: `docs/SPEC.md`,
  `docs/ARCHITECTURE.md`, `CONTEXT.md`, and
  `docs/decisions/ADR-0001-project-foundation.md`.
- Task 1 scaffold is complete: the Vite + React + TypeScript + Tailwind shell
  renders Home first, feedback-loop commands pass locally, and CI runs the same
  real commands.
- Task 2 Home Orientation Slice is complete: Home now uses public-safe mock data
  to show where to continue, what changed, what is next, pinned docs, and a mock
  agent context draft.
- Dashboard UI kit PNGs exist as references only, not product assets.

## Dependency Graph

```txt
Runnable Vite/React/Tailwind shell + feedback loops
  -> public-safe mock workspace data through the shared/platform boundary
  -> docs/UI_SYSTEM.md visual reference
    -> Home orientation slice
      -> Visual Explorer + Preview slice
      -> Project Desk slice
        -> Agent Context composer integration
          -> Phase 0 decision pack
```

Notes:

- Task 1 is the required foundation slice because no app exists yet.
- After Task 1, each implementation task should cut through mock data,
  feature ownership under `src/features`, shared primitives only where useful,
  app navigation, tests, and targeted browser proof.
- `docs/UI_SYSTEM.md` now exists as the durable UI reference at Aga's request;
  update it when later views introduce or change reusable patterns.

## Active Tasks

### Task 1 - Runnable Web Shell And Feedback Loops

- Status: complete.
- User-visible result: local app boots to a minimal Home-first workspace shell.
- Description: Scaffold the agreed Vite + React + TypeScript + Tailwind app in
  the repo root, with a small Home-first shell, feature/shared folders, and real
  feedback-loop commands before feature UI begins.
- Acceptance criteria:
  - [x] `npm run dev` starts Vite and renders the Home-first shell.
  - [x] `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build`
        exist and pass on the scaffold.
  - [x] CI runs typecheck, lint, tests, and build without silent-pass stubs.
  - [x] Source structure follows `src/features`, `src/shared/ui`,
        `src/shared/data`, and `src/shared/platform`.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check that the local shell opens
    at `http://localhost:5173` and Home is the first screen.
  - Data/provider proof: N/A.
- Dependencies:
  - Foundation docs completed.
- Likely touched files:
  - `package.json`
  - `package-lock.json`
  - `index.html`
  - `vite.config.ts`
  - `tsconfig*.json`
  - `eslint.config.*`
  - `tailwind.config.*`
  - `postcss.config.*`
  - `.github/workflows/ci.yml`
  - `src/app/App.tsx`
  - `src/features/home/`
  - `src/shared/platform/`
- Do not touch:
  - `src-tauri/`
  - Real filesystem, Git, terminal, Codex, auth, cloud, search, or PDF logic.
  - Dashboard UI kit PNGs as in-app assets.
  - Radix/shadcn or other unapproved UI dependencies without asking first.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Medium.
- Cannot verify yet:
  - Final visual quality or complete Phase 0 product usefulness.

### Task 2 - Home Orientation Slice

- Status: complete.
- User-visible result: Home answers where to continue, what changed, what is
  next, which docs matter, and what context can be prepared.
- Description: Build the first real Phase 0 surface using public-safe mock data:
  continue card, bounded Recent Activity, next tasks, pinned docs, and an agent
  context draft summary, using `docs/UI_SYSTEM.md` as the visual and interaction
  reference.
- Acceptance criteria:
  - [x] Home is the first screen and does not read like a file browser.
  - [x] Home follows `docs/UI_SYSTEM.md` for density, panel rhythm, dark
        graphite/work-surface direction, restrained accents, and component
        states.
  - [x] Recent Activity contains exactly three static cards.
  - [x] Home shows continue item, next tasks, pinned docs, and context draft
        from fictional public-safe mock data.
  - [x] Status/privacy/agent-safety information is visible and not color-only.
  - [x] Agent work round 1 is documented in `docs/AGENT_WORK_ROUNDS.md`.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check at desktop and narrower
    laptop widths that Home remains readable, follows `docs/UI_SYSTEM.md`, and
    action hierarchy is clear.
  - Data/provider proof: N/A.
- Dependencies:
  - Task 1.
- Likely touched files:
  - `src/features/home/`
  - `src/shared/data/`
  - `src/shared/platform/`
  - `src/shared/ui/`
  - `src/app/App.tsx`
  - `docs/AGENT_WORK_ROUNDS.md`
  - `docs/UI_SYSTEM.md` if the first real Home pass changes UI conventions.
- Do not touch:
  - Real private workspace names or client data.
  - More than four Recent Activity cards.
  - Real filesystem or Git-derived activity.
  - Full search, semantic search, terminal, or file editing.
  - Dashboard UI kit PNGs as copied UI.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Medium.
- Cannot verify yet:
  - Whether the whole concept is worth moving to Tauri.

### Task 3 - Visual Explorer And Preview Slice

- Status: not started.
- User-visible result: Visual Explorer lets the user browse artifacts by meaning
  and inspect readable previews.
- Description: Add the Explorer surface with workspace areas, artifact cards,
  and a Preview Pane for markdown, HTML mockup, image/card, and code-summary
  examples.
- Acceptance criteria:
  - [ ] Explorer is reachable from Home without making Explorer the primary
        first screen.
  - [ ] Artifact cards show type, role, status, activity, privacy/agent-safety,
        and preview availability.
  - [ ] Preview Pane shows readable markdown, HTML mockup, image/card, and code
        summary examples.
  - [ ] Empty and unsupported-preview states are visible and calm.
  - [ ] `docs/UI_SYSTEM.md` is updated if Explorer introduces or changes
        reusable UI conventions.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check that each required preview
    type is visible and readable.
  - Data/provider proof: N/A.
- Dependencies:
  - Task 1.
  - Task 2 for shared mock workspace concepts.
- Likely touched files:
  - `src/features/explorer/`
  - `src/shared/data/`
  - `src/shared/ui/`
  - `src/app/App.tsx`
  - `docs/UI_SYSTEM.md` if UI conventions change.
- Do not touch:
  - Real filesystem scanning.
  - Real local HTML preview or sandbox policy implementation.
  - PDF viewer.
  - Raw folder tree as the primary model.
  - Full Git/change timeline or review workflow.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Medium.
- Cannot verify yet:
  - Real local-file preview security; it is Phase 1+.

### Task 4 - Project Desk Slice

- Status: not started.
- User-visible result: one fictional project opens as a work surface, not a
  folder listing.
- Description: Build Project Desk for a single public-safe fictional project,
  showing project status, important docs, next tasks, recent/pinned work,
  context candidates, and calm mock quick actions.
- Acceptance criteria:
  - [ ] Project Desk is reachable from Home and Explorer.
  - [ ] The project view shows status, important docs, next tasks,
        recent/pinned work, context candidates, and quick actions.
  - [ ] Quick actions are visibly mock/conceptual and do not perform real OS,
        terminal, filesystem, Git, or agent actions.
  - [ ] Empty states exist for no tasks, no pinned docs, and no safe context.
  - [ ] Agent work round 2 is documented in the chosen lightweight format.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check that a fictional project
    reads like a work desk and not a raw directory.
  - Data/provider proof: N/A.
- Dependencies:
  - Task 1.
  - Task 2.
  - Task 3 for shared artifact and preview concepts.
- Likely touched files:
  - `src/features/project-desk/`
  - `src/shared/data/`
  - `src/shared/ui/`
  - `src/app/App.tsx`
  - `docs/AGENT_WORK_ROUNDS.md`
  - `docs/UI_SYSTEM.md` if UI conventions changed.
- Do not touch:
  - Real open-in-VS-Code, Finder, or terminal behavior.
  - File editing, moving, deleting, or pinning persistence.
  - Real Git status, commits, diffs, or review workflow.
  - Real private/client project data.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Medium.
- Cannot verify yet:
  - Real workspace usefulness against Aga's private folder.

### Task 5 - Agent Context Composer Slice

- Status: not started.
- User-visible result: Agent Context Panel is an explicit context composer, not
  a chat or live agent session.
- Description: Add the mock Agent Context Panel and integrate it with Home and
  Project Desk so selected, excluded, private, and review-first files are clear
  before a suggested prompt is copied.
- Acceptance criteria:
  - [ ] Panel shows active folder, selected files, excluded files,
        private files, review-first files, and suggested prompt.
  - [ ] Copy prompt action copies only mock generated text or shows a graceful
        browser-permission fallback.
  - [ ] The panel is visually a composer, not an AI chat, terminal, or Codex
        runtime.
  - [ ] Privacy and review-first states are readable without relying only on
        color.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check that Home/Project Desk
    context flows are understandable and no live-agent behavior is implied.
  - Data/provider proof: N/A.
- Dependencies:
  - Task 2.
  - Task 4.
- Likely touched files:
  - `src/features/agent-context/`
  - `src/features/home/`
  - `src/features/project-desk/`
  - `src/shared/data/`
  - `src/shared/ui/`
  - `docs/UI_SYSTEM.md` if UI conventions changed.
- Do not touch:
  - Real Codex, Claude, terminal, or provider execution.
  - Real file reads or automatic context selection from disk.
  - AI calls, automatic summaries, cloud sync, auth, or telemetry.
  - `docs/AI_BOUNDARIES.md` unless a real AI call is introduced, which is out of
    Phase 0 scope.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Medium.
- Cannot verify yet:
  - Real agent handoff quality, because Phase 0 is mock-only.

### Task 6 - Phase 0 Decision Pack

- Status: not started.
- User-visible result: Aga has enough evidence to choose move to Tauri, improve
  concept, or stop.
- Description: Close the phase with traceable evidence: all Phase 0 criteria,
  documented agent-work rounds, targeted browser proof, cannot-verify items, and
  a compact decision record.
- Acceptance criteria:
  - [ ] Home, Explorer + Preview, Project Desk, and Agent Context Panel meet the
        phase acceptance criteria or gaps are explicitly named.
  - [ ] At least two agent-work rounds are documented.
  - [ ] Targeted browser checks cover desktop and narrower laptop widths.
  - [ ] `docs/VERIFY_LOG.md` has a compact phase-close entry.
  - [ ] Phase 0 decision is recorded: move to Tauri, improve concept, or stop.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: final targeted gstack `/browse` pass over all three main
    screens and the Agent Context Panel.
  - Data/provider proof: N/A.
- Dependencies:
  - Tasks 1-5.
- Likely touched files:
  - `docs/VERIFY_LOG.md`
  - `docs/PLAN.md`
  - `docs/AGENT_WORK_ROUNDS.md`
  - `docs/UI_SYSTEM.md` if UI conventions changed.
- Do not touch:
  - New product features beyond Phase 0 acceptance criteria.
  - `src-tauri/` or real desktop setup.
  - Real filesystem, Git, Codex, auth, cloud, search, terminal, or PDF logic.
- Risk level: standard.
- Skill routing:
  - `$aga-test`
  - `$aga-review`
  - `$aga-ship` only if deploying or launching.
- Estimated scope: Small.
- Cannot verify yet:
  - Phase 1 feasibility with real local folders.

## Checkpoints

### Checkpoint - After Task 1

- [ ] Feedback-loop commands pass locally.
- [ ] CI runs real commands.
- [ ] Home-first shell is visible in browser.
- [ ] No Phase 0 exclusions were introduced.

### Checkpoint - After Task 3

- [ ] Home and Explorer + Preview are both reachable.
- [ ] Mock data remains fictional and public-safe.
- [ ] Preview types are represented without real filesystem access.
- [ ] `docs/UI_SYSTEM.md` remains current with Home and Explorer patterns.

### Checkpoint - After Task 5

- [ ] Three main screens and Agent Context Panel are present.
- [ ] Recent Activity is still limited to three or four static cards.
- [ ] Agent Context Panel is still a composer, not a live agent integration.
- [ ] Ready for Phase 0 decision pack.

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
