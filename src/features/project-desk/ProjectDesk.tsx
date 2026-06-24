import {
  ArrowLeft,
  CircleCheck,
  Clock3,
  Compass,
  FileText,
  FolderKanban,
  ListChecks,
  Pin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { AgentContextComposer } from "../agent-context/AgentContextComposer";
import type {
  WorkspaceAgentContextModel,
  WorkspaceProjectDeskModel,
} from "../../shared/data/mockWorkspace";
import { StatusChip } from "../../shared/ui/StatusChip";
import { SurfaceTabStrip } from "../../shared/ui/WorkspacePrimitives";

type ProjectDeskProps = {
  model: WorkspaceProjectDeskModel;
  agentContext: WorkspaceAgentContextModel;
  onOpenHome: () => void;
  onOpenExplorer: () => void;
};

export function ProjectDesk({
  model,
  agentContext,
  onOpenHome,
  onOpenExplorer,
}: ProjectDeskProps) {
  return (
    <section className="flex flex-col gap-4">
      <header className="rounded-shell border border-paper-100/10 bg-canvas-800 p-5 shadow-panel lg:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-steel-100">
              {model.project.eyebrow}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-paper-50 md:text-5xl">
              {model.project.name}
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-paper-100/75">
              {model.project.summary}
            </p>
            <p className="mt-4 break-words rounded-xl border border-paper-100/10 bg-paper-100/10 px-3 py-2 font-mono text-xs text-paper-100">
              {model.project.activeFolder}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
              <button
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-paper-100/15 bg-paper-100/10 px-4 py-2 text-sm font-semibold text-paper-50"
                type="button"
                onClick={onOpenHome}
              >
                <ArrowLeft aria-hidden="true" size={17} />
                Back to Home
              </button>
              <button
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-paper-100/15 bg-paper-100/10 px-4 py-2 text-sm font-semibold text-paper-50"
                type="button"
                onClick={onOpenExplorer}
              >
                <Compass aria-hidden="true" size={17} />
                Back to Explorer
              </button>
              <StatusChip label={model.project.statusLabel} />
              <StatusChip label={model.project.safetyLabel} />
          </div>
        </div>
        <SurfaceTabStrip
          label="Project desk surface sections"
          className="mt-5"
          items={[
            { label: "Desk", count: model.nextTasks.length, isActive: true },
            { label: "Docs", count: model.importantDocs.length },
            { label: "Context", count: model.contextCandidates.length },
          ]}
        />
      </header>

      <section className="rounded-shell border border-paper-100/10 bg-paper-50 p-4 text-ink-950 shadow-panel sm:p-5 lg:p-6">
          <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
            <section
              aria-labelledby="project-status-heading"
              className="rounded-2xl border border-ink-950/10 bg-ink-800 p-5 text-paper-50"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-paper-100/65">
                    Current posture
                  </p>
                  <h2
                    id="project-status-heading"
                    className="mt-1 text-xl font-semibold text-paper-50"
                  >
                    Project Status
                  </h2>
                </div>
                <StatusChip label={model.project.focusLabel} tone="mock" />
              </div>

              <dl className="mt-5 grid gap-3">
                {model.statusItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-paper-100/10 bg-paper-100/10 p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <dt className="text-sm font-medium text-paper-100/65">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-base font-semibold text-paper-50">
                          {item.value}
                        </dd>
                      </div>
                      <StatusChip label={item.statusLabel} />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-paper-100/75">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </dl>
            </section>

            <section
              aria-labelledby="important-docs-heading"
              className="rounded-2xl border border-ink-950/10 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-steel-100 text-steel-700">
                  <FileText aria-hidden="true" size={20} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink-600">
                    Source material
                  </p>
                  <h2
                    id="important-docs-heading"
                    className="text-xl font-semibold text-ink-950"
                  >
                    Important Docs
                  </h2>
                </div>
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-3">
                {model.importantDocs.map((doc) => (
                  <article
                    key={doc.id}
                    className="rounded-xl border border-ink-950/10 bg-paper-50 p-4"
                  >
                    <h3 className="font-semibold text-ink-950">{doc.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-600">
                      {doc.role}
                    </p>
                    <p className="mt-3 break-words font-mono text-xs leading-5 text-ink-600">
                      {doc.path}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <StatusChip label={doc.statusLabel} />
                      <StatusChip label={doc.safetyLabel} />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_0.85fr]">
            <section
              aria-labelledby="next-tasks-heading"
              className="rounded-2xl border border-ink-950/10 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-moss-100 text-moss-700">
                  <ListChecks aria-hidden="true" size={20} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink-600">
                    What needs attention
                  </p>
                  <h2
                    id="next-tasks-heading"
                    className="text-xl font-semibold text-ink-950"
                  >
                    Next Tasks
                  </h2>
                </div>
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-2">
                {model.nextTasks.map((task) => (
                  <article
                    key={task.id}
                    className="rounded-xl border border-ink-950/10 bg-paper-50 p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase text-ink-600">
                          {task.ownerLabel}
                        </p>
                        <h3 className="mt-1 font-semibold text-ink-950">
                          {task.title}
                        </h3>
                      </div>
                      <StatusChip label={task.statusLabel} />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-ink-600">
                      {task.summary}
                    </p>
                    <div className="mt-4">
                      <StatusChip label={task.safetyLabel} />
                    </div>
                  </article>
                ))}
                <EmptyState
                  icon="task"
                  title={model.emptyStates.noTasks.title}
                  summary={model.emptyStates.noTasks.summary}
                />
              </div>
            </section>

            <section
              aria-labelledby="quick-actions-heading"
              className="rounded-2xl border border-ink-950/10 bg-ink-950 p-5 text-paper-50"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-paper-50 text-ink-950">
                  <Sparkles aria-hidden="true" size={20} />
                </span>
                <div>
                  <p className="text-sm font-medium text-paper-100/65">
                    Visible controls, mock behavior
                  </p>
                  <h2
                    id="quick-actions-heading"
                    className="text-xl font-semibold text-paper-50"
                  >
                    Quick Actions
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {model.quickActions.map((action) => (
                  <button
                    key={action.id}
                    className="w-full rounded-xl border border-paper-100/10 bg-paper-100/10 p-4 text-left text-paper-50 transition hover:bg-paper-100/15"
                    type="button"
                    aria-label={`${action.label} mock only`}
                  >
                    <span className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <span>
                        <span className="block text-base font-semibold">
                          {action.label}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-paper-100/75">
                          {action.summary}
                        </span>
                      </span>
                      <span className="flex shrink-0 flex-wrap gap-2">
                        <StatusChip label="Mock only" tone="mock" />
                        <StatusChip label={action.statusLabel} tone="mock" />
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
            <section
              aria-labelledby="recent-work-heading"
              className="rounded-2xl border border-ink-950/10 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-steel-100 text-steel-700">
                  <Clock3 aria-hidden="true" size={20} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink-600">
                    What changed around this project
                  </p>
                  <h2
                    id="recent-work-heading"
                    className="text-xl font-semibold text-ink-950"
                  >
                    Recent and Pinned Work
                  </h2>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {model.recentWork.map((work) => (
                  <article
                    key={work.id}
                    className="rounded-xl border border-ink-950/10 bg-paper-50 p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-semibold text-ink-950">
                          {work.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-ink-600">
                          {work.summary}
                        </p>
                        <p className="mt-3 text-xs font-medium text-ink-600">
                          {work.meta}
                        </p>
                      </div>
                      <StatusChip label={work.statusLabel} />
                    </div>
                  </article>
                ))}
                <EmptyState
                  icon="pin"
                  title={model.emptyStates.noPinnedDocs.title}
                  summary={model.emptyStates.noPinnedDocs.summary}
                />
              </div>
            </section>

            <section
              aria-labelledby="context-candidates-heading"
              className="rounded-2xl border border-ink-950/10 bg-paper-100 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-moss-100 text-moss-700">
                  <ShieldCheck aria-hidden="true" size={20} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink-600">
                    Candidate files before handoff
                  </p>
                  <h2
                    id="context-candidates-heading"
                    className="text-xl font-semibold text-ink-950"
                  >
                    Context Candidates
                  </h2>
                </div>
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-3">
                {model.contextCandidates.map((candidate) => (
                  <article
                    key={candidate.id}
                    className="rounded-xl border border-ink-950/10 bg-white p-4"
                  >
                    <h3 className="font-semibold text-ink-950">
                      {candidate.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-600">
                      {candidate.reason}
                    </p>
                    <p className="mt-3 break-words font-mono text-xs leading-5 text-ink-600">
                      {candidate.path}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <StatusChip label={candidate.statusLabel} />
                      <StatusChip label={candidate.safetyLabel} />
                    </div>
                  </article>
                ))}
                <EmptyState
                  icon="context"
                  title={model.emptyStates.noSafeContext.title}
                  summary={model.emptyStates.noSafeContext.summary}
                />
              </div>
            </section>
          </div>

          <div className="mt-4">
            <AgentContextComposer model={agentContext} layout="wide" />
          </div>
        </section>
    </section>
  );
}

function EmptyState({
  icon,
  title,
  summary,
}: {
  icon: "task" | "pin" | "context";
  title: string;
  summary: string;
}) {
  const EmptyIcon =
    icon === "task" ? FolderKanban : icon === "pin" ? Pin : CircleCheck;

  return (
    <article className="rounded-xl border border-dashed border-ink-950/15 bg-paper-100 p-4">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-steel-700">
          <EmptyIcon aria-hidden="true" size={18} />
        </span>
        <div>
          <h3 className="font-semibold text-ink-950">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-ink-600">{summary}</p>
        </div>
      </div>
    </article>
  );
}
