import type { Metadata, Viewport } from "next";
import { AppShell } from "@/components/layout/app-shell";
import { getDashboardData } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "DeutschMaster", template: "%s · DeutschMaster" },
  description: "Practise for Goethe, telc and TestDaF German exams from A1 to C1 — skill modules, timed mock exams and spaced-repetition vocabulary.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#111110" },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getDashboardData();
  return (
    <html lang="en">
      <body>
        <AppShell data={data}>{children}</AppShell>
      </body>
    </html>
  );
}
