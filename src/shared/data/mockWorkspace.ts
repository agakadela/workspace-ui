export type WorkspaceHomeModel = {
  continueItem: {
    title: string;
    summary: string;
    area: string;
    statusLabel: string;
    safetyLabel: string;
    actionLabel: string;
  };
  recentActivity: Array<{
    id: string;
    title: string;
    summary: string;
    meta: string;
    statusLabel: string;
  }>;
  nextTasks: Array<{
    id: string;
    title: string;
    summary: string;
    statusLabel: string;
    safetyLabel: string;
  }>;
  pinnedDocs: Array<{
    id: string;
    title: string;
    role: string;
    path: string;
    statusLabel: string;
    safetyLabel: string;
  }>;
  contextDraft: {
    activeFolder: string;
    summary: string;
    statusLabel: string;
    selectedFiles: string[];
    reviewFirstFiles: string[];
    privateExcludedFiles: string[];
    suggestedPrompt: string;
  };
  shellStatus: Array<{
    label: string;
    value: string;
  }>;
};

export type PreviewKind =
  | "markdown"
  | "html"
  | "image-card"
  | "code-summary"
  | "unsupported";

export type WorkspaceArtifact = {
  id: string;
  areaId: string;
  title: string;
  typeLabel: string;
  role: string;
  statusLabel: string;
  activityLabel: string;
  safetyLabel: string;
  path: string;
  previewAvailability: string;
  preview: {
    kind: PreviewKind;
    eyebrow: string;
    title: string;
    summary: string;
    details: string[];
  };
};

export type WorkspaceExplorerModel = {
  workspaceName: string;
  summary: string;
  areas: Array<{
    id: string;
    label: string;
    summary: string;
  }>;
  artifacts: WorkspaceArtifact[];
  emptyState: {
    title: string;
    summary: string;
  };
};

export type WorkspaceProjectDeskModel = {
  project: {
    name: string;
    eyebrow: string;
    summary: string;
    activeFolder: string;
    statusLabel: string;
    safetyLabel: string;
    focusLabel: string;
  };
  statusItems: Array<{
    id: string;
    label: string;
    value: string;
    detail: string;
    statusLabel: string;
  }>;
  importantDocs: Array<{
    id: string;
    title: string;
    role: string;
    path: string;
    statusLabel: string;
    safetyLabel: string;
  }>;
  nextTasks: Array<{
    id: string;
    title: string;
    summary: string;
    ownerLabel: string;
    statusLabel: string;
    safetyLabel: string;
  }>;
  recentWork: Array<{
    id: string;
    title: string;
    summary: string;
    meta: string;
    statusLabel: string;
  }>;
  contextCandidates: Array<{
    id: string;
    title: string;
    reason: string;
    path: string;
    statusLabel: string;
    safetyLabel: string;
  }>;
  quickActions: Array<{
    id: string;
    label: string;
    summary: string;
    statusLabel: string;
  }>;
  emptyStates: {
    noTasks: {
      title: string;
      summary: string;
    };
    noPinnedDocs: {
      title: string;
      summary: string;
    };
    noSafeContext: {
      title: string;
      summary: string;
    };
  };
};

