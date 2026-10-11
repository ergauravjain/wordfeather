import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { LEVEL_ACCENT, SKILL_META } from "@/lib/levels";
import type { LevelProgress } from "@/types";

export function SkillBreakdown({ progress }: { progress: LevelProgress }) {
  const accent = LEVEL_ACCENT[progress.level];
  return (
    <Card>
      <CardHeader title={`${progress.level} skills`} description="Best score per exercise, averaged by skill" />
      <ul className="space-y-4 p-5">
        {progress.skills.map((s) => {
          const meta = SKILL_META[s.skill];
          return (
            <li key={s.skill}>
              <Link href={`/levels/${progress.level.toLowerCase()}/${meta.slug}`} className="block rounded-lg hover:opacity-80">
                <div className="mb-1.5 flex items-baseline justify-between text-sm">
                  <span className="font-medium">
                    {meta.german} <span className="font-normal text-fg-subtle">· {meta.label}</span>
                  </span>
                  <span className="tabular-nums text-fg-muted">
                    {s.total ? `${s.mastery}%` : "—"}
                  </span>
                </div>
                <ProgressBar value={s.mastery} color={accent.stroke} label={`${meta.label} mastery`} />
                <p className="mt-1 text-xs text-fg-subtle">{s.total ? `${s.completed} of ${s.total} exercises attempted` : "No exercises yet"}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
