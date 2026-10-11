"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, isActive } from "@/components/layout/nav-items";
import { cn } from "@/lib/utils";

/** Bottom tab bar for phones and tablets; the sidebar takes over at `lg`. */
export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
    >
      <ul className="mx-auto grid max-w-xl grid-cols-5">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = isActive(pathname, href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn("flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium", active ? "text-fg" : "text-fg-subtle")}
              >
                <Icon className="size-5" aria-hidden />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
