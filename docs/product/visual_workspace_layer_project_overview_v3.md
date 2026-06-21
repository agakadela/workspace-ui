# Visual Workspace Layer - Full Project Overview

Status: working concept document, v3  
Document goal: give full project context for further work with an agent  
Scope: the whole project, not only Phase 0  
Working language: English, with technical names used where they make sense  
v2 update: added Phase 0 timebox, the web -> Tauri decision, quick actions, source-of-truth clarity, ignore rules, HTML preview security, bring-your-own-folder, visual direction, and additional guardrails.  
v3 update: clarified that the Phase 0 completion criteria are evaluated within the timebox from section 18, not indefinitely.

---

## 1. What This Project Is About

This project comes from a very concrete problem: a large part of my work lives in a local folder that has gradually become my operational center. It contains documents, repositories, markdown files, HTML mockups, images, PDFs, TODOs, workflow files, client materials, private notes, prompt templates, skill files, project sketches, archives, and various active or parked workstreams.

I can open that folder in VS Code. And that works if I want to edit a specific file. The problem is different: VS Code is not the best interface for understanding what is happening across the work as a whole. It shows files and folders as a technical structure. That is true, but it is not the best way for a person who wants to quickly see: what they were working on, what changed, what is important, what is private, what is current, what is archive/reference, what the next step is, and what context to give an agent.

This project is meant to be a Visual Workspace Layer over a local workspace. It is not meant to replace VS Code as an editor. It is not meant to replace Finder as a simple file browser. It is not meant to be an agent chat app. It should give a more human, visual, and work-oriented view of local work.

In practice, this means an application that lets me open a workspace and see it as a work desk: documents as documents, mockups as previews, images as visual assets, folders as projects, TODOs as next actions, changes as activity signals, and Codex context as something explicitly selected and controlled.

In short:

**VS Code is for editing. This app is for orientation, preview, planning, and preparing context for an agent.**

---

## 2. The Main Product Promise

I open the app and immediately see where I left off, what changed recently, what I have next, which documents matter, and what context I can safely prepare for Codex.

That is the magic moment.

The point is not to make the app simply a prettier list of files. If, after opening the app, I still have to think: "okay, now I will open VS Code anyway and manually inspect the folder", then the product has not met its goal.

The product should answer questions that VS Code and Finder do not place at the center:

- What is happening in my work?
- Where did I leave off?
- What was touched recently?
- What matters now?
- What is next?
- What is the current source of truth?
- What is only reference or archive?
- What is private?
- What can I give to an agent?
- What needs my review before I push the work further?

These are work questions, not only technical ones.

---

## 3. How This Differs From VS Code, Finder, Git, And Agents

### VS Code

VS Code answers the question: how do I edit this file?

It is a very good tool for working with code, raw markdown, the terminal, diffs, a repository, and specific changes. But when a folder contains many documents, workflows, notes, mockups, and materials, VS Code forces me to read everything as files and paths.

This app should be the layer above that. It should not compete with the editor. It should provide a view that says: what this file is, why it exists, whether it is active, whether it is private, whether it is current, whether it is suitable as agent context, and what its readable preview looks like.

### Finder

Finder answers the question: where is the file?

That is useful, but insufficient. Finder does not know whether `SPEC.md` is an active project document or an old draft. It does not know whether a folder is an active project or an archive. It does not know which files are worth giving to Codex. It does not know what is source of truth and what is reference. It does not provide working context.

This app should show not only location, but meaning.

### Git

Git answers the question: what technically changed in the repository?

That will matter later, but not at the beginning. Long term, the app may show git status, recent commits, changed files, and human-readable change cards. However, a full Git timeline should not be part of Phase 0, because without a real Git integration it would only be a mockup. A mocked Git workflow would create a false sense of readiness.

In Phase 0, Home may show only a small recent activity signal. Full change awareness comes only after a real filesystem and later a Git integration.

### Codex And Other Agents

Codex matters, but it is not the center of the product. The product should not be a "Codex dashboard". It should be a workspace that helps prepare better context for Codex.

At the beginning, the Agent Context Panel is only a mock: it shows the active folder, selected files, excluded files, private files, and a suggested prompt. It does not launch Codex, open a terminal, read real files, or pretend to be a live session.

