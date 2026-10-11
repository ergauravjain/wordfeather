import { Database, FlaskConical } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import type { DashboardData } from "@/types";

export function AppShell({ data, children }: { data: DashboardData; children: React.ReactNode }) {
  const DataIcon = data.source === "database" ? Database : FlaskConical;
  return (
    <div className="flex min-h-dvh">
      <Sidebar
        footer={
          <p className="flex items-center gap-2 px-3 text-xs text-fg-subtle">
            <DataIcon className="size-3.5" aria-hidden />
            {data.source === "database" ? "Connected to database" : "Demo mode · no database"}
          </p>
        }
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar targetLevel={data.user.targetLevel} streak={data.user.currentStreak} />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-6 pb-28 sm:px-6 lg:pb-12">{children}</main>
      </div>
      <MobileNav />
    </div>
  );
}
