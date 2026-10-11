import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-border bg-surface", className)} {...props} />;
}

export function CardHeader({ title, description, action, className }: { title: React.ReactNode; description?: React.ReactNode; action?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-start justify-between gap-4 p-5 pb-0", className)}>
      <div className="min-w-0">
        <h2 className="text-sm font-semibold text-fg">{title}</h2>
        {description && <p className="mt-0.5 text-sm text-fg-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}
