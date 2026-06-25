import { cockpit, type ViewId } from "./cockpitData";

export function SurfaceTabs({ activeView }: { activeView: ViewId }) {
  const activeTabLabel: Record<ViewId, string> = {
    home: "Overview",
    explorer: "Artifacts",
    projectDesk: "Documents",
    context: "Context",
  };

  return (
    <div className="rounded-t-stage border-b border-black/70 bg-night-980 p-1.5">
      <div
        aria-label="Workspace object sections"
        role="list"
        className="grid gap-1.5 md:grid-cols-5"
      >
        {cockpit.tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.label === activeTabLabel[activeView];

          return (
            <span
              key={tab.label}
              role="listitem"
              aria-current={isActive ? "page" : undefined}
              className={`flex min-h-[62px] items-center justify-center gap-3 rounded-tab px-3 text-sm font-medium ring-1 transition ${
                isActive
                  ? "bg-ice-100 text-night-980 ring-transparent"
                  : "bg-night-960 text-ash-400 ring-white/[0.06]"
              }`}
            >
              <Icon aria-hidden="true" size={19} />
              <span>{tab.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                  isActive
                    ? "bg-white text-flame-600"
                    : "bg-white/[0.07] text-ash-300"
                }`}
              >
                {tab.count}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
