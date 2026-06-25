# CONTEXT.md

Purpose: domain language. This file prevents near-synonyms from drifting into
separate concepts.

## Canonical Terms

| Term | Meaning | Do not confuse with | Allowed aliases | Source / decision | Decided on |
|---|---|---|---|---|---|
| `workspace-ui` | Working repo/folder name for the Phase 0 app. | Final product name. | N/A | Spec conversation | 2026-06-20 |
| `Visual Workspace Layer` | Product concept: a human-readable layer above local work folders. | File manager, code editor, agent chat. | Workspace layer | Overview v3 | 2026-06-20 |
| `Phase 0` | Web-only visual prototype on mock data. | Tauri app, production desktop app. | visual prototype | Overview v3 | 2026-06-20 |
| `Home` | First screen that answers what is happening, where to continue, and what is next. | Dashboard metrics page, file browser. | daily work surface | Overview v3 | 2026-06-20 |
| `Visual Explorer` | Workspace browsing surface organized by areas, projects, and artifact cards. | Raw folder tree. | Explorer | Overview v3 | 2026-06-20 |
| `Preview Pane` | Readable preview area for markdown, HTML mockups, images, and code summaries. | Raw editor. | Preview | Overview v3 | 2026-06-20 |
| `Project Desk` | Focused view for one project/folder as a work surface. | Folder listing. | Project view | Overview v3 | 2026-06-20 |
| `Agent Context Panel` | Context composer for selected/excluded/private files and suggested prompt. | Agent chat, Codex runtime. | Context panel | Overview v3 | 2026-06-20 |
| `public-safe mock data` | Fictional data safe for GitHub/social/demo use. | Real private workspace data. | demo data | Overview v3 | 2026-06-20 |
| `Dashboard UI kit references` | PNG design references used for visual inspiration. | Product assets to copy. | UI kit PNGs | Spec conversation | 2026-06-20 |
| `Phase 0 Visual Redesign Pack` | Planned redesign work that replaces the current generic/card-heavy UI language while preserving Phase 0 flows and mock-only boundaries. | Minor polish pass, Phase 1/Tauri work. | visual redesign pack | Spec conversation | 2026-06-24 |
| `Workspace Canvas` | Dominant dark product surface for the active workspace object, preview, composer, or project desk. | White page card, raw file browser, decorative background. | dark canvas, workspace surface | Spec conversation | 2026-06-24 |
| `UI implementation reset` | Task 8B reset boundary: the current visual layer is disposable, while product truth, Phase 0 scope, mock-only boundaries, and public-safe content remain authoritative. | Project reset, minor polish pass, component cleanup. | implementation reset | Spec conversation | 2026-06-25 |
| `Zero legacy visual carryover` | Task 8B design rule: no current UI treatment is preserved for visual reasons; existing UI may be used only as functional evidence for flows, data semantics, and test coverage. | Polishing existing screens, preserving current component rhythm. | no legacy carryover | Spec conversation | 2026-06-25 |
| `Design system foundation` | Task 8B deliverable: the first concrete visual grammar for the whole Phase 0 app, expressed through shared shell/canvas/object/tabs/panel/composer rules and the Home cockpit implementation. | Final design system, isolated component library, screen-specific polish. | design foundation | Spec conversation | 2026-06-25 |
| `Workspace cockpit model` | Shared screen model for Phase 0: one selected workspace, project, artifact, or context object inside a reference-matched canvas with local controls and supporting panels. | Separate dashboard pages, raw file browser, marketing hero. | cockpit model | Spec conversation | 2026-06-25 |
| `App-local cockpit implementation` | Task 8B code organization after physically removing `src/features` and `src/shared`: the concrete Home cockpit foundation lives under `src/app` until repeated patterns justify extraction. | Final module convention, global component library, Phase 1 platform adapter. | app-local cockpit | Task 8B implementation | 2026-06-25 |

## Important Distinctions

| Concept A | Concept B | Difference | Why it matters |
|---|---|---|---|
| Visual Workspace Layer | VS Code | The app orients and previews work; VS Code edits code/files. | Prevents drifting into a code editor clone. |
| Visual Workspace Layer | Finder | The app communicates meaning/status/context; Finder locates files. | Prevents drifting into a prettier file browser. |
| Agent Context Panel | Codex integration | The panel composes mock context in Phase 0; it does not run Codex. | Prevents fake integration. |
| Recent Activity | Git timeline | Phase 0 has a small static signal; real Git awareness is later. | Prevents scope creep. |
| UI kit inspiration | UI kit copying | References guide quality and feel; final UI must be adapted to this product. | Avoids licensing/design-copy risk. |
| Visual redesign | Visual polish | Redesign may replace shell, hierarchy, and layout primitives; polish only adjusts the existing UI. | Prevents treating the current generic UI as basically accepted. |
| Workspace Canvas | Left rail shell | Canvas is the primary product surface; a rail may exist only as local navigation when justified. | Keeps the redesign close to the references instead of the current scaffold. |
| UI implementation reset | Project reset | UI implementation reset preserves the accepted product/documentation boundary while rebuilding the visual layer; project reset would restart the whole foundation. | Keeps Task 8B bold without discarding already accepted project truth. |
| Zero legacy visual carryover | Functional continuity | The redesign does not preserve current visual treatments; it preserves product concepts, flows, data meanings, and Phase 0 exclusions. | Prevents agents from treating current components as design constraints. |
| Design system foundation | Final design system | The foundation is concrete enough for Tasks 9-11 to follow, but may still evolve as required screens are rebuilt. | Prevents overbuilding abstractions before the full flow proves them. |
| Workspace cockpit model | Separate page redesigns | The cockpit model gives all required screens one shared structure; each later task adapts it to the next product surface. | Prevents disconnected screen-by-screen polish. |
| App-local cockpit implementation | Feature/shared architecture | App-local cockpit is the Task 8B reset shape, not permission to create dumping grounds or skip future product ownership once patterns repeat. | Prevents agents from recreating the deleted folders too early or treating the temporary reset as Phase 1 architecture. |

## Naming Conventions

- User-facing copy uses calm, work-focused language.
- Code/module naming uses lower-case product concepts where practical:
  `home`, `explorer`, `project-desk`, `agent-context`.
- Data model naming is mock-only in Phase 0.
- Workspace/tenant terms are not real auth/tenant concepts in Phase 0.

## Open Naming Questions

### Blocking

- N/A for Phase 0 foundation.

### Non-blocking

- Final product name after `workspace-ui`.
- Whether user-facing labels stay in English or mix Polish internal terms during
  early prototyping.

## Update Log

| Date | Change | Reason | Commit/PR |
|---|---|---|---|
| 2026-06-20 | Initial terms | Project framing/spec | N/A |
| 2026-06-24 | Added visual redesign and workspace canvas terms | Phase 0 redesign task pack | Current PR |
| 2026-06-25 | Added UI implementation reset boundary | Clarified Task 8B reset scope before rebuilding | Current conversation |
| 2026-06-25 | Added zero legacy visual carryover rule | Clarified that Task 8B preserves behavior, not current visual treatments | Current conversation |
| 2026-06-25 | Added design system foundation and workspace cockpit terms | Clarified Task 8B deliverable and redesign sequence | Current conversation |
| 2026-06-25 | Added app-local cockpit implementation | Recorded that Task 8B physically removed `src/features` and `src/shared` and rebuilt under `src/app` | Current conversation |
