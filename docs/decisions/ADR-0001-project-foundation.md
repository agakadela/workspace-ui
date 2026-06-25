# ADR-0001: Project Foundation

- Date: 2026-06-20.
- Status: accepted.
- Owner: Aga.

## Context

The project starts as a Phase 0 visual prototype for a Visual Workspace Layer:
a calmer, human-readable work surface above local folders, documents, previews,
tasks, changes, and agent context. Phase 0 must test product concept and UI
direction without adding desktop, filesystem, Git, Codex, auth, cloud, or
search complexity.

The project should still preserve a clean path to a future Tauri desktop app if
Phase 0 proves useful.

## Decision Summary

| Area | Decision | Why | Revisit when |
|---|---|---|---|
| Stack | Vite + React + TypeScript | Lightweight SPA, compatible with Tauri static frontend model. | Phase 1 desktop setup. |
| Styling | Tailwind CSS | Fast custom UI system and close dashboard-kit-inspired styling without full component-kit lock-in. | If styling becomes inconsistent. |
| Package manager | npm | Most stable/default path for agents, Vite, CI, and Tauri examples. | If project becomes monorepo or dependency performance matters. |
| Database | N/A for Phase 0 | Mock data only. | Real local metadata store is needed. |
| Migrations | N/A for Phase 0 | No database. | Phase 1/2 local store decision. |
| Hosting/deploy | Local first, preview UNKNOWN | Phase 0 can be evaluated locally. | Sharing/demo need appears. |
| Auth/session | N/A for Phase 0 | No users/accounts. | First protected route/user. |
| Tenancy/workspace | Mock workspace only | Public-safe demo data. | Bring-your-own-folder implementation starts. |
| Data isolation | N/A for Phase 0 | No persisted user data. | Real local/private data scanning starts. |
| Payments/entitlements | N/A | Out of scope. | Commercial packaging is considered. |
| API style | N/A for Phase 0 | No backend/API. | Shared endpoint/action appears. |
| UI foundation | Own dashboard-kit-inspired components; Radix/shadcn selectively | Preserve visual direction while allowing accessible primitives. | Revisit when reusable patterns harden after multiple views. |
| Module convention | Task 8B app-local cockpit under `src/app`; earlier `src/features` + `src/shared` convention is suspended | The visual reset physically removed the old implementation so the first concrete cockpit grammar can harden before extraction. | Patterns repeat across Tasks 9-11 or Phase 1 platform behavior starts. |
| AI boundary | N/A for Phase 0 | Agent Context Panel is mock-only. | First real AI/provider call. |
| Future desktop | Tauri first, Electron fallback | Local-first desktop direction with smaller/security-focused runtime. | Phase 0 close decision. |
| Monitoring | N/A for Phase 0 | Local prototype. | Launch/preview becomes real. |

## Decisions

### Stack

- Framework: Vite + React.
- Language: TypeScript.
- Package manager: npm.
- Runtime: browser/Vite dev server in Phase 0.
- Reasoning: Tauri bundles static frontend output, and Vite/React is a simple,
  official-friendly path for that future while staying fast for Phase 0.

### Database And Migrations

- Database: N/A for Phase 0.
- Migration tool: N/A for Phase 0.
- Rule: no schema or local metadata store until a later phase explicitly needs
  it.
- Local/preview/prod separation: N/A for Phase 0.
- Backup/PITR expectation before production migrations: N/A.

### Auth And Sessions

- Identity provider: N/A.
- Session model: N/A.
- Server-side auth enforcement point: N/A.
- UI role: show privacy/agent-safety concepts in mock data, not real auth.

### Tenancy And Data Isolation

- Tenant/workspace model: one fictional mock workspace in Phase 0.
- `workspace_id` from first table: N/A; no database.
- DB-level isolation/RLS or equivalent: N/A.
- Two-user test expectation: N/A for Phase 0.

### Entitlements And Payments

- Payment provider: N/A.
- Paid access source of truth: N/A.
- Event idempotency table: N/A.
- Dashboard + DB verification required: N/A.

### API / Interface Style

- Primary style: N/A for Phase 0.
- Validation boundary: TypeScript mock data shapes.
- Error taxonomy: UI states only for Phase 0.
- Idempotency policy: N/A.

