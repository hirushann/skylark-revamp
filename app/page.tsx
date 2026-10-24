import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Industries } from "@/components/industries";
import {
  AboutSection,
  BusinessSection,
  CtaBanner,
  FaqList,
  ReasonsList,
  ServicesGrid,
  serviceIcons,
} from "@/components/sections";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { company, homeFaq, homeReasons, services } from "@/lib/content";

function Hero() {
  return (
    <section className="relative -mt-[76px] overflow-hidden pt-[76px]">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="absolute -top-48 right-[-10%] h-[28rem] w-[40rem] rounded-full bg-sky/30 blur-3xl" />
      <Container className="relative grid items-center gap-16 py-20 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Link
            href="/services#talent"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 py-1 pl-1 pr-3 text-sm text-muted backdrop-blur transition hover:border-ink/20"
          >
            <span className="rounded-full bg-ink px-2.5 py-0.5 text-xs font-medium text-white">New</span>
            Part-time &amp; full-time remote teams
            <ArrowUpRight className="size-3.5" />
          </Link>
          <h1 className="mt-7 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] text-balance sm:text-7xl">
            Unlocking global talent. Outsource with{" "}
            <span className="accent-serif text-accent">expertise.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            Soaring to new heights in software development outsourcing. Experience seamless collaboration, unlock
            global talent, and watch your projects take flight with our team of experts. Let us be your wings to
            success!
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/about">Learn more</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              How it works
            </ButtonLink>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="float relative rounded-[2rem] bg-night p-7 text-white shadow-[0_40px_80px_-30px_rgb(8_13_24/0.55)]">
            <div aria-hidden className="grid-bg-dark absolute inset-0 rounded-[2rem]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/60">Global delivery</p>
                <span className="flex items-center gap-1.5 text-xs text-sky">
                  <span className="size-1.5 animate-pulse rounded-full bg-sky" /> Live
                </span>
              </div>
              <ul className="mt-6 space-y-2">
                {company.regions.map((r, i) => (
                  <li
                    key={r}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm"
                  >
                    {r}
                    <span className="font-mono text-xs text-white/40">0{i + 1}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-6">
                <div>
                  <p className="text-4xl font-semibold tracking-tight">100%</p>
                  <p className="mt-1 text-xs text-white/50">Customer satisfaction</p>
                </div>
                <div className="flex -space-x-2">
                  {services.slice(0, 4).map(({ key }) => {
                    const Icon = serviceIcons[key];
                    return (
                      <span key={key} className="grid size-9 place-items-center rounded-full border-2 border-night bg-sky text-night">
                        <Icon className="size-4" />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-6 -top-8 hidden rounded-2xl border border-line bg-white px-5 py-4 shadow-xl sm:block">
            <p className="text-2xl font-semibold tracking-tight">10+</p>
            <p className="text-xs text-muted">Projects delivered</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Services"
              title={
                <>
                  What we are doing <span className="accent-serif text-accent">best</span>
                </>
              }
              body={`Skylark's global clientele spans ${company.regions.join(", ")} — attesting to our widespread service delivery across diverse regions.`}
            />
            <ButtonLink href="/services" variant="secondary">
              All services
            </ButtonLink>
          </div>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </Container>
      </section>

      <section id="how-it-works" className="scroll-mt-20 bg-night py-24 sm:py-32">
        <Container>
          <SectionHeading
            dark
            eyebrow="Why choose us"
            title={
              <>
                Our platform takes away the <span className="accent-serif text-sky">hard process</span> of scaling
                your business
              </>
            }
          />
          <div className="mt-14">
            <ReasonsList items={homeReasons.items} />
          </div>
        </Container>
      </section>

      <BusinessSection />

      <section className="pb-24 sm:pb-32">
        <Container>
          <SectionHeading
            eyebrow="What we offer"
            title={
              <>
                Industries we have <span className="accent-serif text-accent">served</span>
              </>
            }
            body="We have provided our services to clients around the globe including United Kingdom, Australia, USA and Canada."
          />
          <div className="mt-12">
            <Industries />
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Frequently asked <span className="accent-serif text-accent">questions</span>
                </>
              }
            />
            <p className="reveal mt-5 text-[15px] text-muted">
              More answers on the{" "}
              <Link href="/faq" className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                FAQ page
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={homeFaq} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
