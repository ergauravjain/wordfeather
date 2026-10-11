import { BookOpenCheck, Gauge, GraduationCap, Layers, Timer } from "lucide-react";

export const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: Gauge },
  { href: "/levels", label: "Levels", icon: GraduationCap },
  { href: "/mock-exam", label: "Mock exam", icon: Timer },
  { href: "/vocabulary", label: "Vocabulary", icon: Layers },
  { href: "/progress", label: "Progress", icon: BookOpenCheck },
] as const;

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