In the future, Codex may be the first real integration. Claude Code may be a future provider. The project name should not contain Codex, Claude, AI, or agentic, because providers can change. The core product should be independent from the tool.

---

## 4. Who This Is For

The first user is me, because the problem is real. I have a local folder that is the center of my work, and I want to understand it visually instead of only through the file structure.

But from the beginning, the project should be designed so someone else could use it too. Not as a tool written only for my specific folder, but as a work model for people with a similar kind of chaos: many local projects, documents, notes, repositories, previews, TODOs, and agent workflows.

A potential user is:

- a developer working with many repositories,
- a freelancer who keeps client materials locally,
- a person building projects with AI coding agents,
- someone with many markdown files, specs, docs, and mockups,
- a visually oriented person who wants to see work as desks, cards, and previews,
- someone who does not want to send private files to the cloud,
- someone who wants to prepare context for an agent more intentionally.

This is not a product only for a hardcore programmer. It is more of a product for a builder who uses local files and agents, but wants a friendlier orientation layer.

---

## 5. Why This Project Is Good For Testing Agent Workflows

I want to test my coding workflow on a project that requires real visual frontend work. This project is a very good fit because it has a lot of UI, but it is not an empty portfolio or an artificial dashboard.

The agent will need to help with:

- layouts,
- cards,
- Preview Pane layouts,
- the sidebar,
- information hierarchy,
- UI states,
- desktop/laptop responsiveness,
- components,
- mocked data,
- visual polish,
- distinguishing human-readable from developer-readable,
- guarding the boundaries of Phase 0.

This creates a real test: can an agent build something that looks good and is useful, or does it only generate a typical UI full of cards without understanding the product?

It also matters that the product itself is about working with an agent, but not in the boring sense of being "a project about an agent". I am building a tool I could use in my own workflow. And while building it, I am testing how well agents handle frontend work, visual judgment, and scope control.

---

## 6. The Most Important UX Principle: Human-Readable, Not Developer-Readable

This is the most important principle of the whole product.

A developer-readable view says:

`src/components/layout/workspace-panel.tsx`, modified 2h ago, +43 -18.

A human-readable view says:

Workspace layout updated. Three UI files changed. Project Desk preview may need visual review.

This app should translate technical facts into work meaning.

That does not mean technical details are unnecessary. They can be available after a click: raw markdown, raw code, raw path, raw diff. But they should not be the first layer.

The first layer should show:

- what this file is,
- why it matters,
- whether it is active,
- whether it is private,
- whether it is current,
- whether it is archive/reference,
- whether it is suitable for an agent,
- what next step makes sense.

The same applies to previews. Markdown should look like a document. HTML should look like a preview. Images should look like visual assets. A project folder should look like a Project Desk, not like a raw directory tree.

If the UI starts to look like a second version of VS Code, the project is drifting in the wrong direction.

---

## 7. Files As Work Artifacts

A file is not only a file. In this product, a file has a role.

Examples of roles:

- active tracker,
- TODO list,
- project spec,
- agent instruction file,
- HTML mockup,
- visual asset,
- prompt template,
- private note,
- client-facing template,
- reference doc,
- archive material,
- build log,
- workflow note.

That means `SPEC.md` should not appear only as `SPEC.md`. It should be shown as the active project specification, with information about when it was last touched, whether it is source of truth, whether it is agent-safe, and what it is connected to.

`TODO.md` should not be only raw markdown. It should feed a Next tasks or Workboard view.

A folder with HTML mockups should not be only a folder. It should have visual previews.

A project folder should not be only a list of files. It should have a Project Desk.

This is the core of the product: translating a local file structure into work meaning.

---

## 8. Local-First And Privacy-First

This must be a local-first product, because the problem concerns a local folder with private and client materials.

The default posture of the product:

- local by default,
- no cloud sync at the start,
- no login at the start,
- no sending files to AI without an explicit decision,
- no telemetry unless there is ever a conscious opt-in,
- no real private data in the demo,
- no automatically giving the whole folder to an agent.

This is especially important because a real workspace contains private, client, working, and strategic materials. From the start, the app must have the mental model that not every file is agent-safe.

Agent context must be explicit. The user should see selected files, excluded files, and private/do-not-send files.

