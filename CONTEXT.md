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
