# PLAN.md

Execution source of truth: current phase and active tasks only.

## Current Phase: Phase 0 Visual Redesign Before Tauri

### Goal / Visible Result

Replace the current functional Phase 0 sketch with a deeper
dashboard-kit-inspired visual direction before any Tauri work. The redesigned
web prototype should still prove Home, Visual Explorer + Preview, Project Desk,
and a mock Agent Context Composer on public-safe mock data, but it should no
longer feel like a generic AI-generated card dashboard.

### Acceptance Criteria

- [x] `workspace-ui` has accepted foundation docs.
- [x] Vite + React + TypeScript + Tailwind skeleton runs locally.
- [x] Home renders as the first screen and answers where to continue, what
      changed, what is next, and what context can be prepared.
- [x] Visual Explorer renders artifact cards with role/status/privacy and a
      readable Preview Pane.
- [x] Project Desk renders one project as a work surface, not a folder listing.
- [x] Agent Context Panel shows selected, excluded, private/review-first files,
      and a suggested prompt.
- [x] Recent Activity is limited to three or four static cards.
- [x] Phase 0 decision is made: improve concept before moving to Tauri.
- [x] Reference audit identifies the specific dashboard UI kit patterns to
      borrow for shell, navigation, object surfaces, tabs, panels, Composer, and
      Preview.
- [ ] The app shell moves toward top navigation, product chrome, and a dominant
      dark workspace canvas instead of the current left rail plus white page
      card composition.
- [ ] Home is redesigned as a first-screen workspace cockpit, not an
      explanatory stack of equal-weight cards.
- [ ] Visual Explorer + Preview is redesigned as a dense inspection surface
      with stronger preview/object hierarchy.
- [ ] Project Desk and Agent Context Composer are redesigned as working tools,
      not long documentation panels.
- [ ] Redesign uses dashboard UI kit references strongly without copying
      reference assets, brand content, or exact screens 1:1.
- [ ] Targeted visual verification proves the redesigned screens at desktop and
      narrower laptop widths.
- [x] At least two agent-work rounds are documented.

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
- The current UI composition is disposable; preserve product flows and
  boundaries, not the existing card layout.
- The redesign should follow the references more strongly: top nav, dark
  workspace canvas, dense panels, object-focused surfaces, refined tabs, and
  tighter control rhythm.
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
- Task 3 Visual Explorer And Preview Slice is complete: Explorer is reachable
  from Home and shows workspace areas, meaning-first artifact cards, readable
  markdown/HTML mockup/image-card/code-summary previews, plus unsupported and
  empty states.
- Task 4 Project Desk Slice is complete: one fictional project opens from Home
  and Explorer as a focused work surface with status, important docs, next
  tasks, recent work, context candidates, mock quick actions, and calm empty
  states.
- Task 5 Agent Context Composer Slice is complete: Home and Project Desk share a
  mock composer that shows active folder, selected/excluded/private/review-first
  files, a suggested prompt, and copy success/fallback states without implying
  live agent execution.
- Task 6 Phase 0 Decision Pack is complete: automated checks and targeted
  browser proof covered Home, Explorer + Preview, Project Desk, and Agent
  Context at desktop and narrower laptop widths; the phase decision is to
  improve the concept before moving to Tauri.
- Task 7 Reference Audit And Redesign Brief is complete: `docs/UI_SYSTEM.md`
  now maps the dashboard UI kit references to concrete redesign targets for
  shell, navigation, object surfaces, tabs, panels, Preview, Composer, and each
  core screen.
- Dashboard UI kit PNGs exist as references only, not product assets.

## Phase 0 Decision

- Decision: improve concept before moving to Tauri.
- Reason: the web prototype proves the core surfaces, mock-only boundaries,
  public-safe data model, and agent context composer concept, but the visual
  language is not accepted. The current UI reads too much like explanatory
  cards in an agent-generated scaffold instead of a premium, dense,
  dashboard-kit-inspired workspace product. This is a redesign problem, not a
  single Home polish issue.
