# Spec: workspace-ui Phase 0

Product source of truth: problem, user, scope, flows, and success criteria.

## Status

- Product name: `workspace-ui` is the working repo name; final product name is
  undecided.
- Spec status: accepted for Phase 0 foundation and visual redesign task pack.
- Owner: Aga.
- Last updated: 2026-06-24.
- Current implementation phase: see `docs/PLAN.md`.

## Problem

A local work folder can become the real center of work: projects, markdown
docs, TODOs, HTML mockups, visual assets, client materials, private notes,
agent instructions, workflow files, and archived ideas. VS Code and Finder can
open those files, but they do not answer the human working questions first:
where did I stop, what changed, what matters now, what is private, what is
source of truth, what is next, and what context is safe to give an agent?

## Target User

Primary user: Aga, as a builder using local folders and coding agents.

Secondary future users:

- developers working across multiple local repos,
- freelancers with local client/project materials,
- builders using AI coding agents,
- people with many markdown docs, specs, mockups, images, and workflow notes,
- visual thinkers who want a calmer work surface before opening VS Code.

## Current Workaround / Status Quo

Open the folder in VS Code or Finder, manually inspect file trees, remember what
is active/private/current, and hand-pick context for Codex from raw paths and
documents.

## Smallest Serious Adoption Wedge

A web prototype that makes one fictional local workspace feel meaningfully more
understandable than a raw file tree: Home shows where to continue, Explorer
shows artifacts with meaning and preview, Project Desk shows one project as a
work surface, and Agent Context Panel makes context selection explicit.

## V1 / Phase 0 Scope

Phase 0 is a web-only visual prototype, not a desktop app.

It will include:

- Home as the first and primary screen.
- Visual Explorer + Preview.
- Project Desk.
- mock Agent Context Panel.
- small Recent Activity signal with three or four static cards.
- public-safe fictional workspace data.
- readable previews for markdown, HTML mockups, images/cards, and code summary.
- quick actions as visible mock/conceptual actions.
- at least two documented rounds of work with an agent.

## Phase 0 Visual Redesign Addendum

The current Phase 0 implementation proves the product surfaces and mock-only
boundaries, but it is not visually accepted as the direction for the product.
The UI currently reads too much like a generic AI-generated dashboard: a set of
descriptive cards inside a scaffold, rather than a premium, dense,
reference-backed workspace tool.

Before moving to Tauri or Phase 1, Phase 0 needs a deeper visual redesign.
This redesign may change the composition, shell, layout primitives, information
density, copy density, and panel hierarchy of the current screens. It must
preserve the product flows and Phase 0 boundaries.

### Redesign Objective

Create a stronger dashboard-kit-inspired product surface for the existing Phase
0 concept:

- top navigation and product chrome inspired by the references,
- a large dark workspace canvas as the dominant shell,
- contextual panels and object-focused work surfaces,
- less explanatory copy and fewer equal-weight cards,
- stronger hierarchy between workspace object, supporting metadata, previews,
  and actions,
- Home, Visual Explorer, Project Desk, and Agent Context Composer still present
  and understandable.

### Redesign Constraints

- Keep Phase 0 web-only and mock-only.
- Keep public-safe fictional data only.
- Keep Home as the primary first screen.
- Keep Visual Explorer, Preview Pane, Project Desk, and Agent Context Composer
  as product concepts.
- Treat the current UI structure as disposable when it conflicts with the
  references.
- Use the dashboard UI kit PNGs as strong visual inspiration, not assets to copy
  1:1.
- Add a reference-matched layout foundation before deeper screen redesign work:
  `Company Profile.png` is the primary shell/object reference, `Workflow.png`
  is the work-canvas reference, and `Company Profile - ai chat*.png` is the
  composer/tray reference.
- Require a small runtime proof of the layout foundation before rebuilding the
  full screen set.
- Do not add Tauri, real filesystem access, Git integration, search, terminal,
  file editing, auth, cloud sync, AI calls, or provider behavior.

## Explicitly Out of Scope

- Tauri.
- Electron.
- real filesystem access.
- real Git integration.
- real Codex execution.
- Claude Code or provider expansion.
- terminal.
- login/auth.
- cloud sync.
- PDF viewer.
- full-text search.
- semantic search.
- review workflow.
- file editing.
- moving files.
- automatic AI summaries.
- using real private/client data in demo data.

## Core Flows

### Flow 1: Start From Home

- Actor: builder opening the app.
- Trigger: app loads.
- Steps:
  1. User lands on Home.
  2. User sees where to continue, recent activity, next tasks, pinned docs, and
     an agent context draft.
  3. User chooses a project/document/preview to inspect.
- Successful outcome: user knows where work left off and what next action makes
  sense before opening VS Code.
- Failure/empty states: no recent activity, no pinned docs, no next tasks.
- Runtime proof required: Home renders with public-safe mock data and remains
  readable on desktop and narrower laptop widths.

### Flow 2: Browse Artifacts With Meaning

- Actor: builder exploring the mock workspace.
- Trigger: user opens Visual Explorer.
- Steps:
  1. User selects a workspace area/project/artifact.
  2. Artifact cards show type, role, status, activity, privacy/agent-safety, and
     preview availability.
  3. Preview pane renders a readable preview or summary.
- Successful outcome: user sees what a file/folder means, not only where it is.
- Failure/empty states: no artifacts in area, unsupported preview type.
- Runtime proof required: markdown, HTML mockup, image/card, and code-summary
  preview examples are visible.

### Flow 3: Work From Project Desk

- Actor: builder focused on one project.
- Trigger: user opens a project/folder from Home or Explorer.
- Steps:
  1. User sees project status and important docs.
  2. User sees next tasks and recent/pinned work.
  3. User sees context-safe files and relevant quick actions.
