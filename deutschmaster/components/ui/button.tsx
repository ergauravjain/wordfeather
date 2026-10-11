import Link from "next/link";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary: "bg-primary text-primary-fg hover:opacity-90",
  secondary: "border border-border bg-surface text-fg hover:bg-surface-2",
  ghost: "text-fg-muted hover:bg-surface-2 hover:text-fg",
} as const;

const SIZES = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
} as const;

type Style = { variant?: keyof typeof VARIANTS; size?: keyof typeof SIZES };

export function buttonClass({ variant = "primary", size = "md" }: Style = {}, className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition disabled:pointer-events-none disabled:opacity-50",
    VARIANTS[variant],
    SIZES[size],
    className,
  );
}

export function Button({ variant, size, className, ...props }: Style & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={buttonClass({ variant, size }, className)} {...props} />;
}

export function ButtonLink({ variant, size, className, ...props }: Style & React.ComponentProps<typeof Link>) {
  return <Link className={buttonClass({ variant, size }, className)} {...props} />;
}