- Evidence: see the `2026-06-23` phase-close entry in `docs/VERIFY_LOG.md`.
- Next planning action: write and execute the Phase 0 visual redesign task pack
  before any Tauri setup.

## Dependency Graph

```txt
Runnable Vite/React/Tailwind shell + feedback loops
  -> public-safe mock workspace data through the shared/platform boundary
  -> docs/UI_SYSTEM.md visual reference
    -> functional Home / Explorer / Project Desk / Agent Context sketch
      -> reference audit and redesign brief
        -> redesigned shell, tokens, and layout primitives
          -> redesigned Home
            -> redesigned Explorer + Preview
              -> redesigned Project Desk + Agent Context Composer
                -> visual verification pack
```

Notes:

- Task 1 is the required foundation slice because no app exists yet.
- Redesign tasks preserve feature ownership under `src/features`, shared
  primitives only where useful, app navigation, tests, and targeted browser
  proof.
- `docs/UI_SYSTEM.md` now exists as the durable UI reference at Aga's request;
  update it when later views introduce or change reusable patterns.

## Active Tasks - Visual Redesign Pack

### Task 7 - Reference Audit And Redesign Brief

- Status: complete.
- User-visible result: future implementation PRs have a precise visual target
  instead of the vague instruction to be "more like the references."
- Description: Review the dashboard UI kit PNGs and document which patterns the
  redesign will borrow for workspace shell, top navigation, tab/control rhythm,
  dense panels, preview/composer surfaces, object cards, and visual hierarchy.
  Name what must not be copied.
- Acceptance criteria:
  - [x] `docs/UI_SYSTEM.md` records the reference patterns selected for this
        product.
  - [x] Each core screen has a reference-backed target: Home, Explorer +
        Preview, Project Desk, and Agent Context Composer.
  - [x] The brief explicitly rejects the current left-rail plus white page-card
        composition as the default shell.
  - [x] The brief names anti-patterns to avoid: generic card grid, explanatory
        doc panels, decorative AI UI, and raw file-browser hierarchy.
- Verification:
  - Automated: N/A, docs-only.
  - Runtime/manual: N/A.
  - Visual proof: compare notes against
    `docs/design/references/dashboard-ui-kit/` before implementation starts.
- Dependencies:
  - Completed Phase 0 functional sketch.
- Likely touched files:
  - `docs/UI_SYSTEM.md`
  - `docs/PLAN.md`
  - `docs/SPEC.md` if scope wording changes.
- Do not touch:
  - Product implementation.
  - UI kit PNGs as product assets.
  - Phase 0 exclusions.
- Risk level: standard.
- Skill routing:
  - `$aga-spec`
  - `frontend-ui-engineering`
- Estimated scope: Small.
- Cannot verify yet:
  - Whether the selected patterns work in the product until Task 8+.

### Task 8 - Redesign Shell, Tokens, And Layout Primitives

- Status: planned.
- User-visible result: the app has a stronger product shell and reusable visual
  primitives that can carry the redesigned screens.
- Description: Replace the default scaffold feel with a reference-backed shell:
  top navigation, dark workspace canvas, product chrome, contextual action
  cluster, tighter radius/depth rules, denser panel rhythm, and reusable layout
  primitives for object surfaces, tab strips, preview/composer trays, and status
  controls.
- Acceptance criteria:
  - [ ] The primary shell uses top navigation/product chrome rather than the
        current left rail as the default app frame.
  - [ ] A dark workspace canvas becomes the dominant screen surface.
  - [ ] Shared primitives exist only where they reduce duplication across the
        redesign.
  - [ ] Tailwind theme tokens stay named in `src/index.css`; raw hex values are
        not scattered through feature components.
  - [ ] Focus states, buttons, tabs, chips, and icon controls remain accessible.
  - [ ] `docs/UI_SYSTEM.md` reflects the new shell/primitives.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check that the shell renders at
    desktop and narrower laptop widths without overlap.
  - Visual proof: screenshot against selected dashboard kit shell references.
- Dependencies:
  - Task 7.
