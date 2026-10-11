// Spaced repetition: Leitner boxes for the visible "deck progress", with an
// SM-2-style interval so Easy / Good / Hard actually change spacing.

export type ReviewGrade = "again" | "hard" | "good" | "easy";

export type CardState = {
  box: number; // 1–5
  ease: number; // ≥ 1.3
  intervalDays: number;
  reps: number;
  lapses: number;
  dueAt: Date;
};

export const MAX_BOX = 5;
const DAY = 24 * 60 * 60 * 1000;

export const NEW_CARD: Omit<CardState, "dueAt"> = { box: 1, ease: 2.5, intervalDays: 0, reps: 0, lapses: 0 };

export function review(state: CardState, grade: ReviewGrade, now = new Date()): CardState {
  let { box, ease, intervalDays, reps, lapses } = state;

  if (grade === "again") {
    return { box: 1, ease: Math.max(1.3, ease - 0.2), intervalDays: 0, reps: 0, lapses: lapses + 1, dueAt: new Date(now.getTime() + 10 * 60 * 1000) };
  }

  if (grade === "hard") {
    ease = Math.max(1.3, ease - 0.15);
    intervalDays = Math.max(1, Math.round(intervalDays * 1.2));
    box = Math.max(1, box);
  } else {
    if (grade === "easy") ease += 0.15;
    intervalDays = reps === 0 ? (grade === "easy" ? 4 : 1) : reps === 1 ? (grade === "easy" ? 8 : 6) : Math.round(intervalDays * ease * (grade === "easy" ? 1.3 : 1));
    box = Math.min(MAX_BOX, box + (grade === "easy" ? 2 : 1));
  }

  return { box, ease, intervalDays, reps: reps + 1, lapses, dueAt: new Date(now.getTime() + intervalDays * DAY) };
}

export function isDue(state: Pick<CardState, "dueAt">, now = new Date()) {
  return state.dueAt.getTime() <= now.getTime();
}
