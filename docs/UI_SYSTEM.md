# UI System: workspace-ui Phase 0

Canonical source for visual and interaction conventions. Use this before
changing Home, Explorer, Project Desk, Agent Context, or shared UI primitives.

## Status

- Status: active Phase 0 reference.
- Created: 2026-06-21.
- Last updated: 2026-06-24.
- Owner: Aga.
- Reason for early creation: Aga explicitly requested a full UI reference before
  the second view so agents do not guess from isolated screenshots or one-off
  components.
- Scope: web-only prototype UI. No Tauri, real filesystem, Git, Codex runtime,
  terminal, login, cloud sync, search, PDF viewing, or file editing.

## Reference Images Checked

The UI should closely follow the dashboard UI kit PNGs in
`docs/design/references/dashboard-ui-kit/` as a near-clone visual grammar.

Use these references for density, panel rhythm, rounded dark surfaces,
tab/control styling, typography feel, quiet status treatment, and polished
dashboard craft. The app should feel like it belongs to the same kit family in
macro composition, proportions, chrome, canvas hierarchy, object headers,
tabs/controls, dense panels, and composer/tray treatment. Do not copy logos,
brand names, insurance/company domain content, illustrations, exact visual
assets, or screens 1:1.

For the Phase 0 visual redesign, start from these reference roles:

| Reference | Useful for |
|---|---|
| `Company Profile.png` | top navigation, company/object header, tab rhythm, dark dashboard surface, detail panels |
| `Workflow.png` | full-canvas work surface, tool controls, object nodes, dense interaction field |
| `Company Profile - ai chat.png` | overlay/composer density, shared prompt surface, permission/share panels |
| `Company Profile - Materials.png` | object cards with real visual payload, metric strips, tab-selected state |
| `settings- General.png` | settings-like two-column work surface, form density, side category rhythm |

## Reference Audit And Redesign Brief

Task 7 selects the dashboard UI kit patterns that future redesign tasks should
borrow. The goal is a precise visual target, not a license to copy screens,
brands, insurance domain content, logos, people, product names, charts, or exact
layouts.

### Borrow These Patterns

| Product need | Reference-backed target |
|---|---|
| Workspace shell | Borrow the dark top navigation and sparse product chrome from `Company Profile.png` and `Workflow.png`: product mark, primary navigation, quiet utility cluster, and a large rounded workspace canvas below. The current left-rail plus white page-card composition is rejected as the default shell for the redesign. |
| Top navigation | Use short active nav pills, compact icon controls, and an optional mock-safe status/action cluster inspired by `Company Profile.png`. Keep Home primary, and do not turn the shell into a file-browser tree. |
| Object header | Use a strong selected-object header like `Company Profile.png`: back/breadcrumb affordance, object icon/title, status chip, primary action cluster, and clear secondary metadata. Translate this to workspace/project/artifact objects rather than company records. |
| Tabs and controls | Borrow the wide segmented tab rhythm from `Company Profile.png` and `Company Profile - Materials.png`: short labels, count chips, pale active state, and controls grouped near the surface they affect. |
| Dense panels | Borrow the dark, low-border panel density from `Company Profile.png`, `Company Profile - Materials.png`, and `settings- General.png`: one job per panel, compact labels, readable values, and restrained shadows. Do not create an even grid of equal-priority cards. |
| Object cards | Borrow the payload-forward cards from `Company Profile - Materials.png` and `Employees- profile details.png`: preview first, human label next, raw technical detail secondary, and small utility affordances. |
| Preview surface | Borrow the readable document/detail panels from `Company Profile - ai chat (1).png` and the document cards in `Employees- profile details.png`: preview content should be legible and object-specific, not only thumbnail decoration. |
| Composer surface | Borrow the docked/floating composer, prompt tray, and share/permission panel density from `Company Profile - ai chat.png` and `Company Profile - ai chat (1).png`. Translate sharing/access into mock context boundaries: selected, excluded, private, and review-first. |
| Work canvas | Borrow the full-canvas interaction field from `Workflow.png`: a dark dotted or subtly gridded field, tool controls attached to the canvas, selected object nodes, contextual menus, and a clear bottom/right action area when useful. |
| Settings/detail rhythm | Borrow the two-column settings/detail surface from `settings- General.png`: local category rail only inside a focused tool, dense rows, form-like control grouping, and a single persistent save/action position. |

### Screen Targets

