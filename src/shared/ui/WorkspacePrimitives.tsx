import type { ReactNode } from "react";

type WorkspaceTrayProps = {
  id?: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
};

type SurfaceTabItem = {
  label: string;
  count?: number | string;
  isActive?: boolean;
};

export function WorkspaceTray({
  id,
  labelledBy,
  children,
  className = "",
}: WorkspaceTrayProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`rounded-panel border border-paper-100/10 bg-canvas-950 p-5 text-paper-50 shadow-float ${className}`}
    >
      {children}
    </section>
  );
}

export function SurfaceTabStrip({
  label,
  items,
  className = "",
}: {
  label: string;
  items: SurfaceTabItem[];
  className?: string;
}) {
  return (
    <div
      aria-label={label}
      role="list"
      className={`flex flex-wrap gap-2 rounded-panel border border-paper-100/10 bg-paper-100/5 p-1 ${className}`}
    >
      {items.map((item) => (
        <span
          key={item.label}
          role="listitem"
          aria-current={item.isActive ? "page" : undefined}
          className={`inline-flex min-h-9 items-center gap-2 rounded-control px-3 py-1.5 text-sm font-semibold ${
            item.isActive
              ? "bg-paper-50 text-ink-950"
              : "text-paper-100/70"
          }`}
        >
          {item.label}
          {item.count !== undefined ? (
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                item.isActive
                  ? "bg-ink-950 text-paper-50"
                  : "bg-paper-100/10 text-paper-100"
              }`}
            >
              {item.count}
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}