export const workspaceHomeModel: WorkspaceHomeModel = {
  continueItem: {
    title: "Review the Orchard Notes Project Desk",
    summary:
      "Pick up from the focused project work surface: status, docs, tasks, recent work, context candidates, and mock actions are ready to inspect before the context composer slice.",
    area: "Fictional workspace / Product concept",
    statusLabel: "In progress",
    safetyLabel: "Safe for agent",
    actionLabel: "Review context draft",
  },
  recentActivity: [
    {
      id: "activity-home-ui",
      title: "Home shell moved from scaffold to orientation surface",
      summary:
        "Continue card, pinned docs, next tasks, and context draft now sit above raw paths.",
      meta: "Updated in the Home prototype",
      statusLabel: "Updated",
    },
    {
      id: "activity-explorer-preview",
      title: "Explorer preview model settled",
      summary:
        "Artifact cards now show meaning, preview availability, and safety before raw paths.",
      meta: "Completed in the Explorer slice",
      statusLabel: "Updated",
    },
    {
      id: "activity-project-desk",
      title: "Project Desk became a focused work surface",
      summary:
        "The fictional project now gathers status, docs, tasks, recent work, and mock quick actions.",
      meta: "Prepared for the context composer",
      statusLabel: "Mock only",
    },
  ],
  nextTasks: [
    {
      id: "task-agent-context-composer",
      title: "Shape the Agent Context composer",
      summary:
        "Turn Project Desk context candidates into selected, excluded, private, and review-first groups.",
      statusLabel: "Next slice",
      safetyLabel: "Review first",
    },
    {
      id: "task-copy-prompt-state",
      title: "Design the copy prompt state",
      summary:
        "Keep prompt copying visibly mock-generated with a graceful browser-permission fallback.",
      statusLabel: "Ready",
      safetyLabel: "Safe mock data",
    },
    {
      id: "task-visual-coherence",
      title: "Check whole Phase 0 rhythm",
      summary:
        "Review Home, Explorer, Project Desk, and the future composer as one calm work surface.",
      statusLabel: "Queued",
      safetyLabel: "Concept only",
    },
  ],
  pinnedDocs: [
    {
      id: "doc-spec",
      title: "Phase 0 spec",
      role: "Product scope and success criteria",
      path: "docs/SPEC.md",
      statusLabel: "Source of truth",
      safetyLabel: "Safe public mock",
    },
    {
      id: "doc-plan",
      title: "Active implementation plan",
      role: "Current tasks, acceptance criteria, and do-not-touch list",
      path: "docs/PLAN.md",
      statusLabel: "Current",
      safetyLabel: "Safe public mock",
    },
    {
      id: "doc-ui-system",
      title: "UI system reference",
      role: "Visual direction, states, layout, and component rules",
      path: "docs/UI_SYSTEM.md",
      statusLabel: "Pinned",
      safetyLabel: "Review before reuse",
    },
  ],
  contextDraft: {
    activeFolder: "demo-workspace/orchard-notes",
    summary:
      "A controlled draft for the next agent pass, built from explicit fictional files rather than local workspace scanning.",
    statusLabel: "Composer preview",
    selectedFiles: [
      "docs/SPEC.md",
      "docs/PLAN.md",
      "docs/UI_SYSTEM.md",
      "src/features/project-desk/ProjectDesk.tsx",
    ],
    reviewFirstFiles: ["docs/design/references/dashboard-ui-kit/README.md"],
    privateExcludedFiles: [
      "private-notes/founder-journal.md",
      "client-materials/real-client-brief.md",
    ],
    suggestedPrompt:
      "Use the pinned Phase 0 docs and Project Desk mock model to build the next Agent Context composer slice without adding real filesystem, Git, search, terminal, or agent execution.",
  },
  shellStatus: [
    {
      label: "Prototype mode",
      value: "Web-only Vite app with public-safe fictional data.",
    },
    {
      label: "Data boundary",
      value: "Home reads the shared mock model through the platform adapter.",
    },
    {
      label: "Out of scope",
      value: "No filesystem, Git, terminal, Codex, auth, cloud, search, or Tauri.",
    },
  ],
};

