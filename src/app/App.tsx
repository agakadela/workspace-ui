import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Bell,
  ChevronDown,
  CircleDot,
  ClipboardCopy,
  Command,
  CornerUpLeft,
  Crosshair,
  Menu,
  Mic,
  MousePointer2,
  Plus,
  SendHorizontal,
  Share2,
  Sparkles,
  Waypoints,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import {
  cockpit,
  getSurfaceLabel,
  navItems,
  type ActivityItem,
  type ContextGroup,
  type StatusItem,
  type Tone,
  type ViewId,
  type WorkNode,
  type WorkspaceMetric,
} from "./cockpitData";

type CopyState = "idle" | "copied" | "fallback";

const toneClasses: Record<Tone, string> = {
  blue: "border-sky-400/35 bg-sky-400/12 text-ice-100",
  orange: "border-flame-500/35 bg-flame-500/12 text-peach-100",
  mint: "border-mint-300/35 bg-mint-300/12 text-mint-100",
  neutral: "border-white/10 bg-white/[0.07] text-ash-100",
  danger: "border-flame-500/40 bg-flame-500/14 text-peach-100",
};

const iconToneClasses: Record<Tone, string> = {
  blue: "bg-sky-400 text-night-980",
  orange: "bg-flame-500 text-white",
  mint: "bg-mint-300 text-night-980",
  neutral: "bg-white/10 text-ash-100",
  danger: "bg-flame-500 text-white",
};

