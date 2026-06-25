import {
  ClipboardCopy,
  CornerDownRight,
  FileText,
  LockKeyhole,
  SendHorizontal,
} from "lucide-react";

import { cockpit, type ContextGroup, type ViewId } from "./cockpitData";
import { StatusPill } from "./cockpitPrimitives";
import { iconToneClasses } from "./cockpitToneClasses";

export type CopyState = "idle" | "copied" | "fallback";

export function ComposerTray({
  activeView,
  copyState,
  onCopyPrompt,
}: {
  activeView: ViewId;
  copyState: CopyState;
  onCopyPrompt: () => void;
}) {
  const context = cockpit.composerContexts[activeView];

  return (
    <div className="sticky bottom-4 z-30 mx-auto -mt-24 max-w-[1180px] px-4 pb-4">
      <section
        id="agent-context-composer"
        aria-labelledby="composer-heading"
        className="rounded-composer border border-white/[0.08] bg-black/90 p-3 shadow-composer backdrop-blur"
      >
        <div className="grid gap-3 xl:grid-cols-[230px_minmax(0,1fr)_260px]">
          <div className="rounded-panel border border-white/[0.06] bg-night-930 p-4">
            <h2 id="composer-heading" className="text-lg font-medium text-white">
              Agent Context Composer
            </h2>
            <p className="mt-1 text-sm font-medium text-sky-400">
              {context.eyebrow}
            </p>
            <p className="mt-4 text-xs font-semibold uppercase text-ash-500">
              Active folder
            </p>
            <p className="mt-2 break-words font-mono text-xs leading-5 text-ash-300">
              {context.activeFolder}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
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

          <div className="grid gap-2 sm:grid-cols-2">
            {cockpit.contextGroups.map((group) => (
              <BoundaryMiniCard key={group.id} group={group} />
            ))}
          </div>

          <div className="rounded-panel border border-sky-400/20 bg-ice-100 p-4 text-night-980">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase text-night-980/60">
                  {cockpit.composerPrompt.title}
                </p>
                <h3 className="mt-2 text-base font-semibold">
                  {context.activeObject}
                </h3>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-night-980 text-white">
                <FileText aria-hidden="true" size={17} />
              </span>
            </div>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-night-980/75">
              {cockpit.composerPrompt.text}
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-control bg-night-980 px-4 text-sm font-semibold text-white transition hover:bg-night-880"
                onClick={onCopyPrompt}
                aria-label="Copy suggested prompt"
              >
                <ClipboardCopy aria-hidden="true" size={16} />
                Copy Prompt
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
              {copyState === "copied"
                ? "Prompt copied from the mock composer."
                : null}
              {copyState === "fallback"
                ? "Clipboard permission is unavailable; prompt remains mock-only."
                : null}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function BoundaryMiniCard({ group }: { group: ContextGroup }) {
  const Icon = group.status.icon;
  const firstFile = group.files[0];

  return (
    <article className="min-h-[178px] rounded-panel border border-white/[0.06] bg-night-900 p-4">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${iconToneClasses[group.status.tone]}`}
        >
          <Icon aria-hidden="true" size={17} />
        </span>
        <StatusPill status={group.status} />
      </div>
      <h3 className="mt-4 text-base font-medium text-white">{group.title}</h3>
      <p className="mt-2 text-xs leading-5 text-ash-400">{group.summary}</p>
      {firstFile ? (
        <p className="mt-4 flex items-start gap-2 break-words font-mono text-xs leading-5 text-ash-500">
          <CornerDownRight
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-ash-400"
            size={13}
          />
          {firstFile.path}
        </p>
      ) : (
        <p className="mt-4 text-xs font-semibold text-ash-500">
          No selected files.
        </p>
      )}
    </article>
  );
}
