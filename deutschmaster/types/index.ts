// Domain types shared by UI, data layer and seed script.
// String unions mirror the Prisma enums so static content and DB rows are interchangeable.

export const LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
export type Level = (typeof LEVELS)[number];

export const SKILLS = ["READING", "LISTENING", "WRITING", "SPEAKING"] as const;
export type Skill = (typeof SKILLS)[number];

export type ExamProvider = "GOETHE" | "TELC" | "TESTDAF";
export type QuestionType = "MULTIPLE_CHOICE" | "TRUE_FALSE" | "MATCHING";

export type MultipleChoiceQuestion = {
  id: string;
  type: "MULTIPLE_CHOICE";
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type TrueFalseQuestion = {
  id: string;
  type: "TRUE_FALSE";
  prompt: string;
  answer: boolean;
  explanation: string;
};

export type MatchingQuestion = {
  id: string;
  type: "MATCHING";
  prompt: string;
  options: { left: string[]; right: string[] };
  /** answer[i] = index into `right` for `left[i]`; -1 means "no match" (Goethe "0"). */
  answer: number[];
  explanation: string;
};

export type Question = MultipleChoiceQuestion | TrueFalseQuestion | MatchingQuestion;

export type Exercise = {
  id: string;
  level: Level;
  skill: Skill;
  provider: ExamProvider;
  part: string;
  title: string;
  instructions: string;
  passage?: string;
  audioUrl?: string;
  maxPlays?: number;
  prompt?: string;
  taskPoints?: string[];
  minWords?: number;
  maxWords?: number;
  prepSeconds?: number;
  speakSeconds?: number;
  timeLimitSec?: number;
  maxPoints: number;
  questions: Question[];
};

export type MockExamSection = {
  id: string;
  skill: Skill;
  order: number;
  durationMinutes: number;
  maxPoints: number;
  exerciseIds: string[];
};

export type MockExam = {
  id: string;
  level: Level;
  provider: ExamProvider;
  title: string;
  description: string;
  passPercent: number;
  sections: MockExamSection[];
};

export type VocabCard = {
  id: string;
  level: Level;
  topic: string;
  german: string;
  article?: "der" | "die" | "das";
  plural?: string;
  partOfSpeech: "noun" | "verb" | "adjective" | "adverb" | "phrase" | "preposition" | "conjunction";
  english: string;
  example: string;
  exampleEn: string;
};

/** Minimal attempt shape used for progress maths (DB row or demo fixture). */
export type AttemptSummary = {
  exerciseId: string;
  score: number;
  maxScore: number;
  createdAt: Date;
};

export type SkillProgress = {
  skill: Skill;
  /** 0–100: mean of best score ratios over all exercises of this skill. */
  mastery: number;
  completed: number;
  total: number;
};

export type LevelProgress = {
  level: Level;
  mastery: number;
  completed: number;
  total: number;
  skills: SkillProgress[];
};

export type DailyActivity = { date: string; minutes: number };

export type DashboardData = {
  source: "database" | "demo";
  user: { name: string; targetLevel: Level; currentStreak: number; longestStreak: number };
  levels: LevelProgress[];
  cardsDue: number;
  cardsTotal: number;
  mockExamsTaken: number;
  bookmarks: number;
  activity: DailyActivity[];
};
