import type { ExamProvider, Level, Skill } from "@/types";

export type ExamSection = { skill: Skill; label: string; minutes: number };

export type ExamFormat = {
  provider: ExamProvider;
  name: string;
  sections: ExamSection[];
  passRule: string;
};

export type LevelInfo = {
  level: Level;
  name: string;
  germanName: string;
  summary: string;
  canDo: string[];
  topics: string[];
  exams: ExamFormat[];
};

export const PROVIDER_LABEL: Record<ExamProvider, string> = {
  GOETHE: "Goethe-Institut",
  TELC: "telc",
  TESTDAF: "TestDaF",
};

export const SKILL_META: Record<
  Skill,
  { label: string; german: string; slug: string; description: string }
> = {
  READING: {
    label: "Reading",
    german: "Lesen",
    slug: "reading",
    description: "Multiple choice, true/false and matching texts with instant feedback.",
  },
  LISTENING: {
    label: "Listening",
    german: "Hören",
    slug: "listening",
    description: "Exam-style audio with play limits, transcripts and comprehension checks.",
  },
  WRITING: {
    label: "Writing",
    german: "Schreiben",
    slug: "writing",
    description: "Emails, letters and essays with word counter and rubric-based grading.",
  },
  SPEAKING: {
    label: "Speaking",
    german: "Sprechen",
    slug: "speaking",
    description: "Prompt cards with preparation timer and voice recording.",
  },
};

export function skillFromSlug(slug: string): Skill | undefined {
  return (Object.keys(SKILL_META) as Skill[]).find((s) => SKILL_META[s].slug === slug);
}

const goethe = (
  name: string,
  [lesen, hoeren, schreiben, sprechen]: [number, number, number, number],
): ExamFormat => ({
  provider: "GOETHE",
  name,
  sections: [
    { skill: "READING", label: "Lesen", minutes: lesen },
    { skill: "LISTENING", label: "Hören", minutes: hoeren },
    { skill: "WRITING", label: "Schreiben", minutes: schreiben },
    { skill: "SPEAKING", label: "Sprechen", minutes: sprechen },
  ],
  passRule: "60 % in each module",
});

const telc = (
  name: string,
  [lesen, hoeren, schreiben, sprechen]: [number, number, number, number],
): ExamFormat => ({
  provider: "TELC",
  name,
  sections: [
    { skill: "READING", label: "Leseverstehen + Sprachbausteine", minutes: lesen },
    { skill: "LISTENING", label: "Hörverstehen", minutes: hoeren },
    { skill: "WRITING", label: "Schriftlicher Ausdruck", minutes: schreiben },
    { skill: "SPEAKING", label: "Mündliche Prüfung", minutes: sprechen },
  ],
  passRule: "60 % in the written and the oral part",
});

const testDaF: ExamFormat = {
  provider: "TESTDAF",
  name: "TestDaF (digital)",
  sections: [
    { skill: "READING", label: "Lesen", minutes: 60 },
    { skill: "LISTENING", label: "Hören", minutes: 40 },
    { skill: "WRITING", label: "Schreiben", minutes: 60 },
    { skill: "SPEAKING", label: "Sprechen", minutes: 35 },
  ],
  passRule: "TDN 3–5 per skill (university entry usually needs TDN 4)",
};

