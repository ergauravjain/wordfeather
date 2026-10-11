// Demo learner used when there is no auth yet. The seed script writes the same
// fixtures to the database so demo mode and a freshly seeded DB look identical.

import type { AttemptSummary, Level } from "../../types";

export const DEMO_USER = {
  email: "demo@deutschmaster.app",
  name: "Alex",
  targetLevel: "B1" as Level,
  longestStreak: 12,
};

const DAY = 24 * 60 * 60 * 1000;

function daysAgo(n: number, now: Date): Date {
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  return new Date(d.getTime() - n * DAY);
}

/** Minutes studied per day, index 0 = today. A gap on day 5 ends the current streak at 5. */
const MINUTES_BY_DAY_AGO = [18, 25, 12, 30, 22, 0, 15, 40, 0, 10, 28, 0, 35, 20];

export function demoStudySessions(now = new Date()) {
  return MINUTES_BY_DAY_AGO.map((minutes, i) => ({ date: daysAgo(i, now), minutes, xp: minutes * 10 })).filter(
    (s) => s.minutes > 0,
  );
}

export function demoAttempts(now = new Date()): AttemptSummary[] {
  return [
    { exerciseId: "b1-lesen-1", score: 4, maxScore: 6, createdAt: daysAgo(9, now) },
    { exerciseId: "b1-lesen-1", score: 6, maxScore: 6, createdAt: daysAgo(3, now) },
    { exerciseId: "b1-lesen-2", score: 2, maxScore: 3, createdAt: daysAgo(2, now) },
    { exerciseId: "b1-hoeren-1", score: 2, maxScore: 2, createdAt: daysAgo(4, now) },
    { exerciseId: "b1-schreiben-1", score: 28, maxScore: 40, createdAt: daysAgo(1, now) },
    { exerciseId: "b1-sprechen-1", score: 9, maxScore: 15, createdAt: daysAgo(0, now) },
  ];
}

/** Card ids the demo learner has started; the first `due` are due today. */
export const DEMO_CARDS = { started: 18, due: 7 };
export const DEMO_BOOKMARKS = ["b1-lesen-1-q1", "b1-lesen-3-q1"];
export const DEMO_MOCK_EXAMS_TAKEN = 1;
