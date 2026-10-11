import { Construction } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function ComingSoon({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface p-6 sm:p-8">
      <Construction className="size-5 text-fg-subtle" aria-hidden />
      <h2 className="mt-3 font-semibold">{title}</h2>
      <div className="mt-1 max-w-prose text-sm text-fg-muted">{children}</div>
      <ButtonLink href="/" variant="secondary" size="sm" className="mt-4">
        Back to dashboard
      </ButtonLink>
    </div>
  );
}