// Section timings are the published formats at the time of writing, rounded to
// the minute. Always check the provider's current Modellsatz before an exam.
export const LEVEL_INFO: Record<Level, LevelInfo> = {
  A1: {
    level: "A1",
    name: "Beginner",
    germanName: "Anfänger",
    summary: "Understand and use everyday expressions and very simple sentences.",
    canDo: ["Introduce yourself", "Ask and answer simple personal questions", "Fill in a basic form"],
    topics: ["Person & Familie", "Essen & Trinken", "Zahlen & Uhrzeit", "Wohnen"],
    exams: [
      goethe("Goethe-Zertifikat A1: Start Deutsch 1", [25, 20, 20, 15]),
      telc("telc Deutsch A1", [25, 20, 20, 15]),
    ],
  },
  A2: {
    level: "A2",
    name: "Elementary",
    germanName: "Grundlegende Kenntnisse",
    summary: "Communicate in routine tasks about familiar, everyday matters.",
    canDo: ["Describe your background and surroundings", "Handle shopping and travel", "Write short notes and messages"],
    topics: ["Alltag & Freizeit", "Einkaufen", "Reisen & Verkehr", "Gesundheit"],
    exams: [
      goethe("Goethe-Zertifikat A2", [30, 30, 30, 15]),
      telc("telc Deutsch A2", [30, 20, 30, 15]),
    ],
  },
  B1: {
    level: "B1",
    name: "Intermediate",
    germanName: "Selbstständige Sprachverwendung",
    summary: "Deal with most situations while travelling and give reasons for opinions and plans.",
    canDo: ["Follow the main points of clear standard speech", "Write connected text on familiar topics", "Describe experiences, hopes and ambitions"],
    topics: ["Arbeit & Beruf", "Medien", "Umwelt", "Bildung", "Wohnen & Nachbarschaft"],
    exams: [
      goethe("Goethe-Zertifikat B1", [65, 40, 60, 15]),
      telc("telc Deutsch B1 (Zertifikat Deutsch)", [90, 30, 30, 15]),
    ],
  },
  B2: {
    level: "B2",
    name: "Upper intermediate",
    germanName: "Selbstständige Sprachverwendung",
    summary: "Interact with fluency on concrete and abstract topics, including technical discussions in your field.",
    canDo: ["Understand complex texts on abstract topics", "Argue a viewpoint with pros and cons", "Write clear, detailed texts"],
    topics: ["Gesellschaft", "Wissenschaft & Technik", "Arbeitswelt", "Kultur"],
    exams: [
      goethe("Goethe-Zertifikat B2", [65, 40, 75, 15]),
      telc("telc Deutsch B2", [90, 20, 30, 15]),
      testDaF,
    ],
  },
  C1: {
    level: "C1",
    name: "Advanced",
    germanName: "Kompetente Sprachverwendung",
    summary: "Use the language flexibly for social, academic and professional purposes.",
    canDo: ["Understand long, demanding texts and implicit meaning", "Express ideas fluently and spontaneously", "Write well-structured academic texts"],
    topics: ["Wissenschaft & Forschung", "Wirtschaft", "Politik", "Hochschule"],
    exams: [
      goethe("Goethe-Zertifikat C1", [65, 40, 75, 15]),
      telc("telc Deutsch C1 Hochschule", [90, 40, 70, 20]),
      testDaF,
    ],
  },
};

/** Per-level accent classes (Tailwind tokens defined in globals.css). Identity is always also shown as text. */
export const LEVEL_ACCENT: Record<Level, { text: string; bg: string; soft: string; ring: string; stroke: string }> = {
  A1: { text: "text-lvl-a1", bg: "bg-lvl-a1", soft: "bg-lvl-a1/10", ring: "ring-lvl-a1", stroke: "var(--lvl-a1)" },
  A2: { text: "text-lvl-a2", bg: "bg-lvl-a2", soft: "bg-lvl-a2/10", ring: "ring-lvl-a2", stroke: "var(--lvl-a2)" },
  B1: { text: "text-lvl-b1", bg: "bg-lvl-b1", soft: "bg-lvl-b1/10", ring: "ring-lvl-b1", stroke: "var(--lvl-b1)" },
  B2: { text: "text-lvl-b2", bg: "bg-lvl-b2", soft: "bg-lvl-b2/10", ring: "ring-lvl-b2", stroke: "var(--lvl-b2)" },
  C1: { text: "text-lvl-c1", bg: "bg-lvl-c1", soft: "bg-lvl-c1/10", ring: "ring-lvl-c1", stroke: "var(--lvl-c1)" },
};
