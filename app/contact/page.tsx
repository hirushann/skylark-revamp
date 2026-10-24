import type { Metadata } from "next";
import { CalendarClock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/sections";
import { ButtonLink, Container } from "@/components/ui";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

const channels = [
  { icon: Mail, title: "Email us", value: company.email, href: `mailto:${company.email}` },
  { icon: Phone, title: "Call us", value: company.phone, href: company.phoneHref },
  { icon: MapPin, title: "Location", value: company.address },
  { icon: MessageCircle, title: "Live chat", value: "Live chat all the time with our company, 24/7." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s get your project <span className="accent-serif text-accent">off the ground</span>
          </>
        }
        body="Reach our business development team by email, phone or WhatsApp — or book a call directly."
      />
      <section className="pb-24 sm:pb-32">
        <Container className="grid gap-4 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {channels.map(({ icon: Icon, title, value, href }) => (
              <div key={title} className="reveal rounded-3xl border border-line bg-white p-7">
                <span className="grid size-11 place-items-center rounded-2xl bg-paper text-accent">
                  <Icon className="size-5" />
                </span>
                <h2 className="mt-8 text-sm text-muted">{title}</h2>
                {href ? (
                  <a href={href} className="mt-1 block break-words text-lg font-medium tracking-tight hover:text-accent">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg font-medium tracking-tight">{value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="reveal relative overflow-hidden rounded-3xl bg-night p-8 text-white sm:p-10 lg:col-span-5">
            <div aria-hidden className="grid-bg-dark absolute inset-0" />
            <div aria-hidden className="absolute -right-20 -top-20 size-72 rounded-full bg-sky/25 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <span className="grid size-12 place-items-center rounded-2xl bg-sky text-night">
                <CalendarClock className="size-5" />
              </span>
              <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-[-0.03em] text-balance">
                Schedule an executive level <span className="accent-serif text-sky">meeting</span> with us
              </h2>
              <p className="mt-4 text-white/60">
                Pick a 30-minute slot that suits you. We&apos;ll help you identify your scope of work and provide an
                effort estimation.
              </p>
              <div className="mt-auto pt-10">
                <ButtonLink href={company.calendly} variant="light" external>
                  Schedule a call
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
