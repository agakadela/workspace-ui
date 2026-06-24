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
              {model.continueItem.area}
            </p>
          </div>
          <div className="max-w-sm rounded-panel border border-paper-100/10 bg-paper-100/5 px-4 py-3 text-sm text-paper-100">
            <div className="flex flex-wrap gap-2">
              <StatusChip label="Web prototype" tone="mock" />
              <StatusChip label="Fictional data" tone="mock" />
            </div>
            <dl className="mt-3 grid gap-2 text-xs leading-5 text-paper-100/70">
              {model.shellStatus.map((item) => (
                <div key={item.label} className="grid gap-1 sm:grid-cols-[88px_1fr]">
                  <dt className="font-semibold text-paper-50">{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
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

      <div className="rounded-shell border border-paper-100/10 bg-canvas-950/55 p-4 text-paper-50 shadow-panel sm:p-5 lg:p-6">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_260px]">
                <section
                  aria-labelledby="continue-heading"
                  className="rounded-panel border border-paper-100/10 bg-canvas-800 p-5"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-medium text-paper-100/65">
                        Active workspace object
                      </p>
                      <h2
                        id="continue-heading"
                        className="mt-2 text-2xl font-semibold tracking-normal text-paper-50"
                      >
                        Continue
                      </h2>
                      <h3 className="mt-4 max-w-2xl text-xl font-semibold text-paper-50">
                        {model.continueItem.title}
                      </h3>
                      <p className="mt-3 max-w-2xl rounded-panel border border-paper-100/10 bg-paper-50 p-4 text-sm leading-6 text-ink-600">
                        {model.continueItem.summary}
                      </p>
                      <p className="mt-4 text-sm font-medium text-paper-100/65">
                        {model.continueItem.area}
                      </p>
                    </div>
                    <a
                      className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-control bg-paper-50 px-4 py-2 text-sm font-semibold text-ink-950"
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
                        className="inline-flex min-h-9 items-center justify-center gap-2 rounded-control border border-steel-700/25 bg-steel-100 px-3 py-1.5 text-sm font-semibold text-steel-700"
                        type="button"
                        onClick={onOpenExplorer}
                      >
                        Open Visual Explorer
                        <Compass aria-hidden="true" size={15} />
                      </button>
                    ) : null}
                    {onOpenProjectDesk ? (
                      <button
                        className="inline-flex min-h-9 items-center justify-center gap-2 rounded-control border border-moss-700/25 bg-moss-100 px-3 py-1.5 text-sm font-semibold text-moss-700"
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
                  className="self-start rounded-panel border border-paper-100/10 bg-paper-100/5 p-4"
                >
                  <h2
                    id="status-heading"
                    className="text-sm font-semibold text-paper-50"
                  >
                    Workspace Guardrails
                  </h2>
                  <ul className="mt-3 space-y-2 text-xs leading-5 text-paper-100/70">
                    {model.shellStatus.map((item) => (
                      <li key={item.label} className="flex gap-3">
                        <CircleCheck
                          className="mt-0.5 shrink-0 text-moss-100"
                          aria-hidden="true"
                          size={14}
                        />
                        <span>
                          <span className="font-medium text-paper-50">
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
                  className="rounded-panel border border-paper-100/10 bg-ink-800 p-5 text-paper-50"
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
                  className="rounded-panel border border-paper-100/10 bg-canvas-800 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-steel-100 text-steel-700">
                      <ListChecks aria-hidden="true" size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-paper-100/65">
                        What matters now
                      </p>
                      <h2
                        id="next-up-heading"
                        className="text-xl font-semibold text-paper-50"
                      >
                        Next Up
                      </h2>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {model.nextTasks.map((task) => (
                      <li
                        key={task.id}
                        className="rounded-xl border border-paper-100/10 bg-paper-50 p-4 text-ink-950"
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
                  className="rounded-panel border border-paper-100/10 bg-canvas-800 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-moss-100 text-moss-700">
                      <Pin aria-hidden="true" size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-paper-100/65">
                        Which docs matter
                      </p>
                      <h2
                        id="pinned-docs-heading"
                        className="text-xl font-semibold text-paper-50"
                      >
                        Pinned Docs
                      </h2>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {model.pinnedDocs.map((doc) => (
                      <article
                        key={doc.id}
                        className="rounded-xl border border-paper-100/10 bg-paper-50 p-4 text-ink-950"
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