### Conventions

- IDs: stable string IDs in mock data.
- Money: N/A.
- Time/timezones: mock relative activity labels in Phase 0; real dates later.
- Soft delete: N/A.
- Logging: browser console only during development.
- Error handling: visible empty/error states where useful.

### AI Boundary

- AI role: N/A in product runtime for Phase 0.
- Human checkpoint required before: any future real AI/agent execution.
- Cost/retry caps: N/A until a real AI call exists.
- Logging/failure path: N/A until a real AI call exists.

### Module / Domain Convention

- Default principle: organize code by product/domain ownership, not by technical
  layer.
- Current Task 8B convention: app-local Workspace cockpit.
- Exact root path: `src/app`.
- Reason: the Task 8B visual reset physically removed the legacy
  `src/features` and `src/shared` implementation before rebuilding Home as the
  design-system foundation. Extraction should follow repeated new cockpit
  patterns, not the old module shape.
- Why not `domains`: Phase 0 is a frontend prototype without stable backend
  domain boundaries.
- Why not `features` now: the previous feature folders carried the rejected
  visual system and were explicitly removed for Task 8B.
- Shared code policy: do not recreate `src/shared` during Task 8B. Reintroduce
  shared primitives or a platform adapter only when reuse or Phase 1 behavior is
  real.
- Dependency boundaries: UI must not call future Tauri APIs directly.

### Feedback Loops

- Typecheck: `npm run typecheck` after scaffold.
- Lint: `npm run lint` after scaffold.
- Test runner: `npm test` after scaffold.
- Build: `npm run build` after scaffold.
- CI: add after scaffold when commands exist; do not create silent-pass CI.
- Error monitoring: N/A for Phase 0.
- Seed data / two test accounts: public-safe mock data only; no accounts.

## Alternatives Considered

| Alternative | Why not chosen | Cost of switching later |
|---|---|---|
| Next.js | No backend/SSR needed; Tauri prefers static frontend/SPAs and meta-frameworks add configuration. | Moderate if started with Next conventions. |
| Start with Tauri now | Mixes UI/product validation with Rust/filesystem/packaging risk. | Low after Phase 0 if frontend is structured well. |
| Electron first | Heavier and broader security surface; Tauri is preferred future direction. | Moderate if desktop direction changes. |
| Full shadcn-style UI | Could push the app toward generic SaaS instead of a custom workspace feel. | Low if only selective components are used. |
| `src/domains` | Too backend/domain-heavy for a UI prototype. | Low; folder rename later if domains stabilize. |
| Bun | Fast, but adds package-manager variability that is not central to the product test. | Low; can migrate later. |

## Consequences

### Positive

- Fast Phase 0 loop.
- Clear path to Tauri.
- UI code remains portable.
- Scope stays focused on product/usefulness and visual quality.
- Agent workflow uses common npm/Vite commands.

### Negative / Trade-Offs

- No real local data until later.
- Some mocked affordances may need redesign after real filesystem constraints.
- Custom UI system requires more visual discipline than using a full component
  kit.
- CI waits until scaffold commands exist.

### Operational Requirements Created By This ADR

- Keep future platform behavior behind an adapter boundary; `src/shared/platform`
  should be reintroduced only when real Phase 1 behavior starts.
- Do not create `src-tauri/` in Phase 0.
- Maintain `docs/UI_SYSTEM.md`, created early at Aga's request so agents have a
  durable UI reference before later views exist.
- Add CI only after package scripts exist and are real.

## Follow-Up Docs Triggered

- [x] `docs/UI_SYSTEM.md` created early as the agent-facing UI reference.
- [ ] `docs/AI_BOUNDARIES.md` after first real AI call.
- [ ] `docs/INTEGRATIONS.md` after first provider webhook/callback.
- [ ] `docs/AUTH_ACCESS_MODEL.md` after first protected route/user.
- [ ] `docs/API_CONTRACTS.md` after first shared endpoint/action/webhook/public API.

## Revisit Triggers

- Phase 0 close decision.
- First real local filesystem access.
- First reusable UI pattern beyond one view, to refine `docs/UI_SYSTEM.md`.
- First real AI/provider integration.
- Decision to publish/share prototype outside local use.
