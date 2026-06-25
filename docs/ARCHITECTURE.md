# ARCHITECTURE.md

System source of truth: stack, module convention, data flow, and trust
boundaries.

## Status

- Last reviewed: 2026-06-25.
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

- Current Task 8B convention: app-local Workspace cockpit.
- Exact root path: `src/app`.
- Reason: Task 8B is a from-scratch visual system reset. Aga explicitly asked
  to physically remove the legacy `src/features` and `src/shared`
  implementation before rebuilding the design foundation. The current Home
  cockpit keeps the first concrete grammar together until repeated patterns
  from Tasks 9-11 justify extraction.
- Existing repo convention: N/A, new repo.

Current frontend structure:

```txt
workspace-ui/
  package.json
  index.html
  src/
    app/
      App.tsx
      App.test.tsx
      ComposerTray.tsx
      HomeCockpit.tsx
      ObjectHeader.tsx
      QueuedSurface.tsx
      SurfaceTabs.tsx
      TopBar.tsx
      WorkspaceDetailsPanel.tsx
      cockpitData.ts
      cockpitPrimitives.tsx
      cockpitToneClasses.ts
      routes.ts
  public/
  docs/
  src-tauri/        # Phase 1 only, not created in Phase 0
```

Global technical folders policy:

- Do not recreate `src/features/` or `src/shared/` during the Task 8B reset just
  to restore the old shape.
- Reintroduce product-area folders only when the new cockpit grammar repeats
  across Home, Explorer, Project Desk, and Context enough to earn extraction.
- Reintroduce `src/shared/platform/` only when Phase 1 starts real platform or
  Tauri behavior; Phase 0 currently has no real filesystem adapter.
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
  -> src/app/cockpitData.ts
  -> src/app/App.tsx + app-local cockpit modules
  -> user-visible prototype
```

Phase 1 candidate:

```txt
Tauri filesystem commands
  -> future platform/tauri workspace adapter
  -> future feature or cockpit view models
  -> React views/components
```

Notes:

- UI should not call Tauri APIs directly when Phase 1 begins.
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
| Workspace cockpit | TypeScript mock data | `src/app/cockpitData.ts` | Selected workspace object, tab belt, metrics, workflow nodes, details, and bounded surfaces. |
| Artifact surface | TypeScript mock data | `src/app/cockpitData.ts` | Reachable placeholder for Task 9; no real preview execution or filesystem scanning. |
| Project desk surface | TypeScript mock data | `src/app/cockpitData.ts` | Reachable placeholder for Task 10; no real project actions. |
| Agent context composer | TypeScript mock data | `src/app/cockpitData.ts` + `src/app/ComposerTray.tsx` | Selected/review-first/private boundaries, suggested prompt, and browser clipboard fallback state. |

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
| 2026-06-23 | Added Agent Context composer model and feature owner | Task 5 implemented the mock context composer slice | Task 5 |
| 2026-06-25 | Replaced legacy `features/shared` implementation with app-local cockpit | Task 8B reset required physically removing the old visual layer and rebuilding Home as the design-system foundation | Current conversation |
