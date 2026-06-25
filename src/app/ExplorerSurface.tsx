import { useState } from "react";
import {
  ArrowUpRight,
  CircleDot,
  Code2,
  FileText,
  Image as ImageIcon,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  MousePointer2,
  PanelRightOpen,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import {
  cockpit,
  type ExplorerArea,
  type ExplorerArtifact,
  type PreviewKind,
  type ViewId,
} from "./cockpitData";
import { StatusPill } from "./cockpitPrimitives";

export function ExplorerSurface({
  onSelectView,
}: {
  onSelectView: (view: ViewId) => void;
}) {
  const [activeAreaId, setActiveAreaId] = useState(cockpit.explorer.activeAreaId);
  const [selectedArtifactId, setSelectedArtifactId] = useState(
    cockpit.explorer.activeArtifactId,
  );

  const activeArea =
    cockpit.explorer.areas.find((area) => area.id === activeAreaId) ??
    cockpit.explorer.areas[0];
  const allArtifacts: readonly ExplorerArtifact[] = cockpit.explorer.artifacts;

  const artifacts = activeArea.artifactIds
    .map((artifactId) => allArtifacts.find((artifact) => artifact.id === artifactId))
    .filter((artifact): artifact is ExplorerArtifact => Boolean(artifact));

  const selectedArtifact =
    artifacts.find((artifact) => artifact.id === selectedArtifactId) ?? artifacts[0];

  function selectArea(area: ExplorerArea) {
    setActiveAreaId(area.id);
    setSelectedArtifactId(area.artifactIds[0] ?? "");
  }

  return (
    <div className="bg-night-940 p-4 pb-28 lg:p-6 lg:pb-28">
      <section
        aria-labelledby="explorer-surface-heading"
        className="grid min-h-[760px] gap-3 lg:grid-cols-[245px_minmax(0,1fr)] 2xl:grid-cols-[255px_minmax(0,1fr)_430px]"
      >
        <AreaRail activeAreaId={activeArea.id} onSelectArea={selectArea} />

        <section
          aria-labelledby="explorer-surface-heading"
          className="workspace-field relative overflow-hidden rounded-panel border border-white/[0.06] bg-night-910 shadow-panel"
        >
          <div className="relative z-10 border-b border-white/[0.06] bg-night-900/75 p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <p className="text-sm font-medium text-ash-400">
                  Selected inspection field
                </p>
                <h2
                  id="explorer-surface-heading"
                  className="mt-2 text-2xl font-medium text-white"
                >
                  {activeArea.label}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-ash-300">
                  {activeArea.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <StatusPill status={activeArea.status} />
                <StatusPill
                  status={{
                    label: "Preview is mock-only",
                    tone: "neutral",
                    icon: ShieldCheck,
                  }}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                className="inline-flex min-h-10 items-center gap-2 rounded-control bg-ice-100 px-4 text-sm font-semibold text-night-980 transition hover:bg-white"
                onClick={() => onSelectView("projectDesk")}
              >
                <PanelRightOpen aria-hidden="true" size={16} />
                Open Project Desk
              </button>
              <button
                type="button"
                className="inline-flex min-h-10 items-center gap-2 rounded-control bg-white/[0.06] px-4 text-sm font-semibold text-ash-200 ring-1 ring-white/[0.06] transition hover:bg-white/[0.1] hover:text-white"
              >
                <Menu aria-hidden="true" size={16} />
                Artifact controls
              </button>
            </div>
          </div>

          <div className="relative z-10 p-5">
            {artifacts.length > 0 ? (
              <div className="grid gap-3 xl:grid-cols-2">
                {artifacts.map((artifact) => (
                  <ArtifactCard
                    key={artifact.id}
                    artifact={artifact}
                    isSelected={selectedArtifact?.id === artifact.id}
                    onSelect={() => setSelectedArtifactId(artifact.id)}
                  />
                ))}
              </div>
            ) : (
              <EmptyArtifactState area={activeArea} />
            )}
          </div>
        </section>

        <PreviewPane artifact={selectedArtifact} area={activeArea} />
      </section>
    </div>
  );
}

function AreaRail({
  activeAreaId,
  onSelectArea,
}: {
  activeAreaId: string;
  onSelectArea: (area: ExplorerArea) => void;
}) {
  return (
    <aside
      aria-labelledby="area-rail-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-4 shadow-panel"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-ash-400">Workspace areas</p>
          <h2 id="area-rail-heading" className="mt-2 text-xl font-medium text-white">
            Artifact Map
          </h2>
        </div>
        <span className="flex size-10 items-center justify-center rounded-xl bg-white/[0.07] text-ash-200">
          <MousePointer2 aria-hidden="true" size={17} />
        </span>
      </div>

      <div className="mt-5 space-y-2">
        {cockpit.explorer.areas.map((area) => {
          const isActive = area.id === activeAreaId;
          const AreaIcon = area.status.icon;

          return (
            <button
              key={area.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelectArea(area)}
              className={`w-full rounded-card border p-3 text-left transition ${
                isActive
                  ? "border-sky-400/35 bg-ice-100 text-night-980 shadow-control"
                  : "border-white/[0.06] bg-white/[0.045] text-white hover:border-white/15 hover:bg-white/[0.07]"
              }`}
            >
              <span className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl ${
                    isActive
                      ? "bg-night-980 text-white"
                      : "bg-night-930 text-ash-200"
                  }`}
                >
                  <AreaIcon aria-hidden="true" size={16} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{area.label}</span>
                  <span
                    className={`mt-1 block text-xs leading-5 ${
                      isActive ? "text-night-860" : "text-ash-400"
                    }`}
                  >
                    {area.summary}
                  </span>
                  <span className="mt-3 inline-flex">
                    <StatusPill
                      status={area.status}
                      className={
                        isActive
                          ? "border-night-980/10 bg-white/75 text-night-980"
                          : ""
                      }
                    />
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function ArtifactCard({
  artifact,
  isSelected,
  onSelect,
}: {
  artifact: ExplorerArtifact;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onSelect}
      className={`group min-h-[260px] rounded-card border p-4 text-left transition ${
        isSelected
          ? "border-sky-400/45 bg-night-860 shadow-control"
          : "border-white/[0.06] bg-night-880/90 hover:border-white/15 hover:bg-night-860"
      }`}
    >
      <ArtifactPayloadTile kind={artifact.preview.kind} title={artifact.title} />

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase text-ash-500">
            {artifact.type} / {artifact.role}
          </p>
          <h3 className="mt-2 text-lg font-medium leading-6 text-white">
            {artifact.title}
          </h3>
        </div>
        <span
          className={`flex size-9 shrink-0 items-center justify-center rounded-xl transition ${
            isSelected
              ? "bg-sky-400 text-night-980"
              : "bg-white/[0.06] text-ash-300 group-hover:bg-ice-100 group-hover:text-night-980"
          }`}
        >
          <ArrowUpRight aria-hidden="true" size={15} />
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-ash-300">{artifact.summary}</p>
      <p className="mt-4 break-words font-mono text-xs leading-5 text-ash-500">
        {artifact.path}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <StatusPill status={artifact.status} />
        <StatusPill status={artifact.safety} />
      </div>
    </button>
  );
}

function ArtifactPayloadTile({
  kind,
  title,
}: {
  kind: PreviewKind;
  title: string;
}) {
  return (
    <div className="relative flex min-h-[118px] items-center justify-center overflow-hidden rounded-card border border-white/[0.06] bg-night-930">
      {kind === "markdown" ? <MarkdownTile title={title} /> : null}
      {kind === "html" ? <HtmlTile /> : null}
      {kind === "image" ? <ImageTile /> : null}
      {kind === "code" ? <CodeTile /> : null}
      {kind === "unsupported" ? <UnsupportedTile /> : null}
    </div>
  );
}

function MarkdownTile({ title }: { title: string }) {
  return (
    <div className="w-36 rounded-2xl bg-ice-100 p-3 text-night-980 shadow-control">
      <div className="flex items-center gap-2">
        <FileText aria-hidden="true" size={16} />
        <span className="truncate text-xs font-bold">{title}</span>
      </div>
      <div className="mt-4 space-y-2">
        <span className="block h-2 rounded-pill bg-night-980/20" />
        <span className="block h-2 rounded-pill bg-sky-400/70" />
        <span className="block h-2 w-20 rounded-pill bg-flame-500/70" />
      </div>
    </div>
  );
}

function HtmlTile() {
  return (
    <div className="w-40 overflow-hidden rounded-2xl border border-white/10 bg-night-880">
      <div className="flex gap-1 border-b border-white/10 bg-black/35 px-3 py-2">
        <span className="size-2 rounded-full bg-flame-500" />
        <span className="size-2 rounded-full bg-ash-500" />
        <span className="size-2 rounded-full bg-sky-400" />
      </div>
      <div className="p-3">
        <span className="block h-8 rounded-xl bg-ice-100" />
        <span className="mt-3 block h-3 rounded-pill bg-white/16" />
        <span className="mt-2 block h-3 w-20 rounded-pill bg-white/10" />
      </div>
    </div>
  );
}

function ImageTile() {
  return (
    <div className="grid w-40 grid-cols-[1fr_0.7fr] gap-2">
      <span className="h-24 rounded-2xl bg-sky-400" />
      <span className="grid gap-2">
        <span className="rounded-2xl bg-ice-100" />
        <span className="rounded-2xl bg-flame-500" />
      </span>
    </div>
  );
}

function CodeTile() {
  return (
    <div className="w-44 rounded-2xl bg-black/55 p-3 font-mono text-[11px] text-ash-300">
      <div className="flex items-center gap-2 text-sky-400">
        <Code2 aria-hidden="true" size={14} />
        <span>src/app</span>
      </div>
      <div className="mt-3 space-y-2">
        <span className="block h-2 rounded-pill bg-white/20" />
        <span className="ml-4 block h-2 rounded-pill bg-mint-300/55" />
        <span className="ml-8 block h-2 w-20 rounded-pill bg-flame-500/65" />
      </div>
    </div>
  );
}

function UnsupportedTile() {
  return (
    <div className="flex flex-col items-center text-peach-100">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-flame-500">
        <LockKeyhole aria-hidden="true" size={22} />
      </span>
      <span className="mt-3 text-xs font-bold">Unsupported</span>
    </div>
  );
}

function EmptyArtifactState({ area }: { area: ExplorerArea }) {
  return (
    <section
      role="status"
      aria-label={`${area.label} empty state`}
      className="flex min-h-[520px] items-center justify-center rounded-panel border border-dashed border-white/[0.12] bg-black/20 p-6 text-center"
    >
      <div className="max-w-md">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-flame-500 text-white">
          <TriangleAlert aria-hidden="true" size={24} />
        </span>
        <h3 className="mt-5 text-2xl font-medium text-white">
          No safe artifacts in {area.label}
        </h3>
        <p className="mt-3 text-sm leading-6 text-ash-300">
          This mock area proves the empty state without scanning local folders or
          inventing hidden files.
        </p>
        <div className="mt-5 flex justify-center">
          <StatusPill
            status={{ label: "Empty preview state", tone: "orange", icon: CircleDot }}
          />
        </div>
      </div>
    </section>
  );
}

function PreviewPane({
  artifact,
  area,
}: {
  artifact: ExplorerArtifact | undefined;
  area: ExplorerArea;
}) {
  if (!artifact) {
    return (
      <aside
        aria-labelledby="preview-heading"
        className="rounded-panel border border-white/[0.06] bg-night-900 p-6 shadow-panel lg:col-span-2 2xl:col-span-1"
      >
        <p className="text-sm font-medium text-ash-400">Preview Pane</p>
        <h2 id="preview-heading" className="mt-2 text-2xl font-medium text-white">
          Empty area
        </h2>
        <div className="mt-6 rounded-card border border-dashed border-white/[0.12] bg-white/[0.045] p-5">
          <StatusPill
            status={{ label: "No selected artifact", tone: "orange", icon: CircleDot }}
          />
          <p className="mt-5 text-sm leading-6 text-ash-300">
            {area.label} has no public-safe mock artifacts. The Explorer still
            names the boundary and keeps the preview calm.
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-labelledby="preview-heading"
      className="rounded-panel border border-white/[0.06] bg-night-900 p-6 shadow-panel lg:col-span-2 2xl:col-span-1"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-ash-400">{artifact.preview.eyebrow}</p>
          <h2 id="preview-heading" className="mt-2 text-2xl font-medium text-white">
            {artifact.preview.title}
          </h2>
        </div>
        <StatusPill status={artifact.status} />
      </div>

      <p className="mt-4 text-sm leading-6 text-ash-300">
        {artifact.preview.summary}
      </p>

      <dl className="mt-6 grid gap-3">
        {artifact.preview.rows.map((row) => (
          <div
            key={row.label}
            className="rounded-card border border-white/[0.06] bg-white/[0.045] p-4"
          >
            <dt className="text-xs font-semibold uppercase text-ash-500">
              {row.label}
            </dt>
            <dd className="mt-2 text-sm font-medium leading-5 text-white">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <PreviewContent artifact={artifact} />

      <div className="mt-5 rounded-card border border-white/[0.06] bg-night-940 p-4">
        <p className="text-xs font-semibold uppercase text-ash-500">Raw path</p>
        <p className="mt-2 break-words font-mono text-xs leading-5 text-ash-300">
          {artifact.path}
        </p>
      </div>
    </aside>
  );
}

function PreviewContent({ artifact }: { artifact: ExplorerArtifact }) {
  if (artifact.preview.kind === "markdown") {
    return <MarkdownPreview artifact={artifact} />;
  }

  if (artifact.preview.kind === "html") {
    return <HtmlPreview artifact={artifact} />;
  }

  if (artifact.preview.kind === "image") {
    return <ImagePreview artifact={artifact} />;
  }

  if (artifact.preview.kind === "code") {
    return <CodePreview artifact={artifact} />;
  }

  return <UnsupportedPreview artifact={artifact} />;
}

function MarkdownPreview({ artifact }: { artifact: ExplorerArtifact }) {
  return (
    <article className="mt-5 rounded-card border border-white/[0.06] bg-ice-100 p-5 text-night-980">
      <div className="flex items-center gap-2 text-sm font-bold">
        <FileText aria-hidden="true" size={16} />
        Markdown excerpt
      </div>
      <div className="mt-4 space-y-3">
        {artifact.preview.body.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-6 text-night-860">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

function HtmlPreview({ artifact }: { artifact: ExplorerArtifact }) {
  return (
    <div
      role="img"
      aria-label="Static HTML mockup preview"
      className="mt-5 overflow-hidden rounded-card border border-white/[0.08] bg-night-930"
    >
      <div className="flex items-center gap-2 border-b border-white/[0.08] bg-black/35 px-4 py-3">
        <LayoutDashboard aria-hidden="true" className="text-sky-400" size={16} />
        <span className="text-sm font-semibold text-white">
          Static mockup card, not executed
        </span>
      </div>
      <div className="p-5">
        <div className="rounded-card bg-ice-100 p-4 text-night-980">
          <p className="text-xs font-bold uppercase text-flame-600">
            Continue handoff
          </p>
          <h3 className="mt-2 text-xl font-semibold">{artifact.preview.title}</h3>
          <div className="mt-4 space-y-2">
            {artifact.preview.body.map((line) => (
              <p
                key={line}
                className="rounded-xl bg-white/70 px-3 py-2 text-sm text-night-860"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ImagePreview({ artifact }: { artifact: ExplorerArtifact }) {
  return (
    <div
      role="img"
      aria-label="Image card preview"
      className="mt-5 overflow-hidden rounded-card border border-white/[0.08] bg-night-930 p-5"
    >
      <div className="grid min-h-[230px] gap-3 sm:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-card bg-sky-400 p-5 text-night-980">
          <ImageIcon aria-hidden="true" size={24} />
          <h3 className="mt-12 text-2xl font-semibold leading-tight">
            {artifact.preview.title}
          </h3>
        </div>
        <div className="grid gap-3">
          <div className="rounded-card bg-ice-100 p-4 text-night-980">
            <p className="text-sm font-bold">Selected panel rhythm</p>
          </div>
          <div className="rounded-card bg-flame-500 p-4 text-white">
            <p className="text-sm font-bold">Review-first signal</p>
          </div>
        </div>
      </div>
      <ul className="mt-4 grid gap-2">
        {artifact.preview.body.map((item) => (
          <li
            key={item}
            className="rounded-xl bg-white/[0.045] px-3 py-2 text-sm text-ash-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CodePreview({ artifact }: { artifact: ExplorerArtifact }) {
  return (
    <div className="mt-5 rounded-card border border-white/[0.08] bg-black/45 p-5">
      <div className="flex items-center gap-2 font-mono text-sm text-sky-400">
        <Code2 aria-hidden="true" size={16} />
        Code summary, not a source dump
      </div>
      <ul className="mt-5 space-y-3">
        {artifact.preview.body.map((line) => (
          <li
            key={line}
            className="rounded-xl border border-white/[0.06] bg-night-930 px-3 py-3 font-mono text-xs leading-5 text-ash-300"
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

function UnsupportedPreview({ artifact }: { artifact: ExplorerArtifact }) {
  return (
    <div className="mt-5 rounded-card border border-flame-500/25 bg-flame-500/10 p-5">
      <div className="flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-flame-500 text-white">
          <TriangleAlert aria-hidden="true" size={20} />
        </span>
        <div>
          <h3 className="text-lg font-medium text-white">Unsupported preview state</h3>
          <p className="mt-1 text-sm text-peach-100">
            This artifact is visible, but not rendered.
          </p>
        </div>
      </div>
      <ul className="mt-5 space-y-2">
        {artifact.preview.body.map((line) => (
          <li key={line} className="text-sm leading-6 text-peach-100">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
