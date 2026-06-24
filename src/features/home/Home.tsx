import {
  ArrowRight,
  CircleCheck,
  Clock3,
  Compass,
  FileText,
  ListChecks,
  PanelRightOpen,
  Pin,
} from "lucide-react";

import { AgentContextComposer } from "../agent-context/AgentContextComposer";
import type {
  WorkspaceAgentContextModel,
  WorkspaceHomeModel,
} from "../../shared/data/mockWorkspace";
import { StatusChip } from "../../shared/ui/StatusChip";
import { SurfaceTabStrip } from "../../shared/ui/WorkspacePrimitives";

type HomeProps = {
  model: WorkspaceHomeModel;
  agentContext: WorkspaceAgentContextModel;
  onOpenExplorer?: () => void;
  onOpenProjectDesk?: () => void;
};

export function Home({
  model,
  agentContext,
  onOpenExplorer,
  onOpenProjectDesk,
}: HomeProps) {
  return (
    <section id="home" className="flex flex-col gap-5">
      <header className="rounded-shell border border-paper-100/10 bg-canvas-800 px-5 py-5 shadow-panel lg:px-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-steel-100">
              Phase 0 web prototype
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-paper-50 md:text-5xl">
              Workspace Home
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-paper-100/75">
              A human-readable first screen for a fictional local workspace:
              where to resume, what changed, what matters next, and what context
              is safe to prepare.
            </p>
          </div>
          <div className="max-w-sm rounded-panel border border-paper-100/15 bg-paper-100/10 px-4 py-3 text-sm text-paper-100">
            <div className="flex flex-wrap gap-2">
              <StatusChip label="Web prototype" tone="mock" />
              <StatusChip label="Fictional data" tone="mock" />
            </div>
            <p className="mt-3 text-paper-100/75">
              No filesystem, Git, terminal, Codex, auth, cloud, search, or Tauri
              behavior is active.
            </p>
          </div>
        </div>
        <SurfaceTabStrip
          label="Home surface sections"
          className="mt-5"
          items={[
            { label: "Cockpit", count: "Home", isActive: true },
            { label: "Context", count: agentContext.selectedFiles.length },
            { label: "Pinned", count: model.pinnedDocs.length },
          ]}
        />
      </header>

      <div className="rounded-shell border border-paper-100/10 bg-paper-50 p-4 text-ink-950 shadow-panel sm:p-5 lg:p-6">
        <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
                <section
                  aria-labelledby="continue-heading"
                  className="rounded-2xl border border-ink-950/10 bg-white p-5"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-medium text-ink-600">
                        Continue with the active workspace
                      </p>
                      <h2
                        id="continue-heading"
                        className="mt-2 text-2xl font-semibold tracking-normal text-ink-950"
                      >
                        Continue
                      </h2>
                      <h3 className="mt-4 max-w-2xl text-xl font-semibold text-ink-950">
                        {model.continueItem.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-ink-600">
                        {model.continueItem.summary}
                      </p>
                      <p className="mt-4 text-sm font-medium text-ink-600">
                        {model.continueItem.area}
                      </p>
                    </div>
                    <a
                      className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-ink-950 px-4 py-2 text-sm font-semibold text-paper-50"
                      href="#agent-context-composer"
                    >
                      {model.continueItem.actionLabel}
                      <ArrowRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <StatusChip label={model.continueItem.statusLabel} />
                    <StatusChip label={model.continueItem.safetyLabel} />
                    {onOpenExplorer ? (
                      <button
                        className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-ink-950/10 bg-steel-100 px-3 py-1.5 text-sm font-semibold text-steel-700"
                        type="button"
                        onClick={onOpenExplorer}
                      >
                        Open Visual Explorer
                        <Compass aria-hidden="true" size={15} />
                      </button>
                    ) : null}
                    {onOpenProjectDesk ? (
                      <button
                        className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-ink-950/10 bg-moss-100 px-3 py-1.5 text-sm font-semibold text-moss-700"
                        type="button"
                        onClick={onOpenProjectDesk}
                      >
                        Open Project Desk
                        <PanelRightOpen aria-hidden="true" size={15} />
                      </button>
                    ) : null}
                  </div>
                </section>

                <section
                  aria-labelledby="status-heading"
                  className="rounded-2xl border border-ink-950/10 bg-paper-100 p-5"
                >
                  <h2
                    id="status-heading"
                    className="text-base font-semibold text-ink-950"
                  >
                    Workspace Guardrails
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm text-ink-600">
                    {model.shellStatus.map((item) => (
                      <li key={item.label} className="flex gap-3">
                        <CircleCheck
                          className="mt-0.5 shrink-0 text-moss-700"
                          aria-hidden="true"
                          size={18}
                        />
                        <span>
                          <span className="font-medium text-ink-950">
                            {item.label}:
                          </span>{" "}
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="mt-4 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
                <section
                  aria-labelledby="recent-activity-heading"
                  className="rounded-2xl border border-ink-950/10 bg-ink-800 p-5 text-paper-50"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-paper-100/70">
                        What changed
                      </p>
                      <h2
                        id="recent-activity-heading"
                        className="mt-1 text-xl font-semibold text-paper-50"
                      >
                        Recent Activity
                      </h2>
                    </div>
                    <Clock3
                      className="text-steel-100"
                      aria-hidden="true"
                      size={24}
                    />
                  </div>
                  <div className="mt-5 space-y-3">
                    {model.recentActivity.map((activity) => (
                      <article
                        key={activity.id}
                        data-testid="recent-activity-card"
                        className="rounded-xl border border-paper-100/10 bg-paper-100/10 p-4"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <h3 className="text-base font-semibold text-paper-50">
                            {activity.title}
                          </h3>
                          <StatusChip label={activity.statusLabel} />
                        </div>
                        <p className="mt-2 text-sm leading-6 text-paper-100/75">
                          {activity.summary}
                        </p>
                        <p className="mt-3 text-xs font-medium text-paper-100/60">
                          {activity.meta}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>

                <section
                  aria-labelledby="next-up-heading"
                  className="rounded-2xl border border-ink-950/10 bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-steel-100 text-steel-700">
                      <ListChecks aria-hidden="true" size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink-600">
                        What matters now
                      </p>
                      <h2
                        id="next-up-heading"
                        className="text-xl font-semibold text-ink-950"
                      >
                        Next Up
                      </h2>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {model.nextTasks.map((task) => (
                      <li
                        key={task.id}
                        className="rounded-xl border border-ink-950/10 bg-paper-50 p-4"
                      >
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className="font-semibold text-ink-950">
                              {task.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-ink-600">
                              {task.summary}
                            </p>
                          </div>
                          <div className="flex shrink-0 flex-wrap gap-2">
                            <StatusChip label={task.statusLabel} />
                            <StatusChip label={task.safetyLabel} />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
                <section
                  aria-labelledby="pinned-docs-heading"
                  className="rounded-2xl border border-ink-950/10 bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-moss-100 text-moss-700">
                      <Pin aria-hidden="true" size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink-600">
                        Which docs matter
                      </p>
                      <h2
                        id="pinned-docs-heading"
                        className="text-xl font-semibold text-ink-950"
                      >
                        Pinned Docs
                      </h2>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {model.pinnedDocs.map((doc) => (
                      <article
                        key={doc.id}
                        className="rounded-xl border border-ink-950/10 bg-paper-50 p-4"
                      >
                        <div className="flex items-start gap-3">
                          <FileText
                            className="mt-0.5 shrink-0 text-steel-700"
                            aria-hidden="true"
                            size={20}
                          />
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-ink-950">
                              {doc.title}
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-ink-600">
                              {doc.role}
                            </p>
                            <p className="mt-2 break-words font-mono text-xs text-ink-600">
                              {doc.path}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <StatusChip label={doc.statusLabel} />
                              <StatusChip label={doc.safetyLabel} />
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                <AgentContextComposer model={agentContext} />
              </div>
      </div>
    </section>
  );
}
