import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" aria-label="Skylark Innovations — home" className="group inline-flex items-center gap-2.5">
      <span className="relative grid size-9 place-items-center rounded-xl bg-night text-sky shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]">
        <svg viewBox="0 0 24 24" className="size-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-[-8deg]" fill="currentColor" aria-hidden>
          <path d="M2.5 14.5c4.2-.6 7.4-2.6 9.7-6.2.5-.8 1.6-.9 2.2-.2l.6.7c.5.6 1.3.8 2 .5l3.7-1.6c.6-.3 1.1.4.7.9l-2.6 3.2a3 3 0 0 0-.6 1.4c-.7 4.2-4.4 7.3-8.9 7.3-2.4 0-4.6-.9-6.2-2.4-.6-.6-.4-1.6.4-1.9Z" />
        </svg>
      </span>
      <span className={`text-[17px] font-semibold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        Skylark<span className={dark ? "text-white/50" : "text-muted"}> Innovations</span>
      </span>
    </Link>
  );
}
