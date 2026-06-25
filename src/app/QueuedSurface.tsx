import { CircleDot } from "lucide-react";

import { cockpit, type ViewId } from "./cockpitData";
import { StatusPill } from "./cockpitPrimitives";
import { WorkspaceDetailsPanel } from "./WorkspaceDetailsPanel";

export function QueuedSurface({
  view,
  onSelectView,
}: {
  view: Exclude<ViewId, "home">;
  onSelectView: (view: ViewId) => void;
}) {
  const surface = cockpit.queuedSurfaces[view];
  const Icon = surface.icon;

  return (
    <div className="bg-night-940 p-4 lg:p-6">
      <section className="grid min-h-[620px] gap-3 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="workspace-field relative overflow-hidden rounded-panel border border-white/[0.06] bg-night-910 p-6 shadow-panel">
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-ash-400">{surface.eyebrow}</p>
              <h2 className="mt-3 text-4xl font-medium text-white">
                {surface.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-ash-300">
                {surface.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {surface.stats.map((stat) => (
                  <StatusPill
                    key={stat}
                    status={{ label: stat, tone: "neutral", icon: CircleDot }}
                  />
                ))}
              </div>
            </div>

            <div className="flex shrink-0 flex-wrap gap-2 lg:justify-end">
              <button
                type="button"
                className="min-h-11 rounded-control bg-black px-5 text-sm font-semibold text-white transition hover:bg-night-880"
                onClick={() => onSelectView("home")}
              >
                Back to Home
              </button>
              <button
                type="button"
                className="min-h-11 rounded-control bg-ice-100 px-5 text-sm font-semibold text-night-980 transition hover:bg-white"
                onClick={() => onSelectView("context")}
              >
                Context tray
              </button>
            </div>
          </div>

          <div className="relative z-10 mt-16 grid gap-4 md:grid-cols-3">
            {cockpit.pinnedDocs.map((doc) => (
              <article
                key={doc.id}
                className="rounded-card border border-white/[0.06] bg-night-880 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-ice-100 text-night-980">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-medium text-white">
                      {doc.title}
                    </h3>
                    <p className="mt-1 text-xs text-ash-500">{doc.path}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-ash-300">{doc.reason}</p>
              </article>
            ))}
          </div>
        </div>

        <WorkspaceDetailsPanel />
      </section>
    </div>
  );
}