export const workspaceExplorerModel: WorkspaceExplorerModel = {
  workspaceName: "Orchard Notes demo workspace",
  summary:
    "Browse fictional artifacts by role, safety, activity, and preview value before opening a raw path.",
  areas: [
    {
      id: "strategy",
      label: "Strategy",
      summary: "Source-of-truth docs and decision notes for the concept pass.",
    },
    {
      id: "interface",
      label: "Interface",
      summary: "Mockups, cards, and code summaries for the web prototype.",
    },
    {
      id: "archive",
      label: "Archive",
      summary: "A quiet empty state for old material that is not active.",
    },
  ],
  artifacts: [
    {
      id: "strategy-note",
      areaId: "strategy",
      title: "Strategy Note",
      typeLabel: "Markdown",
      role: "Source of truth",
      statusLabel: "Current",
      activityLabel: "Updated today",
      safetyLabel: "Safe for agent",
      path: "demo-workspace/orchard-notes/docs/strategy-note.md",
      previewAvailability: "Markdown",
      preview: {
        kind: "markdown",
        eyebrow: "Markdown preview",
        title: "Workspace layer wedge",
        summary:
          "A concise product note that frames Home as the center and Explorer as a meaning-first inspection surface.",
        details: [
          "Primary user: a builder returning to a busy local work folder.",
          "Promise: explain what matters before showing raw paths.",
          "Boundary: all examples are fictional public-safe mock data.",
        ],
      },
    },
    {
      id: "html-mockup",
      areaId: "interface",
      title: "Desk Layout Mockup",
      typeLabel: "HTML mockup",
      role: "Visual reference",
      statusLabel: "In progress",
      activityLabel: "Reviewed yesterday",
      safetyLabel: "Review first",
      path: "demo-workspace/orchard-notes/mockups/desk-layout.html",
      previewAvailability: "HTML mockup",
      preview: {
        kind: "html",
        eyebrow: "HTML mockup preview",
        title: "Static desk frame",
        summary:
          "A non-executing mockup preview that shows the intended panel rhythm without loading local HTML.",
        details: [
          "Left rail: workspace areas.",
          "Center: selected work surface.",
          "Right: preview and context notes.",
        ],
      },
    },
    {
      id: "image-card",
      areaId: "interface",
      title: "Concept Card Set",
      typeLabel: "Image card",
      role: "Visual asset",
      statusLabel: "Pinned",
      activityLabel: "Added this week",
      safetyLabel: "Safe mock data",
      path: "demo-workspace/orchard-notes/assets/concept-cards.png",
      previewAvailability: "Image/card",
      preview: {
        kind: "image-card",
        eyebrow: "Image card preview",
        title: "Three-card concept strip",
        summary:
          "A readable card-style stand-in for image assets, showing the actual concept labels rather than a decorative thumbnail.",
        details: ["Home", "Explorer", "Project Desk"],
      },
    },
    {
      id: "code-summary",
      areaId: "interface",
      title: "Home Component Summary",
      typeLabel: "Code summary",
      role: "Implementation note",
      statusLabel: "Ready",
      activityLabel: "Checked today",
      safetyLabel: "Safe for agent",
      path: "src/features/home/Home.tsx",
      previewAvailability: "Code summary",
      preview: {
        kind: "code-summary",
        eyebrow: "Code summary preview",
        title: "Home feature responsibilities",
        summary:
          "A human-readable code preview that names component boundaries without pretending to execute or edit files.",
        details: [
          "Renders the Home-first orientation surface.",
          "Uses shared mock workspace data through the platform adapter.",
          "Shows status and privacy with text plus icons.",
        ],
      },
    },
    {
      id: "raw-export",
      areaId: "strategy",
      title: "Raw Export",
      typeLabel: "Unsupported file",
      role: "Reference only",
      statusLabel: "Parked",
      activityLabel: "Imported last week",
      safetyLabel: "Review first",
      path: "demo-workspace/orchard-notes/exports/raw-workspace.dump",
      previewAvailability: "Unsupported",
      preview: {
        kind: "unsupported",
        eyebrow: "Unsupported preview",
        title: "Preview unavailable in Phase 0",
        summary:
          "This artifact is tracked for meaning, but Phase 0 does not preview this file type.",
        details: [
          "Keep the role and safety state visible.",
          "Do not add real file readers or binary preview behavior.",
        ],
      },
    },
  ],
  emptyState: {
    title: "No artifacts in Archive",
    summary:
      "This area is intentionally empty so the Explorer has a visible calm empty state without inventing extra files.",
  },
};

