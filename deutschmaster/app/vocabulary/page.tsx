import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/coming-soon";
import { getDashboardData } from "@/lib/data";

export const metadata: Metadata = { title: "Vocabulary" };

export default async function VocabularyPage() {
  const data = await getDashboardData();
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Wortschatz</h1>
        <p className="mt-1 text-sm text-fg-muted">
          {data.cardsDue} of {data.cardsTotal} cards due for review.
        </p>
      </header>
      <ComingSoon title="Flashcard review is the next milestone">
        The scheduler is already in <code>lib/srs.ts</code> (Leitner boxes with SM-2 intervals for Again / Hard / Good / Easy). The review UI comes next.
      </ComingSoon>
    </div>
  );
}
