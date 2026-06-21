# UI System: workspace-ui Phase 0

Canonical source for visual and interaction conventions. Use this before
changing Home, Explorer, Project Desk, Agent Context, or shared UI primitives.

## Status

- Status: active Phase 0 reference.
- Created: 2026-06-21.
- Owner: Aga.
- Reason for early creation: Aga explicitly requested a full UI reference before
  the second view so agents do not guess from isolated screenshots or one-off
  components.
- Scope: web-only prototype UI. No Tauri, real filesystem, Git, Codex runtime,
  terminal, login, cloud sync, search, PDF viewing, or file editing.

## Reference Images Checked

The UI should be heavily inspired by the dashboard UI kit PNGs in
`docs/design/references/dashboard-ui-kit/`.

Use these references for density, panel rhythm, rounded dark surfaces,
tab/control styling, typography feel, quiet status treatment, and polished
dashboard craft. Do not copy logos, brand names, insurance/company domain
content, illustrations, exact layouts, exact visual assets, or screens 1:1.

## Product Feel

The UI should feel like a calm local work cockpit for a builder's folder:
premium, focused, visual, and human-readable before developer-readable.

Primary feeling:

- dense but not cramped,
- polished but not shiny,
- calm but not bland,
- visual but not decorative,
- dashboard-inspired but not generic SaaS,
- workspace-oriented, not file-browser-oriented,
- agent-aware, not AI-marketing-oriented.

## Visual Direction

Default toward a dark graphite workspace shell inspired by the references, with
warm paper surfaces used for selected states, readable preview areas, and
high-contrast controls. The current app tokens already include ink/paper/steel/
moss/clay; preserve that product personality while borrowing the references'
dark dashboard structure.

Use:

- dark shell backgrounds for app chrome and major work surfaces,
- subtle panel borders instead of heavy outlines,
- soft shadows only when a surface floats above another surface,
- large calm containers for primary work areas,
- smaller dense panels for metrics, artifact summaries, and context rows,
- real preview content and object-specific visual signals.

Avoid:

- beige-only light dashboards,
- purple/indigo gradient AI UI,
- cyberpunk contrast,
- decorative blobs/orbs,
- fake operating-system chrome,
- raw folder trees as the first layer,
- marketing hero sections,
- dashboards filled with unrelated metrics.

## Color System

Use named Tailwind theme tokens from `src/index.css`. Do not scatter raw hex
values through components.

Current tokens:

| Token | Use |
|---|---|
| `ink-950` | primary dark shell, deepest text on light surfaces |
| `ink-800` | raised dark panels, secondary chrome |
| `ink-600` | muted text, secondary metadata |
| `paper-50` | high-contrast text/control fill on dark surfaces |
| `paper-100` | selected tabs, pale panels, preview interiors |
| `steel-700` | focus, info, preview/link accent |
| `steel-100` | quiet blue action surfaces |
| `moss-700` | safe/complete/context-approved status |
| `moss-100` | safe/complete quiet fill |
| `clay-600` | warning/private/review-first status |
| `clay-100` | warning/private quiet fill |

Rules:

- Keep each screen mostly neutral: roughly 80-90% ink/paper neutrals.
- Use blue/steel for primary action and preview affordances.
- Use moss for safe, complete, selected-for-agent, or verified states.
- Use clay for private, review-first, warning, or blocked states.
- Use accent color with text and/or icon. Never rely on color alone.
- Do not introduce a new dominant hue without updating this file.
- Do not use broad gradients unless a specific reference-backed use is added
  here first.

## Typography

Use the app's sans stack from `src/index.css`. The reference kit has a rounded,
humanist feel; workspace-ui should keep that softness without becoming playful.

Hierarchy:

| Role | Target feel |
|---|---|
| Page title | calm, prominent, not a landing-page hero |
| Section title | compact and scannable |
| Panel title | readable at a glance |
| Body | clear, human first |
| Metadata | secondary, still legible |
| Code/path text | monospace only when the raw detail matters |

Rules:

- One `h1` per screen.
- Do not skip heading levels for visual styling.
- Do not use viewport-based font sizing.
- Letter spacing stays `0`, except small uppercase labels may use modest
  positive tracking.
- Keep raw paths and technical labels secondary to human-readable names.
- Realistic mock copy only; no lorem ipsum.

## Layout System

Desktop and laptop are the priority. Mobile should not be broken, but Phase 0
does not optimize for a phone-first workflow.

Reference-backed layout patterns:

- app shell with persistent navigation/chrome,
- wide primary work surface with rounded major container,
- tab strip or segmented navigation inside a surface,
- dense grid of panels where each panel has a clear job,
- right or bottom composer/preview overlays only when contextually useful,
- list rail for repeated people/projects/artifacts,
- preview pane beside or below the selected object.

