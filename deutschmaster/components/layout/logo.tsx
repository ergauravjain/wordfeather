import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
      <span aria-hidden className="grid size-8 place-items-center overflow-hidden rounded-lg">
        <span className="flex h-full w-full flex-col">
          <span className="flex-1 bg-[#000]" />
          <span className="flex-1 bg-[#dd0000]" />
          <span className="flex-1 bg-[#ffce00]" />
        </span>
      </span>
      <span>
        Deutsch<span className="text-accent">Master</span>
      </span>
    </Link>
  );
}
