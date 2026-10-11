"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/logo";
import { NAV_ITEMS, isActive } from "@/components/layout/nav-items";
import { cn } from "@/lib/utils";

export function Sidebar({ footer }: { footer?: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="hidden w-60 shrink-0 border-r border-border bg-surface lg:block">
      <aside className="sticky top-0 flex h-dvh flex-col px-3 py-5">
        <div className="px-3">
          <Logo />
        </div>
        <nav aria-label="Main" className="mt-8 flex flex-col gap-1">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                  active ? "bg-surface-2 text-fg" : "text-fg-muted hover:bg-surface-2 hover:text-fg",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto">{footer}</div>
      </aside>
    </div>
  );
}
