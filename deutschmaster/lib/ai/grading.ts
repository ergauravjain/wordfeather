// AI grading integration point for writing (and transcribed speaking) answers.
// The rubric mirrors the Goethe B1 Schreiben criteria. `mock` gives a heuristic
// estimate so the UI flow works end-to-end; plug a model in under `anthropic`.

import type { Level } from "@/types";

export const RUBRIC = ["taskFulfillment", "coherence", "vocabulary", "grammar"] as const;
export type RubricCriterion = (typeof RUBRIC)[number];

export const RUBRIC_LABEL: Record<RubricCriterion, { label: string; german: string }> = {
  taskFulfillment: { label: "Task fulfilment", german: "Erfüllung der Aufgabenstellung" },
  coherence: { label: "Coherence", german: "Kohärenz" },
  vocabulary: { label: "Vocabulary", german: "Wortschatz" },
  grammar: { label: "Grammar", german: "Strukturen" },
};

export type GradingRequest = {
  level: Level;
  prompt: string;
  taskPoints: string[];
  answer: string;
  minWords?: number;
};

export type GradingResult = {
  provider: string;
  /** Each criterion 0–5 (A–E bands mapped to numbers). */
  scores: Record<RubricCriterion, number>;
  percent: number;
  comments: string[];
};

export async function gradeWriting(req: GradingRequest): Promise<GradingResult> {
  switch (process.env.AI_GRADING_PROVIDER ?? "mock") {
    // case "anthropic": return gradeWithClaude(req);
    default:
      return mockGrade(req);
  }
}

const CONNECTORS = /\b(weil|deshalb|denn|aber|trotzdem|außerdem|zuerst|danach|einerseits|andererseits|obwohl|dass|wenn)\b/gi;

function mockGrade({ answer, minWords = 0 }: GradingRequest): GradingResult {
  const words = answer.trim().split(/\s+/).filter(Boolean);
  const unique = new Set(words.map((w) => w.toLowerCase().replace(/[^\p{L}]/gu, ""))).size;
  const connectors = answer.match(CONNECTORS)?.length ?? 0;
  const hasGreeting = /^(liebe|lieber|hallo|hi|sehr geehrte)/i.test(answer.trim());
  const hasClosing = /(viele grüße|liebe grüße|mit freundlichen grüßen|bis bald)/i.test(answer);

  const clamp = (n: number) => Math.max(0, Math.min(5, Math.round(n)));
  const scores = {
    taskFulfillment: clamp((words.length / Math.max(minWords, 1)) * 4 + (hasGreeting && hasClosing ? 1 : 0)),
    coherence: clamp(1 + connectors),
    vocabulary: clamp((unique / Math.max(words.length, 1)) * 6),
    grammar: clamp(words.length ? 3 : 0),
  };
  const percent = Math.round((Object.values(scores).reduce((s, v) => s + v, 0) / 20) * 100);

  const comments: string[] = [];
  if (words.length < minWords) comments.push(`Your text has ${words.length} words; aim for about ${minWords}.`);
  if (!hasGreeting || !hasClosing) comments.push("Add a greeting (Anrede) and a closing (Gruß).");
  if (connectors < 3) comments.push("Use more connectors (weil, deshalb, außerdem …) to link your ideas.");
  comments.push("Heuristic estimate only — connect an AI provider for real grammar feedback.");

  return { provider: "mock", scores, percent, comments };
}
