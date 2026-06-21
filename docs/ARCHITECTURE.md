# ARCHITECTURE.md

System source of truth: stack, module convention, data flow, and trust
boundaries.

## Status

- Last reviewed: 2026-06-20.
- Reviewed by: Aga + agent.
- Related ADRs: `docs/decisions/ADR-0001-project-foundation.md`.

## Stack

| Layer | Decision | Source / ADR | Notes |
|---|---|---|---|
| App framework | Vite + React | ADR-0001 | Web-only Phase 0, Tauri-compatible later. |
| Language | TypeScript | ADR-0001 | Strict app code expected after scaffold. |
| Styling | Tailwind CSS v4 | ADR-0001 + current Tailwind docs | Own dashboard-kit-inspired UI system, not default SaaS look. Use the Vite plugin and CSS-first theme tokens. |
| Icons | lucide-react | ADR-0001 | Use real icons for actions where available. |
| UI primitives | Own components; Radix/shadcn selectively | ADR-0001 | Ask first before adding. |
| Package manager | npm | ADR-0001 | Chosen for stability and agent/tool compatibility. |
| Database | N/A for Phase 0 | ADR-0001 | Mock data only. |
| Migrations | N/A for Phase 0 | ADR-0001 | `migrations/` is reserved by workflow only. |
| Auth | N/A for Phase 0 | ADR-0001 | No login or protected routes. |
| Payments | N/A | ADR-0001 | Out of scope. |
| AI provider | N/A for Phase 0 | ADR-0001 | Mock Agent Context Panel only. |
| Hosting/deploy | UNKNOWN | ADR-0001 | Local prototype first. |
| Future desktop | Tauri first | ADR-0001 | Phase 1 candidate if Phase 0 succeeds. |

## Module Convention

Default principle: organize code by product/domain ownership, not by technical
layer.

- Chosen convention: `features`.
- Exact root path: `src/features`.
- Reason: Phase 0 has clear product areas: Home, Explorer, Project Desk, and
  Agent Context. Feature ownership will stay readable and portable into Tauri.
- Existing repo convention: N/A, new repo.

Planned frontend structure:

```txt
workspace-ui/
  package.json
  index.html
  src/
    app/
      App.tsx
      routes.ts
    features/
      home/
      explorer/
      project-desk/
      agent-context/
    shared/
      ui/
      data/
      platform/
  public/
  docs/
  src-tauri/        # Phase 1 only, not created in Phase 0
```

Global technical folders policy:

- `src/shared/ui/` is allowed for reusable primitives and design-system pieces.
- `src/shared/data/` is allowed for mock data and shared data shapes.
- `src/shared/platform/` is allowed for adapters that hide mock vs future Tauri
  behavior.
- Broad global dumping grounds for application logic are not allowed.

## Styling Tooling

Tailwind setup/config/theme work must be checked against the current official
Tailwind docs before editing. Tailwind changed materially between v3 and v4, so
agents should not rely on memory or older scaffold patterns.

Current project setup:

- `tailwindcss` and `@tailwindcss/vite` are installed together.
- `vite.config.ts` registers `@tailwindcss/vite`.
- `src/index.css` imports Tailwind with `@import "tailwindcss";`.
- Custom design tokens live in CSS using `@theme`.
- No `tailwind.config.*` or `postcss.config.*` file is used unless future
  official docs and installed package versions require one.

Source checked on 2026-06-20:

- `https://tailwindcss.com/docs/installation/using-vite`
- `https://tailwindcss.com/docs/theme`
- `https://tailwindcss.com/docs/functions-and-directives`
- `https://tailwindcss.com/docs/upgrade-guide`

## Data Flow

Phase 0:

```txt
public-safe mock data
  -> platform/mock workspace adapter
  -> feature view models
  -> React views/components
  -> user-visible prototype
```

Phase 1 candidate:

```txt
Tauri filesystem commands
  -> platform/tauri workspace adapter
  -> feature view models
  -> React views/components
```

Notes:

- Feature UI should not call Tauri APIs directly.
- Mock data should model privacy/status/context concepts without using real
  private data.
- Raw technical details may exist as secondary UI, not as the first layer.

## Trust Boundaries

| Boundary | Validation | Auth/AuthZ enforcement | Logging | Failure behavior |
|---|---|---|---|---|
| Browser -> mock data | TypeScript data shapes | N/A | Browser dev only | Empty/error states in UI |
| Browser -> Tauri | Future Phase 1 | Future Phase 1 | Future Phase 1 | Future Phase 1 |
| Local HTML preview | Mock only in Phase 0 | N/A | N/A | Must be sandboxed before real local HTML |

## Server-Side Enforcement Points

- Auth/session checked at: N/A for Phase 0.
- Authorization checked at: N/A for Phase 0.
- Tenant/workspace isolation checked at: N/A for Phase 0.
- DB-level isolation/RLS: N/A; no database.
- Entitlements checked at: N/A.

## Data Model Overview

No persistent schema in Phase 0.

| Concept | Storage | Owner module | Notes |
|---|---|---|---|
| Workspace area | TypeScript mock data | `shared/data` | Projects, Clients, Research, Build Logs, Templates, Assets, Archive. |
| Artifact | TypeScript mock data | `shared/data` | File/project/card with role, status, privacy, agent-safety, preview type. |
| Project desk | TypeScript mock data | `features/project-desk` | Focused composition for one project. |
| Agent context draft | TypeScript mock data | `features/agent-context` | Selected/excluded/private/review-first files and suggested prompt. |

## External Systems

| System | Purpose | Source doc | Failure path |
|---|---|---|---|
| Dashboard UI kit PNG references | Visual inspiration only | `docs/design/references/dashboard-ui-kit/` | N/A |

## Environments

| Environment | URL | Database/provider project | Notes |
|---|---|---|---|
| local | `http://localhost:5173` after scaffold | N/A | Vite dev server. |
| preview/staging | UNKNOWN | N/A | Not required for initial Phase 0. |
| production | N/A | N/A | No production app in Phase 0. |

## Observability

- Error monitoring: N/A for Phase 0.
- Logs: browser console only during development.
- Alerts: N/A.
- Dashboards: N/A.

## Known Constraints

- Must stay web-only in Phase 0.
- Must remain public-safe.
- Must be visually close to the dashboard UI kit references without copying them 1:1.
- Must preserve a clean path to Tauri by isolating platform behavior.

## Change Log

| Date | Change | Reason | Commit/PR |
|---|---|---|---|
| 2026-06-20 | Initial architecture | Project foundation | N/A |
