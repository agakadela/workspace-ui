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

export const workspaceHomeModel: WorkspaceHomeModel = {
  continueItem: {
    title: "Review the Orchard Notes Home pass",
    summary:
      "Pick up from the first real Home surface: the orientation cards are ready to check before the Explorer and Project Desk slices begin.",
    area: "Fictional workspace / Product concept",
    statusLabel: "In progress",
    safetyLabel: "Safe for agent",
    actionLabel: "Review Home",
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
      id: "activity-ui-system",
      title: "UI system reference became the visual source of truth",
      summary:
        "Dark graphite surfaces, warm paper panels, and restrained status chips guide this pass.",
      meta: "Pinned for agent review",
      statusLabel: "Pinned",
    },
    {
      id: "activity-context-boundary",
      title: "Agent handoff stayed mock-only and explicit",
      summary:
        "The draft names selected, review-first, and private-excluded files without reading disk.",
      meta: "Prepared from fictional data",
      statusLabel: "Mock only",
    },
  ],
  nextTasks: [
    {
      id: "task-visual-explorer",
      title: "Sketch Visual Explorer artifact roles",
      summary:
        "Define the first artifact cards around meaning, preview availability, and safety state.",
      statusLabel: "Next slice",
      safetyLabel: "Review first",
    },
    {
      id: "task-preview-examples",
      title: "Choose preview examples",
      summary:
        "Use public-safe markdown, HTML mockup, image/card, and code-summary examples.",
      statusLabel: "Ready",
      safetyLabel: "Safe mock data",
    },
    {
      id: "task-project-desk",
      title: "Keep Project Desk distinct from Explorer",
      summary:
        "Make the future project view feel like a work surface instead of another folder list.",
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
      "src/features/home/Home.tsx",
    ],
    reviewFirstFiles: ["docs/design/references/dashboard-ui-kit/README.md"],
    privateExcludedFiles: [
      "private-notes/founder-journal.md",
      "client-materials/real-client-brief.md",
    ],
    suggestedPrompt:
      "Use the pinned Phase 0 docs and mock Home model to build the next Visual Explorer slice without adding real filesystem, Git, search, terminal, or agent execution.",
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