- Successful outcome: the project feels like a work desk rather than a folder
  listing.
- Failure/empty states: project has no tasks, no pinned docs, or no safe agent
  context.
- Runtime proof required: one fictional project shows docs, previews, tasks,
  context candidates, and quick actions.

### Flow 4: Compose Mock Agent Context

- Actor: builder preparing work for Codex.
- Trigger: user opens or reviews Agent Context Panel.
- Steps:
  1. User sees active folder.
  2. User sees selected, excluded, private, and review-first files.
  3. User reviews suggested prompt and copies it.
- Successful outcome: agent context feels explicit and controlled.
- Failure/empty states: no selected files, private file warning.
- Runtime proof required: panel is visibly a composer, not a chat or live Codex
  session.

## Success Criteria

| Criterion | How measured | Target | Owner |
|---|---|---|---|
| Three main screens exist | Runtime/browser inspection | Home, Explorer + Preview, Project Desk visible | Aga + agent |
| Human-readable first layer | Manual review against overview | Cards explain meaning/status/context before raw paths | Aga |
| Preview value is visible | Runtime/browser inspection | Markdown, HTML mockup, image/card, code summary examples | Aga + agent |
| Phase 0 scope stays small | Review of UI and docs | No real filesystem, Git, Codex, Tauri, auth, cloud, search | Aga + agent |
| Agent Context Panel works as concept | Manual workflow review | Selected/excluded/private/review-first context is clear | Aga |
| Recent Activity stays bounded | UI inspection | Three or four static cards only | Aga + agent |
| Visual direction follows the dashboard UI kit references | Visual review | Calm, premium, dense, polished, work-focused UI | Aga |
| Accessibility baseline is present | Manual/browser review | Buttons, focus states, contrast, non-color-only status | Agent |
| Agent workflow is documented | Docs review | At least two rounds recorded before Phase 0 decision | Aga + agent |
| Phase 0 decision can be made | Phase close review | Move to Tauri, improve concept, or stop | Aga |
| Redesign direction is documented | Docs review | Reference audit and task pack exist before implementation PRs | Aga + agent |
| Reference-matched layout foundation is accepted | Docs + runtime proof | `docs/UI_SYSTEM.md` defines the hybrid reference grammar and the app shows a small proof before full screen redesign | Aga |
| Current UI is treated as a functional sketch | Plan review | Redesign tasks may replace shell/layouts while preserving Phase 0 flows | Aga + agent |
| Dashboard-kit inspiration is stronger | Visual review | Top nav, dark workspace canvas, dense panels, object-focused surfaces, and refined control rhythm are visible | Aga |
| Generic AI-dashboard feel is removed | Visual review | Screens no longer read as explanatory card grids or template scaffold UI | Aga |

## Product Constraints

- Legal/compliance constraints: do not copy external UI kit assets 1:1 into
  public UI without a separate licensing decision.
- Data/privacy constraints: public-safe mock data only; no real private/client
  workspace names or content.
- Performance expectations: prototype should feel responsive on desktop/laptop;
  no heavy indexing or real data loading in Phase 0.
- Accessibility expectations: keyboard/focus basics, readable contrast, status
  not only by color, no critical info hidden only on hover.
- Budget/cost constraints: no paid services or AI calls in Phase 0.

## Source-of-Truth Links

| Area | Source |
|---|---|
| Source brief | `docs/product/visual_workspace_layer_project_overview_v3.md` |
| Architecture | `docs/ARCHITECTURE.md` |
| Foundation decisions | `docs/decisions/ADR-0001-project-foundation.md` |
| Design references | `docs/design/references/dashboard-ui-kit/` |
| UI conventions | `docs/UI_SYSTEM.md` |
| AI boundaries | `docs/AI_BOUNDARIES.md` once triggered by a real AI call |
| Integrations | `docs/INTEGRATIONS.md` once triggered |
| Operations | `docs/OPERATIONS.md` once launch prep begins |

## ADR Candidates

- Accepted: project foundation, stack, module convention, and Tauri-compatible
  repo shape in `docs/decisions/ADR-0001-project-foundation.md`.
- Accepted: UI system conventions in `docs/UI_SYSTEM.md`, created early at
  Aga's request so agents have a durable UI reference before later views exist.
- Existing module convention remains `src/features`; the redesign does not
  change the architecture convention, and the shared component library should
  grow organically from repeated Phase 0 screen patterns after the foundation
  proof, not from a broad up-front abstraction pass.
- Future: reference-matched layout foundation and component grammar, if the
  accepted proof establishes reusable app-shell/workspace-canvas primitives that
  should be treated as architecture rather than ordinary UI implementation.
- Future: HTML preview sandbox policy before Phase 1 real local HTML preview.
- Future: Tauri filesystem permissions and ignore rules before real workspace
  scanning.
- Future: agent provider boundary before any real Codex/Claude integration.

## Open Questions

### Blocking

- N/A for the Phase 0 visual redesign task pack. Aga confirmed the scope stays
  Phase 0 web-only/mock-only, the current UI structure is disposable, the
  redesign should be deeper than polish, and the reference-matched layout
  foundation should be documented and proven in runtime before full screen
  redesign.

### Non-blocking

- Final product name after `workspace-ui`.
- Exact redesigned first screen composition after the reference audit and first
  visual pass.
- Whether to introduce Radix/shadcn for specific accessible primitives.
- Where to host/share the prototype, if anywhere, during Phase 0.
- Exact format for documenting the two agent-work rounds.
- Exact shared primitive API names after the reference-matched foundation proof.

## Review Notes

- Accepted by: Aga.
- Date: 2026-06-20.
- Links to discussion/PR: current spec conversation.
