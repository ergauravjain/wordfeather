import { cn } from "@/lib/utils";

export function ProgressBar({ value, color = "var(--fg)", label, className }: { value: number; color?: string; label: string; className?: string }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label={label} className={cn("h-2 w-full overflow-hidden rounded-full bg-track", className)}>
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}
