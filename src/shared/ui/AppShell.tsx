import type { ReactNode } from "react";
import { FolderKanban, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { StatusChip } from "./StatusChip";

export type AppShellNavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onSelect: () => void;
};

type AppShellProps = {
  navItems: AppShellNavItem[];
  children: ReactNode;
};

export function AppShell({ navItems, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-canvas-950 text-paper-50">
      <header
        aria-label="Workspace product chrome"
        className="sticky top-0 z-30 border-b border-paper-100/10 bg-canvas-950/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-[1540px] flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-panel bg-paper-50 text-ink-950 shadow-float">
                <FolderKanban aria-hidden="true" size={20} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold leading-tight text-paper-50">
                  workspace-ui
                </p>
                <p className="truncate text-xs text-paper-100/65">
                  Fictional local workspace
                </p>
              </div>
            </div>
            <BoundaryStatus label="Phase 0 mock boundaries" icon={ShieldCheck} />
          </div>

          <nav
            aria-label="Primary workspace views"
            className="flex min-w-0 gap-2 overflow-x-auto rounded-panel border border-paper-100/10 bg-paper-100/5 p-1"
          >
            {navItems.map((item) => (
              <ShellNavButton key={item.id} item={item} />
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-2 lg:justify-end">
            <StatusChip label="Mock only" tone="mock" />
            <StatusChip label="No filesystem" tone="mock" />
          </div>
        </div>
      </header>

      <main className="px-3 py-4 sm:px-5 lg:px-8 lg:py-6">
        <WorkspaceCanvas>{children}</WorkspaceCanvas>
      </main>
    </div>
  );
}

function ShellNavButton({ item }: { item: AppShellNavItem }) {
  const NavIcon = item.icon;

  return (
    <button
      type="button"
      aria-current={item.isActive ? "page" : undefined}
      onClick={item.onSelect}
      className={`inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-control px-3 py-2 text-sm font-semibold transition ${
        item.isActive
          ? "bg-paper-50 text-ink-950 shadow-float"
          : "text-paper-100/72 hover:bg-paper-100/10 hover:text-paper-50"
      }`}
    >
      <NavIcon aria-hidden="true" size={17} />
      {item.label}
    </button>
  );
}

function BoundaryStatus({
  label,
  icon: Icon,
}: {
  label: string;
  icon: LucideIcon;
}) {
  return (
    <span
      title={label}
      className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-control border border-paper-100/10 bg-paper-100/5 px-3 text-xs font-semibold text-paper-100"
    >
      <Icon aria-hidden="true" size={18} />
      <span className="hidden sm:inline">Bounded mock</span>
    </span>
  );
}

function WorkspaceCanvas({ children }: { children: ReactNode }) {
  return (
    <section
      aria-label="Dark workspace canvas"
      className="mx-auto min-h-[calc(100vh-6.5rem)] max-w-[1540px] rounded-shell border border-paper-100/10 bg-canvas-900 p-3 shadow-shell sm:p-4 lg:p-5"
    >
      {children}
    </section>
  );
}
