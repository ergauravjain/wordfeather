import { Card, CardHeader } from "@/components/ui/card";
import { formatMinutes } from "@/lib/utils";
import type { DailyActivity } from "@/types";

const weekday = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { weekday: "narrow", timeZone: "UTC" });
const longDate = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });

/** 14-day study minutes. Single series, so no legend; hover/focus shows the exact value. */
export function ActivityCard({ activity }: { activity: DailyActivity[] }) {
  const max = Math.max(30, ...activity.map((d) => d.minutes));
  const total = activity.reduce((s, d) => s + d.minutes, 0);
  const activeDays = activity.filter((d) => d.minutes > 0).length;

  return (
    <Card>
      <CardHeader title="Study time · last 14 days" description={`${formatMinutes(total)} across ${activeDays} days`} />
      <div className="p-5 pt-4">
        <div className="flex h-28 items-end gap-1.5 border-b border-border" aria-hidden>
          {activity.map((d) => (
            <div key={d.date} tabIndex={-1} className="group relative flex h-full flex-1 items-end">
              <div
                className="w-full rounded-t bg-fg/80 transition group-hover:bg-fg"
                style={{ height: d.minutes ? `${Math.max(4, (d.minutes / max) * 100)}%` : 0 }}
              />
              <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 text-xs shadow-sm group-hover:block">
                <span className="text-fg-muted">{longDate(d.date)}</span> · <span className="font-medium">{d.minutes} min</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-1.5 flex gap-1.5 text-center text-[10px] text-fg-subtle" aria-hidden>
          {activity.map((d) => (
            <span key={d.date} className="flex-1">{weekday(d.date)}</span>
          ))}
        </div>
        <table className="sr-only">
          <caption>Minutes studied per day</caption>
          <tbody>
            {activity.map((d) => (
              <tr key={d.date}>
                <th scope="row">{longDate(d.date)}</th>
                <td>{d.minutes} minutes</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
