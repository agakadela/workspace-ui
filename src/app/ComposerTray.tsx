import {
  ChevronDown,
  ClipboardCopy,
  Mic,
  Plus,
  SendHorizontal,
  Sparkles,
} from "lucide-react";

export type CopyState = "idle" | "copied" | "fallback";

export function ComposerTray({
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
          Context ready for Task 10 Project Desk?
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
            Task 10 Desk
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
        <p
          className="min-h-6 px-2 pt-2 text-xs font-medium text-ash-400"
          aria-live="polite"
        >
          {copyState === "copied" ? "Prompt copied from the mock composer." : null}
          {copyState === "fallback"
            ? "Clipboard permission is unavailable; prompt remains mock-only."
            : null}
        </p>
      </section>
    </div>
  );
}
