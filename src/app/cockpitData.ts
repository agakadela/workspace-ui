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
        "A reachable project cockpit for the next pass: source docs, next work, recent decisions, and mock controls stay bounded.",
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
    "Rebuild Task 8B as the Home cockpit design-system foundation. Keep it web-only, mock-only, and public-safe. Preserve Phase 0 boundaries: no real filesystem reads, Git, terminal, search, auth, cloud, Tauri, PDF, file editing, or live Codex execution.",
};

export function getSurfaceLabel(view: ViewId) {
  if (view === "home") {
    return cockpit.workspace.name;
  }

  return cockpit.queuedSurfaces[view].title;
}
