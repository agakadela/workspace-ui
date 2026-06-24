import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookOpenCheck,
  ClipboardCheck,
  FileText,
  FolderKanban,
  LayoutGrid,
  LockKeyhole,
  PanelRightOpen,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { StatusChip } from "../../shared/ui/StatusChip";
import {
  SurfaceTabStrip,
  WorkspaceTray,
} from "../../shared/ui/WorkspacePrimitives";

const objectMetadata = [
  { label: "Active folder", value: "demo-workspace/orchard-notes" },
  { label: "Last stop", value: "Layout note, 11:20" },
  { label: "Context", value: "4 selected, 2 review-first" },
];

const workItems = [
  {
    title: "Strategy Note",
    role: "Source of truth",
    detail: "Defines the calmer notebook workspace and the next review decision.",
    status: "Current",
    icon: BookOpenCheck,
  },
  {
    title: "Desk Layout Mockup",
    role: "Visual artifact",
    detail: "Shows the intended object header, canvas, and composer attachment.",
    status: "Review first",
    icon: LayoutGrid,
  },
  {
    title: "Context Packet",
    role: "Agent handoff",
    detail: "Includes safe docs only; private notes stay outside the packet.",
    status: "Safe for agent",
    icon: ShieldCheck,
  },
];

const canvasSignals = [
  {
    label: "Continue",
    value: "Prepare review packet",
    detail: "Strategy note, layout mockup, and context tray stay paired.",
  },
  {
    label: "Preview",
    value: "Strategy Note",
    detail: "Readable summary attached to the selected workspace object.",
  },
  {
    label: "Boundary",
    value: "Mock only",
    detail: "No real filesystem, Git, Codex, Tauri, or private data.",
  },
];

const contextRows = [
  {
    title: "Selected context",
    detail: "SPEC, PLAN, UI system, and mock workspace model.",
    chip: "Safe",
    icon: ShieldCheck,
  },
  {
    title: "Review-first material",
    detail: "Desk layout sketch needs human review before it joins the packet.",
    chip: "Review first",
    icon: ClipboardCheck,
  },
  {
    title: "Private material",
    detail: "Client notes and real folder names remain excluded.",
    chip: "Private",
    icon: LockKeyhole,
  },
];