---

## 9. Public-Safe Demo Data

Because the project may end up on GitHub and social media, the demo cannot use the real structure or real names of private folders. The real folder can inspire the types of data and problems, but the public dataset must be fictional.

The demo workspace may have areas such as:

- Projects,
- Clients,
- Research,
- Build Logs,
- Templates,
- Assets,
- Archive.

Example fictional projects:

- Launch Audit Kit,
- Invoice Recovery Demo,
- Agent Workflow Notes,
- Frontend Experiments,
- Client Portal Mockup,
- Visual Workspace Prototype.

Example files:

- `SPEC.md`,
- `DESIGN_NOTES.md`,
- `TODO.md`,
- `WORKFLOW.md`,
- `CLIENT_BRIEF_SAMPLE.md`,
- `BUILD_LOG.md`,
- `landing-preview.html`,
- `dashboard-mockup.html`,
- `project-desk-concept.html`,
- `hero-concept.png`,
- `dashboard-before.png`,
- `dashboard-after.png`,
- `HomeView.tsx`,
- `PreviewPane.tsx`,
- `mock-workspace-data.ts`,
- `PRIVATE_NOTES.md`,
- `CLIENT_CONTEXT.md`,
- `.env.example`.

Private examples must also be fictional. They should be used only to show UI markers such as private, review-first, and do-not-send-to-agent.

---

## 10. Main Product Surfaces

### Home

Home is the most important screen at the beginning.

It is the daily work surface. Not a dashboard with decorative metrics. It should answer:

- where I left off,
- what changed recently,
- what I have next,
- which documents matter,
- what context I can prepare for Codex.

Home should have several strong sections:

Continue where you left off shows the latest project, document, preview, or context worth starting from.

Recent activity shows a small signal that something has moved forward. In Phase 0, this is only three or four static cards, without Git logic and without diffs. Eventually, this section may be powered by the real filesystem and Git, but not now.

Next tasks shows things to do. In the future, it may read TODOs or a workboard. At the start, it is a mock.

Pinned docs shows important documents I return to often.

Agent context draft shows what context can be prepared for Codex.

Home should make it unnecessary to start by opening VS Code and searching for "what was I doing?".

### Visual Explorer + Preview

Visual Explorer is a friendly way to browse the workspace. Not a raw file tree, but areas, projects, and artifact cards.

A possible layout:

- workspace areas on the left,
- file/folder/project cards in the middle,
- Preview Pane on the right.

Each item should show more than a name: type, description, status, recent activity, whether there is a preview, whether it is agent-safe, and whether it is private/reference/archive.

The Preview Pane should be readable by default. Markdown rendered. HTML as preview. Images as a gallery/card. Code file as a summary card. Raw view may be a toggle, but it should not be the default.

### Project Desk

Project Desk is the view of a specific folder or project.

It should not look like a folder listing. It should look like a place to work on one project.

It should show:

- what the project is,
- its status,
- which documents matter,
- what was recently viewed or touched,
- what tasks are next,
- which files may go into Codex context,
- which quick actions make sense.

Project Desk matters because it shows the difference between a "folder" and a "project".

### Agent Context Panel

Agent Context Panel is a context composer, not a chat.

In Phase 0 it shows a mock:

- active folder,
- selected files,
- excluded files,
- private files,
- suggested prompt,
- copy prompt.

It does not launch Codex. It does not open a terminal. It does not read real files. It does not track sessions.

Later it may become a real Codex workflow layer, but only after Tauri, the filesystem, and workspace intelligence.

### Git / Change Awareness

This is a future surface, not Phase 0.

Eventually, it will be very valuable to see:

- what changed since the last session,
- which files are uncommitted,
- what the latest commits were,
- which changes matter to a human,
- which changes may need review.

But this must be based on real Git status and the filesystem. In Phase 0, we are not building a full change timeline. Recent activity remains a small, static section on Home.

### Agent Review Layer

This is also a future surface.

Only when the app knows the real filesystem, real Git status, and a real Codex session can it sensibly say: the agent changed these files, this needs review, this was accepted, this should be fixed, this was rejected.

Before that, "needs review" is only an example card. Not a full system.

---

