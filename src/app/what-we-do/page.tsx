import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { CaseStudy } from "@/components/CaseStudy";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PracticeGrid } from "@/components/PracticeGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RegulatoryNote } from "@/components/RegulatoryNote";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { TombstoneGrid } from "@/components/TombstoneGrid";
import { imagery } from "@/content/imagery";
import { processSteps } from "@/content/process";
import { practices, whenToCall, whenToCallNote } from "@/content/services";
import { caseStudies, tombstones } from "@/content/transactions";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Investment banking, corporate advisory and stressed-asset resolution advisory for Indian growth corporates — with the transactions we have arranged, including ₹1,190 crore of Hybrid Annuity Model project financing.",
  alternates: { canonical: "/what-we-do/" },
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        lines={["Three Practices,", "One Set of Standards."]}
        lede="Every transaction is undertaken with the regulatory compliance appropriate to it, and we say plainly which of our activities sit under our SEBI registration and which do not."
        photo={imagery.whatWeDo}
      />

      <Section tone="light" labelledBy="practices-h">
        <SectionHeading
          id="practices-h"
          eyebrow="The Practices"
          lines={["Most Clients Arrive", "Needing One Thing and", "Stay for Another."]}
          lede="A company that comes to us for project debt may need a restructuring two years later, and an equity raise after that. The three practices exist so the answer can change while the relationship holds."
        />
        <PracticeGrid practices={practices} />
        <RegulatoryNote className="mt-12" />
      </Section>

      <Section tone="dark" labelledBy="when-h">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionHeading
            id="when-h"
            dark
            eyebrow="When Companies Call Us"
            lines={["Six Situations We", "See Most Often."]}
            lede="If one of these describes where you are, the conversation will be a short and useful one."
          />
          <div data-reveal>
            <ul className="border-t border-line-dark">
              {whenToCall.map((w) => (
                <li key={w} className="flex gap-5 border-b border-line-dark py-5">
                  <span aria-hidden="true" className="mt-1 text-brand-light">
                    &#8212;
                  </span>
                  <span className="text-[16px] leading-[1.7] text-warm/85">{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 max-w-[58ch] text-[14.5px] leading-[1.8] text-warm/70">{whenToCallNote}</p>
          </div>
        </div>
      </Section>

      <Section tone="paper" labelledBy="tombstones-h">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="tombstones-h"
            eyebrow="Selected Transactions"
            lines={["Deals That Took More", "Than a Term Sheet."]}
          />
        </div>
        <TombstoneGrid items={tombstones} note="Selected transactions. Client names withheld. Values as arranged." />
      </Section>

      {caseStudies.map((study, i) => (
        <Section key={study.slug} tone={i % 2 === 0 ? "dark" : "light"}>
          <CaseStudy study={study} dark={i % 2 === 0} />
        </Section>
      ))}

      <Section tone="paper" labelledBy="process-h">
        <SectionHeading
          id="process-h"
          eyebrow="How We Work"
          lines={["The Same Nine Steps,", "Whatever the Mandate."]}
          lede="Origination to disbursal, published in full. Note the order of steps six and seven: the market is tested before you are asked to sign anything."
        />
        <div data-reveal>
          <ProcessSteps steps={processSteps} compact dark={false} />
          <ArrowLink href="/how-we-work" className="mt-9">
            Read the full process
          </ArrowLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
