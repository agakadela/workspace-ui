import {
  ClipboardCopy,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  PanelRightOpen,
  SendHorizontal,
} from "lucide-react";

import type { CopyState } from "./ComposerTray";
import {
  cockpit,
  type ContextFile,
  type ContextGroup,
  type ViewId,
} from "./cockpitData";
import { StatusPill } from "./cockpitPrimitives";
import { iconToneClasses } from "./cockpitToneClasses";

export function ContextComposerSurface({
  copyState,
  onCopyPrompt,
  onSelectView,
}: {
  copyState: CopyState;
  onCopyPrompt: () => void;
  onSelectView: (view: ViewId) => void;
}) {
  const context = cockpit.composerContexts.context;

  return (
    <div className="bg-night-940 p-4 pb-36 lg:p-6 lg:pb-36">
      <section
        aria-label="Agent context composer work surface"
        className="grid min-h-[760px] gap-3 xl:grid-cols-[minmax(0,1fr)_360px]"
      >
        <div className="workspace-field relative overflow-hidden rounded-panel border border-white/[0.06] bg-night-910 shadow-panel">
          <div className="relative z-10 border-b border-white/[0.06] bg-night-900/75 p-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-medium text-ash-400">
                  {context.eyebrow}
                </p>
                <h2 className="mt-2 text-3xl font-medium text-white">
                  Controlled Handoff Tray
                </h2>
                <p className="mt-3 text-sm leading-6 text-ash-300">
                  {context.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                <StatusPill status={context.status} />
                <StatusPill
                  status={{
                    label: "No live agent execution",
                    tone: "neutral",
                    icon: LockKeyhole,
                  }}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                className="inline-flex min-h-10 items-center gap-2 rounded-control bg-ice-100 px-4 text-sm font-semibold text-night-980 transition hover:bg-white"
                onClick={onCopyPrompt}
              >
                <ClipboardCopy aria-hidden="true" size={16} />
                Copy suggested prompt
              </button>
              <button
                type="button"
                className="inline-flex min-h-10 items-center gap-2 rounded-control bg-white/[0.06] px-4 text-sm font-semibold text-ash-200 ring-1 ring-white/[0.06] transition hover:bg-white/[0.1] hover:text-white"
                onClick={() => onSelectView("home")}
              >
                <LayoutDashboard aria-hidden="true" size={16} />
                Attach to Home
              </button>
              <button
                type="button"
                className="inline-flex min-h-10 items-center gap-2 rounded-control bg-white/[0.06] px-4 text-sm font-semibold text-ash-200 ring-1 ring-white/[0.06] transition hover:bg-white/[0.1] hover:text-white"
                onClick={() => onSelectView("projectDesk")}
              >
                <PanelRightOpen aria-hidden="true" size={16} />
                Attach to Project Desk
              </button>
            </div>
          </div>

          <div className="relative z-10 grid gap-3 p-5 2xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="grid gap-3 lg:grid-cols-2">
              {cockpit.contextGroups.map((group) => (
                <BoundaryPanel key={group.id} group={group} />
              ))}
            </div>

            <PromptPanel
              copyState={copyState}
              onCopyPrompt={onCopyPrompt}
            />
          </div>
        </div>

        <aside className="space-y-3" aria-label="Composer attachment summary">
          <AttachmentPanel />
          <EmptySelectedState />
        </aside>
      </section>
    </div>
  );
}

function BoundaryPanel({ group }: { group: ContextGroup }) {
  const Icon = group.status.icon;

  return (
    <section
      aria-labelledby={`${group.id}-boundary-heading`}
      className="rounded-panel border border-white/[0.06] bg-night-900 p-5 shadow-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${iconToneClasses[group.status.tone]}`}
        >
          <Icon aria-hidden="true" size={18} />
        </span>
        <StatusPill status={group.status} />
      </div>
      <h3
        id={`${group.id}-boundary-heading`}
        className="mt-5 text-xl font-medium text-white"
      >
        {group.surfaceTitle}
      </h3>
      <p className="mt-2 text-sm leading-6 text-ash-300">{group.summary}</p>

      <div className="mt-5 space-y-3">
        {group.files.map((file) => (
          <ContextFileRow key={file.id} file={file} />
        ))}
      </div>
    </section>
  );
}

function ContextFileRow({ file }: { file: ContextFile }) {
  return (
    <article className="rounded-card border border-white/[0.06] bg-white/[0.045] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-base font-medium leading-6 text-white">
            {file.title}
          </h4>
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

function PromptPanel({
  copyState,
  onCopyPrompt,
}: {
  copyState: CopyState;
  onCopyPrompt: () => void;
}) {
  return (
    <section
      aria-labelledby="suggested-prompt-heading"
      className="rounded-panel border border-sky-400/25 bg-ice-100 p-5 text-night-980 shadow-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold uppercase text-night-980/55">
            Secondary prompt surface
          </p>
          <h3 id="suggested-prompt-heading" className="mt-2 text-2xl font-semibold">
            {cockpit.composerPrompt.title}
          </h3>
        </div>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-night-980 text-white">
          <FileText aria-hidden="true" size={18} />
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-night-980/75">
        {cockpit.composerPrompt.text}
      </p>

      <div className="mt-5 flex gap-2">
        <button
          type="button"
          className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-control bg-night-980 px-4 text-sm font-semibold text-white transition hover:bg-night-880"
          onClick={onCopyPrompt}
        >
          <ClipboardCopy aria-hidden="true" size={16} />
          Copy suggested prompt
        </button>
        <button
          type="button"
          onClick={onCopyPrompt}
          aria-label="Mark mock handoff ready"
          className="flex size-11 shrink-0 items-center justify-center rounded-control bg-sky-400 text-night-980 transition hover:bg-white"
        >
          <SendHorizontal aria-hidden="true" size={18} />
        </button>
      </div>

      <p
        className="min-h-6 pt-3 text-xs font-semibold text-night-980/65"
        aria-live="polite"
      >
        {copyState === "copied" ? "Prompt copied from the mock composer." : null}
        {copyState === "fallback"
          ? "Clipboard permission is unavailable; prompt remains mock-only."
          : null}
      </p>
    </section>
  );
}

function AttachmentPanel() {
  return (
    <section
      aria-labelledby="attachment-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-5 shadow-panel"
    >
      <p className="text-sm font-medium text-ash-400">Current attachment</p>
      <h2 id="attachment-heading" className="mt-2 text-2xl font-medium text-white">
        Home And Project Desk
      </h2>
      <p className="mt-3 text-sm leading-6 text-ash-300">
        The same handoff tray attaches to the active workspace object. It is a
        mock boundary composer, not a chat session or terminal.
      </p>
      <dl className="mt-5 grid gap-3">
        {(["home", "projectDesk"] as const).map((view) => {
          const context = cockpit.composerContexts[view];

          return (
            <div
              key={view}
              className="rounded-card border border-white/[0.06] bg-white/[0.045] p-4"
            >
              <dt className="text-xs font-semibold uppercase text-ash-500">
                {context.eyebrow}
              </dt>
              <dd className="mt-2 text-base font-medium text-white">
                {context.activeObject}
              </dd>
              <dd className="mt-2 break-words font-mono text-xs leading-5 text-ash-500">
                {context.activeFolder}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}

function EmptySelectedState() {
  return (
    <section
      aria-labelledby="no-selected-heading"
      className="rounded-panel border border-dashed border-white/[0.12] bg-black/20 p-5"
      role="status"
    >
      <StatusPill
        status={{ label: "Empty state", tone: "neutral", icon: LockKeyhole }}
      />
      <h2 id="no-selected-heading" className="mt-4 text-2xl font-medium text-white">
        No selected files
      </h2>
      <p className="mt-3 text-sm leading-6 text-ash-300">
        If no safe files are selected, the Composer should show this calm empty
        state instead of inventing automatic context.
      </p>
    </section>
  );
}