- Likely touched files:
  - `src/app/App.tsx`
  - `src/app/routes.ts`
  - `src/index.css`
  - `src/shared/ui/`
  - `src/features/home/`
  - `src/features/explorer/`
  - `src/features/project-desk/`
  - `src/features/agent-context/`
  - `docs/UI_SYSTEM.md`
- Do not touch:
  - `src-tauri/`
  - Real filesystem, Git, terminal, Codex, auth, cloud, search, PDF, or file
    editing behavior.
  - New UI dependencies without asking first.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Medium.
- Cannot verify yet:
  - Whether each screen fully reaches the new visual bar until Tasks 9-11.

### Task 9 - Redesign Home As Workspace Cockpit

- Status: planned.
- User-visible result: Home feels like the primary cockpit for returning to a
  local workspace, not a landing page or a card-based status report.
- Description: Rebuild Home around a strong first-screen workspace object:
  continue state, active project/doc, recent activity, next actions, pinned
  material, and context readiness. Reduce explanatory copy and make the layout
  dense, scannable, and reference-backed.
- Acceptance criteria:
  - [ ] Home remains the first screen.
  - [ ] The first viewport clearly answers where to continue, what changed, and
        what is next.
  - [ ] Recent Activity stays bounded to three or four static cards.
  - [ ] The layout uses the new shell/canvas primitives rather than the current
        white page-card stack.
  - [ ] Status/privacy/agent-safety remains readable and not color-only.
  - [ ] Copy is trimmed so the screen reads like a product surface, not a spec.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check at desktop and narrower
    laptop widths.
  - Visual proof: screenshot compared with the selected Home/company-profile
    reference patterns from Task 7.
- Dependencies:
  - Task 8.
- Likely touched files:
  - `src/features/home/`
  - `src/shared/data/`
  - `src/shared/ui/`
  - `src/app/App.tsx`
  - `docs/UI_SYSTEM.md` if Home introduces reusable patterns.
- Do not touch:
  - More than four Recent Activity cards.
  - Real private workspace names or client data.
  - Real filesystem/Git-derived activity.
  - Full search, semantic search, terminal, file editing, or AI execution.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Medium.
- Cannot verify yet:
  - Real private workspace usefulness; Phase 0 remains mock-only.

### Task 10 - Redesign Visual Explorer And Preview

- Status: planned.
- User-visible result: Explorer feels like a dense artifact inspection surface
  with a meaningful preview hierarchy, not a list of similarly weighted cards.
- Description: Rework Explorer around workspace areas, selected artifact state,
  preview depth, and object-specific visual signals. Preserve markdown, HTML
  mockup, image/card, code-summary, unsupported, and empty preview examples.
- Acceptance criteria:
  - [ ] Explorer remains reachable from Home without becoming the primary first
        screen.
  - [ ] Areas, artifacts, and Preview Pane use a stronger hierarchy than the
        current three-column card list.
  - [ ] Preview content is readable and object-specific, not decorative.
  - [ ] Artifact metadata is dense and scannable; raw paths stay secondary.
  - [ ] Unsupported and empty states remain visible and calm.
  - [ ] No real local HTML execution or filesystem scanning is introduced.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check that all required preview
    kinds remain visible and readable.
  - Visual proof: screenshot compared with the selected workflow/materials
    reference patterns from Task 7.
- Dependencies:
  - Task 8.
  - Task 9 for Home-to-Explorer navigation context.
- Likely touched files:
  - `src/features/explorer/`
  - `src/shared/data/`
  - `src/shared/ui/`
  - `src/app/App.tsx`
  - `docs/UI_SYSTEM.md` if Explorer introduces reusable patterns.
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

### Task 11 - Redesign Project Desk And Agent Context Composer

- Status: planned.
- User-visible result: Project Desk and Agent Context Composer feel like working
  surfaces with controls and state, not long documentation panels.
- Description: Rebuild the project-focused screen and composer around selected
  project context, tasks, source material, context candidates, mock actions, and
  prompt composition. The Composer should feel like a controlled tool/tray for
  handoff, not a chat, terminal, or text dump.
