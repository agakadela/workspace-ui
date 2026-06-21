import {
  ArrowRight,
  CircleDot,
  CircleCheck,
  Clock3,
  FileText,
  FolderKanban,
  Home as HomeIcon,
  ListChecks,
  LockKeyhole,
  Pin,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

import type { WorkspaceHomeModel } from "../../shared/data/mockWorkspace";

type HomeProps = {
  model: WorkspaceHomeModel;
};

type StatusTone = "safe" | "review" | "private" | "info" | "mock";

const statusToneClasses: Record<StatusTone, string> = {
  safe: "border-moss-700/25 bg-moss-100 text-moss-700",
  review: "border-clay-600/25 bg-clay-100 text-clay-600",
  private: "border-clay-600/30 bg-clay-100 text-clay-600",
  info: "border-steel-700/25 bg-steel-100 text-steel-700",
  mock: "border-paper-100/20 bg-paper-100/10 text-paper-100",
};

const statusIcons = {
  safe: ShieldCheck,
  review: TriangleAlert,
  private: LockKeyhole,
  info: CircleDot,
  mock: Sparkles,
};

function getStatusTone(label: string): StatusTone {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("private")) {
    return "private";
  }

  if (normalizedLabel.includes("review")) {
    return "review";
  }

  if (
    normalizedLabel.includes("safe") ||
    normalizedLabel.includes("ready") ||
    normalizedLabel.includes("current")
  ) {
    return "safe";
  }

  if (normalizedLabel.includes("mock")) {
    return "mock";
  }

  return "info";
}

function StatusChip({
  label,
  tone = getStatusTone(label),
}: {
  label: string;
  tone?: StatusTone;
}) {
  const StatusIcon = statusIcons[tone];

  return (
    <span
      className={`inline-flex min-h-7 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${statusToneClasses[tone]}`}
    >
      <StatusIcon aria-hidden="true" size={13} />
      {label}
    </span>
  );
}

export function Home({ model }: HomeProps) {
  return (
    <main className="min-h-screen bg-ink-950 text-paper-50">
      <div className="flex min-h-screen">
        <aside
          aria-label="Workspace sections"
          className="hidden w-64 shrink-0 border-r border-paper-100/10 bg-ink-950 px-5 py-6 text-paper-50 lg:block"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-paper-50 text-ink-950">
              <FolderKanban aria-hidden="true" size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">workspace-ui</p>
              <p className="text-xs text-paper-100/70">Mock workspace</p>
            </div>
          </div>

          <nav className="mt-10 space-y-2" aria-label="Primary">
            <a
              className="flex items-center gap-3 rounded-lg bg-paper-50 px-3 py-2 text-sm font-medium text-ink-950"
              href="#home"
            >
              <HomeIcon aria-hidden="true" size={18} />
              Home
            </a>
          </nav>
        </aside>

        <section id="home" className="flex-1 px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <header className="flex flex-col gap-4 rounded-3xl border border-paper-100/10 bg-ink-800 px-5 py-5 shadow-panel md:flex-row md:items-center md:justify-between lg:px-7">
              <div>
                <p className="text-sm font-semibold uppercase text-steel-100">
                  Phase 0 web prototype
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-normal text-paper-50 md:text-5xl">
                  Workspace Home
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-paper-100/75">
                  A human-readable first screen for a fictional local workspace:
                  where to resume, what changed, what matters next, and what
                  context is safe to prepare.
                </p>
              </div>
              <div className="max-w-sm rounded-2xl border border-paper-100/15 bg-paper-100/10 px-4 py-3 text-sm text-paper-100">
                <div className="flex flex-wrap gap-2">
                  <StatusChip label="Web prototype" tone="mock" />
                  <StatusChip label="Fictional data" tone="mock" />
                </div>
                <p className="mt-3 text-paper-100/75">
                  No filesystem, Git, terminal, Codex, auth, cloud, search, or
                  Tauri behavior is active.
                </p>
              </div>
            </header>

            <div className="rounded-3xl border border-paper-100/10 bg-paper-50 p-4 text-ink-950 shadow-panel sm:p-5 lg:p-6">
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
                      href="#context-draft"
                    >
                      {model.continueItem.actionLabel}
                      <ArrowRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <StatusChip label={model.continueItem.statusLabel} />
                    <StatusChip label={model.continueItem.safetyLabel} />
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

                <section
                  id="context-draft"
                  aria-labelledby="context-draft-heading"
                  className="rounded-2xl border border-ink-950/10 bg-ink-950 p-5 text-paper-50"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-medium text-paper-100/70">
                        What context can be prepared
                      </p>
                      <h2
                        id="context-draft-heading"
                        className="mt-1 text-xl font-semibold text-paper-50"
                      >
                        Agent Context Draft
                      </h2>
                    </div>
                    <StatusChip label={model.contextDraft.statusLabel} />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-paper-100/75">
                    {model.contextDraft.summary}
                  </p>
                  <p className="mt-4 break-words rounded-xl border border-paper-100/10 bg-paper-100/10 px-3 py-2 font-mono text-xs text-paper-100">
                    {model.contextDraft.activeFolder}
                  </p>

                  <div className="mt-5 grid gap-3 lg:grid-cols-3">
                    <ContextFileGroup
                      title="Selected"
                      files={model.contextDraft.selectedFiles}
                      tone="safe"
                    />
                    <ContextFileGroup
                      title="Review before agent"
                      files={model.contextDraft.reviewFirstFiles}
                      tone="review"
                    />
                    <ContextFileGroup
                      title="Private: excluded"
                      files={model.contextDraft.privateExcludedFiles}
                      tone="private"
                    />
                  </div>

                  <div className="mt-5 rounded-xl border border-paper-100/10 bg-paper-100/10 p-4">
                    <h3 className="text-sm font-semibold text-paper-50">
                      Suggested prompt
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-paper-100/75">
                      {model.contextDraft.suggestedPrompt}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ContextFileGroup({
  title,
  files,
  tone,
}: {
  title: string;
  files: string[];
  tone: StatusTone;
}) {
  return (
    <section className="rounded-xl border border-paper-100/10 bg-paper-100/10 p-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-paper-50">{title}</h3>
        <StatusChip label={`${files.length}`} tone={tone} />
      </div>
      <ul className="mt-3 space-y-2">
        {files.map((file) => (
          <li
            key={file}
            className="break-words font-mono text-xs leading-5 text-paper-100/70"
          >
            {file}
          </li>
        ))}
      </ul>
    </section>
  );
}
