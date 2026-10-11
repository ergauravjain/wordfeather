import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, FileText, ListChecks, Play } from "lucide-react";
import { SKILL_ICON } from "@/components/level/skill-icon";
import { Badge } from "@/components/ui/badge";
import { ComingSoon } from "@/components/ui/coming-soon";
import { getLevelContent, isLevel } from "@/lib/data";
import { LEVEL_ACCENT, PROVIDER_LABEL, SKILL_META, skillFromSlug } from "@/lib/levels";
import { cn } from "@/lib/utils";
import { LEVELS, SKILLS, type Exercise } from "@/types";

type Props = { params: Promise<{ level: string; skill: string }> };

export function generateStaticParams() {
  return LEVELS.flatMap((l) => SKILLS.map((s) => ({ level: l.toLowerCase(), skill: SKILL_META[s].slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const skill = skillFromSlug(p.skill);
  return skill ? { title: `${p.level.toUpperCase()} ${SKILL_META[skill].german}` } : {};
}

function meta(e: Exercise) {
  const items: { icon: typeof Clock; text: string }[] = [];
  if (e.timeLimitSec) items.push({ icon: Clock, text: `${Math.round(e.timeLimitSec / 60)} min` });
  if (e.questions.length) {
    const n = e.questions.reduce((s, q) => s + (q.type === "MATCHING" ? q.options.left.length : 1), 0);
    items.push({ icon: ListChecks, text: `${n} items` });
  }
  if (e.minWords) items.push({ icon: FileText, text: `~${e.minWords} words` });
  if (e.prepSeconds) items.push({ icon: Clock, text: `${Math.round(e.prepSeconds / 60) || 1} min prep · ${Math.round((e.speakSeconds ?? 0) / 60)} min speaking` });
  if (e.maxPlays) items.push({ icon: Play, text: `Plays ${e.maxPlays}×` });
  return items;
}

export default async function SkillPage({ params }: Props) {
  const p = await params;
  const level = p.level.toUpperCase();
  const skill = skillFromSlug(p.skill);
  if (!isLevel(level) || !skill) notFound();

  const content = await getLevelContent(level);
  const exercises = content.exercises.filter((e) => e.skill === skill);
  const skillMeta = SKILL_META[skill];
  const Icon = SKILL_ICON[skill];
  const accent = LEVEL_ACCENT[level];

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="text-sm text-fg-subtle">
        <Link href="/levels" className="hover:text-fg">Levels</Link> <span aria-hidden>/</span>{" "}
        <Link href={`/levels/${p.level}`} className="hover:text-fg">{level}</Link> <span aria-hidden>/</span>{" "}
        <span className="text-fg">{skillMeta.german}</span>
      </nav>

      <header className="flex items-start gap-4">
        <span className={cn("grid size-12 shrink-0 place-items-center rounded-2xl", accent.soft, accent.text)}>
          <Icon className="size-6" aria-hidden />
        </span>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {level} {skillMeta.german} <span className="font-normal text-fg-subtle">· {skillMeta.label}</span>
          </h1>
          <p className="mt-1 text-sm text-fg-muted">{skillMeta.description}</p>
        </div>
      </header>

      {exercises.length === 0 ? (
        <ComingSoon title={`${level} ${skillMeta.label.toLowerCase()} sets are on the way`}>
          Content is seeded for B1 first. Add exercises for {level} in <code>lib/content</code> and run <code>npm run db:seed</code>.
        </ComingSoon>
      ) : (
        <ol className="space-y-3">
          {exercises.map((e) => (
            <li key={e.id} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{e.part}</Badge>
                    <Badge>{PROVIDER_LABEL[e.provider]}</Badge>
                  </div>
                  <h2 className="mt-2 font-semibold">{e.title}</h2>
                  <p className="mt-1 line-clamp-2 text-sm text-fg-muted">{e.prompt ?? e.instructions}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-fg-subtle">
                    {meta(e).map(({ icon: I, text }) => (
                      <li key={text} className="flex items-center gap-1"><I className="size-3.5" aria-hidden />{text}</li>
                    ))}
                  </ul>
                </div>
                <span
                  className="inline-flex h-8 shrink-0 items-center self-start rounded-xl border border-dashed border-border px-3 text-xs text-fg-subtle"
                  title="The exercise player is the next milestone"
                >
                  Player coming next
                </span>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