| Screen | Reference-backed target |
|---|---|
| Home | Home should become a workspace cockpit inside the dark top-nav shell. Borrow the object header, metric/detail panel rhythm, and action cluster from `Company Profile.png`, then adapt them to "continue work," recent changes, next actions, pinned material, and context readiness. Home should have one dominant workspace object, not a generic dashboard grid. |
| Explorer + Preview | Explorer should feel like an inspection surface. Borrow the left/object list plus selected-detail rhythm from `Employees- profile details.png`, the payload-first cards from `Company Profile - Materials.png`, and the canvas/tool-control density from `Workflow.png`. Preview must be a readable object pane beside or below selection, with raw paths secondary. |
| Project Desk | Project Desk should feel like a focused work surface for one fictional project. Borrow the selected-object header and tab strip from `Company Profile.png`, supporting panels from `settings- General.png`, and document/material cards from `Company Profile - Materials.png`. Quick actions stay mock/conceptual and grouped as controls, not explanatory panels. |
| Agent Context Composer | Composer should feel like a controlled handoff tray. Borrow the floating/docked composer and share panel hierarchy from `Company Profile - ai chat.png` and `Company Profile - ai chat (1).png`, but replace live AI/share semantics with explicit selected, excluded, private, review-first, and suggested-prompt groups. It must not look like a chat session or terminal. |

### Do Not Copy

- Do not copy reference logos, people, avatars, company names, insurance
  concepts, chart data, product labels, documents, or exact screen layouts.
- Do not use the PNGs as product assets.
- Do not introduce real search, sharing, uploads, invoices, reports, workflow
  execution, AI execution, or account settings because those references show
  similar controls.
- Do not copy the reference floating AI prompt in a way that implies live
  Codex/Claude access, automatic private-data selection, or provider execution.

### Anti-Patterns To Avoid

- generic card grid where every panel has the same visual weight,
- explanatory documentation panels that describe the app instead of acting like
  product UI,
- decorative AI UI: purple gradients, sparkles as the main visual idea,
  chat-first composition, or fake magic controls,
- raw file-browser hierarchy as the first layer,
- left-rail plus white page-card shell as the default app frame,
- visual payloads that are only decorative thumbnails rather than useful
  previews or object signals.

## Whole Phase 0 Visual Reset Contract

This contract applies to the actual Phase 0 product flow, not to a detached
demo or checkpoint screen. Aga rejected the standalone Task 8B demo direction
because it produced another surface to judge instead of addressing the source
problem: the existing app UI needs to be rebuilt as one coherent visual system.

The implementation should closely match the layout grammar, density, hierarchy,
proportions, shell, dark canvas, object headers, tab/control rows, panel rhythm,
and composer/tray treatment of the selected references while using
`workspace-ui` content and public-safe mock data in the real screens.

### Reference Model

Use a hybrid model:

| Role | Reference | Drives |
|---|---|---|
| Primary product frame | `Company Profile.png` | global top navigation, object header, tab rhythm, dense dark panel hierarchy, action clusters |
| Work canvas | `Workflow.png` | dominant dark canvas, tool-control placement, object/work surface feeling, contextual action field |
| Composer and tray | `Company Profile - ai chat.png`, `Company Profile - ai chat (1).png` | docked/floating composer density, prompt tray, permission/context grouping |
| Supporting detail | `Company Profile - Materials.png`, `settings- General.png`, `Employees- profile details.png` | payload-forward cards, settings/detail rows, readable preview/detail panes |

`Company Profile.png` is the primary anchor. Other references extend it for
specific product areas; they should not dilute the app into a collage of
unrelated dashboard patterns.

### Similarity Target

Match strongly:

- macro composition: top nav, dominant rounded workspace surface, object
  header, tab/control row, dense supporting panels,
- relative proportions: canvas should dominate the first viewport, supporting
  panels should feel attached to the current object, not like equal cards,
- density: compact labels, short values, tight rows, grouped controls,
- visual hierarchy: one primary object or work surface per screen,
- radius and depth: large rounded major surfaces, smaller dense panels, subtle
  borders, restrained shadows,
- control rhythm: short nav pills, segmented tabs, count chips, icon controls,
  and action clusters near the surface they affect.

Do not match:

- logos, people, avatars, brand names, insurance/company domain content,
  screenshots, charts, or exact asset content,
- exact copy or data,
- reference features that are out of Phase 0 scope, such as real search,
  sharing, uploads, reports, account settings, AI execution, or workflow
  automation.

An implementation is not acceptable if it keeps the current scaffold feeling and
only borrows colors, rounded corners, or isolated components from the
references.

The acceptance bar is visual-family closeness. A neat custom dashboard, a
recolored current UI, or a generic "premium SaaS" interpretation is still a
miss if it does not read as a close adaptation of `Company Profile.png`,
`Workflow.png`, and the AI-chat composer references.

### From-Scratch Visual System Reset

Task 8B resets the visual system from scratch. The current UI shows product
surfaces and mock-only boundaries, but it is not the design foundation.

The reset applies to the whole system:

- typography scale, hierarchy, density, and label/body/metadata rhythm,
- spacing scale, grid proportions, and first-viewport composition,
- radius system for controls, panels, trays, and major canvases,
- color balance across dark canvas, paper surfaces, selected states, and
  status accents,