- Acceptance criteria:
  - [ ] Project Desk still shows project status, source docs, next tasks,
        recent/pinned work, context candidates, and mock quick actions.
  - [ ] Agent Context Composer still shows active folder, selected, excluded,
        private, review-first files, and suggested prompt.
  - [ ] Composer visual hierarchy makes selected/excluded/private/review-first
        boundaries understandable at a glance.
  - [ ] Copy prompt success/fallback remains accessible.
  - [ ] Quick actions remain visibly mock/conceptual.
  - [ ] The screen does not imply live Codex/Claude, terminal, filesystem, Git,
        or AI-provider behavior.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check that Project Desk and
    Composer are understandable and bounded.
  - Visual proof: screenshot compared with the selected AI-chat/settings/detail
    reference patterns from Task 7.
- Dependencies:
  - Task 8.
  - Task 9.
  - Task 10 for shared artifact/preview language.
- Likely touched files:
  - `src/features/project-desk/`
  - `src/features/agent-context/`
  - `src/shared/data/`
  - `src/shared/ui/`
  - `src/app/App.tsx`
  - `docs/UI_SYSTEM.md` if reusable composer patterns change.
- Do not touch:
  - Real Codex, Claude, terminal, provider execution, or AI calls.
  - Real file reads or automatic context selection from disk.
  - Auth, cloud sync, telemetry, real private/client data, or `src-tauri/`.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Medium to Large.
- Cannot verify yet:
  - Real agent handoff quality; Phase 0 is mock-only.

### Task 12 - Redesign Verification Pack

- Status: planned.
- User-visible result: Aga has visual evidence to decide whether the redesigned
  Phase 0 concept is good enough to consider Tauri next.
- Description: Run the automated checks and a targeted visual browser pass over
  redesigned Home, Explorer + Preview, Project Desk, and Agent Context
  Composer. Record the evidence and any remaining visual/product gaps.