## 11. Phase 0: Web Visual Prototype

Phase 0 is intentionally web-based.

This was an important decision, because I do not want to mix the project goal with the difficulties of Tauri, Rust, filesystem permissions, shell commands, packaging, and real Codex integration at the beginning.

At the start, I am testing only what matters most now:

- whether a visual workspace makes sense,
- whether Home gives quick orientation,
- whether files look better than in VS Code,
- whether preview is valuable,
- whether Project Desk works as a concept,
- whether Agent Context Panel makes sense as a flow,
- whether my workflow with agents works on a frontend-heavy project.

Phase 0 is React/TypeScript with public-safe mock data. It can be Vite or Next, but it does not need a backend. There is no real filesystem. No Tauri. No Electron. No Git integration. No real Codex. No PDF viewer. No full-text search. No semantic search. No login. No cloud.

Phase 0 has three main screens:

1. Home,
2. Visual Explorer + Preview,
3. Project Desk.

Agent Context Panel is a component/panel, not a separate screen.

Recent activity is a small Home element, with three or four static cards. There are no filters, diff cards, commits, or review workflows.

Phase 0 ends when we can say: this UI direction makes sense and is worth moving to a real desktop app, or the concept needs to change, or it is not worth continuing.

It does not end because the UI is perfect.

---

## 12. Phase 0 Completion Criteria

These criteria are evaluated within the timebox described in section 18, not indefinitely. If the time limit ends and some criteria are still not met, that is also a test result: the scope needs to be simplified, the concept needs to be improved, or the project should stop before moving to Tauri.

Phase 0 can be considered complete when:

- the three main screens exist: Home, Visual Explorer + Preview, Project Desk,
- the UI is visually consistent,
- previews are represented for markdown, HTML, and images/cards,
- Home answers: where I left off, what changed, what is next,
- the prototype is clearly more human-readable than browsing those files in VS Code,
- the mock Agent Context Panel makes sense as a workflow concept,
- Recent activity has not grown beyond three or four static cards,
- at least two rounds of work with an agent are documented,
- a decision is made: move to Tauri, improve the concept, or stop the project.

Important: "pretty, but unclear why it exists" is not enough. "Technically complete, but looks like VS Code" is also not enough. Phase 0 should test whether the visual approach actually helps understand the workspace.

---

## 13. How To Document Rounds Of Work With An Agent

Because the project is meant to test my workflow with agents, there should be a short work trail. I do not want to turn this into a huge formal process. The point is simple documentation so that later I do not have to guess what worked.

For each round, it is worth recording:

- what the frontend goal was,
- what existed before the round,
- what prompt the agent received,
- what the agent did or claimed it did,
- what worked,
- what did not work,
- whether the UI became visually better, worse, or only different,
- what I noticed during review,
- what I fixed manually or asked to be fixed,
- what the final outcome was,
- what this round taught me about working with an agent.

Screenshots are very useful, but they do not replace a short description. A screenshot without context will not show whether the agent really helped or only moved the problem elsewhere.

Later, this may become material for social posts, portfolio, or a conversation about workflow. But the main reason is practical: I want to know whether my workflow works.

---

## 14. Roadmap After Phase 0

### Phase 1: Tauri Local Slice

If Phase 0 makes sense, the next stage is a Tauri local slice.

The goal is to move the approved React UI into a desktop application that reads a real local folder.

The frontend remains React/TypeScript. Tauri is the desktop layer for the filesystem and system actions. The native layer should be as thin as possible so Rust/Tauri does not eat the project.

Phase 1 includes:

- choosing a workspace root,
- scanning a folder,
- ignore rules,
- file type detection,
- real markdown preview,
- real image preview,
- basic sandboxed HTML preview,
- open file / open folder,
- local configuration,
- possibly a local metadata store.

Phase 1 still does not include real Git, embedded terminal, real Codex, Claude Code, semantic search, or a full PDF viewer.

### Phase 2: Workspace Intelligence

In this stage, the app starts understanding what is what.

It may detect:

- repositories,
- `package.json`,
- README,
- AGENTS.md,
- configuration files,
- active/reference/archive/private,
- source-of-truth badges,
- important documents in a project,
- potential context packs.

This is the stage where a local folder really starts becoming a workspace with meaning.

