import { LevelCard } from "@/components/dashboard/level-card";
import type { Level, LevelProgress } from "@/types";

export function LevelGrid({ levels, targetLevel }: { levels: LevelProgress[]; targetLevel: Level }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {levels.map((p) => (
        <LevelCard key={p.level} progress={p} isTarget={p.level === targetLevel} />
      ))}
    </div>
  );
}
