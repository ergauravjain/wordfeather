// Server-side data access. Reads from PostgreSQL when DATABASE_URL is set and
// falls back to the bundled content + demo fixtures otherwise (or if the DB is
// unreachable), so the app is always browsable.

import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { getPrisma, isDatabaseConfigured } from "@/lib/db";
import { exercises as bundledExercises, mockExams as bundledMockExams, vocabulary as bundledVocab } from "@/lib/content";
import { DEMO_BOOKMARKS, DEMO_CARDS, DEMO_MOCK_EXAMS_TAKEN, DEMO_USER, demoAttempts, demoStudySessions } from "@/lib/content/demo";
import { activityWindow, computeLevelProgress, computeStreak } from "@/lib/progress";
import { getCurrentUserEmail } from "@/lib/session";
import { LEVELS, type DashboardData, type Exercise, type Level, type MockExam, type Question } from "@/types";

export const TARGET_LEVEL_COOKIE = "dm_target_level";

export function isLevel(value: unknown): value is Level {
  return typeof value === "string" && (LEVELS as readonly string[]).includes(value);
}

async function withFallback<T>(dbQuery: () => Promise<T>, demo: () => T | Promise<T>): Promise<T> {
  if (!isDatabaseConfigured) return demo();
  try {
    return await dbQuery();
  } catch (err) {
    console.warn("[deutschmaster] database unavailable, using demo data:", (err as Error).message);
    return demo();
  }
}

async function cookieTargetLevel(): Promise<Level | undefined> {
  const value = (await cookies()).get(TARGET_LEVEL_COOKIE)?.value;
  return isLevel(value) ? value : undefined;
}

/** Cached per request: the layout and the page both read it. */
export const getDashboardData = cache(async (): Promise<DashboardData> => {
  const cookieLevel = await cookieTargetLevel();
  const now = new Date();

  return withFallback<DashboardData>(
    async () => {
      const db = getPrisma();
      const email = await getCurrentUserEmail();
      const user = await db.user.findUnique({ where: { email } });
      if (!user) throw new Error(`user ${email} not found — run \`npm run db:seed\``);

      const [exercises, attempts, sessions, cardsDue, cardsTotal, mockExamsTaken, bookmarks] = await Promise.all([
        db.exercise.findMany({ select: { id: true, level: true, skill: true } }),
        db.exerciseAttempt.findMany({ where: { userId: user.id }, select: { exerciseId: true, score: true, maxScore: true, createdAt: true } }),
        db.studySession.findMany({ where: { userId: user.id, date: { gte: new Date(now.getTime() - 60 * 864e5) } }, select: { date: true, minutes: true } }),
        db.cardProgress.count({ where: { userId: user.id, dueAt: { lte: now } } }),
        db.vocabCard.count(),
        db.examAttempt.count({ where: { userId: user.id, completedAt: { not: null } } }),
        db.bookmark.count({ where: { userId: user.id } }),
      ]);
      const currentStreak = computeStreak(sessions.filter((s) => s.minutes > 0).map((s) => s.date), now);

      return {
        source: "database",
        user: {
          name: user.name ?? "Learner",
          targetLevel: cookieLevel ?? user.targetLevel ?? "B1",
          currentStreak,
          longestStreak: Math.max(user.longestStreak, currentStreak),
        },
        levels: computeLevelProgress(exercises, attempts),
        cardsDue,
        cardsTotal,
        mockExamsTaken,
        bookmarks,
        activity: activityWindow(sessions, 14, now),
      };
    },
    () => {
      const sessions = demoStudySessions(now);
      const currentStreak = computeStreak(sessions.map((s) => s.date), now);
      return {
        source: "demo",
        user: {
          name: DEMO_USER.name,
          targetLevel: cookieLevel ?? DEMO_USER.targetLevel,
          currentStreak,
          longestStreak: Math.max(DEMO_USER.longestStreak, currentStreak),
        },
        levels: computeLevelProgress(bundledExercises, demoAttempts(now)),
        cardsDue: DEMO_CARDS.due,
        cardsTotal: bundledVocab.length,
        mockExamsTaken: DEMO_MOCK_EXAMS_TAKEN,
        bookmarks: DEMO_BOOKMARKS.length,
        activity: activityWindow(sessions, 14, now),
      };
    },
  );
});

export type LevelContent = {
  exercises: Exercise[];
  mockExams: MockExam[];
  vocabCount: number;
  vocabTopics: string[];
};

export const getLevelContent = cache(async (level: Level): Promise<LevelContent> => {
  const demo = (): LevelContent => {
    const vocab = bundledVocab.filter((v) => v.level === level);
    return {
      exercises: bundledExercises.filter((e) => e.level === level),
      mockExams: bundledMockExams.filter((m) => m.level === level),
      vocabCount: vocab.length,
      vocabTopics: [...new Set(vocab.map((v) => v.topic))],
    };
  };

  return withFallback(async () => {
    const db = getPrisma();
    const [exercises, mockExams, vocab] = await Promise.all([
      db.exercise.findMany({ where: { level }, include: { questions: { orderBy: { order: "asc" } } }, orderBy: [{ skill: "asc" }, { part: "asc" }] }),
      db.mockExam.findMany({ where: { level }, include: { sections: { orderBy: { order: "asc" }, include: { exercises: { select: { id: true } } } } } }),
      db.vocabCard.groupBy({ by: ["topic"], where: { level }, _count: true }),
    ]);
    return {
      exercises: exercises.map((e) => ({
        ...e,
        passage: e.passage ?? undefined,
        audioUrl: e.audioUrl ?? undefined,
        maxPlays: e.maxPlays ?? undefined,
        prompt: e.prompt ?? undefined,
        minWords: e.minWords ?? undefined,
        maxWords: e.maxWords ?? undefined,
        prepSeconds: e.prepSeconds ?? undefined,
        speakSeconds: e.speakSeconds ?? undefined,
        timeLimitSec: e.timeLimitSec ?? undefined,
        questions: e.questions.map((q) => ({ id: q.id, type: q.type, prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation }) as Question),
      })),
      mockExams: mockExams.map((m) => ({
        ...m,
        sections: m.sections.map((s) => ({ id: s.id, skill: s.skill, order: s.order, durationMinutes: s.durationMinutes, maxPoints: s.maxPoints, exerciseIds: s.exercises.map((x) => x.id) })),
      })),
      vocabCount: vocab.reduce((n, t) => n + t._count, 0),
      vocabTopics: vocab.map((t) => t.topic),
    };
  }, demo);
});