### Phase 3: Git Awareness

Only after the real filesystem and workspace intelligence comes Git awareness.

At that point, the app may show:

- git status,
- recent commits,
- uncommitted changes,
- changed files,
- human-readable change cards.

This is when "what changed" has a real data source.

### Phase 4: Codex Workflow Layer

After local workspace and basic change awareness, a real Codex workflow layer can be added.

Not as a chat replacement, but as help for work:

- active folder,
- selected files,
- excluded/private files,
- copy prompt for Codex,
- open terminal here,
- save task note,
- detect Codex config,
- maybe run a command with confirmation.

This should support working with Codex, not pretend to be its own Codex.

### Phase 5: Agent Review Layer

Only then does "needs review" become a real feature.

The app can connect:

- an agent session,
- files changed after the session,
- git status,
- review notes,
- accepted / revised / rejected / parked decisions,
- a human-readable summary of the agent's work.

This is an important direction, but it must not be treated as a real feature while it only has public-safe mock data in Phase 0.

### Phase 6: Provider Expansion

Only when the core product works can other providers be added: Claude Code, Cursor, custom terminal commands, or other tools.

The name and architecture should not lock the product into Codex.

---

## 15. The Main Risks And How To Control Them

The biggest risk is building a second Finder. If the app only lets the user browse files, it is not valuable enough. It must show work context, status, preview, next action, and safety relative to the agent.

The second risk is building a second VS Code. If we show raw markdown, raw code, raw diff, and terminal by default, we lose the meaning of the product. Raw technical views can exist, but as a second layer.

The third risk is agent integration eating the product. Codex matters, but at the beginning it should only be a mock context panel. Real integration comes later.

The fourth risk is Recent Activity. It is the easiest element to overbuild because it is visually interesting. In Phase 0 it must be literally small: three or four static cards. No filters, diff cards, commit timeline, or review states.

The fifth risk is private data. The demo must be public-safe. Real folder names and client/private materials cannot enter a public repository.

The sixth risk is perfectionism in Phase 0. The prototype should test the direction, not be the final product. If it works well enough to make a decision about Tauri, the stage is done.

The seventh risk is scope creep. This project naturally tempts one to add everything: file manager, docs viewer, Git client, AI chat, task manager, search engine, and portfolio. The core goal must be guarded: visual orientation over a local workspace.

---

## 16. Current Project Decision

We are building a web visual prototype first.

We are not starting from Tauri. We are not starting from a real folder. We are not starting from Git integration. We are not starting from real Codex.

First, we test the UI, product concept, and agent workflow on the frontend.

Phase 0 should be small but meaningful: Home, Visual Explorer + Preview, Project Desk, mock Agent Context Panel, public-safe mock data, and two documented rounds of work with an agent.

After Phase 0, we make a decision: move to Tauri, improve the concept, or stop the project.

Best working positioning:

A visual workspace above local folders, docs, previews, tasks, changes, and agent context.

More human:

A calmer, more visual way to understand what is happening in your local work folder before you open VS Code or ask Codex to work.

Internally:

VS Code for editing. This app for orientation, preview, planning, and context.

This is the definition that must be guarded during further work.

---

## 17. Clarifications Added After Scope Review

The following clarifications extend the earlier project description. They do not change the main direction. Their purpose is to close places that could later lead to scope creep, false assumptions, or an overly technical direction.

The most important clarification is: Phase 0 should remain a web visual prototype, not the beginning of a full desktop application. In this phase, we primarily test look, usefulness, information readability, and agent-work workflow on the frontend. Everything that requires a real filesystem, Git, terminal, Codex, or Tauri remains outside Phase 0.

---

## 18. Phase 0 Timebox

Phase 0 must have a time limit, because visual prototypes are very easy to stretch forever. "I will just polish the layout a little more" can last for months, and that is not the point.

Working limit for Phase 0:

- maximum 7-10 calendar days of work, or
- maximum 20-25 hours of real work.

After that time, a decision must be made: move the direction to Tauri, improve the concept, or stop the project. Phase 0 does not need to prove that the UI is perfect. It needs to prove whether a Visual Workspace Layer over a local workspace makes sense and whether it is worth investing in a real desktop version.

