"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { nav } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  // Remember the path the menu was opened on, so navigating closes it
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 sm:px-6">
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-3 pl-4 transition-all duration-300 ${
          scrolled || open
            ? "border border-line bg-white/80 shadow-[0_8px_30px_-12px_rgb(11_18_32/0.15)] backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active ? "bg-ink/[0.06] font-medium text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent sm:inline-flex"
          >
            Schedule a call
            <ArrowUpRight className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpenOn(open ? null : pathname)}
            className="grid size-10 place-items-center rounded-full text-ink hover:bg-ink/5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-4 mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-white p-2 shadow-xl md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-[15px] text-ink hover:bg-paper"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-ink px-4 py-3 text-[15px] font-medium text-white"
          >
            Schedule a call <ArrowUpRight className="size-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}