export const workspaceProjectDeskModel: WorkspaceProjectDeskModel = {
  project: {
    name: "Project Desk",
    eyebrow: "Fictional project workspace",
    summary:
      "A focused surface for the Orchard Notes concept pass: status, source docs, next work, recent decisions, context candidates, and mock actions before any raw folder browsing.",
    activeFolder: "demo-workspace/orchard-notes",
    statusLabel: "In progress",
    safetyLabel: "Public-safe mock data",
    focusLabel: "Work surface, not folder list",
  },
  statusItems: [
    {
      id: "status-phase",
      label: "Phase",
      value: "Phase 0 visual prototype",
      detail: "Home and Explorer are available; Project Desk is the current slice.",
      statusLabel: "Current",
    },
    {
      id: "status-boundary",
      label: "Boundary",
      value: "Mock-only workspace",
      detail: "No filesystem, Git, terminal, Tauri, or live agent execution.",
      statusLabel: "Mock only",
    },
    {
      id: "status-review",
      label: "Review posture",
      value: "Readable before raw paths",
      detail: "Human labels lead; technical file paths stay secondary.",
      statusLabel: "Review first",
    },
  ],
  importantDocs: [
    {
      id: "project-doc-spec",
      title: "Phase 0 spec",
      role: "Product promise, scope, and success criteria for the prototype.",
      path: "docs/SPEC.md",
      statusLabel: "Source of truth",
      safetyLabel: "Safe for agent",
    },
    {
      id: "project-doc-plan",
      title: "Active implementation plan",
      role: "Task 4 acceptance criteria and out-of-scope boundaries.",
      path: "docs/PLAN.md",
      statusLabel: "Current",
      safetyLabel: "Safe for agent",
    },
    {
      id: "project-doc-ui-system",
      title: "UI system reference",
      role: "Project Desk visual rhythm, states, and interaction guardrails.",
      path: "docs/UI_SYSTEM.md",
      statusLabel: "Pinned",
      safetyLabel: "Review first",
    },
  ],
  nextTasks: [
    {
      id: "project-task-compose-context",
      title: "Shape the mock context handoff",
      summary:
        "Decide which public-safe files should be selected, excluded, private, or review-first for the next agent pass.",
      ownerLabel: "Agent Context slice",
      statusLabel: "Next",
      safetyLabel: "Review first",
    },
    {
      id: "project-task-visual-check",
      title: "Check Project Desk at laptop width",
      summary:
        "Verify the work surface stays dense and readable without turning into a directory listing.",
      ownerLabel: "Visual proof",
      statusLabel: "Ready",
      safetyLabel: "Safe mock data",
    },
  ],
  recentWork: [
    {
      id: "project-work-explorer",
      title: "Explorer preview model settled",
      summary:
        "Artifact cards now show type, role, activity, preview availability, and safety state before raw paths.",
      meta: "Recent work from Task 3",
      statusLabel: "Updated",
    },
    {
      id: "project-work-home",
      title: "Home remains the primary center",
      summary:
        "The desk opens from Home as a focused continuation surface, not as the app's first screen.",
      meta: "Pinned concept boundary",
      statusLabel: "Pinned",
    },
  ],
  contextCandidates: [
    {
      id: "context-ui-system",
      title: "UI system reference",
      reason: "Needed to keep Project Desk aligned with the established surface rhythm.",
      path: "docs/UI_SYSTEM.md",
      statusLabel: "Candidate",
      safetyLabel: "Review first",
    },
    {
      id: "context-desk-mockup",
      title: "Desk layout mockup",
      reason:
        "Useful visual context, but still review-first because Phase 0 does not load real local HTML.",
      path: "demo-workspace/orchard-notes/mockups/desk-layout.html",
      statusLabel: "Candidate",
      safetyLabel: "Review first",
    },
  ],
  quickActions: [
    {
      id: "quick-review-docs",
      label: "Review docs",
      summary: "Gather the important docs into a mock reading set.",
      statusLabel: "Conceptual action",
    },
    {
      id: "quick-prepare-context",
      label: "Prepare context",
      summary: "Stage the review-first context candidates for the later composer.",
      statusLabel: "Conceptual action",
    },
    {
      id: "quick-open-explorer",
      label: "Inspect artifacts",
      summary: "Move back to the meaning-first Explorer without touching disk.",
      statusLabel: "Conceptual action",
    },
  ],
  emptyStates: {
    noTasks: {
      title: "No tasks yet",
      summary:
        "A quiet task lane appears when a project has no next step instead of inventing filler work.",
    },
    noPinnedDocs: {
      title: "No pinned docs",
      summary:
        "The desk keeps the pinned area explicit when no document has been chosen yet.",
    },
    noSafeContext: {
      title: "No safe context",
      summary:
        "Review-first or private files stay out of the safe context group until a human approves them.",
    },
  },
};