If the most important questions still do not have answers after the timebox, that is also an answer. It means the concept or scope needs to be simplified before entering Tauri.

---

## 19. Web -> Tauri -> Electron As Fallback

The first prototype is web-based on purpose. This is not an accidental technology decision, but a way to isolate risk.

In Phase 0, we use a normal React/TypeScript UI on public-safe mock data. We do not read the real disk. We do not run local commands. We do not try to integrate Codex. This lets us test what should be tested now: whether this kind of visual workspace is readable, useful, and possible to build with a good agent workflow.

If Phase 0 holds up, Phase 1 should probably move to Tauri. Tauri fits the long-term direction because the product should be local-first, read local folders, open files, run system actions, and work without a cloud backend. The frontend remains React/TypeScript. Tauri adds the desktop system layer, but it does not change the fact that visually we are building the main product as a frontend.

Electron remains a fallback, not the first choice. It may make sense if Tauri starts blocking the project because of Rust, plugins, bundling, or too much native-layer complexity. Electron may be easier from a Node/JavaScript perspective, but it has more weight and a larger security surface, which needs to be treated carefully when dealing with local files and HTML preview.

Decision today:

Phase 0: web React prototype.  
Phase 1: Tauri first, if Phase 0 holds up.  
Fallback: Electron only if Tauri really slows down or blocks the build.

---

## 20. Home As The First Screen

Home is the main Phase 0 screen. Explorer matters, but it should not be the first mental center of the project.

This is important because if the agent starts by building a file browser, the project can easily turn into a "prettier Finder". The main goal is different: after opening, the app should say what is happening in the work.

Home should first answer:

- where I left off,
- what changed recently,
- what is next,
- which documents matter,
- what context can be prepared for Codex.

Only from Home does the user move into Visual Explorer or Project Desk. This positions the product as an orientation layer, not a file browser.

---

## 21. Quick Actions As An Important Part Of The Product

Quick actions matter because the app should not only show work. It should also help move to the next step without manually searching for everything in VS Code or Finder.

In Phase 0, quick actions can be mocked, but they should be visible in the UI so their placement and importance can be tested.

Example quick actions:

- open in VS Code,
- open in Finder,
- open terminal here,
- copy Codex prompt,
- pin document,
- mark as active,
- show preview,
- open related docs,
- create note later,
- add to context pack later.

In Phase 0, these actions do not have to work technically. Their job is to show whether the user understands what they can do next. In Phase 1 and later, some of them may become real through Tauri.

Quick actions should be calm and contextual. They should not turn the UI into a panel full of buttons.

---

## 22. Work Modes As A Later Direction

In a later version, the app may have work modes. This is not part of Phase 0, but it is a good product direction because a workspace is not always used for the same kind of work.

Possible work modes:

- Plan,
- Build,
- Review,
- Write,
- Learn.

Plan mode could show specs, decisions, roadmap, TODO, and workboard. Build mode could show projects, docs, context packs, and the Codex panel. Review mode could surface changes, preview, git status, and things that need evaluation. Write mode could show social drafts, writing guide, notes, and examples. Learn mode could show learning materials, practice pads, and recent blocks.

For today, this stays as a future idea. We do not add it to Phase 0 because it would add another UI domain. Still, it is worth remembering that the product may eventually not only show folders, but also adapt the view to the type of work.

---

## 23. Source Of Truth, Archive, And Decision Clarity

One of the most important problems in this kind of workspace is that not all files have the same weight. Some are the active source of truth. Others are supporting snapshots. Others are archives. Still others are private notes that must not be used publicly or sent to an agent without thought.

The app should eventually help distinguish these roles. This is one of the things that makes it better than VS Code.

Example labels:

- Active source,
- Working draft,
- Helper snapshot,
- Reference only,
- Archive,
- Private,
- Public-safe,
- Agent-safe,
- Review before sending,
- Do not send to agent.

This does not have to be fully automatic in Phase 0. The prototype can show these states in public-safe mock data. But the principle must be guarded: the app does not only show a file, it communicates its role in the work.

Decision logs will also matter in future phases. Tasks and decisions are not the same thing. A TODO says what to do. A decision log says what has been decided and why. Eventually, the app may help show recent decisions, open decisions, and decisions that need closure, but this is not part of Phase 0.