Spacing:

- Outer page padding: usually `24px` to `40px`.
- Major surface padding: usually `24px` to `32px`.
- Panel/card padding: usually `16px` to `24px`.
- Dense list rows: usually `10px` to `14px` vertical padding.
- Small control gaps: `8px` to `12px`.
- Section gaps: `16px` to `24px`.

Nesting:

- A major work surface may contain panels, lists, and repeated object cards.
- Avoid decorative card-inside-card stacks.
- If a nested surface exists, it must have a functional reason: preview,
  composer, selected object, modal, grouped settings, or repeated artifact.

## Radius And Depth

The references use larger radii than a generic admin dashboard, but the radius
system is disciplined.

| Element | Radius |
|---|---|
| Tiny icon buttons, chips, dense rows | `8px` |
| Artifact cards and small panels | `12px` |
| Preview panes and medium panels | `16px` |
| Major workspace containers | `24px` to `32px` |
| Full pills | only for badges, chips, and compact segmented controls |

Depth:

- Prefer border plus subtle tonal contrast.
- Use shadow only for raised panels, overlays, and composer trays.
- Do not stack multiple heavy shadows.

## Navigation

Home is the primary first screen. Navigation must support orientation, not turn
the product into a file browser.

Allowed patterns:

- desktop top navigation inspired by the references,
- left rail when a screen benefits from persistent workspace sections,
- tab strip for modes inside one object or workspace surface,
- breadcrumb/back affordance when drilling into a project or artifact.

Rules:

- Explorer is reachable but not the first mental center.
- Project Desk should feel like a work surface, not a directory listing.
- Avoid adding real search in Phase 0. If a search-like control appears for
  visual structure, it must be mock/conceptual and not imply full-text search.
- Quick actions must look real as controls but remain visibly mock/conceptual
  when the underlying behavior is out of scope.

## Core Components

### App Shell

Use a dark, quiet shell with clear active location. Keep global controls sparse.
Do not add account/auth concepts beyond public-safe mock UI.

Expected elements:

- product/workspace mark or text,
- primary navigation,
- optional mock-safe status/control cluster,
- clear content surface.

### Major Workspace Surface

The main container for a screen. It can be dark graphite or warm paper depending
on content, but should feel framed and intentional.

Use for:

- Home overview,
- Explorer + Preview,
- Project Desk,
- Agent Context composer area.

### Insight Panel

A compact panel that answers one question. Use for continue state, project
status, next tasks, pinned docs, recent activity, safety/context summary, or
preview metadata.

Rules:

- One panel, one purpose.
- Title, useful value/content, secondary detail.
- Use icon/status only if it helps scanning.
- Do not invent meaningless metrics.

### Artifact Card

Use for mock files, docs, previews, assets, and code summaries.

Required content:

- human-readable title,
- type/role,
- status,
- privacy or agent-safety state when relevant,
- secondary raw path/details only after the human label,
- preview availability if relevant.

### Preview Pane

Use for markdown, HTML mockup, image/card, and code-summary previews.

Rules:

- Preview content must be readable, not a decorative thumbnail only.
- Unsupported and empty states must be calm and explicit.
- Real local HTML/file preview is out of scope in Phase 0.
- Do not add PDF viewing.

### Tab Strip / Segmented Control

Inspired by the reference tab rows. Use for switching related views inside the
same object or surface.

Rules:

- Active state can use a pale paper/steel fill.
- Counts belong in small chips next to labels.
- Keep labels short.
- Do not use tabs for unrelated navigation.

### Status Chip

Use text plus icon for:

- mock-only,
- safe for agent,
- review first,
- private,
- pinned,
- stale,
- updated,
- unsupported preview.

Do not create a rainbow of badges. A screen with more than three competing chip
colors is probably noisy.

### Buttons

Use real buttons for commands. Use lucide icons where a matching icon exists.

Variants:

- primary: high-contrast, used once or twice per surface,
- secondary: quiet filled or outlined action,
- ghost/icon: low-emphasis utility action,
- warning: clay styling, only for private/review-first/destructive-looking mock
  states.

Rules:

- Buttons need visible focus states.
- Icon-only buttons need accessible labels and a tooltip pattern once tooltips
  exist.
- No fake disabled buttons without explaining unavailable state in nearby text.
- Do not wire actions to real OS, filesystem, terminal, Git, or agent behavior
  in Phase 0.

### Agent Context Panel

This is a context composer, not a chat, terminal, or live Codex session.

Borrow from the reference AI-chat/composer visuals:

- floating or docked tray,
- selected/excluded/review-first/private groups,
- suggested prompt area,
- copy prompt action,
- clear mock/runtime boundary.

Required states:

- selected files,
- excluded files,
- private files,
- review-first files,
- no selected files,
- copy success/fallback if implemented.

Never imply:

- live AI execution,
- automatic private data selection,
- real provider connection,
- terminal execution,
- conversation history with an actual model.

### Recent Activity

Recent Activity stays small: exactly three or four static cards in Phase 0.

Rules:

- Public-safe fictional data only.
- No real Git-derived activity.
- Activity should answer "what changed or where did I stop?" not become a full
  timeline.

## Screen Guidance

### Home

Home should answer:

- where to continue,
- what changed,
- what matters now,
- what context can be prepared,
- which docs or artifacts are pinned.

Home must not read like:

- a file browser,
- a generic project dashboard,
- an AI chat app,
- a marketing landing page.

### Visual Explorer

Explorer should show artifacts by meaning and role first, path second.

It needs:

- workspace areas,
- artifact cards,
- meaningful status/privacy/context labels,
- preview pane,
- empty and unsupported states.

### Project Desk

Project Desk should feel like opening a focused work surface for one fictional
project.

It needs:

- project status,
- important docs,
- next tasks,
- recent/pinned work,
- context candidates,
- mock quick actions.

### Agent Context

Agent Context should make the handoff to Codex explicit and controlled.

It needs:

- active folder,
- selected context,
- excluded/private/review-first context,
- suggested prompt,
- copy affordance.

## Accessibility

Required:

- real buttons, links, form controls, and semantic regions,
- keyboard-visible focus states,
- readable contrast on dark and light surfaces,
- status text/icons in addition to color,
- headings in order,
- controls reachable by keyboard,
- no critical information hidden only on hover,
- hit targets that feel usable on laptop trackpads.

Focus:

- Use the current steel focus outline unless the token changes.
- Focus rings must be visible on dark and light surfaces.

Motion:

- Keep transitions subtle and functional.
- Do not animate decorative background elements.
- Respect reduced-motion if meaningful animation is added.

## Responsive Rules

Minimum expectations:

- 1440px desktop: polished full layout.
- 1280px desktop/laptop: no clipping or overlap.
- 1024px narrower laptop: columns collapse cleanly.
- 768px tablet-ish width: content remains readable.
- 320px mobile: no incoherent overlap, even though mobile is not a Phase 0
  priority.

Rules:

- Use CSS grid/flex with explicit min/max constraints.
- Fixed-format elements need stable dimensions.
- Text must wrap inside controls and cards.
- Do not hide primary product meaning at narrower widths.

## Implementation Rules

- Feature-specific UI starts under `src/features/<feature>/`.
- Reusable primitives go in `src/shared/ui/` only after reuse is real or clearly
  imminent across planned Phase 0 screens.
- Mock data stays in `src/shared/data/` or behind `src/shared/platform/`.
- Do not add Radix/shadcn or other UI dependencies without asking Aga first.
- Do not change Tailwind/tooling behavior without `source-driven-development`.
- Use lucide-react for icons when possible.
- Keep component APIs boring and composable.
- Update this document when adding or changing a reusable pattern.

## Verification For UI Changes

For any meaningful UI slice:

- run `npm run typecheck`,
- run `npm run lint`,
- run relevant tests or `npm test` when behavior changed,
- run `npm run build` before merge/phase close,
- use targeted gstack `/browse` runtime proof for visual/state checks,
- check desktop and narrower laptop widths proportionally,
- record cannot-verify items.

Use full gstack `/qa` only when Aga explicitly asks for QA/testing/bug-report
coverage or for a larger release/regression pass.

## Hard Boundaries

Always:

- keep Phase 0 mock-only,
- use public-safe fictional data,
- make privacy/agent-safety states visible,
- make raw technical details secondary but available,
- preserve Home as first screen.

Ask first:

- adding UI dependencies,
- changing the palette materially,
- switching to full light-mode or full dark-mode direction,
- introducing search-like behavior,
- using any external design asset directly in product UI.

Never:

- copy the reference PNGs into the app UI,
- copy the reference brand/domain/content,
- use real private folder names or client data,
- imply real filesystem/Git/Codex/Tauri behavior,
- add terminal, file editing, cloud sync, auth, or PDF viewing in Phase 0,
- hide important status behind color alone.

## Open Questions

- Exact dark/light balance after the first full visual pass: non-blocking.
- Final product name after `workspace-ui`: non-blocking.
- Whether top navigation, side rail, or hybrid shell wins after Explorer and
  Project Desk exist: non-blocking.
- Exact shared component API names: non-blocking until components are extracted.
