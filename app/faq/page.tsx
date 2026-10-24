import type { Metadata } from "next";
import { CtaBanner, FaqList, PageHero } from "@/components/sections";
import { Container } from "@/components/ui";
import { generalFaq, homeFaq } from "@/lib/content";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Frequently asked <span className="accent-serif text-accent">questions</span>
          </>
        }
        body="Everything you need to know about working with Skylark. Can't find an answer? Our team is one email away."
      />
      <section className="pb-24 sm:pb-32">
        <Container className="max-w-3xl">
          <FaqList items={[...generalFaq, ...homeFaq]} />
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
