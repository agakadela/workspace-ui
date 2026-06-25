import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  Boxes,
  CircleDot,
  ClipboardList,
  Compass,
  FileText,
  FolderKanban,
  LayoutDashboard,
  LockKeyhole,
  PanelRightOpen,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export type ViewId = "home" | "explorer" | "projectDesk" | "context";

export type Tone = "blue" | "orange" | "mint" | "neutral" | "danger";

export type StatusItem = {
  label: string;
  tone: Tone;
  icon: LucideIcon;
};

export type CockpitNavItem = {
  id: ViewId;
  label: string;
  icon: LucideIcon;
};

export type WorkspaceMetric = {
  id: string;
  label: string;
  value: string;
  meta: string;
  icon: LucideIcon;
  tone: Tone;
};

export type ActivityItem = {
  id: string;
  title: string;
  summary: string;
  meta: string;
  status: StatusItem;
};

export type WorkNode = {
  id: string;
  label: string;
  meta: string;
  status: StatusItem;
  variant: "primary" | "paper" | "blue";
};

export type DetailRow = {
  label: string;
  value: string;
};

export type ContextFile = {
  id: string;
  title: string;
  path: string;
  reason: string;
  status: StatusItem;
};

export type ContextGroup = {
  id: string;
  title: string;
  summary: string;
  files: ContextFile[];
  status: StatusItem;
};

export type PreviewKind = "markdown" | "html" | "image" | "code" | "unsupported";

export type ExplorerArea = {
  id: string;
  label: string;
  summary: string;
  status: StatusItem;
  artifactIds: string[];
};

export type ExplorerArtifact = {
  id: string;
  areaId: string;
  title: string;
  path: string;
  type: string;
  role: string;
  updated: string;
  summary: string;
  status: StatusItem;
  safety: StatusItem;
  preview: {
    kind: PreviewKind;
    eyebrow: string;
    title: string;
    summary: string;
    rows: DetailRow[];
    body: string[];
  };
};

export type MockQuickAction = {
  id: string;
  label: string;
  detail: string;
  status: StatusItem;
  icon: LucideIcon;
};

export const navItems: CockpitNavItem[] = [
  { id: "home", label: "Home", icon: LayoutDashboard },
  { id: "explorer", label: "Explorer", icon: Compass },
  { id: "projectDesk", label: "Project Desk", icon: PanelRightOpen },
  { id: "context", label: "Context", icon: ClipboardList },
];

