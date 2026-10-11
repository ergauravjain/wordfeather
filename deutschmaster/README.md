# DeutschMaster

Practise for German exams from **A1 to C1** (Goethe-Zertifikat, telc and TestDaF): skill modules, timed mock exams ("Prüfungssimulation") and a spaced-repetition vocabulary deck.

> **Status: milestone 1.** This milestone adds the project structure, the data model, the B1 seed content, the app layout and the level-selection dashboard. The exercise player, exam runner and flashcard review UI come next (see the roadmap below).

## Quick start

```bash
cd deutschmaster
npm install
npm run dev            # http://localhost:3000
```

Without a `DATABASE_URL` the app runs in **demo mode**: it reads the bundled content in `lib/content` and a demo learner's progress, and keeps nothing between sessions.

### With PostgreSQL

```bash
docker compose up -d          # or use any Postgres 14+
cp .env.example .env          # set DATABASE_URL
npm run db:push               # create the tables from prisma/schema.prisma
npm run db:seed               # B1 content + demo learner (safe to re-run)
npm run dev
```

The sidebar footer shows **Connected to database** or **Demo mode** depending on which source is in use. If the database can't be reached, the app logs a warning and switches to demo mode.

## Project structure

```
app/                     Next.js App Router
  page.tsx               Dashboard: hero, stats, level hub, skill breakdown, study activity
  levels/                Level hub → /levels/[level] → /levels/[level]/[skill]
  mock-exam/ vocabulary/ progress/
components/
  ui/                    Card, Button, Badge, ProgressRing, ProgressBar, ComingSoon
  layout/                AppShell, Sidebar (desktop), MobileNav (bottom tabs), TopBar
  dashboard/ level/      Feature components
lib/
  content/               Bundled practice content (b1.ts) + demo fixtures — single source for seed + demo mode
  data.ts                Server data access with DB → demo fallback
  actions.ts             Server actions (set target level)
  levels.ts              CEFR metadata, exam formats & timings per provider, level accents
  progress.ts            Mastery, streak and activity maths (pure)
  srs.ts                 Leitner boxes + SM-2 intervals (Again / Hard / Good / Easy)
  tts.ts                 Text-to-speech hook (browser SpeechSynthesis; server providers pluggable)
  ai/grading.ts          Writing rubric (Task, Coherence, Vocabulary, Grammar); mock grader, AI provider hook
  session.ts             Auth placeholder (demo learner)
prisma/
  schema.prisma          Users, exercises, questions, mock exams, vocab, attempts, SRS progress, bookmarks, study sessions
  seed.ts                Seeds B1 content and the demo learner
types/                   Shared domain types (mirror the Prisma enums)
```

## How it works

- **Target level**: picking a level stores it in a cookie, and in `User.targetLevel` when a database is connected. The dashboard, top bar and mock exam page follow it.
- **Mastery**: for each skill, the best score on each exercise, averaged over all of that skill's exercises (an unattempted exercise counts as 0). Level mastery is the average over the skills that have content.
- **Streak**: the number of consecutive days with study time. If you haven't studied yet today, the streak still counts until midnight (UTC).
- **Seed content (B1)**: Lesen Teil 1–3 (true/false, multiple choice, matching with a "0" option), Hören Teil 1–2 (transcripts for TTS, play limits), Schreiben Teil 1–3, Sprechen Teil 1–2, a full Goethe B1 mock exam (65/40/60/15 min) and 31 vocabulary cards across 7 topics. All texts were written for this app and are not taken from official Modellsätze.

## Roadmap

1. Exercise player: reading and listening with instant feedback, explanations and bookmarks
2. Writing editor with word counter and rubric grading; speaking cards with prep timer and `MediaRecorder` recording
3. Mock exam runner with strict section timers and a score report (pass/fail per module)
4. Flashcard review UI on top of `lib/srs.ts`
5. Auth (e.g. Auth.js), content for A1, A2, B2 and C1, a real TTS provider and AI grading
