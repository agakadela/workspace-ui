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
