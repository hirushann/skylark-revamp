import type { Metadata } from "next";
import { CtaBanner, PageHero, ServicesGrid } from "@/components/sections";
import { Container } from "@/components/ui";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            What we are doing <span className="accent-serif text-accent">best</span>
          </>
        }
        body={`Skylark's global clientele spans ${company.regions.join(", ")}, attesting to our widespread service delivery across diverse regions.`}
      />
      <section className="pb-24 sm:pb-32">
        <Container>
          <ServicesGrid detailed />
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