- Acceptance criteria:
  - [ ] `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build`
        pass.
  - [ ] Targeted gstack `/browse` screenshots cover desktop and narrower laptop
        widths.
  - [ ] Visual comparison against the dashboard UI kit references is recorded.
  - [ ] Phase 0 exclusions remain intact.
  - [ ] `docs/VERIFY_LOG.md` has a compact redesign milestone entry.
  - [ ] `docs/PLAN.md` records the next decision: move toward Tauri, continue
        improving the concept, or stop.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` over all redesigned screens.
  - Data/provider proof: N/A.
- Dependencies:
  - Tasks 7-11.
- Likely touched files:
  - `docs/VERIFY_LOG.md`
  - `docs/PLAN.md`
  - `docs/UI_SYSTEM.md` if verification finds convention gaps.
- Do not touch:
  - New product features beyond the redesign acceptance criteria.
  - `src-tauri/` or real desktop setup.
  - Real filesystem, Git, Codex, auth, cloud, search, terminal, PDF, or file
    editing logic.
- Risk level: standard.
- Skill routing:
  - `$aga-test`
  - `$aga-review`
  - `$aga-verify-agent`
- Estimated scope: Small.
- Cannot verify yet:
  - Phase 1 feasibility with real local folders.

## Completed Task Details From The Functional Sketch

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

- Status: complete.
- User-visible result: Visual Explorer lets the user browse artifacts by meaning
  and inspect readable previews.
- Description: Add the Explorer surface with workspace areas, artifact cards,
  and a Preview Pane for markdown, HTML mockup, image/card, and code-summary
  examples.
- Acceptance criteria:
  - [x] Explorer is reachable from Home without making Explorer the primary
        first screen.
  - [x] Artifact cards show type, role, status, activity, privacy/agent-safety,
        and preview availability.
  - [x] Preview Pane shows readable markdown, HTML mockup, image/card, and code
        summary examples.
  - [x] Empty and unsupported-preview states are visible and calm.
  - [x] `docs/UI_SYSTEM.md` is updated if Explorer introduces or changes
        reusable UI conventions. N/A: existing Explorer, Artifact Card, Preview
        Pane, Status Chip, and area navigation guidance still applies.
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

- Status: complete.
- User-visible result: one fictional project opens as a work surface, not a
  folder listing.
- Description: Build Project Desk for a single public-safe fictional project,
  showing project status, important docs, next tasks, recent/pinned work,
  context candidates, and calm mock quick actions.
- Acceptance criteria:
  - [x] Project Desk is reachable from Home and Explorer.
  - [x] The project view shows status, important docs, next tasks,
        recent/pinned work, context candidates, and quick actions.
  - [x] Quick actions are visibly mock/conceptual and do not perform real OS,
        terminal, filesystem, Git, or agent actions.
  - [x] Empty states exist for no tasks, no pinned docs, and no safe context.
  - [x] Agent work round 2 is documented in the chosen lightweight format.
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

- Status: complete.
- User-visible result: Agent Context Panel is an explicit context composer, not
  a chat or live agent session.
- Description: Add the mock Agent Context Panel and integrate it with Home and
  Project Desk so selected, excluded, private, and review-first files are clear
  before a suggested prompt is copied.
- Acceptance criteria:
  - [x] Panel shows active folder, selected files, excluded files,
        private files, review-first files, and suggested prompt.
  - [x] Copy prompt action copies only mock generated text or shows a graceful
        browser-permission fallback.
  - [x] The panel is visually a composer, not an AI chat, terminal, or Codex
        runtime.
  - [x] Privacy and review-first states are readable without relying only on
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

- Status: complete.
- User-visible result: Aga has enough evidence to choose move to Tauri, improve
  concept, or stop.
- Description: Close the phase with traceable evidence: all Phase 0 criteria,
  documented agent-work rounds, targeted browser proof, cannot-verify items, and
  a compact decision record.
- Acceptance criteria:
  - [x] Home, Explorer + Preview, Project Desk, and Agent Context Panel meet the
        phase acceptance criteria or gaps are explicitly named.
  - [x] At least two agent-work rounds are documented.
  - [x] Targeted browser checks cover desktop and narrower laptop widths.
  - [x] `docs/VERIFY_LOG.md` has a compact phase-close entry.
  - [x] Phase 0 decision is recorded: improve concept before moving to Tauri.
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

### Checkpoint - After Task 7

- [ ] Reference audit is documented in `docs/UI_SYSTEM.md`.
- [ ] Home, Explorer + Preview, Project Desk, and Agent Context Composer each
      have a reference-backed target.
- [ ] Anti-patterns are named clearly enough for implementation agents to avoid
      generic card-grid polish.

### Checkpoint - After Task 8

- [ ] New top-nav/dark-canvas shell is visible in browser.
- [ ] Shared primitives are justified by repeated use.
- [ ] No Phase 0 exclusions were introduced.
- [ ] Typecheck, lint, tests, and build pass.

### Checkpoint - After Task 10

- [ ] Home and Explorer + Preview both use the redesigned shell language.
- [ ] Recent Activity is still limited to three or four static cards.
- [ ] Required preview kinds remain visible and readable.
- [ ] Visual direction is materially closer to the selected dashboard kit
      references.

### Checkpoint - After Task 12

- [ ] Home, Explorer + Preview, Project Desk, and Agent Context Composer are
      visually verified at desktop and narrower laptop widths.
- [ ] Agent Context Composer is still a composer, not a live agent integration.
- [ ] `docs/VERIFY_LOG.md` records redesign proof and remaining gaps.
- [ ] Phase 0 decision is updated: move toward Tauri, continue improving the
      concept, or stop.

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
- Treating the current visual gap as only minor polish.
- Keeping the current left-rail plus white page-card shell as the default
  product frame.
- Copying dashboard UI kit screens, assets, logos, or business content 1:1.

## Phase Closing Gate

- [ ] Redesign acceptance criteria met or gaps named and verified in runtime.
- [ ] Simplification pass completed on touched areas, or explicitly not useful.
- [ ] Agent output verified against task contract and evidence.
- [ ] Review completed on the redesign diff.
- [ ] Relevant docs updated.
- [ ] `docs/VERIFY_LOG.md` entry added with checks, runtime proof,
      cannot-verify, and verdict.
