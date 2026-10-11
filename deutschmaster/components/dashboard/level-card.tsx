import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ProgressRing } from "@/components/ui/progress-ring";
import { setTargetLevel } from "@/lib/actions";
import { LEVEL_ACCENT, LEVEL_INFO, PROVIDER_LABEL } from "@/lib/levels";
import { cn } from "@/lib/utils";
import type { LevelProgress } from "@/types";

export function LevelCard({ progress, isTarget }: { progress: LevelProgress; isTarget: boolean }) {
  const { level } = progress;
  const info = LEVEL_INFO[level];
  const accent = LEVEL_ACCENT[level];
  const providers = [...new Set(info.exams.map((e) => PROVIDER_LABEL[e.provider]))];
  const hasContent = progress.total > 0;

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-surface p-5 transition hover:shadow-sm",
        isTarget ? cn("border-transparent ring-2", accent.ring) : "border-border",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className={cn("text-3xl font-bold tracking-tight", accent.text)}>{level}</span>
            {isTarget && (
              <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold", accent.soft, accent.text)}>Your target</span>
            )}
          </div>
          <h3 className="mt-1 font-semibold">{info.name}</h3>
          <p className="text-xs text-fg-subtle">{info.germanName}</p>
        </div>
        <ProgressRing value={progress.mastery} color={accent.stroke} size={64} label={`${level} mastery`} />
      </div>

      <p className="mt-4 text-sm text-fg-muted">{info.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Exams">
        {providers.map((p) => (
          <li key={p} className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-fg-muted">
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-2 pt-5">
        <p className="text-xs text-fg-subtle">
          {hasContent ? `${progress.completed} / ${progress.total} exercises done` : "Content coming soon"}
        </p>
        <div className="flex items-center gap-1">
          {!isTarget && (
            <form action={setTargetLevel.bind(null, level)}>
              <button type="submit" className="relative z-10 rounded-lg px-2.5 py-1.5 text-xs font-medium text-fg-muted hover:bg-surface-2 hover:text-fg">
                Set as target
              </button>
            </form>
          )}
          {isTarget && <Check className={cn("size-4", accent.text)} aria-hidden />}
          <Link
            href={`/levels/${level.toLowerCase()}`}
            className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold hover:bg-surface-2 after:absolute after:inset-0 after:rounded-2xl"
            aria-label={`Open ${level} ${info.name}`}
          >
            Open <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