---

## 24. Ignore Rules And Large Folders

With a real filesystem, one of the first problems will be large, technical, or unnecessary folders. The app cannot blindly index everything.

Default ignore rules should include, among others:

- `node_modules`,
- `.git`,
- `.next`,
- `dist`,
- `build`,
- `.turbo`,
- `.cache`,
- `.DS_Store`,
- `.env`,
- `.env.*`,
- large binaries,
- generated files,
- dependency folders.

This is a Phase 1 topic, not Phase 0. But it is worth writing down now as an assumption, because without this, a real folder scan will quickly become slow, chaotic, and full of things the user does not want to see.

The app should eventually have configuration for ignored paths and patterns, but the default settings must be sensible.

---

## 25. HTML Preview Security

HTML preview is one of the most visually attractive features, because the workspace may contain mockups, prototypes, landing pages, and various saved views. But HTML preview is also potentially risky, especially in a desktop application.

In Phase 0, HTML preview is only a mock or a safe frontend preview. In Phase 1, if the app reads real local HTML files, preview must be sandboxed.

Principle: local HTML must not have access to privileged app APIs, the desktop bridge, filesystem, shell commands, or any Tauri/Electron layer that could perform system actions.

In other words: HTML preview should be a preview, not an executable local tool with the app's privileges.

This is an important security boundary. Especially because the project may eventually work on private folders and client files.

---

## 26. Bring-Your-Own-Folder And Usability By Others

The project starts from my real problem, but it should not be hardcoded only to my folder. Long term, someone else should be able to point at their own folder and get a similar visual workspace.

This means the product should eventually support a "bring your own folder" model. The user chooses a workspace root, and the app helps understand it.

In the future, configuration may be needed for:

- workspace name,
- main areas,
- hidden folders,
- private patterns,
- archive patterns,
- agent-safe patterns,
- pinned docs,
- preferred quick actions,
- provider commands,
- visual theme.

We do not build this in Phase 0. But Phase 0 should not assume my folder too rigidly. Public-safe mock data should show a general model: projects, clients, research, build logs, templates, assets, archive.

---

## 27. Visual Design Direction

The visual direction should be calm, readable, and work-focused. This should not be a fake OS, cyberpunk dashboard, or decorative Dribbble concept. The project should look good, but above all it should help with thinking.

Words that describe the good direction:

- calm,
- premium,
- visual,
- useful,
- focused,
- work surface,
- readable,
- quiet confidence.

Words that describe the wrong direction:

- gimmick,
- fake operating system,
- cyberpunk,
- noisy dashboard,
- over-animated,
- too many badges,
- too many colors,
- AI marketing UI,
- developer clutter.

A good UI should have clear hierarchy, plenty of breathing room, strong previews, sensible cards, calm colors, readable statuses, and clear actions. Raw technical information may exist, but it must not dominate.

---

## 28. Accessibility And Visual Polish

Even if Phase 0 is a prototype, it should not ignore the basics of accessibility and frontend quality. This is a project for testing agent work on visual frontend, so accessibility, focus states, and responsiveness are part of the test, not an extra.

Minimum for Phase 0:

- real buttons for actions,
- focus states for interactive cards,
- readable contrast,
- status not based only on color,
- layout working on a normal desktop and a narrower laptop,
- sensible empty states,
- no hiding key information only behind hover.

Mobile is not a priority. This is a workspace app. Desktop and laptop matter most.

---

## 29. Quick Reference: What We Are Building Now, And What We Are Not

The nearest current step is a web visual prototype.

We are building:

- Home as the main screen,
- Visual Explorer + Preview,
- Project Desk,
- small Recent Activity signal,
- mock Agent Context Panel,
- public-safe mock data,
- documentation of at least two rounds of work with an agent.

We are not building now:

- Tauri,
- Electron,
- real filesystem,
- real Git,
- real Codex,
- Claude Code,
- terminal,
- PDF viewer,
- full-text search,
- semantic search,
- review workflow,
- file editing,
- moving files,
- cloud sync,
- login,
- automatic AI summaries.

The most important principle for now:

First, we check whether the Visual Workspace Layer makes sense. Only after that do we build the real local application.
