// Bundled content catalogue. Add a level by creating `<level>.ts` next to b1.ts
// and spreading its exports below; the seed script and demo mode pick it up.

import type { Exercise, MockExam, VocabCard } from "../../types";
import { b1Exercises, b1MockExam, b1Vocabulary } from "./b1";

export const exercises: Exercise[] = [...b1Exercises];
export const mockExams: MockExam[] = [b1MockExam];
export const vocabulary: VocabCard[] = [...b1Vocabulary];
