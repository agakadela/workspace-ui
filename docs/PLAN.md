# PLAN.md

Execution source of truth: current phase and active tasks only.

## Current Phase: Phase 0 Visual Redesign Before Tauri

### Goal / Visible Result

Replace the current functional Phase 0 sketch with a deeper
dashboard-kit-inspired visual direction before any Tauri work. The redesigned
web prototype should still show Home, Visual Explorer + Preview, Project Desk,
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
- [x] The app shell moves toward top navigation, product chrome, and a dominant
      dark workspace canvas instead of the current left rail plus white page
      card composition.
- [x] The rejected Task 8B standalone demo surface is removed from the product
      UI and from the redesign plan.
- [x] Task 8B is redefined as a design system foundation task that addresses the
      source problem: agents polishing disconnected screens without a shared
      reference-matched visual grammar.
- [x] Task 8B establishes the initial concrete design system foundation and
      Workspace cockpit model for the whole Phase 0 app, with Home as the first
      implemented cockpit surface.
- [ ] Tasks 9-11 rebuild Visual Explorer + Preview, Project Desk, and Agent
      Context Composer in sequence against the Task 8B design system
      foundation.
- [x] Redesign uses dashboard UI kit references strongly without copying
      reference assets, brand content, or exact screens 1:1.
- [ ] Targeted visual verification checks the redesigned screens at desktop and
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
- The redesign should not use a standalone demo/checkpoint surface as the
  visual gate. Aga rejected that direction. Task 8B must show the design system
  in the real Home cockpit, and the full gate is the Phase 0 product flow after
  Tasks 9-12.
- The shared component library should start with the concrete Task 8B design
  system foundation and then grow from repeated needs while rebuilding the
  actual Phase 0 screens, not from a detached demo surface.
- Future Tauri compatibility remains a Phase 1 requirement. Task 8B removed the
  current `src/shared/platform/` placeholder with the rest of the legacy visual
  implementation; a real platform boundary should be reintroduced only when
  Phase 1 behavior exists.
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
  browser checks covered Home, Explorer + Preview, Project Desk, and Agent
  Context at desktop and narrower laptop widths; the phase decision is to
  improve the concept before moving to Tauri.
- Task 7 Reference Audit And Redesign Brief is complete: `docs/UI_SYSTEM.md`
  now maps the dashboard UI kit references to concrete redesign targets for
  shell, navigation, object surfaces, tabs, panels, Preview, Composer, and each
  core screen.
- Task 8 Redesign Shell, Tokens, And Layout Primitives is complete after the
  dark-canvas blocker fix: the app now uses shared top navigation/product
  chrome, a dominant dark workspace canvas that carries the screen containers
  instead of sitting behind large bright page cards, named Tailwind
  shell/radius/depth tokens, and reusable shell/tray/tab primitives for the
  remaining redesign tasks.
- Rejected Task 8B runtime demo surface was reverted: the app no longer has a
  `Foundation` navigation item or a standalone demo screen.
  The plan now treats the whole Phase 0 product flow as the visual gate.
- Task 8B Design System Foundation And Home Cockpit is complete: `src/features`
  and `src/shared` were physically removed, the 8B implementation now lives
  app-local under `src/app`, and Home renders as a reference-matched Workspace
  cockpit with top chrome, object header, segmented tabs, dense panels, dotted
  work canvas, status/privacy text, bounded recent activity, and a docked mock
  context composer.
- Dashboard UI kit PNGs exist as references only, not product assets.

## Phase 0 Decision

- Decision: improve concept before moving to Tauri.
- Reason: the web prototype shows the core surfaces, mock-only boundaries,
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
  -> public-safe mock workspace data in the Task 8B app-local cockpit model
  -> docs/UI_SYSTEM.md visual reference
    -> functional Home / Explorer / Project Desk / Agent Context sketch
      -> reference audit and redesign brief
        -> redesigned shell, tokens, and layout primitives
          -> Task 8B concrete design system foundation + Home cockpit
            -> Task 9 Explorer + Preview in the same cockpit system
              -> Task 10 Project Desk in the same cockpit system
                -> Task 11 Agent Context Composer as attached handoff tray
                  -> Task 12 whole-flow visual verification pack
