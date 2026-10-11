import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Layers, Timer } from "lucide-react";
import { ExamFormatCard } from "@/components/level/exam-format-card";
import { SKILL_ICON } from "@/components/level/skill-icon";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ProgressRing } from "@/components/ui/progress-ring";
import { setTargetLevel } from "@/lib/actions";
import { getDashboardData, getLevelContent, isLevel } from "@/lib/data";
import { LEVEL_ACCENT, LEVEL_INFO, SKILL_META } from "@/lib/levels";
import { cn } from "@/lib/utils";
import { LEVELS, SKILLS } from "@/types";

type Props = { params: Promise<{ level: string }> };

export function generateStaticParams() {
  return LEVELS.map((l) => ({ level: l.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const level = (await params).level.toUpperCase();
  return isLevel(level) ? { title: `${level} · ${LEVEL_INFO[level].name}` } : {};
}

export default async function LevelPage({ params }: Props) {
  const level = (await params).level.toUpperCase();
  if (!isLevel(level)) notFound();

  const [data, content] = await Promise.all([getDashboardData(), getLevelContent(level)]);
  const info = LEVEL_INFO[level];
  const accent = LEVEL_ACCENT[level];
  const progress = data.levels.find((l) => l.level === level)!;
  const isTarget = data.user.targetLevel === level;
  const mockExam = content.mockExams[0];

  return (
    <div className="space-y-8">
      <nav aria-label="Breadcrumb" className="text-sm text-fg-subtle">
        <Link href="/levels" className="hover:text-fg">Levels</Link> <span aria-hidden>/</span> <span className="text-fg">{level}</span>
      </nav>

      <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className={cn("text-4xl font-bold tracking-tight", accent.text)}>{level}</span>
            <div>
              <h1 className="text-xl font-semibold">{info.name}</h1>
              <p className="text-sm text-fg-subtle">{info.germanName}</p>
            </div>
          </div>
          <p className="mt-3 text-fg-muted">{info.summary}</p>
          <div className="mt-4">
            {isTarget ? (
              <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium", accent.soft, accent.text)}>
                <Check className="size-4" aria-hidden /> Your target level
              </span>
            ) : (
              <form action={setTargetLevel.bind(null, level)}>
                <Button variant="secondary" size="sm" type="submit">Set {level} as my target</Button>
              </form>
            )}
          </div>
        </div>
        <ProgressRing value={progress.mastery} color={accent.stroke} size={96} stroke={8} label={`${level} mastery`}>
          <div className="text-center">
            <div className="text-lg font-semibold tabular-nums">{progress.mastery}%</div>
            <div className="text-[10px] uppercase tracking-wide text-fg-subtle">mastery</div>
          </div>
        </ProgressRing>
      </header>

      {/* Four skills */}
      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="mb-4 text-lg font-semibold tracking-tight">Practice by skill</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((skill) => {
            const meta = SKILL_META[skill];
            const Icon = SKILL_ICON[skill];
            const sp = progress.skills.find((s) => s.skill === skill)!;
            const count = content.exercises.filter((e) => e.skill === skill).length;
            return (
              <Link
                key={skill}
                href={`/levels/${level.toLowerCase()}/${meta.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-5 transition hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl", accent.soft, accent.text)}>
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">
                      {meta.german} <span className="font-normal text-fg-subtle">· {meta.label}</span>
                    </h3>
                    <p className="mt-0.5 text-sm text-fg-muted">{meta.description}</p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-fg-subtle transition group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
                </div>
                <div className="mt-5">
                  <div className="mb-1.5 flex justify-between text-xs text-fg-subtle">
                    <span>{count ? `${count} practice set${count === 1 ? "" : "s"}` : "Coming soon"}</span>
                    {count > 0 && <span className="tabular-nums">{sp.mastery}%</span>}
                  </div>
                  <ProgressBar value={sp.mastery} color={accent.stroke} label={`${meta.label} mastery`} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Mock exam + vocabulary */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="flex flex-col p-5">
          <div className="flex items-center gap-2 text-sm font-semibold"><Timer className="size-4" aria-hidden /> Prüfungssimulation</div>
          {mockExam ? (
            <>
              <h3 className="mt-2 text-lg font-semibold">{mockExam.title}</h3>
              <p className="mt-1 text-sm text-fg-muted">{mockExam.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs">
                {mockExam.sections.map((s) => (
                  <li key={s.id} className="rounded-md bg-surface-2 px-2 py-1 text-fg-muted">
                    {SKILL_META[s.skill].german} · <span className="tabular-nums">{s.durationMinutes} min</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/mock-exam" className="mt-5 self-start">Start simulation <ArrowRight className="size-4" aria-hidden /></ButtonLink>
            </>
          ) : (
            <p className="mt-2 text-sm text-fg-muted">A full {level} simulation is being prepared.</p>
          )}
        </Card>
        <Card className="flex flex-col p-5">
          <div className="flex items-center gap-2 text-sm font-semibold"><Layers className="size-4" aria-hidden /> Wortschatz</div>
          <h3 className="mt-2 text-lg font-semibold">{content.vocabCount ? `${content.vocabCount} ${level} flashcards` : `${level} vocabulary deck`}</h3>
          <p className="mt-1 text-sm text-fg-muted">High-frequency exam words and verbs with prepositions, reviewed with spaced repetition.</p>
          {content.vocabTopics.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2 text-xs">
              {content.vocabTopics.map((t) => <li key={t} className="rounded-md bg-surface-2 px-2 py-1 text-fg-muted">{t}</li>)}
            </ul>
          )}
          <ButtonLink href="/vocabulary" variant="secondary" className="mt-5 self-start">Open deck</ButtonLink>
        </Card>
      </div>

      {/* Exam formats */}
      <section aria-labelledby="formats-heading">
        <h2 id="formats-heading" className="text-lg font-semibold tracking-tight">Exam formats at {level}</h2>
        <p className="mb-4 text-sm text-fg-muted">Timings follow the published formats; check the provider&apos;s current Modellsatz before your exam.</p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {info.exams.map((exam) => <ExamFormatCard key={exam.name} exam={exam} />)}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-sm font-semibold">At {level} you can …</h2>
          <ul className="mt-3 space-y-2 text-sm text-fg-muted">
            {info.canDo.map((c) => (
              <li key={c} className="flex gap-2"><Check className={cn("mt-0.5 size-4 shrink-0", accent.text)} aria-hidden />{c}</li>
            ))}
          </ul>
        </Card>
        <Card className="p-5">
          <h2 className="text-sm font-semibold">Typical exam topics</h2>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {info.topics.map((t) => <li key={t} className="rounded-lg border border-border px-2.5 py-1 text-fg-muted">{t}</li>)}
          </ul>
        </Card>
      </section>
    </div>
  );
}