- depth, shadows, overlays, borders, and other panel effects,
- hover, focus, pressed, selected, empty, unsupported, private, and review-first
  states,
- icon/control rhythm, tab strips, chips, action clusters, and tool controls,
- preview pane, composer tray, and attached/floating surface treatments.

Do not preserve existing typography, panel treatments, effects, or component
rhythm simply because they already exist. Preserve product concepts and Phase 0
boundaries; rebuild the design system where the references demand it.

### Non-Negotiable Layout Grammar

- Shell: global frame uses top navigation/product chrome as the default. A left
  rail may appear only as a local tool/category rail inside a focused surface.
- Canvas: every main screen has a dominant dark rounded workspace canvas in the
  first viewport. The canvas carries the product identity.
- Object header: each main surface starts from a selected workspace, project, or
  artifact object with title, status, metadata, and a compact action cluster.
- Tabs and controls: use reference-like tab strips or segmented controls inside
  the current object. Do not use large unrelated nav cards.
- Panel hierarchy: one primary surface, then a small number of supporting
  panels with clear jobs. Avoid uniform card grids.
- Preview and composer: preview panes and composer trays should be attached to
  the current object or canvas, not placed as long explanatory documents.
- Copy density: visible text should behave like product UI. Keep raw technical
  explanation secondary and compact.
- Public-safe mock data: all product content stays fictional and must not imply
  real filesystem, Git, Codex, Tauri, auth, cloud, search, terminal, PDF, or
  file editing behavior.

### Component Library Stance

Do not build a broad component library before repeated product screens establish
the pattern. The library should grow from Home, Explorer, Project Desk, and
Agent Context needs during the whole Phase 0 reset.

Allowed early primitives, only when used by the actual Phase 0 screens or
immediately reused by planned screens:

- `AppShell`
- `WorkspaceCanvas`
- `ObjectHeader`
- `SurfaceTabs`
- `InsightPanel`
- `ObjectCard`
- `PreviewPane`
- `ComposerTray`
- `StatusChip`

Feature-specific UI should remain inside `src/features/<feature>/` until a
pattern is reused or clearly needed across the active Phase 0 redesign tasks.

### Whole Phase 0 Runtime Gate

Task 8B no longer creates a separate `Foundation` / `Foundation Proof` product
surface. The runtime gate is the real Phase 0 flow:

- Home as the first-screen workspace cockpit,
- Visual Explorer + Preview as the artifact inspection surface,
- Project Desk as the focused project work surface,
- Agent Context Composer as the controlled handoff tray/tool.

The redesigned flow must show:

- top navigation/product chrome,
- one selected workspace/project/artifact object per screen,
- dominant dark workspace surfaces in the first viewport,
- tab or segmented control rhythm where it belongs to the current object,
- compact action clusters near the surface they affect,
- dense supporting panels with distinct jobs,
- readable previews and composer trays attached to the current object or
  canvas,
- accessible focus states and readable contrast.

Rejected approach: rendering a meta-checklist, reference names, or a standalone
demo/checkpoint surface in product UI. Reference comparison belongs in
docs/review or PR notes, not in the app.

Task 8B should remain one end-to-end visual reset task with internal gates. Do
not split it back into separate top-level Home, Explorer, Project Desk, and
Composer polish tasks unless Aga explicitly asks for that after reviewing the
whole redesigned runtime flow.

### Similarity Review Checklist

Use this checklist before accepting the whole Phase 0 visual reset:

- Does the first viewport immediately feel close to `Company Profile.png` and
  `Workflow.png`, not merely like a recolored app shell or card dashboard?
- Would a viewer believe this app belongs to the same dashboard-kit family as
  the references before reading any explanatory copy?
- Is the dark canvas the dominant surface, not a background decoration?
- Is there one clear selected object or work surface on each screen?
- Are panels dense and purposeful instead of an even grid?
- Are tabs, chips, icon controls, and action clusters placed like product
  controls, not explanatory cards?
- Is the composer/preview language ready to support the AI-chat references
  without implying live AI execution?
- Are raw paths and technical details secondary to human-readable labels?
- Are Phase 0 exclusions still intact?

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

## Phase 0 Redesign Direction

The current implementation is a functional sketch, not the accepted visual
direction. It shows the product surfaces, but it reads too much like a generic
AI-generated card dashboard: large explanatory sections, repeated card shapes,
left rail scaffolding, and long documentation-like panels.

The redesign should change the visual system, not merely polish spacing.

Preserve:

- Home, Visual Explorer, Preview Pane, Project Desk, and Agent Context Composer
  as product concepts,
- mock-only and public-safe boundaries,
- Home as the first screen,
- readable statuses, privacy, and agent-safety signals,
- feature ownership under `src/features`.

