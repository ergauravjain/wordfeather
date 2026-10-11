import { Bookmark, Flame, Layers, Timer } from "lucide-react";
import type { DashboardData } from "@/types";

export function StatTiles({ data }: { data: DashboardData }) {
  const tiles = [
    { icon: Flame, label: "Day streak", value: data.user.currentStreak, hint: `Best: ${data.user.longestStreak} days` },
    { icon: Layers, label: "Cards due", value: data.cardsDue, hint: `${data.cardsTotal} cards in deck` },
    { icon: Timer, label: "Mock exams", value: data.mockExamsTaken, hint: "completed" },
    { icon: Bookmark, label: "Bookmarks", value: data.bookmarks, hint: "difficult questions" },
  ];
  return (
    <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {tiles.map(({ icon: Icon, label, value, hint }) => (
        <div key={label} className="rounded-2xl border border-border bg-surface p-4">
          <dt className="flex items-center gap-2 text-xs font-medium text-fg-muted">
            <Icon className="size-4 text-fg-subtle" aria-hidden />
            {label}
          </dt>
          <dd className="mt-2 text-2xl font-semibold tabular-nums">{value}</dd>
          <dd className="text-xs text-fg-subtle">{hint}</dd>
        </div>
      ))}
    </dl>
  );
}
