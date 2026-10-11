import { Card } from "@/components/ui/card";
import { PROVIDER_LABEL, type ExamFormat } from "@/lib/levels";
import { formatMinutes } from "@/lib/utils";

export function ExamFormatCard({ exam }: { exam: ExamFormat }) {
  const total = exam.sections.reduce((s, x) => s + x.minutes, 0);
  return (
    <Card className="p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">{PROVIDER_LABEL[exam.provider]}</p>
      <h3 className="mt-1 font-semibold">{exam.name}</h3>
      <table className="mt-4 w-full text-sm">
        <caption className="sr-only">Sections and durations</caption>
        <tbody>
          {exam.sections.map((s) => (
            <tr key={s.skill} className="border-t border-border first:border-t-0">
              <th scope="row" className="py-1.5 pr-3 text-left font-normal text-fg-muted">{s.label}</th>
              <td className="py-1.5 text-right tabular-nums">{s.minutes} min</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-border">
            <th scope="row" className="pt-2 text-left font-medium">Total</th>
            <td className="pt-2 text-right font-medium tabular-nums">{formatMinutes(total)}</td>
          </tr>
        </tfoot>
      </table>
      <p className="mt-3 text-xs text-fg-subtle">Pass: {exam.passRule}</p>
    </Card>
  );
}
