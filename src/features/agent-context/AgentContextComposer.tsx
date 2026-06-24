import { useState } from "react";
import {
  ClipboardCopy,
  CopyCheck,
  FileText,
  FolderOpen,
  LockKeyhole,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import type {
  WorkspaceAgentContextFile,
  WorkspaceAgentContextModel,
} from "../../shared/data/mockWorkspace";
import { StatusChip, type StatusTone } from "../../shared/ui/StatusChip";
import { WorkspaceTray } from "../../shared/ui/WorkspacePrimitives";

type AgentContextComposerProps = {
  model: WorkspaceAgentContextModel;
  layout?: "compact" | "wide";
};

type CopyState = "idle" | "copied" | "fallback";

type FileGroup = {
  title: string;
  summary: string;
  files: WorkspaceAgentContextFile[];
  tone: StatusTone;
  icon: typeof ShieldCheck;
};

export function AgentContextComposer({
  model,
  layout = "compact",
}: AgentContextComposerProps) {
  const [copyState, setCopyState] = useState<CopyState>("idle");

  async function handleCopyPrompt() {
    try {
      if (typeof navigator.clipboard?.writeText !== "function") {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(model.suggestedPrompt);
      setCopyState("copied");
    } catch {
      setCopyState("fallback");
    }
  }

  const groups: FileGroup[] = [
    {
      title: "Selected files",
      summary: "Included in the mock prompt draft.",
      files: model.selectedFiles,
      tone: "safe",
      icon: ShieldCheck,
    },
    {
      title: "Excluded files",
      summary: "Visible, but intentionally left out.",
      files: model.excludedFiles,
      tone: "info",
      icon: FileText,
    },
    {
      title: "Private files",
      summary: "Blocked from the prompt boundary.",
      files: model.privateFiles,
      tone: "private",
      icon: LockKeyhole,
    },
    {
      title: "Review-first files",
      summary: "Need a human pass before agent use.",
      files: model.reviewFirstFiles,
      tone: "review",
      icon: TriangleAlert,
    },
  ];

  return (
    <WorkspaceTray
      id="agent-context-composer"
      labelledBy="agent-context-composer-heading"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium text-paper-100/70">
            What context can be prepared
          </p>
          <h2
            id="agent-context-composer-heading"
            className="mt-1 text-xl font-semibold text-paper-50"
          >
            Agent Context Composer
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-paper-100/75">
            {model.summary}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <StatusChip label={model.statusLabel} tone="mock" />
          <StatusChip label={model.boundaryLabel} tone="mock" />
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-paper-100/10 bg-paper-100/10 p-4">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-paper-50 text-ink-950">
            <FolderOpen aria-hidden="true" size={18} />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-paper-50">Active folder</p>
            <p className="mt-2 break-words font-mono text-xs leading-5 text-paper-100/75">
              {model.activeFolder}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`mt-4 grid gap-3 ${
          layout === "wide" ? "xl:grid-cols-2" : ""
        }`}
      >
        {groups.map((group) => (
          <AgentContextFileGroup key={group.title} group={group} />
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-paper-100/10 bg-paper-100/10 p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-paper-50">
              Suggested prompt
            </h3>
            <p className="mt-2 text-sm leading-6 text-paper-100/70">
              Mock generated text only. It does not include private or excluded
              files.
            </p>
          </div>
          <button
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-paper-50 px-4 py-2 text-sm font-semibold text-ink-950"
            type="button"
            onClick={handleCopyPrompt}
            aria-label="Copy suggested prompt"
          >
            {copyState === "copied" ? (
              <CopyCheck aria-hidden="true" size={17} />
            ) : (
              <ClipboardCopy aria-hidden="true" size={17} />
            )}
            Copy prompt
          </button>
        </div>

        <p className="mt-4 rounded-xl border border-paper-100/10 bg-ink-800 px-4 py-3 text-sm leading-6 text-paper-100">
          {model.suggestedPrompt}
        </p>

        <p className="mt-3 text-sm leading-6 text-paper-100/75" aria-live="polite">
          {copyState === "copied"
            ? "Prompt copied from the mock composer."
            : null}
          {copyState === "fallback"
            ? "Clipboard permission is unavailable here. Select the prompt text manually; it is mock generated only."
            : null}
        </p>
      </div>
    </WorkspaceTray>
  );
}

function AgentContextFileGroup({ group }: { group: FileGroup }) {
  const GroupIcon = group.icon;

  return (
    <section className="rounded-xl border border-paper-100/10 bg-paper-100/10 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-paper-50 text-ink-950">
            <GroupIcon aria-hidden="true" size={17} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-paper-50">{group.title}</h3>
            <p className="mt-1 text-sm leading-5 text-paper-100/65">
              {group.summary}
            </p>
          </div>
        </div>
        <StatusChip label={`${group.files.length}`} tone={group.tone} />
      </div>

      <ul className="mt-4 space-y-3">
        {group.files.map((file) => (
          <li
            key={file.id}
            className="rounded-lg border border-paper-100/10 bg-ink-800 p-3"
          >
            <div className="flex flex-col gap-2 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <p className="text-sm font-semibold text-paper-50">{file.title}</p>
                <p className="mt-1 break-words font-mono text-xs leading-5 text-paper-100/70">
                  {file.path}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <StatusChip label={file.statusLabel} tone={group.tone} />
                <StatusChip label={file.safetyLabel} />
              </div>
            </div>
            <p className="mt-2 text-sm leading-5 text-paper-100/70">
              {file.reason}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