Change freely:

- app shell and navigation composition,
- panel hierarchy,
- copy density,
- card shapes and repeated section rhythm,
- placement of Composer and Preview,
- exact layout of Home, Explorer, and Project Desk.

Target:

- top navigation/product chrome instead of a global left rail,
- a dominant dark workspace canvas instead of a large white page card,
- contextual object surfaces with tabs, tool controls, and dense panels,
- fewer equal-weight cards,
- richer object-specific preview/composer areas,
- less explanatory prose on screen.

## Visual Direction

Default toward a dark graphite workspace shell inspired by the references, with
warm paper surfaces used for selected states, readable preview areas, and
high-contrast controls. The current app tokens already include ink/paper/steel/
moss/clay; preserve that product personality while borrowing the references'
dark dashboard structure.

During the redesign, do not preserve the existing left rail plus white page-card
composition unless a later design pass explicitly demonstrates it is stronger than
the reference-backed top-nav/canvas direction.

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
| `canvas-950` | outer app background and sticky top chrome |
| `canvas-900` | dominant dark workspace canvas |
| `canvas-800` | raised dark object headers and product surfaces |
| `ink-950` | primary dark shell, deepest text on light surfaces |
| `ink-900` | deeper neutral text/surface support |
| `ink-800` | raised dark panels, secondary chrome |
| `ink-600` | muted text, secondary metadata |
| `paper-50` | high-contrast text/control fill on dark surfaces |
| `paper-100` | selected tabs, pale panels, preview interiors |
| `paper-200` | quiet paper border/support tone |
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
- top navigation as the default global frame,
- dominant dark workspace canvas for the main product surface,
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
- Repeated panels should not all carry equal visual weight; every screen needs
  one obvious primary object or work surface.

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
- Task 8 added named Tailwind tokens: `rounded-control`, `rounded-panel`,
  `rounded-shell`, `shadow-float`, and `shadow-shell`.

## Navigation

Home is the primary first screen. Navigation must support orientation, not turn
the product into a file browser.

Allowed patterns:

- desktop top navigation inspired by the references,
- left rail only when a screen benefits from local sections; do not use it as
  the default global shell for the redesign,
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

Current Task 8 implementation:

- `src/shared/ui/AppShell.tsx` owns global top navigation, product chrome,
  mock-only status controls, and the labeled dark workspace canvas.
- Feature views no longer own the global left rail or full-page frame.
- Top navigation is a compact button group with `aria-current="page"` on the
  active view.

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

### Workspace Canvas

The dominant dark surface that holds the current object, preview, composer, or
workflow. This is the main redesign primitive and should feel closer to the
reference kit's product surfaces than to a generic web page.

Current Task 8 implementation:

- `AppShell` renders a `Dark workspace canvas` landmark around each screen.
- Screen-level object headers use `canvas-800`; light paper panels now sit
  inside the canvas instead of defining the whole page.

Use for:

- Home first-screen cockpit,
- Explorer inspection field,
- Project Desk work surface,
- Agent Context composer tray or overlay.

Rules:

- The canvas should establish the product identity in the first viewport.
- Supporting panels sit inside or adjacent to the canvas; they should not turn
  the page into a uniform grid of cards.
- The canvas may include tabs, tool buttons, status chips, preview trays, and
  object cards when they support the current work object.

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

Current Task 8 implementation:

- Preview and Composer surfaces share `WorkspaceTray` from
  `src/shared/ui/WorkspacePrimitives.tsx`.

Rules:

- Preview content must be readable, not a decorative thumbnail only.
- Unsupported and empty states must be calm and explicit.
- Real local HTML/file preview is out of scope in Phase 0.
- Do not add PDF viewing.

### Agent Context Composer

Use for selected/excluded/private/review-first context and suggested prompt.
The Composer should feel like a controlled handoff tool, not a chat, terminal,
or long documentation panel.

Rules:

- Selected, excluded, private, and review-first boundaries must be visible at a
  glance.
- The suggested prompt is secondary to the context boundary.
- Do not imply live Codex/Claude execution, AI calls, real file reads, or
  automatic context selection.
- Prefer compact grouped controls, trays, split panes, or overlays inspired by
  the references over a long single-column stack.

### Tab Strip / Segmented Control

Inspired by the reference tab rows. Use for switching related views inside the
same object or surface.

Current Task 8 implementation:

- `SurfaceTabStrip` provides a compact metadata strip for screen sections and
  counts.
- Until a strip actually switches content, inactive items render as labeled
  metadata rather than pretending to be clickable tabs.

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
- Current shared primitives are `AppShell`, `StatusChip`, `WorkspaceTray`, and
  `SurfaceTabStrip`.
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
- use targeted gstack `/browse` runtime review for visual/state checks,
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
