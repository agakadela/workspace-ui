# workspace-ui

Working name for a Phase 0 visual prototype of a calmer workspace layer above
local folders, documents, previews, tasks, and agent context.

## Status

- Stage: framing / foundation docs
- Current phase: see `docs/PLAN.md`
- Product spec: see `docs/SPEC.md`
- Architecture: see `docs/ARCHITECTURE.md`
- Foundation ADR: see `docs/decisions/ADR-0001-project-foundation.md`
- Source brief: see `docs/product/visual_workspace_layer_project_overview_v3.md`
- Design references: see `docs/design/references/dashboard-ui-kit/`

## Source of Truth

| Area | File |
|---|---|
| Product scope and success criteria | `docs/SPEC.md` |
| Current execution plan | `docs/PLAN.md` |
| Stack, module convention, data flow, trust boundaries | `docs/ARCHITECTURE.md` |
| Domain language | `CONTEXT.md` |
| Irreversible decisions | `docs/decisions/` |
| Verification proof | `docs/VERIFY_LOG.md` |
| Agent operating workflow | `docs/AGENT_WORKFLOW.md` |

## Phase 0 Intent

Build a web-only React prototype on public-safe mock data. It should prove
whether the product direction is useful before moving toward Tauri and real
local filesystem access.

Phase 0 includes:

- Home
- Visual Explorer + Preview
- Project Desk
- mock Agent Context Panel
- public-safe mock workspace data
- at least two documented agent-work rounds

Phase 0 does not include Tauri, real filesystem access, Git integration, real
Codex execution, login, cloud sync, PDF viewer, full-text search, semantic
search, terminal, file editing, or moving files.

## Setup

The Vite app has not been scaffolded yet. The next implementation step is to
create the React/TypeScript/Tailwind skeleton inside this repo.

Intended commands after scaffold:

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
```

## Design Direction

The UI should be calm, premium, readable, visual, and work-focused. The PNGs in
`docs/design/references/dashboard-ui-kit/` are close inspiration for density,
polish, component feel, and dashboard craft. They are not product assets and
should not be copied 1:1 into public UI without a separate licensing decision.

## Future Direction

If Phase 0 proves useful, Phase 1 moves toward Tauri. The React frontend should
remain top-level and reusable; Tauri will later add `src-tauri/` beside it.
