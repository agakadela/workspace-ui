export type WorkspaceHomeModel = {
  continueItem: {
    title: string;
    summary: string;
  };
  shellStatus: Array<{
    label: string;
    value: string;
  }>;
  guardrails: Array<{
    id: string;
    title: string;
    description: string;
  }>;
};

export const workspaceHomeModel: WorkspaceHomeModel = {
  continueItem: {
    title: "Shape the Visual Workspace Layer from a safe starter shell",
    summary:
      "The first screen orients around Home, keeps the prototype web-only, and prepares the feature folders for public-safe mock workspace data.",
  },
  shellStatus: [
    {
      label: "App shell",
      value: "Vite, React, TypeScript, and Tailwind are wired for local work.",
    },
    {
      label: "Feedback loops",
      value: "Typecheck, lint, tests, build, and CI run real commands.",
    },
    {
      label: "Module convention",
      value: "Product work starts under src/features with shared boundaries.",
    },
  ],
  guardrails: [
    {
      id: "web-only",
      title: "Web only",
      description:
        "The scaffold stays in the browser and does not create src-tauri or desktop behavior.",
    },
    {
      id: "mock-data",
      title: "Public-safe mock data",
      description:
        "The shell uses fictional copy and does not read local folders, Git history, or private project names.",
    },
    {
      id: "context-boundary",
      title: "Context boundary",
      description:
        "Agent context is only a future mock composer concept here, not a live Codex session.",
    },
  ],
};
