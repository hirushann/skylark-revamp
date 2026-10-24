import type { Metadata } from "next";
import { AboutSection, BusinessSection, CtaBanner, PageHero, ReasonsList } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";
import { aboutReasons } from "@/lib/content";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Let us be your <span className="accent-serif text-accent">wings</span> to success
          </>
        }
        body="A software development outsourcing partner with a hand-picked team of engineers, analysts and project managers — serving clients across the United Kingdom, Australia, USA and Canada."
      />
      <AboutSection />

      <section className="bg-night py-24 sm:py-32">
        <Container>
          <SectionHeading
            dark
            eyebrow="Why choose us"
            title={
              <>
                Our team takes away the <span className="accent-serif text-sky">hard process</span> of developing
                your business solution
              </>
            }
            body={aboutReasons.body}
          />
          <div className="mt-14">
            <ReasonsList items={aboutReasons.items} />
          </div>
        </Container>
      </section>

      <BusinessSection />
      <CtaBanner />
    </>
  );
}