export const cockpit = {
  workspace: {
    eyebrow: "Local workspace layer",
    name: "Orchard Notes Workspace",
    kind: "Fictional project system",
    folder: "demo-workspace/orchard-notes",
    updateLabel: "Updated 12 min ago",
    summary:
      "A public-safe work surface for deciding what changed, what matters now, and what can be handed to an agent without touching real local files.",
  },
  boundaryStatuses: [
    { label: "Mock only", tone: "neutral", icon: ShieldCheck },
    { label: "No filesystem", tone: "neutral", icon: LockKeyhole },
    { label: "Web prototype", tone: "blue", icon: CircleDot },
  ] satisfies StatusItem[],
  objectStatuses: [
    { label: "Phase 0 web-only", tone: "blue", icon: CircleDot },
    { label: "Safe public data", tone: "mint", icon: ShieldCheck },
    { label: "Review-first context", tone: "orange", icon: TriangleAlert },
  ] satisfies StatusItem[],
  tabs: [
    { label: "Overview", count: "Home", isActive: true, icon: LayoutDashboard },
    { label: "Artifacts", count: 5, isActive: false, icon: Boxes },
    { label: "Documents", count: 3, isActive: false, icon: FileText },
    { label: "Context", count: 8, isActive: false, icon: ClipboardList },
    { label: "Boundaries", count: 4, isActive: false, icon: ShieldCheck },
  ],
  metrics: [
    {
      id: "metric-docs",
      label: "Pinned Source Material",
      value: "3 Docs",
      meta: "Spec, plan, and UI system stay visible before raw paths.",
      icon: BookOpen,
      tone: "blue",
    },
    {
      id: "metric-context",
      label: "Context Ready",
      value: "4 Files",
      meta: "Selected mock files are staged for the handoff tray.",
      icon: ClipboardList,
      tone: "mint",
    },
    {
      id: "metric-review",
      label: "Review-first",
      value: "4 Items",
      meta: "Private or uncertain material stays out of the prompt.",
      icon: TriangleAlert,
      tone: "orange",
    },
    {
      id: "metric-scope",
      label: "Phase 0 Boundary",
      value: "0 Live IO",
      meta: "No Git, terminal, search, auth, cloud, Tauri, or file editing.",
      icon: LockKeyhole,
      tone: "neutral",
    },
  ] satisfies WorkspaceMetric[],
  nodes: [
    {
      id: "node-home",
      label: "Home cockpit",
      meta: "Selected workspace object",
      status: { label: "Active", tone: "blue", icon: CircleDot },
      variant: "primary",
    },
    {
      id: "node-explorer",
      label: "Artifact inspection",
      meta: "Task 9 surface",
      status: { label: "Reachable", tone: "neutral", icon: Compass },
      variant: "paper",
    },
    {
      id: "node-desk",
      label: "Project desk",
      meta: "Focused work surface",
      status: { label: "Reachable", tone: "neutral", icon: PanelRightOpen },
      variant: "paper",
    },
    {
      id: "node-context",
      label: "Context handoff",
      meta: "Composer tray model",
      status: { label: "Attached", tone: "mint", icon: ClipboardList },
      variant: "blue",
    },
  ] satisfies WorkNode[],
  details: [
    { label: "Workspace ID", value: "ORCHARD-PHASE-0" },
    { label: "Active folder", value: "demo-workspace/orchard-notes" },
    { label: "Primary surface", value: "Home cockpit" },
    { label: "Data source", value: "Public-safe mock model" },
    { label: "Runtime", value: "Vite web prototype" },
  ] satisfies DetailRow[],
  pinnedDocs: [
    {
      id: "doc-spec",
      title: "Phase 0 spec",
      path: "docs/SPEC.md",
      reason: "Product promise, user, scope, and success criteria.",
      status: { label: "Source of truth", tone: "mint", icon: BadgeCheck },
    },
    {
      id: "doc-plan",
      title: "Active plan",
      path: "docs/PLAN.md",
      reason: "Task 8B acceptance, work order, and do-not-touch list.",
      status: { label: "Current", tone: "blue", icon: CircleDot },
    },
    {
      id: "doc-ui",
      title: "UI system",
      path: "docs/UI_SYSTEM.md",
      reason: "Reference grammar for shell, canvas, panels, and composer.",
      status: { label: "Review first", tone: "orange", icon: TriangleAlert },
    },
  ] satisfies ContextFile[],
  recentActivity: [
    {
      id: "activity-reset",
      title: "Legacy feature/shared layer removed",
      summary:
        "The 8B cockpit starts from app-local product code instead of polishing prior screen modules.",
      meta: "Implementation reset",
      status: { label: "Done", tone: "mint", icon: BadgeCheck },
    },
    {
      id: "activity-home",
      title: "Home becomes the selected workspace object",
      summary:
        "The first screen leads with object identity, canvas controls, details, and context readiness.",
      meta: "Workspace cockpit",
      status: { label: "Active", tone: "blue", icon: CircleDot },
    },
    {
      id: "activity-boundary",
      title: "Mock-only boundaries stay visible",
      summary:
        "Private, review-first, excluded, and no-live-IO states stay explicit without color-only meaning.",
      meta: "Phase 0 guardrail",
      status: { label: "Bounded", tone: "neutral", icon: ShieldCheck },
    },
  ] satisfies ActivityItem[],
  explorer: {
    activeAreaId: "source",
    activeArtifactId: "artifact-spec",
    areas: [
      {
        id: "source",
        label: "Source Docs",
        summary: "Accepted truth before raw folders.",
        status: { label: "3 artifacts", tone: "blue", icon: FileText },
        artifactIds: ["artifact-spec", "artifact-brief", "artifact-unsupported"],
      },
      {
        id: "mockups",
        label: "HTML Mockups",
        summary: "Static visual payloads only.",
        status: { label: "1 mockup", tone: "neutral", icon: LayoutDashboard },
        artifactIds: ["artifact-html"],
      },
      {
        id: "visuals",
        label: "Visual Cards",
        summary: "Image-like cards, not copied kit assets.",
        status: { label: "1 card", tone: "mint", icon: Boxes },
        artifactIds: ["artifact-image"],
      },
      {
        id: "code",
        label: "Code Summary",
        summary: "Human summary before implementation detail.",
        status: { label: "1 summary", tone: "neutral", icon: ClipboardList },
        artifactIds: ["artifact-code"],
      },
      {
        id: "archive",
        label: "Empty Archive",
        summary: "Calm empty state for areas with no safe artifacts.",
        status: { label: "0 artifacts", tone: "orange", icon: TriangleAlert },
        artifactIds: [],
      },
    ] satisfies ExplorerArea[],
    artifacts: [
      {
        id: "artifact-spec",
        areaId: "source",
        title: "Phase 0 Workspace Spec",
        path: "docs/SPEC.md",
        type: "Markdown",
        role: "Product truth",
        updated: "Accepted Jun 24",
        summary: "Defines the mock-only workspace layer, target user, and success criteria.",
        status: { label: "Source of truth", tone: "mint", icon: BadgeCheck },
        safety: { label: "Safe for agent", tone: "mint", icon: ShieldCheck },
        preview: {
          kind: "markdown",
          eyebrow: "Markdown preview",
          title: "Workspace layer promise",
          summary:
            "The preview keeps human meaning first: problem, user, scope, and boundaries before raw path detail.",
          rows: [
            { label: "Primary question", value: "What matters now?" },
            { label: "Phase", value: "0 web-only visual prototype" },
            { label: "Boundary", value: "No real local folder access" },
          ],
          body: [
            "A local work folder can become the real center of work: docs, tasks, mockups, assets, and agent instructions.",
            "The product should answer where to continue, what changed, what is private, and what context is safe to hand off.",
            "Phase 0 proves the surface with fictional public-safe data before any desktop or filesystem behavior exists.",
          ],
        },
      },
      {
        id: "artifact-brief",
        areaId: "source",
        title: "Redesign Task Pack",
        path: "docs/PLAN.md#task-9",
        type: "Markdown",
        role: "Implementation route",
        updated: "Planned next",
        summary: "Names Explorer as an inspection surface, not a raw folder tree.",
        status: { label: "Current", tone: "blue", icon: CircleDot },
        safety: { label: "Review first", tone: "orange", icon: TriangleAlert },
        preview: {
          kind: "markdown",
          eyebrow: "Markdown preview",
          title: "Task 9 contract",
          summary:
            "Explorer must preserve required preview examples while adopting the Task 8B cockpit system.",
          rows: [
            { label: "Screen", value: "Explorer + Preview" },
            { label: "Primary model", value: "Areas -> artifacts -> selected preview" },
            { label: "Visual target", value: "Dense inspection surface" },
          ],
          body: [
            "Areas, artifacts, and Preview Pane need stronger hierarchy than a three-column card list.",
            "Preview content must be readable and object-specific, with raw paths secondary.",
            "Unsupported and empty states remain calm and explicit.",
          ],
        },
      },
      {
        id: "artifact-html",
        areaId: "mockups",
        title: "Home Handoff Mockup",
        path: "mockups/home-handoff.html",
        type: "HTML mockup",
        role: "Static screen concept",
        updated: "Drafted 2 days ago",
        summary: "A safe static representation of a mock HTML surface; no execution or iframe.",
        status: { label: "Preview available", tone: "blue", icon: LayoutDashboard },
        safety: { label: "No HTML execution", tone: "orange", icon: LockKeyhole },
        preview: {
          kind: "html",
          eyebrow: "HTML mockup preview",
          title: "Static handoff panel",
          summary:
            "The app displays this as a drawn product card, not as live local HTML.",
          rows: [
            { label: "Render mode", value: "Static mock card" },
            { label: "Interactive behavior", value: "N/A in Phase 0" },
            { label: "Security note", value: "No iframe, no script execution" },
          ],
          body: [
            "Header: Continue from Orchard Notes",
            "Primary tray: Selected docs, review-first references, private examples excluded",
            "Footer action: Copy prompt boundary as mock text only",
          ],
        },
      },
      {
        id: "artifact-image",
        areaId: "visuals",
        title: "Reference Mood Card",
        path: "visuals/reference-mood-card.png",
        type: "Image card",
        role: "Visual direction",
        updated: "Pinned yesterday",
        summary: "An original card-style visual signal inspired by the dashboard kit grammar.",
        status: { label: "Image/card", tone: "mint", icon: Boxes },
        safety: { label: "Reference only", tone: "orange", icon: TriangleAlert },
        preview: {
          kind: "image",
          eyebrow: "Image/card preview",
          title: "Dark cockpit material study",
          summary:
            "A payload-forward visual card: shell, canvas, panels, and context tray cues without copied kit assets.",
          rows: [
            { label: "Dominant surface", value: "Dark rounded canvas" },
            { label: "Payload", value: "Panel rhythm and tray placement" },
            { label: "Use", value: "Visual reference, not product asset" },
          ],
          body: [
            "Canvas field with dense object panels.",
            "Warm paper selected states.",
            "Small clay review-first warning treatment.",
          ],
        },
      },
      {
        id: "artifact-code",
        areaId: "code",
        title: "Cockpit App Modules",
        path: "src/app/",
        type: "Code summary",
        role: "Implementation map",
        updated: "Touched today",
        summary: "Summarizes app-local modules without exposing a raw source dump as the first layer.",
        status: { label: "Summary only", tone: "neutral", icon: ClipboardList },
        safety: { label: "Developer-readable", tone: "neutral", icon: FileText },
        preview: {
          kind: "code",
          eyebrow: "Code summary preview",
          title: "App-local cockpit foundation",
          summary:
            "The preview explains ownership and boundaries before individual filenames.",
          rows: [
            { label: "Shell", value: "App, TopBar, ObjectHeader, SurfaceTabs" },
            { label: "Surfaces", value: "HomeCockpit, ExplorerSurface, QueuedSurface" },
            { label: "Data", value: "cockpitData public-safe mock model" },
          ],
          body: [
            "Keep product-area extraction deferred until patterns repeat across Tasks 9-11.",
            "Preserve cockpit primitives locally inside src/app.",
            "Do not add filesystem, search, terminal, Git, Tauri, or live agent behavior.",
          ],
        },
      },
      {
        id: "artifact-unsupported",
        areaId: "source",
        title: "Archived PDF Placeholder",
        path: "archive/client-brief-placeholder.pdf",
        type: "Unsupported",
        role: "Boundary example",
        updated: "Not opened",
        summary: "Shows a calm unsupported preview state without adding a PDF viewer.",
        status: { label: "Unsupported preview", tone: "orange", icon: TriangleAlert },
        safety: { label: "Review first", tone: "orange", icon: TriangleAlert },
        preview: {
          kind: "unsupported",
          eyebrow: "Unsupported preview",
          title: "Preview intentionally unavailable",
          summary:
            "PDF viewing is out of Phase 0 scope, so the artifact stays visible as metadata only.",
          rows: [
            { label: "Preview", value: "Unsupported in Phase 0" },
            { label: "Required action", value: "Review outside prototype" },
            { label: "Boundary", value: "No PDF viewer added" },
          ],
          body: [
            "The artifact remains searchable by meaning inside the mock Explorer surface.",
            "The app does not open, parse, or render the file.",
            "This preserves the unsupported state without expanding Phase 0.",
          ],
        },
      },
    ] satisfies ExplorerArtifact[],
  },
  projectDesk: {
    project: {
      eyebrow: "Selected fictional project",
      title: "Orchard Launch Kit",
      summary:
        "A compact desk for the current Phase 0 redesign project: source truth, near-term tasks, recent material, and safe context candidates.",
      status: { label: "Task 10 active", tone: "blue", icon: CircleDot } satisfies StatusItem,
      rows: [
        { label: "Project state", value: "Visual redesign in progress" },
        { label: "Current slice", value: "Project Desk cockpit" },
        { label: "Primary source", value: "docs/PLAN.md#task-10" },
        { label: "Boundary", value: "Mock-only, no live IO" },
      ] satisfies DetailRow[],
    },
    stats: [
      {
        id: "desk-source",
        label: "Source Material",
        value: "3 Docs",
        meta: "Spec, plan, and UI system anchor the screen.",
        icon: BookOpen,
        tone: "blue",
      },
      {
        id: "desk-tasks",
        label: "Next Tasks",
        value: "3 Items",
        meta: "Task 10, Task 11, and verification stay visible.",
        icon: ClipboardList,
        tone: "orange",
      },
      {
        id: "desk-context",
        label: "Context Candidates",
        value: "4 Files",
        meta: "Safe, review-first, and excluded boundaries are explicit.",
        icon: ShieldCheck,
        tone: "mint",
      },
    ] satisfies WorkspaceMetric[],
    sourceDocs: [
      {
        id: "desk-doc-plan",
        title: "Task 10 plan",
        path: "docs/PLAN.md#task-10",
        reason: "Defines the focused Project Desk acceptance criteria.",
        status: { label: "Current", tone: "blue", icon: CircleDot },
      },
      {
        id: "desk-doc-ui",
        title: "Project Desk UI target",
        path: "docs/UI_SYSTEM.md#project-desk",
        reason: "Keeps the screen inside the dashboard-kit cockpit grammar.",
        status: { label: "Review first", tone: "orange", icon: TriangleAlert },
      },
      {
        id: "desk-doc-spec",
        title: "Phase 0 scope",
        path: "docs/SPEC.md",
        reason: "Preserves public-safe mock-only product boundaries.",
        status: { label: "Source of truth", tone: "mint", icon: BadgeCheck },
      },
    ] satisfies ContextFile[],
    nextTasks: [
      {
        id: "desk-task-10",
        title: "Redesign Project Desk",
        summary:
          "Convert the project view from a placeholder into a dense focused cockpit.",
        meta: "Current task",
        status: { label: "In progress", tone: "blue", icon: CircleDot },
      },
      {
        id: "desk-task-11",
        title: "Attach Context Composer",
        summary:
          "Rework the handoff tray around selected, review-first, private, and excluded files.",
        meta: "Next planned",
        status: { label: "Planned", tone: "orange", icon: ClipboardList },
      },
      {
        id: "desk-task-12",
        title: "Whole-flow visual verification",
        summary:
          "Check Home, Explorer, Project Desk, and Composer across desktop and laptop widths.",
        meta: "Verification pack",
        status: { label: "Queued", tone: "neutral", icon: ShieldCheck },
      },
    ] satisfies ActivityItem[],
    recentPinnedWork: [
      {
        id: "desk-work-explorer",
        title: "Explorer inspection surface",
        path: "src/app/ExplorerSurface.tsx",
        reason: "Artifact card and preview language to reuse for project material.",
        status: { label: "Done", tone: "mint", icon: BadgeCheck },
      },
      {
        id: "desk-work-home",
        title: "Home cockpit foundation",
        path: "src/app/HomeCockpit.tsx",
        reason: "Object header, work canvas, and dense panel rhythm.",
        status: { label: "Foundation", tone: "blue", icon: LayoutDashboard },
      },
      {
        id: "desk-work-data",
        title: "Public-safe mock model",
        path: "src/app/cockpitData.ts",
        reason: "Fictional project state only; no private workspace data.",
        status: { label: "Mock data", tone: "neutral", icon: LockKeyhole },
      },
    ] satisfies ContextFile[],
    contextCandidates: [
      {
        id: "desk-context-plan",
        title: "Task plan excerpt",
        path: "docs/PLAN.md#task-10",
        reason: "Selected because it names the active contract.",
        status: { label: "Safe for agent", tone: "mint", icon: ShieldCheck },
      },
      {
        id: "desk-context-ui",
        title: "UI system guidance",
        path: "docs/UI_SYSTEM.md",
        reason: "Review first because it references external visual material.",
        status: { label: "Review first", tone: "orange", icon: TriangleAlert },
      },
      {
        id: "desk-context-app",
        title: "Cockpit app modules",
        path: "src/app/",
        reason: "Selected as implementation context, not a raw folder dump.",
        status: { label: "Developer-readable", tone: "neutral", icon: FileText },
      },
      {
        id: "desk-context-private",
        title: "Private archive placeholder",
        path: "private-client-material/",
        reason: "Fictional private example; visible only as an exclusion boundary.",
        status: { label: "Private: excluded", tone: "danger", icon: LockKeyhole },
      },
    ] satisfies ContextFile[],
    quickActions: [
      {
        id: "desk-action-source",
        label: "Open source stack",
        detail: "Review docs in the mock desk",
        status: { label: "Mock control", tone: "neutral", icon: CircleDot },
        icon: BookOpen,
      },
      {
        id: "desk-action-context",
        label: "Stage context draft",
        detail: "Prepare handoff boundaries",
        status: { label: "Mock control", tone: "neutral", icon: CircleDot },
        icon: ClipboardList,
      },
      {
        id: "desk-action-review",
        label: "Mark desk reviewed",
        detail: "Conceptual progress state",
        status: { label: "Mock control", tone: "neutral", icon: CircleDot },
        icon: ShieldCheck,
      },
    ] satisfies MockQuickAction[],
    emptyStates: [
      {
        id: "desk-empty-tasks",
        title: "No backlog tasks",
        summary: "The later-task lane is empty for this fictional project.",
        meta: "Empty task state",
        status: { label: "No tasks", tone: "neutral", icon: CircleDot },
      },
      {
        id: "desk-empty-pins",
        title: "No extra pinned docs",
        summary: "Only the three source documents are pinned in Phase 0.",
        meta: "Empty pinned-doc state",
        status: { label: "No pinned docs", tone: "neutral", icon: BookOpen },
      },
      {
        id: "desk-empty-context",
        title: "No safe context here",
        summary: "Private archive examples stay excluded from the handoff.",
        meta: "Empty safe-context state",
        status: { label: "Excluded", tone: "danger", icon: LockKeyhole },
      },
    ] satisfies ActivityItem[],
  },
  contextGroups: [
    {
      id: "selected",
      title: "Selected",
      summary: "Included in the mock prompt draft.",
      status: { label: "4 files", tone: "mint", icon: ShieldCheck },
      files: [
        {
          id: "selected-spec",
          title: "Phase 0 spec",
          path: "docs/SPEC.md",
          reason: "Frames the accepted product boundary.",
          status: { label: "Safe for agent", tone: "mint", icon: ShieldCheck },
        },
        {
          id: "selected-plan",
          title: "Active implementation plan",
          path: "docs/PLAN.md",
          reason: "Defines Task 8B and the remaining redesign sequence.",
          status: { label: "Safe for agent", tone: "mint", icon: ShieldCheck },
        },
      ],
    },
    {
      id: "review",
      title: "Review first",
      summary: "Useful, but not automatic context.",
      status: { label: "2 files", tone: "orange", icon: TriangleAlert },
      files: [
        {
          id: "review-ui",
          title: "Dashboard kit references",
          path: "docs/design/references/dashboard-ui-kit/",
          reason: "Visual direction only; no product asset copying.",
          status: { label: "Review first", tone: "orange", icon: TriangleAlert },
        },
      ],
    },
    {
      id: "excluded",
      title: "Private / excluded",
      summary: "Visible as a boundary, never copied.",
      status: { label: "2 blocked", tone: "danger", icon: LockKeyhole },
      files: [
        {
          id: "private-notes",
          title: "Founder journal placeholder",
          path: "private-notes/founder-journal.md",
          reason: "Fictional private example, excluded from handoff.",
          status: { label: "Private: excluded", tone: "danger", icon: LockKeyhole },
        },
      ],
    },
  ] satisfies ContextGroup[],
  nextActions: [
    {
      id: "action-explorer",
      label: "Open Visual Explorer",
      view: "explorer",
      icon: Compass,
    },
    {
      id: "action-desk",
      label: "Open Project Desk",
      view: "projectDesk",
      icon: PanelRightOpen,
    },
    {
      id: "action-context",
      label: "Review Context Tray",
      view: "context",
      icon: ClipboardList,
    },
  ] as const,
  queuedSurfaces: {
    explorer: {
      eyebrow: "Artifact inspection",
      title: "Visual Explorer",
      summary:
        "A reachable Phase 0 surface for the next redesign pass: areas, artifact cards, and readable previews remain mock-only.",
      icon: Compass,
      stats: ["5 artifacts", "4 preview kinds", "1 unsupported state"],
    },
    projectDesk: {
      eyebrow: "Focused work surface",
      title: "Project Desk",
      summary:
        "A focused project cockpit with source docs, next work, recent pinned material, context candidates, and bounded mock controls.",
      icon: FolderKanban,
      stats: ["1 fictional project", "3 source docs", "0 live actions"],
    },
    context: {
      eyebrow: "Controlled handoff",
      title: "Agent Context Composer",
      summary:
        "A reachable context tray model: selected, review-first, private, and excluded groups remain explicit before prompt copy.",
      icon: ClipboardList,
      stats: ["4 selected", "2 review-first", "2 excluded"],
    },
  },
  prompt:
    "Rebuild Task 10 as the Project Desk cockpit surface. Keep it web-only, mock-only, and public-safe. Preserve Phase 0 boundaries: no real filesystem reads, Git, terminal, search, auth, cloud, Tauri, PDF, file editing, or live Codex execution.",
};

export function getSurfaceLabel(view: ViewId) {
  if (view === "home") {
    return cockpit.workspace.name;
  }

  return cockpit.queuedSurfaces[view].title;
}
