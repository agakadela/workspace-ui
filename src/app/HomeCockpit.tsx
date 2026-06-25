import {
  ArrowUpRight,
  ChevronDown,
  CircleDot,
  CornerUpLeft,
  Crosshair,
  Menu,
  MousePointer2,
  Share2,
  Sparkles,
} from "lucide-react";

import {
  cockpit,
  type ActivityItem,
  type ViewId,
  type WorkNode,
  type WorkspaceMetric,
} from "./cockpitData";
import { StatusPill } from "./cockpitPrimitives";
import { iconToneClasses } from "./cockpitToneClasses";
import { WorkspaceDetailsPanel } from "./WorkspaceDetailsPanel";

export function HomeCockpit({
  onSelectView,
}: {
  onSelectView: (view: ViewId) => void;
}) {
  return (
    <div className="relative bg-night-940 p-4 lg:p-6">
      <section
        aria-label="Home cockpit overview"
        className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_360px]"
      >
        <div className="min-w-0">
          <WorkspaceSignalPanel />
          <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1fr)_340px]">
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

const signalBars = [32, 46, 58, 74, 68, 82, 61, 88, 70, 76, 55, 64];

function WorkspaceSignalPanel() {
  return (
    <section
      aria-label="Workspace measures"
      className="overflow-hidden rounded-panel border border-white/[0.06] bg-night-900 shadow-panel"
    >
      <div className="flex flex-col gap-4 border-b border-white/[0.06] p-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium text-ash-400">
            Workspace performance overview
          </p>
          <h2 className="mt-2 text-2xl font-medium text-white">
            Home cockpit signals
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {cockpit.objectStatuses.map((status) => (
            <StatusPill key={status.label} status={status} />
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_310px]">
        <div
          role="img"
          aria-label="Mock workspace readiness chart"
          className="relative min-h-[295px] overflow-hidden bg-night-910 p-6"
        >
          <div className="absolute inset-x-6 top-6 h-16 rounded-[1.25rem] bg-black/35 blur-2xl" />
          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm text-ash-400">Current object</p>
              <p className="mt-3 text-5xl font-medium leading-none text-white">
                4 staged
              </p>
              <p className="mt-3 text-sm text-ash-400">
                Selected files are ready for a mock handoff.
              </p>
            </div>
            <div className="rounded-card border border-white/[0.06] bg-black/35 p-4">
              <p className="text-sm font-medium text-ash-200">Boundary check</p>
              <p className="mt-2 text-3xl font-medium text-white">Mock only</p>
              <p className="mt-2 text-xs text-ash-500">No reads or writes.</p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative z-10 mt-10 flex h-28 items-end gap-2 rounded-card border border-white/[0.04] bg-night-930/70 px-5 pb-5 pt-6"
          >
            {signalBars.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className={`flex-1 rounded-pill ${
                  index > 2 && index < 9 ? "bg-sky-400" : "bg-white/[0.08]"
                }`}
                style={{ height: `${height}%` }}
              />
            ))}
            <div className="absolute bottom-4 left-[34%] right-[22%] h-1 rounded-pill bg-ice-100" />
          </div>

          <div className="relative z-10 mt-5 grid grid-cols-4 text-xs font-medium text-ash-500">
            <span>Spec</span>
            <span>Plan</span>
            <span>UI</span>
            <span>Private</span>
          </div>
        </div>

        <div className="grid border-t border-white/[0.06] bg-night-900 lg:border-l lg:border-t-0">
          {cockpit.metrics.map((metric) => (
            <MetricSummaryRow key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricSummaryRow({ metric }: { metric: WorkspaceMetric }) {
  const Icon = metric.icon;

  return (
    <article className="grid min-h-[74px] grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-4 border-b border-white/[0.06] px-5 py-4 last:border-b-0">
      <span
        className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${iconToneClasses[metric.tone]}`}
      >
        <Icon aria-hidden="true" size={18} />
      </span>
      <div className="min-w-0">
        <p className="text-xl font-medium leading-none text-white">{metric.value}</p>
        <h3 className="mt-2 truncate text-sm font-medium text-ash-300">
          {metric.label}
        </h3>
      </div>
    </article>
  );
}

function WorkflowPanel({
  onSelectView,
}: {
  onSelectView: (view: ViewId) => void;
}) {
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
        <h3 className="text-base font-medium leading-6 text-white">
          {activity.title}
        </h3>
        <StatusPill status={activity.status} />
      </div>
      <p className="mt-3 text-sm leading-6 text-ash-300">{activity.summary}</p>
      <p className="mt-4 text-xs font-semibold uppercase text-ash-500">
        {activity.meta}
      </p>
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
          <p className="text-sm font-medium text-ash-400">
            Materials attached to the object
          </p>
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
                <h3 className="truncate text-base font-medium text-white">
                  {doc.title}
                </h3>
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