export function FoundationProof() {
  return (
    <section className="rounded-shell border border-paper-100/10 bg-canvas-950/55 p-3 text-paper-50 shadow-panel sm:p-4 lg:p-5">
      <section
        aria-labelledby="orchard-heading"
        className="rounded-shell border border-paper-100/10 bg-canvas-800 p-4 shadow-float lg:p-5"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex min-w-0 gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-panel bg-paper-50 text-ink-950 shadow-float">
              <FolderKanban aria-hidden="true" size={21} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-paper-100/65">
                Workspace / Fictional project
              </p>
              <h1
                id="orchard-heading"
                className="mt-1 text-3xl font-semibold tracking-normal text-paper-50 lg:text-4xl"
              >
                Orchard Notes
              </h1>
              <div className="mt-3 flex flex-wrap gap-2">
                <StatusChip label="Mock workspace" tone="mock" />
                <StatusChip label="Ready for visual review" tone="safe" />
                <StatusChip label="No filesystem" tone="mock" />
              </div>
            </div>
          </div>

          <dl className="grid gap-2 text-xs leading-5 text-paper-100/70 sm:grid-cols-3 lg:w-[27rem]">
            {objectMetadata.map((item) => (
              <div
                key={item.label}
                className="rounded-control border border-paper-100/10 bg-paper-100/5 px-3 py-2"
              >
                <dt className="font-semibold text-paper-50">{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <SurfaceTabStrip
            label="Orchard Notes sections"
            items={[
              { label: "Overview", count: "Active", isActive: true },
              { label: "Artifacts", count: 6 },
              { label: "Canvas", count: 3 },
              { label: "Context", count: 4 },
            ]}
          />

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-control bg-paper-50 px-3 py-2 text-sm font-semibold text-ink-950"
            >
              Review surface
              <ArrowUpRight aria-hidden="true" size={16} />
            </button>
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-control border border-paper-100/15 bg-paper-100/10 px-3 py-2 text-sm font-semibold text-paper-50"
            >
              Open tray
              <PanelRightOpen aria-hidden="true" size={16} />
            </button>
          </div>
        </div>

        <section
          aria-labelledby="orchard-canvas-heading"
          className="proof-workflow-grid mt-4 rounded-shell border border-paper-100/10 bg-ink-950 p-3 lg:p-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2
                id="orchard-canvas-heading"
                className="text-lg font-semibold text-paper-50"
              >
                Orchard work canvas
              </h2>
              <p className="mt-1 text-sm text-paper-100/65">
                One selected object, readable preview, and context tray in the
                same first-viewport surface.
              </p>
            </div>

            <div className="flex gap-2 rounded-control border border-paper-100/10 bg-paper-100/10 p-1">
              <button
                type="button"
                className="inline-flex min-h-9 items-center justify-center gap-2 rounded-control bg-paper-50 px-3 text-sm font-semibold text-ink-950"
              >
                <SlidersHorizontal aria-hidden="true" size={15} />
                Focus
              </button>
              <button
                type="button"
                className="inline-flex min-h-9 items-center justify-center gap-2 rounded-control px-3 text-sm font-semibold text-paper-100/75"
              >
                <LayoutGrid aria-hidden="true" size={15} />
                Map
              </button>
            </div>
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="min-w-0 space-y-3">
              <div className="grid gap-3 sm:grid-cols-3">
                {canvasSignals.map((signal) => (
                  <article
                    key={signal.label}
                    className="rounded-panel border border-paper-100/10 bg-paper-100/10 p-3"
                  >
                    <p className="text-xs font-semibold uppercase text-steel-100">
                      {signal.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-paper-50">
                      {signal.value}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-paper-100/65">
                      {signal.detail}
                    </p>
                  </article>
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {workItems.map((item) => (
                  <WorkItemCard key={item.title} item={item} />
                ))}
              </div>

              <section
                aria-labelledby="preview-heading"
                className="rounded-panel border border-paper-100/10 bg-paper-50 p-4 text-ink-950 shadow-float"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-steel-100 text-steel-700">
                    <FileText aria-hidden="true" size={17} />
                  </span>
                  <div className="min-w-0">
                    <h3
                      id="preview-heading"
                      className="text-base font-semibold text-ink-950"
                    >
                      Preview: Strategy Note
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink-600">
                      The local workspace should answer where to continue, what
                      changed, and which context is safe before an editor opens.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <WorkspaceTray
              labelledBy="context-tray-heading"
              className="self-start bg-canvas-950/95 p-4"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-paper-50 text-ink-950">
                  <ClipboardCheck aria-hidden="true" size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-paper-100/70">
                    Attached context tray
                  </p>
                  <h2
                    id="context-tray-heading"
                    className="mt-1 text-xl font-semibold text-paper-50"
                  >
                    Context handoff
                  </h2>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {contextRows.map((row) => (
                  <ContextRow key={row.title} row={row} />
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-paper-100/10 bg-paper-100/10 p-3">
                <p className="text-sm font-semibold text-paper-50">
                  Suggested prompt
                </p>
                <p className="mt-2 text-sm leading-6 text-paper-100/70">
                  Prepare a concise pass on the Orchard Notes desk layout using
                  only selected mock files.
                </p>
              </div>
            </WorkspaceTray>
          </div>
        </section>
      </section>
    </section>
  );
}

function WorkItemCard({
  item,
}: {
  item: {
    title: string;
    role: string;
    detail: string;
    status: string;
    icon: LucideIcon;
  };
}) {
  const ItemIcon = item.icon;

  return (
    <article className="rounded-panel border border-paper-100/10 bg-canvas-800 p-3 shadow-float">
      <div className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-paper-50 text-ink-950">
          <ItemIcon aria-hidden="true" size={17} />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-paper-50">{item.title}</p>
          <p className="mt-1 text-xs font-semibold uppercase text-paper-100/55">
            {item.role}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-5 text-paper-100/65">{item.detail}</p>
      <div className="mt-3">
        <StatusChip label={item.status} />
      </div>
    </article>
  );
}

function ContextRow({
  row,
}: {
  row: {
    title: string;
    detail: string;
    chip: string;
    icon: LucideIcon;
  };
}) {
  const RowIcon = row.icon;

  return (
    <article className="rounded-xl border border-paper-100/10 bg-paper-100/10 p-3">
      <div className="flex items-start gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-paper-50 text-ink-950">
          <RowIcon aria-hidden="true" size={16} />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-paper-50">{row.title}</h3>
            <StatusChip label={row.chip} />
          </div>
          <p className="mt-1 text-sm leading-5 text-paper-100/65">
            {row.detail}
          </p>
        </div>
      </div>
    </article>
  );
}
