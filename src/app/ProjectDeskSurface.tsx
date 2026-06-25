import {
  ArrowUpRight,
  BookOpen,
  ClipboardList,
  FileText,
  FolderKanban,
  LockKeyhole,
  Menu,
  PanelRightOpen,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import {
  cockpit,
  type ActivityItem,
  type ContextFile,
  type MockQuickAction,
  type ViewId,
  type WorkspaceMetric,
} from "./cockpitData";
import { StatusPill } from "./cockpitPrimitives";
import { iconToneClasses } from "./cockpitToneClasses";

export function ProjectDeskSurface({
  onSelectView,
}: {
  onSelectView: (view: ViewId) => void;
}) {
  return (
    <div className="bg-night-940 p-4 pb-28 lg:p-6 lg:pb-28">
      <section
        aria-label="Project Desk cockpit"
        className="grid min-h-[760px] gap-3 xl:grid-cols-[minmax(0,1fr)_370px]"
      >
        <div className="min-w-0 space-y-3">
          <ProjectOverviewPanel onSelectView={onSelectView} />

          <div className="grid gap-3 2xl:grid-cols-[minmax(0,1fr)_350px]">
            <NextTasksPanel />
            <QuickActionsPanel onSelectView={onSelectView} />
          </div>

          <RecentPinnedWorkPanel />
          <EmptyStatesPanel />
        </div>

        <aside className="space-y-3" aria-label="Project Desk source and context">
          <SourceMaterialPanel />
          <ContextCandidatesPanel />
        </aside>
      </section>
    </div>
  );
}

function ProjectOverviewPanel({
  onSelectView,
}: {
  onSelectView: (view: ViewId) => void;
}) {
  const desk = cockpit.projectDesk;

  return (
    <section
      aria-labelledby="project-desk-heading"
      className="workspace-field relative overflow-hidden rounded-panel border border-white/[0.06] bg-night-910 shadow-panel"
    >
      <div className="relative z-10 border-b border-white/[0.06] bg-night-900/75 p-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-ash-400">
              {desk.project.eyebrow}
            </p>
            <h2
              id="project-desk-heading"
              className="mt-2 text-3xl font-medium text-white"
            >
              {desk.project.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-ash-300">
              {desk.project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            <StatusPill status={desk.project.status} />
            <StatusPill
              status={{
                label: "0 live actions",
                tone: "neutral" as const,
                icon: LockKeyhole,
              }}
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex min-h-10 items-center gap-2 rounded-control bg-ice-100 px-4 text-sm font-semibold text-night-980 transition hover:bg-white"
            onClick={() => onSelectView("context")}
          >
            <ClipboardList aria-hidden="true" size={16} />
            Review Context Tray
          </button>
          <button
            type="button"
            className="inline-flex min-h-10 items-center gap-2 rounded-control bg-white/[0.06] px-4 text-sm font-semibold text-ash-200 ring-1 ring-white/[0.06] transition hover:bg-white/[0.1] hover:text-white"
            onClick={() => onSelectView("explorer")}
          >
            <PanelRightOpen aria-hidden="true" size={16} />
            Inspect artifacts
          </button>
          <button
            type="button"
            className="inline-flex min-h-10 items-center gap-2 rounded-control bg-white/[0.06] px-4 text-sm font-semibold text-ash-200 ring-1 ring-white/[0.06] transition hover:bg-white/[0.1] hover:text-white"
          >
            <Menu aria-hidden="true" size={16} />
            Desk controls
          </button>
        </div>
      </div>

      <div className="relative z-10 grid gap-3 p-5 lg:grid-cols-[minmax(0,1fr)_290px]">
        <div className="grid gap-3 md:grid-cols-3">
          {desk.stats.map((metric) => (
            <DeskMetricCard key={metric.id} metric={metric} />
          ))}
        </div>

        <dl className="grid gap-2 rounded-card border border-white/[0.06] bg-black/25 p-4">
          {desk.project.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 border-b border-white/[0.06] pb-2 last:border-b-0 last:pb-0"
            >
              <dt className="text-xs font-semibold uppercase text-ash-500">
                {row.label}
              </dt>
              <dd className="break-words text-sm font-medium text-white">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function DeskMetricCard({ metric }: { metric: WorkspaceMetric }) {
  const Icon = metric.icon;

  return (
    <article className="min-h-[155px] rounded-card border border-white/[0.06] bg-night-880/95 p-4">
      <span
        className={`flex size-11 items-center justify-center rounded-xl ${iconToneClasses[metric.tone]}`}
      >
        <Icon aria-hidden="true" size={18} />
      </span>
      <p className="mt-5 text-2xl font-medium leading-none text-white">
        {metric.value}
      </p>
      <h3 className="mt-2 text-sm font-semibold text-ash-200">{metric.label}</h3>
      <p className="mt-2 text-xs leading-5 text-ash-400">{metric.meta}</p>
    </article>
  );
}

function SourceMaterialPanel() {
  return (
    <section
      aria-labelledby="source-material-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-5 shadow-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ash-400">Project source stack</p>
          <h2
            id="source-material-heading"
            className="mt-2 text-2xl font-medium text-white"
          >
            Source Material
          </h2>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ice-100 text-night-980">
          <BookOpen aria-hidden="true" size={18} />
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {cockpit.projectDesk.sourceDocs.map((doc) => (
          <ProjectFileRow key={doc.id} file={doc} />
        ))}
      </div>
    </section>
  );
}

function NextTasksPanel() {
  return (
    <section
      aria-labelledby="next-tasks-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-5 shadow-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ash-400">Near-term lane</p>
          <h2
            id="next-tasks-heading"
            className="mt-2 text-2xl font-medium text-white"
          >
            Next Tasks
          </h2>
        </div>
        <StatusPill
          status={{ label: "3 planned", tone: "neutral", icon: ClipboardList }}
        />
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3 2xl:grid-cols-1">
        {cockpit.projectDesk.nextTasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

function TaskRow({ task }: { task: ActivityItem }) {
  return (
    <article className="rounded-card border border-white/[0.06] bg-white/[0.045] p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium leading-6 text-white">{task.title}</h3>
        <StatusPill status={task.status} />
      </div>
      <p className="mt-3 text-sm leading-6 text-ash-300">{task.summary}</p>
      <p className="mt-4 text-xs font-semibold uppercase text-ash-500">
        {task.meta}
      </p>
    </article>
  );
}

function QuickActionsPanel({
  onSelectView,
}: {
  onSelectView: (view: ViewId) => void;
}) {
  return (
    <section
      aria-labelledby="quick-actions-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-5 shadow-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ash-400">Controls</p>
          <h2
            id="quick-actions-heading"
            className="mt-2 text-2xl font-medium text-white"
          >
            Mock Quick Actions
          </h2>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-ash-200">
          <FolderKanban aria-hidden="true" size={18} />
        </span>
      </div>

      <div className="mt-5 space-y-2">
        {cockpit.projectDesk.quickActions.map((action) => (
          <QuickActionButton key={action.id} action={action} />
        ))}
      </div>

      <button
        type="button"
        className="mt-4 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-control bg-ice-100 px-4 text-sm font-semibold text-night-980 transition hover:bg-white"
        onClick={() => onSelectView("context")}
      >
        <ClipboardList aria-hidden="true" size={16} />
        Review context tray
      </button>
    </section>
  );
}

function QuickActionButton({ action }: { action: MockQuickAction }) {
  const Icon = action.icon;

  return (
    <button
      type="button"
      className="group w-full rounded-card border border-white/[0.06] bg-white/[0.045] p-3 text-left transition hover:border-white/15 hover:bg-white/[0.07]"
    >
      <span className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-night-930 text-ash-200 transition group-hover:bg-ice-100 group-hover:text-night-980">
          <Icon aria-hidden="true" size={17} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-white">
            {action.label}
          </span>
          <span className="mt-1 block text-xs leading-5 text-ash-400">
            {action.detail}
          </span>
          <span className="mt-3 inline-flex">
            <StatusPill status={action.status} />
          </span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-1 text-ash-500 transition group-hover:text-white"
          size={15}
        />
      </span>
    </button>
  );
}

function RecentPinnedWorkPanel() {
  return (
    <section
      aria-labelledby="recent-pinned-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-5 shadow-panel"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium text-ash-400">Project material lane</p>
          <h2
            id="recent-pinned-heading"
            className="mt-2 text-2xl font-medium text-white"
          >
            Recent And Pinned Work
          </h2>
        </div>
        <StatusPill status={{ label: "3 items", tone: "neutral", icon: FileText }} />
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {cockpit.projectDesk.recentPinnedWork.map((file) => (
          <ProjectMaterialCard key={file.id} file={file} />
        ))}
      </div>
    </section>
  );
}

function ProjectMaterialCard({ file }: { file: ContextFile }) {
  return (
    <article className="group rounded-card border border-white/[0.06] bg-night-860 p-4 transition hover:border-sky-400/35">
      <div className="flex min-h-[112px] items-center justify-center rounded-card bg-night-930 ring-1 ring-white/[0.05]">
        <div className="w-32 rounded-2xl bg-ice-100 p-3 text-night-980 shadow-control">
          <div className="flex items-center gap-2">
            <FileText aria-hidden="true" size={15} />
            <span className="truncate text-xs font-bold">{file.title}</span>
          </div>
          <div className="mt-4 space-y-2">
            <span className="block h-2 rounded-pill bg-sky-400/70" />
            <span className="block h-2 rounded-pill bg-night-980/20" />
            <span className="block h-2 w-16 rounded-pill bg-flame-500/65" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-base font-medium text-white">{file.title}</h3>
          <p className="mt-2 text-sm leading-5 text-ash-400">{file.reason}</p>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-ash-300 transition group-hover:bg-ice-100 group-hover:text-night-980">
          <ArrowUpRight aria-hidden="true" size={15} />
        </span>
      </div>
      <p className="mt-3 break-words font-mono text-xs leading-5 text-ash-500">
        {file.path}
      </p>
      <div className="mt-4">
        <StatusPill status={file.status} />
      </div>
    </article>
  );
}

function ContextCandidatesPanel() {
  return (
    <section
      aria-labelledby="context-candidates-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-5 shadow-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ash-400">Handoff boundary</p>
          <h2
            id="context-candidates-heading"
            className="mt-2 text-2xl font-medium text-white"
          >
            Context Candidates
          </h2>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-mint-300 text-night-980">
          <ShieldCheck aria-hidden="true" size={18} />
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {cockpit.projectDesk.contextCandidates.map((file) => (
          <ProjectFileRow key={file.id} file={file} />
        ))}
      </div>
    </section>
  );
}

function ProjectFileRow({ file }: { file: ContextFile }) {
  return (
    <article className="rounded-card border border-white/[0.06] bg-white/[0.045] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-base font-medium leading-6 text-white">{file.title}</h3>
          <p className="mt-2 break-words font-mono text-xs leading-5 text-ash-500">
            {file.path}
          </p>
        </div>
        <StatusPill status={file.status} />
      </div>
      <p className="mt-3 text-sm leading-6 text-ash-300">{file.reason}</p>
    </article>
  );
}

function EmptyStatesPanel() {
  return (
    <section
      aria-labelledby="project-empty-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-5 shadow-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ash-400">Calm fallback states</p>
          <h2
            id="project-empty-heading"
            className="mt-2 text-2xl font-medium text-white"
          >
            Empty States
          </h2>
        </div>
        <StatusPill
          status={{ label: "Visible", tone: "neutral", icon: TriangleAlert }}
        />
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {cockpit.projectDesk.emptyStates.map((state) => (
          <article
            key={state.id}
            role="status"
            className="rounded-card border border-dashed border-white/[0.12] bg-black/20 p-4"
          >
            <StatusPill status={state.status} />
            <h3 className="mt-4 text-base font-medium text-white">{state.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ash-300">{state.summary}</p>
            <p className="mt-4 text-xs font-semibold uppercase text-ash-500">
              {state.meta}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