export function App() {
  const [activeView, setActiveView] = useState<ViewId>("home");
  const [copyState, setCopyState] = useState<CopyState>("idle");

  async function copyPrompt() {
    try {
      if (typeof navigator.clipboard?.writeText !== "function") {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(cockpit.prompt);
      setCopyState("copied");
    } catch {
      setCopyState("fallback");
    }
  }

  return (
    <div className="min-h-screen bg-night-980 text-white">
      <TopBar activeView={activeView} onSelectView={setActiveView} />

      <main className="mx-auto max-w-[1440px] px-5 pb-6 pt-9 md:px-8 lg:px-12">
        <ObjectHeader activeView={activeView} onSelectView={setActiveView} />

        <section
          aria-label="Workspace cockpit canvas"
          className="mt-8 overflow-hidden rounded-stage border border-black/70 bg-night-960 shadow-stage"
        >
          <SurfaceTabs activeView={activeView} />

          {activeView === "home" ? (
            <HomeCockpit onSelectView={setActiveView} />
          ) : (
            <QueuedSurface view={activeView} onSelectView={setActiveView} />
          )}

          <ComposerTray copyState={copyState} onCopyPrompt={copyPrompt} />
        </section>
      </main>
    </div>
  );
}

function TopBar({
  activeView,
  onSelectView,
}: {
  activeView: ViewId;
  onSelectView: (view: ViewId) => void;
}) {
  return (
    <header
      aria-label="Workspace product chrome"
      className="mx-auto grid max-w-[1440px] gap-4 px-5 py-6 md:px-8 lg:grid-cols-[250px_minmax(470px,1fr)_260px] lg:items-center lg:px-12 xl:grid-cols-[270px_minmax(520px,1fr)_320px]"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xl font-semibold leading-none text-white">
            workspace-ui
          </p>
          <p className="mt-1 text-xs font-medium text-ash-400">
            public-safe local workspace
          </p>
        </div>
      </div>

      <nav
        aria-label="Primary workspace views"
        className="flex min-w-0 justify-center gap-2 overflow-x-auto"
      >
        {navItems.map((item) => (
          <TopNavButton
            key={item.id}
            item={item}
            isActive={activeView === item.id}
            onSelect={() => onSelectView(item.id)}
          />
        ))}
      </nav>

      <div className="flex items-center justify-start gap-2 lg:justify-end">
        <div className="hidden h-12 min-w-0 flex-1 items-center gap-3 rounded-control bg-night-930 px-4 text-sm text-ash-300 ring-1 ring-white/[0.06] 2xl:flex">
          <Command aria-hidden="true" size={17} />
          <span className="truncate">Phase 0 boundary: mock data only</span>
          <span className="ml-auto rounded-md bg-black/25 px-2 py-1 text-[11px] font-semibold text-ash-400">
            no IO
          </span>
        </div>
        <IconButton label="Mock notifications">
          <Bell aria-hidden="true" size={18} />
        </IconButton>
        <IconButton label="Context readiness">
          <Sparkles aria-hidden="true" size={18} />
        </IconButton>
        <span className="flex size-12 shrink-0 items-center justify-center rounded-control bg-ice-100 text-sm font-bold text-night-980">
          AG
        </span>
      </div>
    </header>
  );
}

function TopNavButton({
  item,
  isActive,
  onSelect,
}: {
  item: { label: string; icon: LucideIcon };
  isActive: boolean;
  onSelect: () => void;
}) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      aria-current={isActive ? "page" : undefined}
      onClick={onSelect}
      className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-control px-4 text-sm font-semibold transition ${
        isActive
          ? "bg-black text-white shadow-control"
          : "text-ash-400 hover:bg-white/[0.06] hover:text-white"
      }`}
    >
      <Icon aria-hidden="true" size={16} />
      {item.label}
    </button>
  );
}

function ObjectHeader({
  activeView,
  onSelectView,
}: {
  activeView: ViewId;
  onSelectView: (view: ViewId) => void;
}) {
  return (
    <section
      aria-labelledby="workspace-title"
      className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto]"
    >
      <div>
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-3 rounded-control bg-night-930 px-4 text-sm font-semibold text-ash-200 ring-1 ring-white/[0.06] transition hover:bg-night-880 hover:text-white"
          onClick={() => onSelectView("home")}
        >
          <ArrowLeft aria-hidden="true" size={17} />
          Back To Home
        </button>

        <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-end">
          <span className="flex size-20 shrink-0 items-center justify-center rounded-object bg-night-920 ring-1 ring-white/[0.06]">
            <Waypoints aria-hidden="true" className="text-sky-400" size={36} />
          </span>
          <div className="min-w-0">
            <p className="text-base font-medium text-ash-400">
              {activeView === "home"
                ? cockpit.workspace.eyebrow
                : cockpit.queuedSurfaces[activeView].eyebrow}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h1
                id="workspace-title"
                className="max-w-[780px] text-5xl font-medium leading-[1.05] text-white md:text-6xl"
              >
                {getSurfaceLabel(activeView)}
              </h1>
              <span className="flex size-9 items-center justify-center rounded-xl bg-flame-500 text-white">
                <Sparkles aria-hidden="true" size={19} />
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-ash-300">
              {activeView === "home"
                ? cockpit.workspace.summary
                : cockpit.queuedSurfaces[activeView].summary}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-12 lg:items-end">
        <span className="inline-flex min-h-12 min-w-[174px] items-center justify-center gap-2 rounded-control bg-peach-100 px-4 text-sm font-semibold text-flame-600">
          <Sparkles aria-hidden="true" size={15} />
          {cockpit.workspace.updateLabel}
        </span>
        <div className="flex flex-wrap justify-start gap-2 lg:justify-end">
          <button
            type="button"
            className="inline-flex min-h-12 items-center gap-2 rounded-control bg-black px-5 text-sm font-semibold text-white shadow-control transition hover:bg-night-930"
            onClick={() => onSelectView("explorer")}
          >
            <CompassGlyph />
            Inspect Artifacts
          </button>
          <button
            type="button"
            className="inline-flex min-h-12 items-center gap-2 rounded-control bg-ice-100 px-5 text-sm font-semibold text-night-980 transition hover:bg-white"
            onClick={() => onSelectView("context")}
          >
            <Plus aria-hidden="true" size={18} />
            Prepare Context
          </button>
        </div>
      </div>
    </section>
  );
}

function SurfaceTabs({ activeView }: { activeView: ViewId }) {
  const activeTabLabel: Record<ViewId, string> = {
    home: "Overview",
    explorer: "Artifacts",
    projectDesk: "Documents",
    context: "Context",
  };

  return (
    <div className="rounded-t-stage border-b border-black/70 bg-night-980 p-1.5">
      <div
        aria-label="Workspace object sections"
        role="list"
        className="grid gap-1.5 md:grid-cols-5"
      >
        {cockpit.tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.label === activeTabLabel[activeView];

          return (
            <span
              key={tab.label}
              role="listitem"
              aria-current={isActive ? "page" : undefined}
              className={`flex min-h-[62px] items-center justify-center gap-3 rounded-tab px-3 text-sm font-medium ring-1 transition ${
                isActive
                  ? "bg-ice-100 text-night-980 ring-transparent"
                  : "bg-night-960 text-ash-400 ring-white/[0.06]"
              }`}
            >
              <Icon aria-hidden="true" size={19} />
              <span>{tab.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                  isActive ? "bg-white text-flame-600" : "bg-white/[0.07] text-ash-300"
                }`}
              >
                {tab.count}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function HomeCockpit({ onSelectView }: { onSelectView: (view: ViewId) => void }) {
  return (
    <div className="relative bg-night-940 p-4 lg:p-6">
      <section
        aria-label="Home cockpit overview"
        className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_360px]"
      >
        <div className="min-w-0">
          <MetricStrip />
          <div className="mt-3 grid gap-3 2xl:grid-cols-[minmax(0,1fr)_410px]">
            <WorkflowPanel onSelectView={onSelectView} />
            <RecentActivityPanel />
          </div>
          <PinnedMaterialPanel />
        </div>

        <WorkspaceDetailsPanel />
      </section>
    </div>
  );
}

