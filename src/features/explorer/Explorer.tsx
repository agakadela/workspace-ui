import { useMemo, useState } from "react";
import {
  Archive,
  ArrowLeft,
  Boxes,
  Code2,
  Compass,
  FileImage,
  FileText,
  Globe2,
  Layers3,
  PanelRightOpen,
} from "lucide-react";

import type {
  PreviewKind,
  WorkspaceArtifact,
  WorkspaceExplorerModel,
} from "../../shared/data/mockWorkspace";
import { StatusChip } from "../../shared/ui/StatusChip";

type ExplorerProps = {
  model: WorkspaceExplorerModel;
  onOpenHome: () => void;
  onOpenProjectDesk?: () => void;
};

const previewIcons: Record<PreviewKind, typeof FileText> = {
  markdown: FileText,
  html: Globe2,
  "image-card": FileImage,
  "code-summary": Code2,
  unsupported: Archive,
};

export function Explorer({ model, onOpenHome, onOpenProjectDesk }: ExplorerProps) {
  const [activeAreaId, setActiveAreaId] = useState("all");
  const [selectedArtifactId, setSelectedArtifactId] = useState(
    model.artifacts[0]?.id,
  );

  const visibleArtifacts = useMemo(() => {
    if (activeAreaId === "all") {
      return model.artifacts;
    }

    return model.artifacts.filter((artifact) => artifact.areaId === activeAreaId);
  }, [activeAreaId, model.artifacts]);

  const selectedArtifact = model.artifacts.find(
    (artifact) => artifact.id === selectedArtifactId,
  );
  const supportedArtifacts = model.artifacts.filter(
    (artifact) => artifact.preview.kind !== "unsupported",
  );

  function selectArea(areaId: string) {
    setActiveAreaId(areaId);
    const nextVisibleArtifacts =
      areaId === "all"
        ? model.artifacts
        : model.artifacts.filter((artifact) => artifact.areaId === areaId);
    setSelectedArtifactId(nextVisibleArtifacts[0]?.id);
  }

  return (
    <main className="min-h-screen bg-ink-950 text-paper-50">
      <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-paper-100/10 bg-ink-800 p-5 shadow-panel lg:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-steel-100">
                Meaning-first browser
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-normal text-paper-50 md:text-5xl">
                Visual Explorer
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-paper-100/75">
                {model.summary}
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
              {onOpenProjectDesk ? (
                <button
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-paper-100/15 bg-paper-100/10 px-4 py-2 text-sm font-semibold text-paper-50"
                  type="button"
                  onClick={onOpenProjectDesk}
                >
                  <PanelRightOpen aria-hidden="true" size={17} />
                  Open Project Desk
                </button>
              ) : null}
              <StatusChip label="Mock only" tone="mock" />
              <StatusChip label="No filesystem access" tone="mock" />
            </div>
          </div>
        </header>

        <section className="rounded-3xl border border-paper-100/10 bg-paper-50 p-4 text-ink-950 shadow-panel sm:p-5 lg:p-6">
          <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)_420px]">
            <aside
              className="rounded-2xl border border-ink-950/10 bg-ink-800 p-4 text-paper-50"
              aria-label="Workspace areas"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-paper-50 text-ink-950">
                  <Compass aria-hidden="true" size={20} />
                </span>
                <div>
                  <h2 className="text-base font-semibold">
                    {model.workspaceName}
                  </h2>
                  <p className="text-xs text-paper-100/60">
                    Areas before paths
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <AreaButton
                  label="All artifacts"
                  summary="Every public-safe mock item with preview state."
                  count={model.artifacts.length}
                  isActive={activeAreaId === "all"}
                  onClick={() => selectArea("all")}
                />
                {model.areas.map((area) => (
                  <AreaButton
                    key={area.id}
                    label={area.label}
                    summary={area.summary}
                    count={
                      model.artifacts.filter(
                        (artifact) => artifact.areaId === area.id,
                      ).length
                    }
                    isActive={activeAreaId === area.id}
                    onClick={() => selectArea(area.id)}
                  />
                ))}
              </div>
            </aside>

            <section
              className="rounded-2xl border border-ink-950/10 bg-white p-4"
              aria-labelledby="artifact-list-heading"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-medium text-ink-600">
                    Artifact cards
                  </p>
                  <h2
                    id="artifact-list-heading"
                    className="mt-1 text-xl font-semibold text-ink-950"
                  >
                    Browse By Meaning
                  </h2>
                </div>
                <StatusChip
                  label={`${visibleArtifacts.length} visible`}
                  tone="info"
                />
              </div>

              {visibleArtifacts.length > 0 ? (
                <div className="mt-5 grid gap-3 2xl:grid-cols-2">
                  {visibleArtifacts.map((artifact) => (
                    <ArtifactCard
                      key={artifact.id}
                      artifact={artifact}
                      isSelected={artifact.id === selectedArtifactId}
                      onSelect={() => setSelectedArtifactId(artifact.id)}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState
                  title={model.emptyState.title}
                  summary={model.emptyState.summary}
                />
              )}
            </section>

            <PreviewPane
              selectedArtifact={selectedArtifact}
              supportedArtifacts={supportedArtifacts}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function AreaButton({
  label,
  summary,
  count,
  isActive,
  onClick,
}: {
  label: string;
  summary: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`w-full rounded-xl border p-3 text-left transition ${
        isActive
          ? "border-paper-100/25 bg-paper-50 text-ink-950"
          : "border-paper-100/10 bg-paper-100/10 text-paper-50 hover:bg-paper-100/15"
      }`}
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
    >
      <span className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold">{label}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
            isActive ? "bg-ink-950 text-paper-50" : "bg-paper-100/10"
          }`}
        >
          {count}
        </span>
      </span>
      <span
        className={`mt-2 block text-xs leading-5 ${
          isActive ? "text-ink-600" : "text-paper-100/60"
        }`}
      >
        {summary}
      </span>
    </button>
  );
}

function ArtifactCard({
  artifact,
  isSelected,
  onSelect,
}: {
  artifact: WorkspaceArtifact;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const PreviewIcon = previewIcons[artifact.preview.kind];

  return (
    <article
      data-testid="artifact-card"
      className={`rounded-xl border p-4 ${
        isSelected
          ? "border-steel-700/35 bg-steel-100"
          : "border-ink-950/10 bg-paper-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-steel-700">
          <PreviewIcon aria-hidden="true" size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-ink-600">
                {artifact.typeLabel}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-ink-950">
                {artifact.title}
              </h3>
            </div>
            <button
              className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-ink-950/10 bg-white px-3 py-1.5 text-sm font-semibold text-ink-950"
              type="button"
              aria-label={`View ${artifact.title}`}
              aria-pressed={isSelected}
              onClick={onSelect}
            >
              View
              <PanelRightOpen aria-hidden="true" size={15} />
            </button>
          </div>

          <dl className="mt-4 grid gap-2 text-sm text-ink-600">
            <div>
              <dt className="inline font-semibold text-ink-950">Role:</dt>{" "}
              <dd className="inline">{artifact.role}</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-ink-950">Activity:</dt>{" "}
              <dd className="inline">{artifact.activityLabel}</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-ink-950">Preview:</dt>{" "}
              <dd className="inline">{artifact.previewAvailability}</dd>
            </div>
          </dl>

          <p className="mt-3 break-words font-mono text-xs text-ink-600">
            {artifact.path}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <StatusChip label={artifact.statusLabel} />
            <StatusChip label={artifact.safetyLabel} />
          </div>
        </div>
      </div>
    </article>
  );
}

function PreviewPane({
  selectedArtifact,
  supportedArtifacts,
}: {
  selectedArtifact?: WorkspaceArtifact;
  supportedArtifacts: WorkspaceArtifact[];
}) {
  return (
    <aside
      className="rounded-2xl border border-ink-950/10 bg-ink-950 p-4 text-paper-50"
      aria-labelledby="preview-pane-heading"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-paper-100/65">
            Preview Pane
          </p>
          <h2
            id="preview-pane-heading"
            className="mt-1 text-xl font-semibold text-paper-50"
          >
            Readable Previews
          </h2>
        </div>
        <Layers3 aria-hidden="true" className="text-steel-100" size={24} />
      </div>

      {!selectedArtifact ? (
        <div className="mt-5 rounded-xl border border-dashed border-paper-100/20 bg-paper-100/10 p-5 text-paper-100/75">
          <h3 className="text-base font-semibold text-paper-50">
            Select an artifact
          </h3>
          <p className="mt-2 text-sm leading-6">
            Empty areas keep the preview quiet until a meaningful artifact is
            selected.
          </p>
        </div>
      ) : selectedArtifact.preview.kind === "unsupported" ? (
        <UnsupportedPreview artifact={selectedArtifact} />
      ) : (
        <div className="mt-5 space-y-3">
          {supportedArtifacts.map((artifact) => (
            <PreviewExample key={artifact.id} artifact={artifact} />
          ))}
        </div>
      )}
    </aside>
  );
}

function PreviewExample({ artifact }: { artifact: WorkspaceArtifact }) {
  const PreviewIcon = previewIcons[artifact.preview.kind];

  return (
    <article className="rounded-xl border border-paper-100/10 bg-paper-100/10 p-4">
      <div className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-paper-50 text-steel-700">
          <PreviewIcon aria-hidden="true" size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase text-steel-100">
            {artifact.preview.eyebrow}
          </p>
          <h3 className="mt-1 text-base font-semibold text-paper-50">
            {artifact.preview.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-paper-100/75">
            {artifact.preview.summary}
          </p>
          <PreviewDetail artifact={artifact} />
        </div>
      </div>
    </article>
  );
}

function PreviewDetail({ artifact }: { artifact: WorkspaceArtifact }) {
  if (artifact.preview.kind === "image-card") {
    return (
      <div className="mt-4 grid grid-cols-3 gap-2">
        {artifact.preview.details.map((detail) => (
          <div
            key={detail}
            className="min-h-20 rounded-lg border border-paper-100/10 bg-paper-50 p-3 text-ink-950"
          >
            <Boxes aria-hidden="true" size={16} />
            <p className="mt-3 text-sm font-semibold">{detail}</p>
          </div>
        ))}
      </div>
    );
  }

  if (artifact.preview.kind === "code-summary") {
    return (
      <ul className="mt-3 space-y-2">
        {artifact.preview.details.map((detail) => (
          <li
            key={detail}
            className="rounded-lg border border-paper-100/10 bg-ink-800 px-3 py-2 font-mono text-xs leading-5 text-paper-100/75"
          >
            {detail}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="mt-3 space-y-2 text-sm text-paper-100/75">
      {artifact.preview.details.map((detail) => (
        <li key={detail} className="flex gap-2">
          <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-steel-100" />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  );
}

function UnsupportedPreview({ artifact }: { artifact: WorkspaceArtifact }) {
  return (
    <article className="mt-5 rounded-xl border border-clay-600/30 bg-clay-100 p-4 text-clay-600">
      <StatusChip label={artifact.preview.eyebrow} tone="review" />
      <h3 className="mt-4 text-lg font-semibold text-ink-950">
        {artifact.preview.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-ink-600">
        {artifact.preview.summary}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-ink-600">
        {artifact.preview.details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-clay-600" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function EmptyState({ title, summary }: { title: string; summary: string }) {
  return (
    <div className="mt-5 rounded-xl border border-dashed border-ink-950/15 bg-paper-100 p-8 text-center">
      <Archive aria-hidden="true" className="mx-auto text-steel-700" size={30} />
      <h3 className="mt-4 text-lg font-semibold text-ink-950">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink-600">
        {summary}
      </p>
    </div>
  );
}
