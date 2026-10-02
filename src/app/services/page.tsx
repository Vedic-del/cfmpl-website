import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { CaseStudy } from "@/components/CaseStudy";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PracticeGrid } from "@/components/PracticeGrid";
import { RegulatoryNote } from "@/components/RegulatoryNote";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { imagery } from "@/content/imagery";
import { practices, whenToCall } from "@/content/services";
import { caseStudies } from "@/content/transactions";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Merchant banking, equity capital markets, private equity advisory, debt syndication, restructuring and stressed asset resolution advisory in India.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        lede="We advise Indian companies on raising equity and debt, on restructuring their finances, and on loans that have become stressed."
        photo={imagery.whatWeDo}
      />

      <Section tone="light" labelledBy="areas-h">
        <h2 id="areas-h" className="sr-only">
          Service areas
        </h2>
        <PracticeGrid practices={practices} />
        <RegulatoryNote className="mt-12" />
      </Section>

      <Section tone="dark" labelledBy="when-h">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHeading
            id="when-h"
            dark
            title="When Companies Come to Us"
            lede="Companies usually approach us in situations like these."
          />
          <ul className="border-t border-line-dark" data-reveal>
            {whenToCall.map((w) => (
              <li key={w} className="flex gap-5 border-b border-line-dark py-5">
                <span aria-hidden="true" className="mt-1 text-brand-light">
                  &#8212;
                </span>
                <span className="text-[16px] leading-[1.7] text-warm/90">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="paper" id="transactions" labelledBy="transactions-h">
        <SectionHeading
          id="transactions-h"
          title="Selected Transactions"
          lede="Two examples of our work, covering three financings. Client names are not disclosed."
        />
        <div className="mt-16 space-y-24">
          {caseStudies.map((study) => (
            <CaseStudy key={study.slug} study={study} />
          ))}
        </div>
        <div className="mt-16 border-t border-line pt-8" data-reveal>
          <p className="max-w-[62ch] text-[15px] leading-[1.8] text-grey">
            Public issues on which CFM has acted as lead manager are listed separately, as SEBI requires, under
            Regulatory Information.
          </p>
          <ArrowLink href="/regulatory/public-issues-track-record" className="mt-5">
            Track record of public issues
          </ArrowLink>
        </div>
      </Section>

      <Section tone="light" labelledBy="process-h">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="process-h"
            title="How a Mandate Works"
            lede="From the first conversation to the release of funds, the steps we follow are set out on a separate page."
          />
          <ArrowLink href="/how-we-work" className="shrink-0 self-start md:self-end">
            How we work
          </ArrowLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
