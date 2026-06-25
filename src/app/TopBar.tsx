import { Bell, Command, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { navItems, type ViewId } from "./cockpitData";
import { IconButton } from "./cockpitPrimitives";

export function TopBar({
  activeView,
  onSelectView,
}: {
  activeView: ViewId;
  onSelectView: (view: ViewId) => void;
}) {
  return (
    <header
      aria-label="Workspace product chrome"
      className="mx-auto grid max-w-[1440px] gap-4 px-5 py-6 md:px-8 lg:grid-cols-[220px_minmax(0,1fr)_auto] lg:items-center lg:px-12 xl:grid-cols-[270px_minmax(0,1fr)_auto]"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xl font-semibold leading-none text-white">
            workspace-ui
          </p>
          <p className="mt-1 text-xs font-medium text-ash-400">
            public-safe local workspace
          </p>
        </div>
      </div>

      <nav
        aria-label="Primary workspace views"
        className="flex min-w-0 justify-center gap-2 overflow-x-auto"
      >
        {navItems.map((item) => (
          <TopNavButton
            key={item.id}
            item={item}
            isActive={activeView === item.id}
            onSelect={() => onSelectView(item.id)}
          />
        ))}
      </nav>

      <div className="flex min-w-0 items-center justify-start gap-2 lg:justify-end">
        <div className="hidden h-12 w-[250px] min-w-0 items-center gap-3 rounded-control bg-night-930 px-4 text-sm text-ash-300 ring-1 ring-white/[0.06] 2xl:flex">
          <Command aria-hidden="true" size={17} />
          <span className="truncate">Phase 0 boundary: mock data only</span>
          <span className="ml-auto rounded-md bg-black/25 px-2 py-1 text-[11px] font-semibold text-ash-400">
            no IO
          </span>
        </div>
        <IconButton label="Mock notifications">
          <Bell aria-hidden="true" size={18} />
        </IconButton>
        <IconButton label="Context readiness">
          <Sparkles aria-hidden="true" size={18} />
        </IconButton>
        <span className="flex size-12 shrink-0 items-center justify-center rounded-control bg-ice-100 text-sm font-bold text-night-980">
          AG
        </span>
      </div>
    </header>
  );
}

function TopNavButton({
  item,
  isActive,
  onSelect,
}: {
  item: { label: string; icon: LucideIcon };
  isActive: boolean;
  onSelect: () => void;
}) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      aria-current={isActive ? "page" : undefined}
      onClick={onSelect}
      className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-control px-4 text-sm font-semibold transition ${
        isActive
          ? "bg-black text-white shadow-control"
          : "text-ash-400 hover:bg-white/[0.06] hover:text-white"
      }`}
    >
      <Icon aria-hidden="true" size={16} />
      {item.label}
    </button>
  );
}
