import { ArrowUpRight, Menu } from "lucide-react";

import { cockpit, type ContextGroup } from "./cockpitData";
import { IconButton, StatusPill } from "./cockpitPrimitives";
import { iconToneClasses } from "./cockpitToneClasses";

export function WorkspaceDetailsPanel() {
  return (
    <aside
      aria-labelledby="details-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-6 shadow-panel xl:min-h-[716px]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-ash-400">Current object</p>
          <h2 id="details-heading" className="mt-2 text-2xl font-medium text-white">
            Workspace Details
          </h2>
        </div>
        <div className="flex gap-2">
          <IconButton label="Details filter">
            <Menu aria-hidden="true" size={16} />
          </IconButton>
          <IconButton label="Details open mock">
            <ArrowUpRight aria-hidden="true" size={16} />
          </IconButton>
        </div>
      </div>

      <dl className="mt-8 space-y-6">
        {cockpit.details.map((row) => (
          <div key={row.label} className="grid gap-2">
            <dt className="text-sm font-medium text-ash-500">{row.label}</dt>
            <dd className="break-words text-base font-medium text-white">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 rounded-card border border-white/[0.06] bg-night-940 p-4">
        <div className="flex flex-wrap gap-2">
          {cockpit.boundaryStatuses.map((status) => (
            <StatusPill key={status.label} status={status} />
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-ash-300">
          The cockpit exposes mock status, privacy, and handoff boundaries before
          any raw technical path becomes the first layer.
        </p>
      </div>

      <ContextSummary />
    </aside>
  );
}

function ContextSummary() {
  return (
    <section aria-labelledby="context-summary-heading" className="mt-5">
      <h3 id="context-summary-heading" className="text-base font-medium text-white">
        Context readiness
      </h3>
      <div className="mt-4 space-y-3">
        {cockpit.contextGroups.map((group) => (
          <ContextGroupCard key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}

function ContextGroupCard({ group }: { group: ContextGroup }) {
  return (
    <article className="rounded-card border border-white/[0.06] bg-white/[0.045] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-sm font-semibold text-white">{group.title}</h4>
          <p className="mt-1 text-sm leading-5 text-ash-400">{group.summary}</p>
        </div>
        <StatusPill status={group.status} />
      </div>
      <ul className="mt-4 space-y-3">
        {group.files.map((file) => (
          <ContextFileRow key={file.id} file={file} />
        ))}
      </ul>
    </article>
  );
}

function ContextFileRow({
  file,
}: {
  file: ContextGroup["files"][number];
}) {
  const FileStatusIcon = file.status.icon;

  return (
    <li>
      <div className="flex items-start gap-3">
        <span
          className={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-lg ${iconToneClasses[file.status.tone]}`}
        >
          <FileStatusIcon aria-hidden="true" size={13} />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-start gap-2">
            <p className="text-sm font-medium text-white">{file.title}</p>
            <StatusPill status={file.status} />
          </div>
          <p className="mt-2 break-words font-mono text-xs leading-5 text-ash-500">
            {file.path}
          </p>
          <p className="mt-1 text-xs leading-5 text-ash-400">{file.reason}</p>
        </div>
      </div>
    </li>
  );
}
