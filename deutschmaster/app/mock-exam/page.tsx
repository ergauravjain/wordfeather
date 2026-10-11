import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/coming-soon";
import { getDashboardData, getLevelContent } from "@/lib/data";
import { SKILL_META } from "@/lib/levels";

export const metadata: Metadata = { title: "Mock exam" };

export default async function MockExamPage() {
  const { user } = await getDashboardData();
  const { mockExams } = await getLevelContent(user.targetLevel);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Prüfungssimulation</h1>
        <p className="mt-1 text-sm text-fg-muted">Timed, exam-condition simulations for your target level ({user.targetLevel}).</p>
      </header>
      {mockExams.map((m) => (
        <section key={m.id} className="rounded-2xl border border-border bg-surface p-5">
          <h2 className="font-semibold">{m.title}</h2>
          <p className="mt-1 text-sm text-fg-muted">{m.description}</p>
          <ol className="mt-4 grid gap-2 sm:grid-cols-4">
            {m.sections.map((s) => (
              <li key={s.id} className="rounded-xl bg-surface-2 p-3 text-sm">
                <div className="font-medium">{s.order}. {SKILL_META[s.skill].german}</div>
                <div className="tabular-nums text-fg-muted">{s.durationMinutes} min · {s.maxPoints} pts</div>
              </li>
            ))}
          </ol>
        </section>
      ))}
      <ComingSoon title="Exam runner is the next milestone">
        Strict per-section countdowns, auto-submit on timeout and a score report with pass/fail per module ({mockExams[0]?.passPercent ?? 60} %) will live here.
      </ComingSoon>
    </div>
  );
}
