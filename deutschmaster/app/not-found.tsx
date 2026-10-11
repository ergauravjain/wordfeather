import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <p className="text-sm font-medium text-fg-subtle">404</p>
      <h1 className="mt-2 text-2xl font-semibold">Seite nicht gefunden</h1>
      <p className="mt-1 text-sm text-fg-muted">This page doesn&apos;t exist.</p>
      <ButtonLink href="/" className="mt-6">Back to dashboard</ButtonLink>
    </div>
  );
}
