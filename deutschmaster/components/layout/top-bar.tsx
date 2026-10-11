import Link from "next/link";
import { Flame } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { LEVEL_ACCENT } from "@/lib/levels";
import { cn } from "@/lib/utils";
import type { Level } from "@/types";

export function TopBar({ targetLevel, streak }: { targetLevel: Level; streak: number }) {
  const accent = LEVEL_ACCENT[targetLevel];
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="lg:hidden">
          <Logo />
        </div>
        <div className="hidden text-sm text-fg-muted lg:block">Viel Erfolg beim Lernen!</div>
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium tabular-nums"
            title="Daily streak"
          >
            <Flame className="size-4 text-accent" aria-hidden />
            {streak}
            <span className="sr-only">day streak</span>
          </span>
          <Link
            href={`/levels/${targetLevel.toLowerCase()}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium hover:bg-surface-2"
          >
            <span className={cn("size-2 rounded-full", accent.bg)} aria-hidden />
            Target {targetLevel}
          </Link>
        </div>
      </div>
    </header>
  );
}
