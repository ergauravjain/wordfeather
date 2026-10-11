import type { Metadata } from "next";
import { ActivityCard } from "@/components/dashboard/activity-card";
import { SkillBreakdown } from "@/components/dashboard/skill-breakdown";
import { StatTiles } from "@/components/dashboard/stat-tiles";
import { getDashboardData } from "@/lib/data";

export const metadata: Metadata = { title: "Progress" };

export default async function ProgressPage() {
  const data = await getDashboardData();
  const withContent = data.levels.filter((l) => l.total > 0);
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Progress</h1>
        <p className="mt-1 text-sm text-fg-muted">Mastery, streaks and study history.</p>
      </header>
      <StatTiles data={data} />
      <div className="grid gap-4 lg:grid-cols-2">
        {withContent.map((l) => <SkillBreakdown key={l.level} progress={l} />)}
        <ActivityCard activity={data.activity} />
      </div>
    </div>
  );
}
