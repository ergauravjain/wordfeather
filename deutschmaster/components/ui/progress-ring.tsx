import { cn } from "@/lib/utils";

/** Single-value meter. The number is always printed in the centre, so colour is never the only cue. */
export function ProgressRing({
  value,
  size = 72,
  stroke = 6,
  color = "var(--fg)",
  label,
  className,
  children,
}: {
  value: number;
  size?: number;
  stroke?: number;
  color?: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const pct = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  return (
    <div
      role="meter"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      aria-label={label}
      className={cn("relative inline-grid shrink-0 place-items-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--track)" strokeWidth={stroke} />
        {pct > 0 && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - pct / 100)}
          />
        )}
      </svg>
      <div className="absolute inset-0 grid place-items-center">{children ?? <span className="text-sm font-semibold tabular-nums">{pct}%</span>}</div>
    </div>
  );
}
