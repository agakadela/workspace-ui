import type { ReactNode } from "react";

import type { StatusItem, Tone } from "./cockpitData";

const toneClasses: Record<Tone, string> = {
  blue: "border-sky-400/35 bg-sky-400/12 text-ice-100",
  orange: "border-flame-500/35 bg-flame-500/12 text-peach-100",
  mint: "border-mint-300/35 bg-mint-300/12 text-mint-100",
  neutral: "border-white/10 bg-white/[0.07] text-ash-100",
  danger: "border-flame-500/40 bg-flame-500/14 text-peach-100",
};

export function StatusPill({
  status,
  className = "",
}: {
  status: StatusItem;
  className?: string;
}) {
  const Icon = status.icon;

  return (
    <span
      className={`inline-flex min-h-8 items-center gap-2 rounded-pill border px-3 py-1 text-xs font-bold ${toneClasses[status.tone]} ${className}`}
    >
      <Icon aria-hidden="true" size={13} />
      {status.label}
    </span>
  );
}

export function IconButton({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex size-12 shrink-0 items-center justify-center rounded-control bg-night-930 text-ash-200 ring-1 ring-white/[0.06] transition hover:bg-night-880 hover:text-white"
    >
      {children}
    </button>
  );
}

export function CompassGlyph() {
  return (
    <span
      className="relative flex size-4 items-center justify-center"
      aria-hidden="true"
    >
      <span className="absolute size-4 rounded-full border border-current" />
      <span className="size-1.5 rounded-full bg-current" />
    </span>
  );
}
