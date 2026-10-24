import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./logo";
import { Year } from "./year";
import { company } from "@/lib/content";

const links = [
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact us" },
];

const socials = [
  {
    label: "Facebook",
    href: company.social.facebook,
    path: "M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v1.9H8V11.6h2.6V21.5H14v-9.9h2.6l.4-3.1H14Z",
  },
  {
    label: "X (Twitter)",
    href: company.social.twitter,
    path: "M17.8 3h3.1l-6.8 7.7 8 10.3h-6.2l-4.9-6.3L5.4 21H2.3l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z",
  },
  {
    label: "LinkedIn",
    href: company.social.linkedin,
    path: "M6.9 8.8H3.5V20.5h3.4V8.8ZM5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.5 13.7c0-3.1-.7-5.2-4.3-5.2-1.7 0-2.9.6-3.4 1.6V8.8H9.6v11.7H13v-5.8c0-1.5.3-3 2.2-3s1.9 1.8 1.9 3.1v5.7h3.4v-6.8Z",
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo dark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">{company.blurb}</p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-sky hover:text-sky"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">Important links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/75 transition hover:text-sky">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">Information</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-sky" />
              <a href={company.phoneHref} className="hover:text-sky">{company.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-sky" />
              <a href={`mailto:${company.email}`} className="hover:text-sky">{company.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-sky" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            Copyright © <Year /> Skylark Innovations. All rights reserved.
          </p>
          <p>Designed by Skylark</p>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[0.22em] text-center text-[22vw] font-semibold leading-none tracking-[-0.06em] text-white/[0.035]">
          skylark
        </p>
      </div>
    </footer>
  );
}