```

Notes:

- Task 1 is the required foundation slice because no app exists yet.
- Task 8B intentionally removed `src/features` and `src/shared`; later redesign
  tasks should extend the app-local cockpit foundation first and reintroduce
  product-area folders only when the new pattern has repeated enough to earn
  extraction.
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
  - Visual comparison: compare notes against
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
  - Whether the selected patterns work in the full product until Task 8B+.

### Task 8 - Redesign Shell, Tokens, And Layout Primitives

- Status: complete.
- User-visible result: the app has a stronger product shell and reusable visual
  primitives that can carry the redesigned screens.
- Description: Replace the default scaffold feel with a reference-backed shell:
  top navigation, dark workspace canvas, product chrome, contextual action
  cluster, tighter radius/depth rules, denser panel rhythm, and reusable layout
  primitives for object surfaces, tab strips, preview/composer trays, and status
  controls.
- Acceptance criteria:
  - [x] The primary shell uses top navigation/product chrome rather than the
        current left rail as the default app frame.
  - [x] A dark workspace canvas becomes the dominant screen surface.
  - [x] Shared primitives exist only where they reduce duplication across the
        redesign.
  - [x] Tailwind theme tokens stay named in `src/index.css`; raw hex values are
        not scattered through feature components.
  - [x] Focus states, buttons, tabs, chips, and icon controls remain accessible.
  - [x] `docs/UI_SYSTEM.md` reflects the new shell/primitives.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check that the shell renders at
    desktop and narrower laptop widths without overlap, and that Home,
    Explorer, and Project Desk use the dark canvas as the actual working
    surface.
  - Visual comparison: screenshot against selected dashboard kit shell references.
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

### Task 8B - Design System Foundation And Home Cockpit

- Status: complete, replaces the rejected standalone demo/checkpoint direction
  and the previous "one mega reset task" shape.
- User-visible result: Aga can judge the first concrete, reference-matched
  design system foundation in the real app, with Home rebuilt as the first
  Workspace cockpit surface.
- Five-line feature spec:
  - Problem: the rejected 8B checkpoint and the current screen polish both
    treated symptoms; agents lacked a concrete system for shell, canvas,
    object hierarchy, panels, controls, preview, and composer treatment.
  - Flow: remove any standalone foundation/demo/checklist remnants, then build
    the shared Workspace cockpit model and apply it to Home as the first screen.
  - Visible result: Home remains first, but it now demonstrates the project's
    initial design system: top product chrome, selected workspace object,
    dominant dark canvas, object header, compact controls/tabs, dense panels,
    bounded recent activity, and a clear context-readiness/composer affordance.
  - Out of scope: finishing Explorer, Project Desk, or Composer redesigns;
    copied reference assets; new UI dependencies; Tauri; real filesystem/Git/
    Codex/search/terminal/auth/cloud/PDF/file editing behavior.
  - Success: Aga accepts the design system foundation as strong enough for
    Tasks 9-11 to rebuild the remaining required surfaces against it.
- Description: Establish the first concrete design system for the whole Phase 0
  app, not a detached component library and not a partial demo surface. Treat
  the current UI as functional evidence only. The Task 8B output must make the
  reference grammar concrete in product code and documentation: shell, canvas,
  object header, tab/control rhythm, dense panel treatment, preview/composer
  rules, typography, spacing, radius, depth, states, and icon/control rhythm.
- Task shape: design-system foundation plus Home cockpit implementation. Tasks
  9-11 then apply the foundation to the next required surfaces in sequence.
- Visual-system scope: zero legacy visual carryover. Preserve product concepts,
  navigation, mock data semantics, preview requirements, tests where useful, and
  Phase 0 boundaries; do not preserve current layout composition, component
  rhythm, panel treatment, typography, spacing, depth, or composer placement for
  visual reasons. Existing shared UI primitives may be rewritten, replaced,
  renamed, or removed if they do not fit the new design system foundation.
- Acceptance criteria:
  - [x] No legacy `Foundation` route, nav item, standalone demo screen,
        checklist surface, or demo-specific test remains.
  - [x] `docs/UI_SYSTEM.md` defines the initial concrete design system
        foundation for shell, canvas, object header, tabs/controls, panels,
        preview/composer treatment, typography, spacing, radius, depth, and
        states.
  - [x] Home is rebuilt as the first-screen Workspace cockpit, not an
        explanatory card stack.
  - [x] Home demonstrates a near-clone visual grammar from the reference kit:
        top nav, dominant rounded dark canvas, object header, dense panels,
        segmented controls/tabs where useful, compact action clusters, and
        composer/context-readiness attachment.
  - [x] The implementation does not merely reuse current components with new
        colors, radii, or spacing; existing layouts and primitives are
        disposable when they conflict with the references.
  - [x] Recent Activity remains bounded to three static cards.
  - [x] Status/privacy/agent-safety remains readable and not color-only.
  - [x] Phase 0 mock-only exclusions remain intact.
- Work order:
  - [x] First: define the cockpit grammar in code and docs: shell, canvas,
        selected object header, controls/tabs, panel hierarchy, and states.
  - [x] Second: rebuild Home against that grammar using existing public-safe
        mock semantics.
  - [x] Third: run runtime screenshot review against `Company Profile.png`,
        `Workflow.png`, and `Company Profile - ai chat*.png` with the question:
        "Is this a strong design system foundation, or still a polished version
        of the old UI?"
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check for Home at desktop and
    `1024px`, plus a quick navigation smoke check that future surfaces remain
    reachable without being visually accepted yet.
  - Visual comparison: Home screenshots compared against the selected
    dashboard-kit patterns and recorded in PR/final notes.
- Dependencies:
  - Task 7.
  - Task 8.
- Touched files:
  - `docs/UI_SYSTEM.md`
  - `docs/PLAN.md`
  - `docs/ARCHITECTURE.md`
  - `docs/VERIFY_LOG.md`
  - `CONTEXT.md`
  - `src/app/App.tsx`
  - `src/app/cockpitData.ts`
  - `src/app/App.test.tsx`
  - `src/index.css`
  - deleted `src/features/`
  - deleted `src/shared/`
- Do not touch:
  - Standalone demo/checklist surfaces.
  - Broad component library work beyond the concrete design system foundation.
    Rewriting existing shared primitives is allowed when it supports that
    foundation.
  - Dashboard UI kit PNGs as product assets.
  - New UI dependencies without asking first.
  - `src-tauri/`
  - Real filesystem, Git, terminal, Codex, auth, cloud, search, PDF, or file
    editing behavior.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Large.
- Cannot verify yet:
  - Aga's design acceptance of the foundation.
  - Whether the full Phase 0 visual direction is accepted until Tasks 9-12
    apply and verify the foundation across the whole flow.

### Task 9 - Redesign Visual Explorer And Preview

- Status: planned.
- User-visible result: Explorer feels like a dense artifact inspection surface
  in the same Workspace cockpit system, not a list of similarly weighted cards.
- Description: Rebuild Explorer around workspace areas, selected artifact
  state, payload-forward artifact cards, preview depth, and object-specific
  visual signals. Preserve markdown, HTML mockup, image/card, code-summary,
  unsupported, and empty preview examples.
- Acceptance criteria:
  - [ ] Explorer remains reachable from Home without becoming the primary first
        screen.
  - [ ] Explorer uses the Task 8B design system foundation rather than inventing
        a separate screen language.
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
    kinds remain visible and readable at desktop and `1024px`.
  - Visual comparison: screenshot compared with `Workflow.png`,
    `Company Profile - Materials.png`, and `Employees- profile details.png`.
- Dependencies:
  - Task 8B.
- Likely touched files:
  - `src/app/App.tsx`
  - `src/app/cockpitData.ts`
  - `src/index.css`
  - `docs/UI_SYSTEM.md` if Explorer introduces reusable pattern refinements.
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
- Estimated scope: Medium to Large.
- Cannot verify yet:
  - Real local-file preview security; it is Phase 1+.

### Task 10 - Redesign Project Desk

- Status: planned.
- User-visible result: Project Desk feels like a focused project cockpit in the
  same system, not a long documentation/status page.
- Description: Rebuild the project-focused screen around selected project
  context, source material, next tasks, recent/pinned work, context candidates,
  and mock quick actions using the Task 8B foundation and the artifact/preview
  language established in Task 9.
- Acceptance criteria:
  - [ ] Project Desk remains reachable from Home and Explorer.
  - [ ] Project Desk uses the Task 8B design system foundation rather than
        inventing a separate screen language.
  - [ ] The screen shows project status, source docs, next tasks,
        recent/pinned work, context candidates, and mock quick actions.
  - [ ] Quick actions are visibly mock/conceptual and grouped as controls, not
        explanatory panels.
  - [ ] Empty states remain visible for no tasks, no pinned docs, and no safe
        context.
  - [ ] The screen does not imply real filesystem, Git, terminal, Codex/Claude,
        auth, cloud, search, PDF, or file editing behavior.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check that Project Desk is
    understandable and bounded at desktop and `1024px`.
  - Visual comparison: screenshot compared with `Company Profile.png`,
    `settings- General.png`, and `Company Profile - Materials.png`.
- Dependencies:
  - Task 8B.
  - Task 9 for shared artifact/preview language.
- Likely touched files:
  - `src/app/App.tsx`
  - `src/app/cockpitData.ts`
  - `src/index.css`
  - `docs/UI_SYSTEM.md` if Project Desk introduces reusable pattern
    refinements.
- Do not touch:
  - Real open-in-VS-Code, Finder, or terminal behavior.
  - File editing, moving, deleting, or pinning persistence.
  - Real Git status, commits, diffs, or review workflow.
  - Real private/client project data.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Medium to Large.
- Cannot verify yet:
  - Real workspace usefulness against Aga's private folder.

### Task 11 - Redesign Agent Context Composer

- Status: planned.
- User-visible result: Agent Context Composer feels like an attached handoff
  tray/layer in the same cockpit system, not a chat, terminal, or text dump.
- Description: Rebuild the mock Composer around active folder, selected,
  excluded, private, review-first files, suggested prompt, and copy action.
  It should borrow the reference AI-chat tray/share-panel density while
  translating access semantics into explicit context boundaries.
- Acceptance criteria:
  - [ ] Composer uses the Task 8B design system foundation rather than inventing
        a separate screen language.
  - [ ] Composer is attached to the current workspace/project context on Home
        and Project Desk, not placed as a long standalone documentation panel.
  - [ ] Selected, excluded, private, and review-first boundaries are visible at
        a glance.
  - [ ] Suggested prompt remains secondary to context boundary clarity.
  - [ ] Copy prompt success/fallback remains accessible.
  - [ ] The Composer does not imply live Codex/Claude, terminal, provider
        execution, automatic private-data selection, or real file reads.
- Verification:
  - Automated: `npm run typecheck`, `npm run lint`, `npm test`,
    `npm run build`.
  - Runtime/manual: targeted gstack `/browse` check that Composer states are
    understandable and bounded on Home and Project Desk at desktop and `1024px`.
  - Visual comparison: screenshot compared with `Company Profile - ai chat.png`
    and `Company Profile - ai chat (1).png`.
- Dependencies:
  - Task 8B.
  - Task 10 for Project Desk attachment.
- Likely touched files:
  - `src/app/App.tsx`
  - `src/app/cockpitData.ts`
  - `src/index.css`
  - `docs/UI_SYSTEM.md` if reusable composer patterns change.
- Do not touch:
  - Real Codex, Claude, terminal, provider execution, or AI calls.
  - Real file reads or automatic context selection from disk.
  - Auth, cloud sync, telemetry, real private/client data, or `src-tauri/`.
- Risk level: standard.
- Skill routing:
  - `$aga-build`
  - `frontend-ui-engineering`
- Estimated scope: Medium.
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
  - Data/provider evidence: N/A.
- Dependencies:
  - Tasks 8B-11.
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
  - Data/provider evidence: N/A.
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
  - Data/provider evidence: N/A.
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
  - Data/provider evidence: N/A.
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
  - Data/provider evidence: N/A.
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
  - Data/provider evidence: N/A.
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
  documented agent-work rounds, targeted browser review, cannot-verify items, and
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
  - Data/provider evidence: N/A.
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

- [x] New top-nav/dark-canvas shell is visible in browser.
- [x] Shared primitives are justified by repeated use.
- [x] No Phase 0 exclusions were introduced.
- [x] Typecheck, lint, tests, and build pass.

### Checkpoint - After Task 8B

- [x] Standalone `Foundation` route, nav, feature, tests,
      and review doc are removed.
- [x] The initial concrete design system foundation is documented in
      `docs/UI_SYSTEM.md` and visible in the real Home cockpit.
- [x] Home is redesigned as the first Workspace cockpit surface using a
      near-clone visual grammar from the references.
- [x] Runtime review shows Home in the real app, not a detached demo/checklist
      surface.
- [ ] Aga has accepted the design system foundation as strong enough for Tasks
      9-11 to apply to the remaining required surfaces.
- [x] Component extraction remains limited to the concrete design system
      foundation and repeated needs from the actual Phase 0 screens.
- [x] No Phase 0 exclusions were introduced.
- [x] Typecheck, lint, tests, and build pass.

### Checkpoint - After Task 9

- [ ] Explorer + Preview use the Task 8B design system foundation.
- [ ] Required preview kinds remain visible and readable.
- [ ] Artifact cards are payload-first and raw paths stay secondary.
- [ ] Unsupported and empty states remain visible and calm.
- [ ] Visual direction is materially closer to `Workflow.png`,
      `Company Profile - Materials.png`, and `Employees- profile details.png`.

### Checkpoint - After Task 10

- [ ] Project Desk uses the Task 8B design system foundation and Task 9
      artifact/preview language.
- [ ] Project status, source docs, next tasks, recent/pinned work, context
      candidates, and mock quick actions remain visible.
- [ ] Quick actions remain visibly mock/conceptual.
- [ ] Project Desk does not read like a long documentation/status page.

### Checkpoint - After Task 11

- [ ] Agent Context Composer uses the Task 8B design system foundation.
- [ ] Composer is attached to Home and Project Desk context instead of becoming
      a standalone chat/text panel.
- [ ] Selected, excluded, private, and review-first boundaries are visible at a
      glance.
- [ ] Composer still does not imply live agent execution, terminal, provider
      behavior, or real file reads.

### Checkpoint - After Task 12

- [ ] Home, Explorer + Preview, Project Desk, and Agent Context Composer are
      visually verified at desktop and narrower laptop widths.
- [ ] Agent Context Composer is still a composer, not a live agent integration.
- [ ] `docs/VERIFY_LOG.md` records redesign evidence and remaining gaps.
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
- [ ] `docs/VERIFY_LOG.md` entry added with checks, runtime review,
      cannot-verify, and verdict.