function MetricStrip() {
  return (
    <section
      aria-label="Workspace measures"
      className="grid gap-3 md:grid-cols-2 2xl:grid-cols-4"
    >
      {cockpit.metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </section>
  );
}

function MetricCard({ metric }: { metric: WorkspaceMetric }) {
  const Icon = metric.icon;

  return (
    <article className="min-h-[160px] rounded-panel border border-white/[0.06] bg-night-900 p-6 shadow-panel">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={`flex size-10 items-center justify-center rounded-xl ${iconToneClasses[metric.tone]}`}>
            <Icon aria-hidden="true" size={18} />
          </span>
          <h2 className="text-base font-medium text-white">{metric.label}</h2>
        </div>
        <button
          type="button"
          aria-label={`${metric.label} details mock action`}
          className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-ash-300 transition hover:bg-white/[0.1] hover:text-white"
        >
          <ArrowUpRight aria-hidden="true" size={16} />
        </button>
      </div>
      <p className="mt-8 text-4xl font-medium leading-none text-white">{metric.value}</p>
      <p className="mt-5 text-sm leading-6 text-ash-400">{metric.meta}</p>
    </article>
  );
}

function WorkflowPanel({ onSelectView }: { onSelectView: (view: ViewId) => void }) {
  return (
    <section
      aria-labelledby="continue-heading"
      className="relative min-h-[560px] overflow-hidden rounded-panel border border-white/[0.06] bg-night-910 shadow-panel"
    >
      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium text-ash-400">Selected work surface</p>
          <h2 id="continue-heading" className="mt-2 text-2xl font-medium text-white">
            Continue From Home
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {cockpit.objectStatuses.map((status) => (
            <StatusPill key={status.label} status={status} />
          ))}
        </div>
      </div>

      <div className="workspace-field relative mx-6 mb-6 min-h-[435px] overflow-hidden rounded-panel border border-white/[0.06] bg-night-930">
        <CanvasTools />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 900 430"
          preserveAspectRatio="none"
        >
          <path
            className="stroke-grid-muted"
            d="M174 220 C 310 118, 430 120, 548 170 C 650 212, 690 276, 812 245"
          />
          <path
            className="stroke-grid-hot"
            d="M174 220 C 318 250, 404 306, 558 278 C 662 260, 718 195, 812 214"
          />
          <path
            className="stroke-grid-muted"
            d="M174 220 C 292 340, 454 362, 648 318"
          />
        </svg>

        <div className="relative z-10 grid min-h-[435px] gap-4 p-5 md:grid-cols-2 lg:block">
          <WorkflowNode
            node={cockpit.nodes[0]}
            className="lg:absolute lg:left-[11%] lg:top-[45%] lg:-translate-y-1/2"
          />
          <WorkflowNode
            node={cockpit.nodes[1]}
            className="lg:absolute lg:left-[43%] lg:top-[24%]"
            onClick={() => onSelectView("explorer")}
          />
          <WorkflowNode
            node={cockpit.nodes[2]}
            className="lg:absolute lg:left-[43%] lg:top-[61%]"
            onClick={() => onSelectView("projectDesk")}
          />
          <WorkflowNode
            node={cockpit.nodes[3]}
            className="lg:absolute lg:right-[7%] lg:top-[44%]"
            onClick={() => onSelectView("context")}
          />
        </div>

        <div className="absolute bottom-7 right-7 hidden items-center gap-2 lg:flex">
          <button
            type="button"
            className="min-h-11 rounded-control bg-ice-100 px-5 text-sm font-semibold text-night-980 transition hover:bg-white"
            onClick={() => onSelectView("projectDesk")}
          >
            Open work surface
          </button>
          <span className="inline-flex min-h-11 items-center rounded-control bg-black px-4 text-sm font-semibold text-white">
            100%
            <ChevronDown aria-hidden="true" className="ml-2" size={15} />
          </span>
        </div>
      </div>
    </section>
  );
}

function CanvasTools() {
  const tools = [
    { label: "Undo mock canvas state", icon: CornerUpLeft },
    { label: "Pointer mock canvas tool", icon: MousePointer2 },
    { label: "Target mock canvas tool", icon: Crosshair },
    { label: "Share mock canvas context", icon: Share2 },
    { label: "Canvas menu", icon: Menu },
  ];

  return (
    <div className="absolute left-5 top-16 z-20 hidden flex-col gap-3 lg:flex">
      {tools.map((tool, index) => {
        const Icon = tool.icon;

        return (
          <button
            key={tool.label}
            type="button"
            aria-label={tool.label}
            className={`flex size-12 items-center justify-center rounded-control ring-1 transition ${
              index === 1
                ? "bg-ice-100 text-night-980 ring-transparent"
                : "bg-night-880 text-ash-200 ring-white/[0.06] hover:bg-white/[0.08] hover:text-white"
            }`}
          >
            <Icon aria-hidden="true" size={19} />
          </button>
        );
      })}
    </div>
  );
}

function WorkflowNode({
  node,
  className = "",
  onClick,
}: {
  node: WorkNode;
  className?: string;
  onClick?: () => void;
}) {
  const content = (
    <>
      <span
        className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${
          node.variant === "primary"
            ? "bg-flame-500 text-white"
            : node.variant === "blue"
              ? "bg-sky-400 text-night-980"
              : "bg-ice-100 text-night-980"
        }`}
      >
        <Sparkles aria-hidden="true" size={21} />
      </span>
      <span className="min-w-0">
        <span className="block text-base font-medium text-white">{node.label}</span>
        <span className="mt-1 block text-sm text-ash-400">{node.meta}</span>
        <span className="mt-3 inline-flex">
          <StatusPill status={node.status} />
        </span>
      </span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`flex min-h-[116px] w-full max-w-[260px] items-center gap-4 rounded-node border border-white/[0.08] bg-night-880/95 p-4 text-left shadow-float transition hover:-translate-y-0.5 hover:bg-night-840 hover:shadow-control ${className}`}
      >
        {content}
      </button>
    );
  }

  return (
    <article
      className={`flex min-h-[116px] w-full max-w-[260px] items-center gap-4 rounded-node border border-white/[0.08] bg-night-880/95 p-4 shadow-float ${className}`}
    >
      {content}
    </article>
  );
}

function RecentActivityPanel() {
  return (
    <section
      aria-labelledby="recent-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-6 shadow-panel"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-ash-400">What changed</p>
          <h2 id="recent-heading" className="mt-2 text-2xl font-medium text-white">
            Recent Activity
          </h2>
        </div>
        <StatusPill status={{ label: "3 cards", tone: "neutral", icon: CircleDot }} />
      </div>

      <div className="mt-6 space-y-3">
        {cockpit.recentActivity.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
}

function ActivityCard({ activity }: { activity: ActivityItem }) {
  return (
    <article
      data-testid="recent-activity-card"
      className="rounded-card border border-white/[0.06] bg-white/[0.045] p-4"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium leading-6 text-white">{activity.title}</h3>
        <StatusPill status={activity.status} />
      </div>
      <p className="mt-3 text-sm leading-6 text-ash-300">{activity.summary}</p>
      <p className="mt-4 text-xs font-semibold uppercase text-ash-500">{activity.meta}</p>
    </article>
  );
}

function PinnedMaterialPanel() {
  return (
    <section
      aria-labelledby="material-heading"
      className="mt-3 rounded-panel border border-white/[0.06] bg-night-900 p-6 shadow-panel"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-ash-400">Materials attached to the object</p>
          <h2 id="material-heading" className="mt-2 text-2xl font-medium text-white">
            Pinned Source Material
          </h2>
        </div>
        <button
          type="button"
          className="inline-flex min-h-10 items-center gap-2 self-start rounded-control bg-white/[0.06] px-4 text-sm font-semibold text-ash-200 transition hover:bg-white/[0.1] hover:text-white md:self-auto"
        >
          <Menu aria-hidden="true" size={16} />
          Filter
        </button>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-3">
        {cockpit.pinnedDocs.map((doc) => (
          <article
            key={doc.id}
            className="group rounded-card border border-white/[0.06] bg-night-860 p-4 transition hover:border-sky-400/35"
          >
            <div className="flex min-h-[132px] items-center justify-center rounded-card bg-night-930 ring-1 ring-white/[0.05]">
              <FileTile title={doc.title} />
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-base font-medium text-white">{doc.title}</h3>
                <p className="mt-2 text-sm leading-5 text-ash-400">{doc.reason}</p>
              </div>
              <button
                type="button"
                aria-label={`${doc.title} mock detail`}
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-ash-300 transition group-hover:bg-ice-100 group-hover:text-night-980"
              >
                <ArrowUpRight aria-hidden="true" size={15} />
              </button>
            </div>
            <p className="mt-3 break-words font-mono text-xs leading-5 text-ash-500">
              {doc.path}
            </p>
            <div className="mt-4">
              <StatusPill status={doc.status} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FileTile({ title }: { title: string }) {
  return (
    <div className="relative h-24 w-32">
      <div className="absolute inset-0 rounded-2xl bg-ice-100/95 shadow-control" />
      <div className="absolute left-5 top-4 h-16 w-20 rounded-xl border border-night-980/10 bg-white/70">
        <div className="mx-3 mt-3 h-2 rounded-full bg-sky-400/70" />
        <div className="mx-3 mt-2 h-2 rounded-full bg-night-980/20" />
        <div className="mx-3 mt-2 h-2 w-10 rounded-full bg-flame-500/70" />
      </div>
      <span className="absolute bottom-2 left-3 right-3 truncate text-center text-[11px] font-bold text-night-980">
        {title}
      </span>
    </div>
  );
}

function WorkspaceDetailsPanel() {
  return (
    <aside
      aria-labelledby="details-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-6 shadow-panel xl:min-h-[716px]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-ash-400">Current object</p>
          <h2 id="details-heading" className="mt-2 text-2xl font-medium text-white">
            Workspace Details
          </h2>
        </div>
        <div className="flex gap-2">
          <IconButton label="Details filter">
            <Menu aria-hidden="true" size={16} />
          </IconButton>
          <IconButton label="Details open mock">
            <ArrowUpRight aria-hidden="true" size={16} />
          </IconButton>
        </div>
      </div>

      <dl className="mt-8 space-y-6">
        {cockpit.details.map((row) => (
          <div key={row.label} className="grid gap-2">
            <dt className="text-sm font-medium text-ash-500">{row.label}</dt>
            <dd className="break-words text-base font-medium text-white">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 rounded-card border border-white/[0.06] bg-night-940 p-4">
        <div className="flex flex-wrap gap-2">
          {cockpit.boundaryStatuses.map((status) => (
            <StatusPill key={status.label} status={status} />
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-ash-300">
          The cockpit exposes mock status, privacy, and handoff boundaries before
          any raw technical path becomes the first layer.
        </p>
      </div>

      <ContextSummary />
    </aside>
  );
}

function ContextSummary() {
  return (
    <section aria-labelledby="context-summary-heading" className="mt-5">
      <h3 id="context-summary-heading" className="text-base font-medium text-white">
        Context readiness
      </h3>
      <div className="mt-4 space-y-3">
        {cockpit.contextGroups.map((group) => (
          <ContextGroupCard key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}

function ContextGroupCard({ group }: { group: ContextGroup }) {
  return (
    <article className="rounded-card border border-white/[0.06] bg-white/[0.045] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-sm font-semibold text-white">{group.title}</h4>
          <p className="mt-1 text-sm leading-5 text-ash-400">{group.summary}</p>
        </div>
        <StatusPill status={group.status} />
      </div>
      <ul className="mt-4 space-y-3">
        {group.files.map((file) => (
          <ContextFileRow key={file.id} file={file} />
        ))}
      </ul>
    </article>
  );
}

function ContextFileRow({
  file,
}: {
  file: ContextGroup["files"][number];
}) {
  const FileStatusIcon = file.status.icon;

  return (
    <li>
      <div className="flex items-start gap-3">
        <span
          className={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg ${iconToneClasses[file.status.tone]}`}
        >
          <FileStatusIcon aria-hidden="true" size={13} />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-start gap-2">
            <p className="text-sm font-medium text-white">{file.title}</p>
            <StatusPill status={file.status} />
          </div>
          <p className="mt-2 break-words font-mono text-xs leading-5 text-ash-500">
            {file.path}
          </p>
          <p className="mt-1 text-xs leading-5 text-ash-400">{file.reason}</p>
        </div>
      </div>
    </li>
  );
}

