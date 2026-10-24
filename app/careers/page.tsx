import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CtaBanner, PageHero } from "@/components/sections";
import { Container } from "@/components/ui";
import { company, jobs } from "@/lib/content";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build what&apos;s next, <span className="accent-serif text-accent">from anywhere</span>
          </>
        }
        body="Skylark is a great place to work which brings out the best of everyone and results in better outcomes. All of our open roles are remote and full time."
      />
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <h2 className="text-lg font-semibold tracking-tight">Open positions</h2>
            <span className="text-sm text-muted">{jobs.length} roles</span>
          </div>
          <ul>
            {jobs.map((job, i) => (
              <li key={job.title} className="reveal border-b border-line">
                <a
                  href={`mailto:${company.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 sm:gap-8"
                >
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-lg font-medium tracking-tight transition-colors group-hover:text-accent sm:text-xl">
                      {job.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{job.type}</span>
                  </span>
                  <span className="grid size-11 place-items-center rounded-full border border-line transition group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Don&apos;t see your role? Send your CV to{" "}
            <a href={`mailto:${company.email}`} className="font-medium text-ink underline underline-offset-4">
              {company.email}
            </a>
            .
          </p>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
