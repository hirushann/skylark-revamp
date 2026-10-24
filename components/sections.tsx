import {
  ArrowUpRight,
  Check,
  Code2,
  GraduationCap,
  Headset,
  Megaphone,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "./ui";
import { about, business, company, services, stats, type ServiceKey } from "@/lib/content";

export const serviceIcons: Record<ServiceKey, LucideIcon> = {
  product: Code2,
  talent: Users,
  training: GraduationCap,
  marketing: Megaphone,
  bpo: Headset,
  security: ShieldCheck,
};

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: React.ReactNode; body: string }) {
  return (
    <section className="relative -mt-[76px] overflow-hidden pt-[76px]">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-sky/25 blur-3xl" />
      <Container className="relative py-20 sm:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">{body}</p>
      </Container>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About us"
            title={
              <>
                Fully loaded to deliver your expectations{" "}
                <span className="accent-serif text-accent">above and beyond</span>
              </>
            }
          />
          <p className="reveal mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">{about.body}</p>
        </div>
        <div className="reveal lg:col-span-5">
          <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
            <p className="text-sm font-medium text-ink">Talent on your team</p>
            <p className="mt-1 text-sm text-muted">Every engineer is interviewed and assessed before joining.</p>
            <ul className="mt-6 grid gap-2.5">
              {about.roles.map((role, i) => (
                <li
                  key={role}
                  className="flex items-center justify-between rounded-2xl bg-paper px-4 py-3.5 text-[15px]"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    {role}
                  </span>
                  <Check className="size-4 text-accent" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ key, title, body }, i) => {
        const Icon = serviceIcons[key];
        return (
          <article
            key={key}
            id={key}
            className="reveal group relative flex scroll-mt-28 flex-col bg-white p-7 transition-colors hover:bg-paper sm:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="grid size-12 place-items-center rounded-2xl bg-night text-sky transition-transform duration-300 group-hover:-rotate-6">
                <Icon className="size-5" />
              </span>
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
            </div>
            <h3 className="mt-8 text-xl font-semibold tracking-tight">{title}</h3>
            <p className={`mt-3 text-[15px] leading-relaxed text-muted ${detailed ? "" : "line-clamp-4"}`}>{body}</p>
            {!detailed && (
              <Link
                href={`/services#${key}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink opacity-70 transition group-hover:opacity-100"
              >
                Learn more <ArrowUpRight className="size-4" />
              </Link>
            )}
          </article>
        );
      })}
    </div>
  );
}

export function ReasonsList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className={`grid gap-4 ${items.length > 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "lg:grid-cols-3"}`}>
      {items.map((item, i) => (
        <li
          key={item.title}
          className="reveal rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-sky/40 hover:bg-white/[0.06]"
        >
          <span className="accent-serif text-5xl text-sky">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{item.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-white/60">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function BusinessSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Our edge"
            title={
              <>
                Make your business more{" "}
                <span className="accent-serif text-accent">competitive</span> and enduring
              </>
            }
          />
          <div className="mt-10 space-y-6">
            {business.points.map((p) => (
              <div key={p.title} className="reveal flex gap-5">
                <span className="mt-1 h-10 w-1 shrink-0 rounded-full bg-gradient-to-b from-sky to-accent" />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal rounded-3xl p-6 sm:p-8 ${
                i === 0 ? "bg-night text-white" : i === 3 ? "bg-sky text-night" : "border border-line bg-white"
              }`}
            >
              <dt className={`text-sm ${i === 0 ? "text-white/60" : i === 3 ? "text-night/70" : "text-muted"}`}>
                {s.label}
              </dt>
              <dd className="mt-8 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-white">
      {items.map((item, i) => (
        <details key={item.q} className="group px-6 sm:px-8" open={i === 0}>
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left text-[17px] font-medium tracking-tight">
            {item.q}
            <span className="relative grid size-8 shrink-0 place-items-center rounded-full border border-line transition group-open:rotate-45 group-open:border-ink group-open:bg-ink group-open:text-white">
              <span className="absolute h-px w-3 bg-current" />
              <span className="absolute h-3 w-px bg-current" />
            </span>
          </summary>
          <p className="-mt-1 pb-6 pr-10 text-[15px] leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBanner() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-night px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="grid-bg-dark absolute inset-0" />
          <div aria-hidden className="absolute -bottom-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-sky/30 blur-3xl" />
          <div className="relative">
            <Eyebrow dark>Let&apos;s talk</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-white text-balance sm:text-5xl">
              Schedule an executive level <span className="accent-serif text-sky">meeting</span> with us
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-white/60">
              Trusted by clients across {company.regions.slice(0, -1).join(", ")} and {company.regions.at(-1)}.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink href={company.calendly} variant="light" external>
                Schedule a call
              </ButtonLink>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-[15px] font-medium text-white transition hover:border-white/40"
              >
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
