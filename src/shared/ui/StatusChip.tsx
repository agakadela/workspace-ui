import {
  CircleDot,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

export type StatusTone = "safe" | "review" | "private" | "info" | "mock";

const statusToneClasses: Record<StatusTone, string> = {
  safe: "border-moss-700/25 bg-moss-100 text-moss-700",
  review: "border-clay-600/25 bg-clay-100 text-clay-600",
  private: "border-clay-600/30 bg-clay-100 text-clay-600",
  info: "border-steel-700/25 bg-steel-100 text-steel-700",
  mock: "border-paper-100/20 bg-paper-100/10 text-paper-100",
};

const statusIcons = {
  safe: ShieldCheck,
  review: TriangleAlert,
  private: LockKeyhole,
  info: CircleDot,
  mock: Sparkles,
};

function getStatusTone(label: string): StatusTone {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("private")) {
    return "private";
  }

  if (
    normalizedLabel.includes("review") ||
    normalizedLabel.includes("unsupported")
  ) {
    return "review";
  }

  if (
    normalizedLabel.includes("safe") ||
    normalizedLabel.includes("ready") ||
    normalizedLabel.includes("current")
  ) {
    return "safe";
  }

  if (normalizedLabel.includes("mock")) {
    return "mock";
  }

  return "info";
}

export function StatusChip({
  label,
  tone = getStatusTone(label),
}: {
  label: string;
  tone?: StatusTone;
}) {
  const StatusIcon = statusIcons[tone];

  return (
    <span
      className={`inline-flex min-h-7 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${statusToneClasses[tone]}`}
    >
      <StatusIcon aria-hidden="true" size={13} />
      {label}
    </span>
  );
}