function QueuedSurface({
  view,
  onSelectView,
}: {
  view: Exclude<ViewId, "home">;
  onSelectView: (view: ViewId) => void;
}) {
  const surface = cockpit.queuedSurfaces[view];
  const Icon = surface.icon;

  return (
    <div className="bg-night-940 p-4 lg:p-6">
      <section className="grid min-h-[620px] gap-3 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="workspace-field relative overflow-hidden rounded-panel border border-white/[0.06] bg-night-910 p-6 shadow-panel">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-medium text-ash-400">{surface.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-medium text-white">{surface.title}</h2>
            <p className="mt-4 text-sm leading-6 text-ash-300">{surface.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {surface.stats.map((stat) => (
                <StatusPill
                  key={stat}
                  status={{ label: stat, tone: "neutral", icon: CircleDot }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-16 grid gap-4 md:grid-cols-3">
            {cockpit.pinnedDocs.map((doc) => (
              <article
                key={doc.id}
                className="rounded-card border border-white/[0.06] bg-night-880 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-ice-100 text-night-980">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-medium text-white">
                      {doc.title}
                    </h3>
                    <p className="mt-1 text-xs text-ash-500">{doc.path}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-ash-300">{doc.reason}</p>
              </article>
            ))}
          </div>

          <div className="absolute bottom-6 right-6 z-10 flex gap-2">
            <button
              type="button"
              className="min-h-11 rounded-control bg-black px-5 text-sm font-semibold text-white transition hover:bg-night-880"
              onClick={() => onSelectView("home")}
            >
              Back to Home
            </button>
            <button
              type="button"
              className="min-h-11 rounded-control bg-ice-100 px-5 text-sm font-semibold text-night-980 transition hover:bg-white"
              onClick={() => onSelectView("context")}
            >
              Context tray
            </button>
          </div>
        </div>

        <WorkspaceDetailsPanel />
      </section>
    </div>
  );
}

function ComposerTray({
  copyState,
  onCopyPrompt,
}: {
  copyState: CopyState;
  onCopyPrompt: () => void;
}) {
  return (
    <div className="sticky bottom-4 z-30 mx-auto -mt-20 max-w-[650px] px-4 pb-4">
      <section
        id="agent-context-composer"
        aria-labelledby="composer-heading"
        className="rounded-composer border border-white/[0.08] bg-black/92 p-3 shadow-composer backdrop-blur"
      >
        <h2 id="composer-heading" className="sr-only">
          Agent Context Composer
        </h2>
        <p className="px-2 py-2 text-sm font-medium text-ash-300">
          Context ready for Task 8B reset?
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Add mock context item"
            className="flex size-11 shrink-0 items-center justify-center rounded-control bg-white/[0.08] text-white transition hover:bg-white/[0.14]"
          >
            <Plus aria-hidden="true" size={20} />
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-control bg-night-860 px-4 text-sm font-semibold text-white transition hover:bg-night-800"
          >
            <Sparkles aria-hidden="true" className="text-flame-500" size={16} />
            Task 8B reset
            <ChevronDown aria-hidden="true" size={15} />
          </button>
          <button
            type="button"
            className="min-h-11 min-w-0 flex-1 truncate rounded-control bg-night-930 px-4 text-left text-sm text-ash-300 ring-1 ring-white/[0.06] transition hover:bg-night-880 hover:text-white"
            onClick={onCopyPrompt}
            aria-label="Copy suggested prompt"
          >
            <ClipboardCopy aria-hidden="true" className="mr-2 inline" size={16} />
            Copy selected mock prompt boundary
          </button>
          <button
            type="button"
            aria-label="Composer microphone mock control"
            className="hidden size-11 shrink-0 items-center justify-center rounded-control bg-night-930 text-ash-300 ring-1 ring-white/[0.06] transition hover:text-white sm:flex"
          >
            <Mic aria-hidden="true" size={17} />
          </button>
          <button
            type="button"
            onClick={onCopyPrompt}
            aria-label="Mark mock handoff ready"
            className="flex size-11 shrink-0 items-center justify-center rounded-control bg-sky-400 text-night-980 transition hover:bg-ice-100"
          >
            <SendHorizontal aria-hidden="true" size={18} />
          </button>
        </div>
        <p className="min-h-6 px-2 pt-2 text-xs font-medium text-ash-400" aria-live="polite">
          {copyState === "copied" ? "Prompt copied from the mock composer." : null}
          {copyState === "fallback"
            ? "Clipboard permission is unavailable; prompt remains mock-only."
            : null}
        </p>
      </section>
    </div>
  );
}

function StatusPill({
  status,
  className = "",
}: {
  status: StatusItem;
  className?: string;
}) {
  const Icon = status.icon;

  return (
    <span
      className={`inline-flex min-h-8 items-center gap-2 rounded-pill border px-3 py-1 text-xs font-bold ${toneClasses[status.tone]} ${className}`}
    >
      <Icon aria-hidden="true" size={13} />
      {status.label}
    </span>
  );
}

function IconButton({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex size-12 shrink-0 items-center justify-center rounded-control bg-night-930 text-ash-200 ring-1 ring-white/[0.06] transition hover:bg-night-880 hover:text-white"
    >
      {children}
    </button>
  );
}

function CompassGlyph() {
  return (
    <span className="relative flex size-4 items-center justify-center" aria-hidden="true">
      <span className="absolute size-4 rounded-full border border-current" />
      <span className="size-1.5 rounded-full bg-current" />
    </span>
  );
}
