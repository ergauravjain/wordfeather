// Seeds bundled practice content (B1) and a demo learner with some history.
// Idempotent: content is upserted, demo learner state is reset on every run.
// Run with `npm run db:seed` (after `npm run db:push`).

import { Prisma, PrismaClient } from "@prisma/client";
import { exercises, mockExams, vocabulary } from "../lib/content";
import { DEMO_BOOKMARKS, DEMO_CARDS, DEMO_MOCK_EXAMS_TAKEN, DEMO_USER, demoAttempts, demoStudySessions } from "../lib/content/demo";
import { NEW_CARD } from "../lib/srs";

const prisma = new PrismaClient();
const DAY = 24 * 60 * 60 * 1000;

async function seedContent() {
  for (const { questions, ...exercise } of exercises) {
    const data = { ...exercise, taskPoints: exercise.taskPoints ?? [] };
    await prisma.exercise.upsert({ where: { id: exercise.id }, create: data, update: data });

    await prisma.question.deleteMany({ where: { exerciseId: exercise.id } });
    if (questions.length) {
      await prisma.question.createMany({
        data: questions.map((q, order) => ({
          id: q.id,
          exerciseId: exercise.id,
          order,
          type: q.type,
          prompt: q.prompt,
          options: "options" in q ? (q.options as Prisma.InputJsonValue) : Prisma.JsonNull,
          answer: q.answer as Prisma.InputJsonValue,
          explanation: q.explanation,
        })),
      });
    }
  }

  for (const { sections, ...exam } of mockExams) {
    await prisma.mockExam.upsert({ where: { id: exam.id }, create: exam, update: exam });
    for (const { exerciseIds, ...section } of sections) {
      const data = { ...section, mockExamId: exam.id, exercises: { set: exerciseIds.map((id) => ({ id })) } };
      await prisma.mockExamSection.upsert({
        where: { id: section.id },
        create: { ...data, exercises: { connect: exerciseIds.map((id) => ({ id })) } },
        update: data,
      });
    }
  }

  for (const card of vocabulary) {
    await prisma.vocabCard.upsert({ where: { id: card.id }, create: card, update: card });
  }

  console.log(`✓ content: ${exercises.length} exercises, ${mockExams.length} mock exam(s), ${vocabulary.length} vocab cards`);
}

async function seedDemoUser() {
  const now = new Date();
  const user = await prisma.user.upsert({
    where: { email: DEMO_USER.email },
    create: { email: DEMO_USER.email, name: DEMO_USER.name, targetLevel: DEMO_USER.targetLevel, longestStreak: DEMO_USER.longestStreak },
    update: { name: DEMO_USER.name, targetLevel: DEMO_USER.targetLevel, longestStreak: DEMO_USER.longestStreak },
  });

  // Reset learner state so repeated seeds give the same picture.
  await prisma.$transaction([
    prisma.exerciseAttempt.deleteMany({ where: { userId: user.id } }),
    prisma.examAttempt.deleteMany({ where: { userId: user.id } }),
    prisma.cardProgress.deleteMany({ where: { userId: user.id } }),
    prisma.bookmark.deleteMany({ where: { userId: user.id } }),
    prisma.studySession.deleteMany({ where: { userId: user.id } }),
  ]);

  const sessions = demoStudySessions(now);
  await prisma.studySession.createMany({ data: sessions.map((s) => ({ ...s, userId: user.id })) });
  await prisma.user.update({ where: { id: user.id }, data: { lastStudyDate: sessions[0]?.date } });

  await prisma.exerciseAttempt.createMany({ data: demoAttempts(now).map((a) => ({ ...a, userId: user.id })) });

  const started = vocabulary.filter((c) => c.level === "B1").slice(0, DEMO_CARDS.started);
  await prisma.cardProgress.createMany({
    data: started.map((card, i) => {
      const due = i < DEMO_CARDS.due;
      const box = due ? 1 + (i % 2) : 2 + (i % 3);
      return {
        userId: user.id,
        cardId: card.id,
        ...NEW_CARD,
        box,
        reps: box - 1,
        intervalDays: due ? 1 : box * 2,
        dueAt: new Date(now.getTime() + (due ? -1 : box * 2) * DAY),
        lastReviewedAt: new Date(now.getTime() - 2 * DAY),
      };
    }),
  });

  await prisma.bookmark.createMany({ data: DEMO_BOOKMARKS.map((questionId) => ({ userId: user.id, questionId })) });

  const exam = mockExams.find((m) => m.level === "B1");
  if (exam && DEMO_MOCK_EXAMS_TAKEN > 0) {
    const sectionScores = { READING: { score: 72, maxScore: 100 }, LISTENING: { score: 64, maxScore: 100 }, WRITING: { score: 58, maxScore: 100 }, SPEAKING: { score: 70, maxScore: 100 } };
    const pct = Object.values(sectionScores).map((s) => (s.score / s.maxScore) * 100);
    await prisma.examAttempt.create({
      data: {
        userId: user.id,
        mockExamId: exam.id,
        startedAt: new Date(now.getTime() - 6 * DAY),
        completedAt: new Date(now.getTime() - 6 * DAY + 3 * 60 * 60 * 1000),
        sectionScores,
        totalPercent: pct.reduce((a, b) => a + b, 0) / pct.length,
        passed: pct.every((p) => p >= exam.passPercent),
      },
    });
  }

  console.log(`✓ demo learner ${DEMO_USER.email}: ${sessions.length} study days, ${started.length} cards in review`);
}

seedContent()
  .then(seedDemoUser)
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
