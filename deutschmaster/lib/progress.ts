// Pure progress maths, shared by the database and demo data paths.

import { LEVELS, SKILLS, type AttemptSummary, type Exercise, type Level, type LevelProgress } from "@/types";

/** Best score ratio (0–1) per exercise. */
export function bestScores(attempts: AttemptSummary[]): Map<string, number> {
  const best = new Map<string, number>();
  for (const a of attempts) {
    if (a.maxScore <= 0) continue;
    const ratio = a.score / a.maxScore;
    best.set(a.exerciseId, Math.max(best.get(a.exerciseId) ?? 0, ratio));
  }
  return best;
}

/**
 * Mastery of a skill = mean best ratio over every exercise of that skill
 * (unattempted exercises count as 0). Level mastery = mean over the skills
 * that have content, so a level with only reading content isn't capped at 25 %.
 */
export function computeLevelProgress(
  exercises: Pick<Exercise, "id" | "level" | "skill">[],
  attempts: AttemptSummary[],
): LevelProgress[] {
  const best = bestScores(attempts);

  return LEVELS.map((level: Level) => {
    const ofLevel = exercises.filter((e) => e.level === level);
    const skills = SKILLS.map((skill) => {
      const ofSkill = ofLevel.filter((e) => e.skill === skill);
      const ratios = ofSkill.map((e) => best.get(e.id) ?? 0);
      const completed = ofSkill.filter((e) => best.has(e.id)).length;
      const mastery = ofSkill.length ? (ratios.reduce((s, r) => s + r, 0) / ofSkill.length) * 100 : 0;
      return { skill, mastery: Math.round(mastery), completed, total: ofSkill.length };
    });
    const withContent = skills.filter((s) => s.total > 0);
    const mastery = withContent.length
      ? Math.round(withContent.reduce((s, x) => s + x.mastery, 0) / withContent.length)
      : 0;
    return {
      level,
      mastery,
      completed: skills.reduce((s, x) => s + x.completed, 0),
      total: ofLevel.length,
      skills,
    };
  });
}

const DAY = 24 * 60 * 60 * 1000;
const utcDay = (d: Date) => Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());

/** Consecutive study days ending today (or yesterday, so the streak survives until midnight). */
export function computeStreak(studyDates: Date[], now = new Date()): number {
  const days = new Set(studyDates.map(utcDay));
  let cursor = utcDay(now);
  if (!days.has(cursor)) cursor -= DAY;
  let streak = 0;
  while (days.has(cursor)) {
    streak++;
    cursor -= DAY;
  }
  return streak;
}

/** Last `n` days (oldest first) with minutes filled in, zero for missing days. */
export function activityWindow(sessions: { date: Date; minutes: number }[], n = 14, now = new Date()) {
  const byDay = new Map(sessions.map((s) => [utcDay(s.date), s.minutes]));
  const today = utcDay(now);
  return Array.from({ length: n }, (_, i) => {
    const t = today - (n - 1 - i) * DAY;
    return { date: new Date(t).toISOString().slice(0, 10), minutes: byDay.get(t) ?? 0 };
  });
}
