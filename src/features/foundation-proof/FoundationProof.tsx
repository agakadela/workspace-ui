import {
  ArrowUpRight,
  Boxes,
  CircleDashed,
  ClipboardCheck,
  FileText,
  Layers3,
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

const referenceRoles = [
  {
    reference: "Company Profile.png",
    role: "Primary shell/object anchor",
    proof: "Top nav, selected-object header, tabs, compact action cluster.",
  },
  {
    reference: "Workflow.png",
    role: "Dominant work canvas",
    proof: "Dark rounded field with controls and object work zones attached.",
  },
  {
    reference: "Company Profile - ai chat.png",
    role: "Composer/tray language",
    proof: "Docked handoff tray with permissions and prompt boundary.",
  },
];

const foundationPanels = [
  {
    title: "Selected-object header",
    detail: "One workspace object anchors the first viewport.",
    value: "Object first",
    icon: Boxes,
  },
  {
    title: "Reference-like tabs",
    detail: "Short controls sit inside the current object.",
    value: "4 controls",
    icon: SlidersHorizontal,
  },
  {
    title: "Dense supporting panels",
    detail: "Purposeful panels attach to the canvas instead of forming a grid.",
    value: "3 checks",
    icon: Layers3,
  },
];

const canvasNodes = [
  {
    label: "Workspace object",
    meta: "Orchard Notes cockpit",
    tone: "bg-paper-50 text-ink-950",
  },
  {
    label: "Preview rail",
    meta: "Readable artifact pane",
    tone: "bg-steel-100 text-steel-700",
  },
  {
    label: "Context handoff",
    meta: "Composer tray boundary",
    tone: "bg-moss-100 text-moss-700",
  },
];

export function FoundationProof() {
  return (
    <section className="flex flex-col gap-4">
      <header className="rounded-shell border border-paper-100/10 bg-canvas-800 p-5 shadow-panel lg:p-7">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-steel-100">
              Hybrid reference model
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-paper-50 md:text-5xl">
              Reference Foundation Proof
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-paper-100/75">
              A small live surface for judging the shared layout grammar before
              the full Home, Explorer, Project Desk, and Composer redesign.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusChip label="Mock only" tone="mock" />
            <StatusChip label="No filesystem" tone="mock" />
            <StatusChip label="No copied assets" tone="mock" />
          </div>
        </div>
        <SurfaceTabStrip
          label="Foundation proof sections"
          className="mt-5"
          items={[
            { label: "Layout", count: "8B", isActive: true },
            { label: "Canvas", count: "Workflow" },
            { label: "Composer", count: "Tray" },
            { label: "Review", count: "Gate" },
          ]}
        />
      </header>

      <section className="rounded-shell border border-paper-100/10 bg-canvas-950/55 p-3 text-paper-50 shadow-panel sm:p-4 lg:p-5">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section
            aria-labelledby="foundation-object-heading"
            className="rounded-shell border border-paper-100/10 bg-canvas-800 p-4 shadow-float sm:p-5"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex min-w-0 gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-panel bg-paper-50 text-ink-950 shadow-float">
                  <ClipboardCheck aria-hidden="true" size={22} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-paper-100/65">
                    Selected workspace object
                  </p>
                  <h2
                    id="foundation-object-heading"
                    className="mt-1 text-2xl font-semibold tracking-normal text-paper-50"
                  >
                    Selected-object header
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-paper-100/75">
                    Orchard Notes is standing in for the future active workspace
                    object. Raw paths and implementation details stay secondary.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <button
                  type="button"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-control bg-paper-50 px-3 py-2 text-sm font-semibold text-ink-950"
                >
                  Compare proof
                  <ArrowUpRight aria-hidden="true" size={16} />
                </button>
                <button
                  type="button"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-control border border-paper-100/15 bg-paper-100/10 px-3 py-2 text-sm font-semibold text-paper-50"
                >
                  Inspect tray
                  <PanelRightOpen aria-hidden="true" size={16} />
                </button>
              </div>
            </div>

            <SurfaceTabStrip
              label="Reference-like tabs"
              className="mt-5"
              items={[
                { label: "Foundation", count: "Active", isActive: true },
                { label: "Object", count: "Header" },
                { label: "Panels", count: 3 },
                { label: "Tray", count: "Docked" },
              ]}
            />

            <div className="mt-4 grid gap-4 2xl:grid-cols-[minmax(0,1fr)_300px]">
              <section
                aria-label="Workflow-style canvas field"
                className="proof-workflow-grid min-h-[430px] rounded-panel border border-paper-100/10 bg-ink-950 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <StatusChip label="Canvas dominant" tone="mock" />
                    <StatusChip label="Public-safe mock" tone="mock" />
                  </div>
                  <div className="flex gap-2 rounded-control border border-paper-100/10 bg-paper-100/10 p-1">
                    <button
                      type="button"
                      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-control bg-paper-50 px-3 text-sm font-semibold text-ink-950"
                    >
                      <CircleDashed aria-hidden="true" size={15} />
                      Focus
                    </button>
                    <button
                      type="button"
                      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-control px-3 text-sm font-semibold text-paper-100/75"
                    >
                      <Layers3 aria-hidden="true" size={15} />
                      Layers
                    </button>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                  {canvasNodes.map((node) => (
                    <article
                      key={node.label}
                      className={`rounded-panel p-4 shadow-float ${node.tone}`}
                    >
                      <p className="text-sm font-semibold">{node.label}</p>
                      <p className="mt-2 text-sm leading-5 opacity-75">
                        {node.meta}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-8 rounded-panel border border-paper-100/10 bg-paper-100/10 p-4">
                  <div className="grid gap-3 md:grid-cols-3">
                    {foundationPanels.map((panel) => {
                      const PanelIcon = panel.icon;

                      return (
                        <article
                          key={panel.title}
                          className="rounded-xl border border-paper-100/10 bg-canvas-800 p-4"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-sm font-semibold text-paper-50">
                                {panel.title}
                              </p>
                              <p className="mt-2 text-sm leading-5 text-paper-100/65">
                                {panel.detail}
                              </p>
                            </div>
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-paper-50 text-ink-950">
                              <PanelIcon aria-hidden="true" size={17} />
                            </span>
                          </div>
                          <p className="mt-4 text-xs font-semibold uppercase text-steel-100">
                            {panel.value}
                          </p>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </section>

              <aside className="rounded-panel border border-paper-100/10 bg-paper-100/5 p-4">
                <h2 className="text-base font-semibold text-paper-50">
                  Dense supporting panels
                </h2>
                <div className="mt-4 space-y-3">
                  {referenceRoles.map((item) => (
                    <article
                      key={item.reference}
                      className="rounded-xl border border-paper-100/10 bg-paper-50 p-4 text-ink-950"
                    >
                      <p className="text-sm font-semibold">{item.reference}</p>
                      <p className="mt-1 text-xs font-semibold uppercase text-ink-600">
                        {item.role}
                      </p>
                      <p className="mt-3 text-sm leading-5 text-ink-600">
                        {item.proof}
                      </p>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          <div className="flex flex-col gap-4">
            <WorkspaceTray
              labelledBy="foundation-composer-heading"
              className="xl:sticky xl:top-24"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-paper-50 text-ink-950">
                  <FileText aria-hidden="true" size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-paper-100/70">
                    Attached to the canvas
                  </p>
                  <h2
                    id="foundation-composer-heading"
                    className="mt-1 text-xl font-semibold text-paper-50"
                  >
                    Composer tray placeholder
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-paper-100/75">
                This placeholder borrows the density of Company Profile - ai
                chat (1).png without implying live AI execution.
              </p>

              <div className="mt-5 space-y-3">
                <BoundaryRow
                  icon={ShieldCheck}
                  title="Selected context"
                  detail="Spec, plan, and UI system are allowed in the mock packet."
                  chip="Safe"
                />
                <BoundaryRow
                  icon={LockKeyhole}
                  title="Private material"
                  detail="Client/private files remain excluded from the proof."
                  chip="Blocked"
                />
              </div>

              <div className="mt-5 rounded-xl border border-paper-100/10 bg-paper-100/10 p-4">
                <p className="text-sm font-semibold text-paper-50">
                  Runtime proof contract
                </p>
                <p className="mt-2 text-sm leading-6 text-paper-100/70">
                  Top nav, dark canvas, object header, tabs, dense panels, and a
                  docked composer are visible in one first-viewport surface.
                </p>
              </div>
            </WorkspaceTray>
          </div>
        </div>
      </section>
    </section>
  );
}

function BoundaryRow({
  icon: Icon,
  title,
  detail,
  chip,
}: {
  icon: typeof ShieldCheck;
  title: string;
  detail: string;
  chip: string;
}) {
  return (
    <article className="rounded-xl border border-paper-100/10 bg-paper-100/10 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-paper-50 text-ink-950">
            <Icon aria-hidden="true" size={17} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-paper-50">{title}</h3>
            <p className="mt-1 text-sm leading-5 text-paper-100/65">{detail}</p>
          </div>
        </div>
        <StatusChip label={chip} tone="mock" />
      </div>
    </article>
  );
}
