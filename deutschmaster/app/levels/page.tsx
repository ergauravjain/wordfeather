import type { Metadata } from "next";
import { LevelGrid } from "@/components/dashboard/level-grid";
import { getDashboardData } from "@/lib/data";

export const metadata: Metadata = { title: "Levels" };

export default async function LevelsPage() {
  const data = await getDashboardData();
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Levels A1 – C1</h1>
        <p className="mt-1 max-w-2xl text-sm text-fg-muted">
          Pick the level you are preparing for. Your target level drives the dashboard, the mock exam and the vocabulary deck.
        </p>
      </header>
      <LevelGrid levels={data.levels} targetLevel={data.user.targetLevel} />
    </div>
  );
}
