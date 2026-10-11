import { BookOpen, Headphones, Mic, PenLine } from "lucide-react";
import type { Skill } from "@/types";

export const SKILL_ICON: Record<Skill, typeof BookOpen> = {
  READING: BookOpen,
  LISTENING: Headphones,
  WRITING: PenLine,
  SPEAKING: Mic,
};
