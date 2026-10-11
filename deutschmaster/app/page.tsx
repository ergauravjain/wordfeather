import { ArrowRight, Layers, Timer } from "lucide-react";
import { ActivityCard } from "@/components/dashboard/activity-card";
import { LevelGrid } from "@/components/dashboard/level-grid";
import { SkillBreakdown } from "@/components/dashboard/skill-breakdown";
import { StatTiles } from "@/components/dashboard/stat-tiles";
import { ButtonLink } from "@/components/ui/button";
import { ProgressRing } from "@/components/ui/progress-ring";
import { getDashboardData } from "@/lib/data";
import { LEVEL_ACCENT, LEVEL_INFO } from "@/lib/levels";

function greeting() {
  const h = new Date().getHours();
  return h < 11 ? "Guten Morgen" : h < 18 ? "Guten Tag" : "Guten Abend";
}

export default async function DashboardPage() {
  const data = await getDashboardData();
  const target = data.levels.find((l) => l.level === data.user.targetLevel)!;
  const info = LEVEL_INFO[target.level];
  const accent = LEVEL_ACCENT[target.level];
  const slug = target.level.toLowerCase();

  return (
    <div className="space-y-8">
      {/* Hero: where you are and what to do next */}
      <section className="flex flex-col gap-6 rounded-3xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
        <ProgressRing value={target.mastery} color={accent.stroke} size={112} stroke={9} label={`${target.level} mastery`}>
          <div className="text-center">
            <div className={`text-2xl font-bold ${accent.text}`}>{target.level}</div>
            <div className="text-xs tabular-nums text-fg-muted">{target.mastery}%</div>
          </div>
        </ProgressRing>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-fg-muted">
            {greeting()}, {data.user.name}
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            On track for {info.exams[0]?.name ?? target.level}
          </h1>
          <p className="mt-2 text-sm text-fg-muted">
            {target.total
              ? `${target.completed} of ${target.total} practice sets attempted · ${data.cardsDue} vocabulary cards due today`
              : "Practice content for this level is coming soon — explore B1 in the meantime."}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <ButtonLink href={`/levels/${slug}`}>
              Continue practice <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/mock-exam" variant="secondary">
              <Timer className="size-4" aria-hidden /> Mock exam
            </ButtonLink>
            <ButtonLink href="/vocabulary" variant="secondary">
              <Layers className="size-4" aria-hidden /> Review {data.cardsDue} cards
            </ButtonLink>
          </div>
        </div>
      </section>

      <StatTiles data={data} />

      <section aria-labelledby="levels-heading">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 id="levels-heading" className="text-lg font-semibold tracking-tight">
              Choose your level
            </h2>
            <p className="text-sm text-fg-muted">Each level follows the official Goethe, telc and TestDaF formats.</p>
          </div>
        </div>
        <LevelGrid levels={data.levels} targetLevel={data.user.targetLevel} />
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <SkillBreakdown progress={target} />
        <ActivityCard activity={data.activity} />
      </div>
    </div>
  );
}
