import { ArrowLeft, Plus, Sparkles, Waypoints } from "lucide-react";

import { cockpit, getSurfaceLabel, type ViewId } from "./cockpitData";
import { CompassGlyph } from "./cockpitPrimitives";

export function ObjectHeader({
  activeView,
  onSelectView,
}: {
  activeView: ViewId;
  onSelectView: (view: ViewId) => void;
}) {
  return (
    <section
      aria-labelledby="workspace-title"
      className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto]"
    >
      <div>
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-3 rounded-control bg-night-930 px-4 text-sm font-semibold text-ash-200 ring-1 ring-white/[0.06] transition hover:bg-night-880 hover:text-white"
          onClick={() => onSelectView("home")}
        >
          <ArrowLeft aria-hidden="true" size={17} />
          Back To Home
        </button>

        <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-end">
          <span className="flex size-20 shrink-0 items-center justify-center rounded-object bg-night-920 ring-1 ring-white/[0.06]">
            <Waypoints aria-hidden="true" className="text-sky-400" size={36} />
          </span>
          <div className="min-w-0">
            <p className="text-base font-medium text-ash-400">
              {activeView === "home"
                ? cockpit.workspace.eyebrow
                : cockpit.queuedSurfaces[activeView].eyebrow}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h1
                id="workspace-title"
                className="max-w-[780px] text-5xl font-medium leading-[1.05] text-white md:text-6xl"
              >
                {getSurfaceLabel(activeView)}
              </h1>
              <span className="flex size-9 items-center justify-center rounded-xl bg-flame-500 text-white">
                <Sparkles aria-hidden="true" size={19} />
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-ash-300">
              {activeView === "home"
                ? cockpit.workspace.summary
                : cockpit.queuedSurfaces[activeView].summary}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-12 lg:items-end">
        <span className="inline-flex min-h-12 min-w-[174px] items-center justify-center gap-2 rounded-control bg-peach-100 px-4 text-sm font-semibold text-flame-600">
          <Sparkles aria-hidden="true" size={15} />
          {cockpit.workspace.updateLabel}
        </span>
        <div className="flex flex-wrap justify-start gap-2 lg:justify-end">
          <button
            type="button"
            className="inline-flex min-h-12 items-center gap-2 rounded-control bg-black px-5 text-sm font-semibold text-white shadow-control transition hover:bg-night-930"
            onClick={() => onSelectView("explorer")}
          >
            <CompassGlyph />
            Inspect Artifacts
          </button>
          <button
            type="button"
            className="inline-flex min-h-12 items-center gap-2 rounded-control bg-ice-100 px-5 text-sm font-semibold text-night-980 transition hover:bg-white"
            onClick={() => onSelectView("context")}
          >
            <Plus aria-hidden="true" size={18} />
            Prepare Context
          </button>
        </div>
      </div>
    </section>
  );
}
