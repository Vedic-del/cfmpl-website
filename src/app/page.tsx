import { ArrowLink } from "@/components/ArrowLink";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { MetricsBand } from "@/components/MetricsBand";
import { PersonCard } from "@/components/PersonCard";
import { PracticeGrid } from "@/components/PracticeGrid";
import { ProcessDiagram } from "@/components/ProcessDiagram";
import { ProcessSteps } from "@/components/ProcessSteps";
import { RegulatoryNote } from "@/components/RegulatoryNote";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { TombstoneGrid } from "@/components/TombstoneGrid";
import { metrics } from "@/content/firm";
import { featuredPeople } from "@/content/people";
import { processSteps } from "@/content/process";
import { practices } from "@/content/services";
import { tombstones } from "@/content/transactions";

export default function HomePage() {
  return (
    <>
      <Hero
        lines={["Every Company Needs Capital.", "Very Few Need the Same Kind."]}
        lede="CFM arranges and structures capital for India's growth corporates — debt, equity and the structures in between — shaped by where a business stands today, and what it is trying to build next."
      />

      <MetricsBand metrics={metrics} note="Figures as stated by the firm. Transaction value is cumulative across the period shown." />

      <Section tone="dark" labelledBy="approach-h">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionHeading id="approach-h" dark eyebrow="Our Approach" lines={["Problems Carry", "Opportunities", "Inside Them."]} />
          <div data-reveal>
            <p className="lede text-warm/70">
              That is the principle the firm was founded on, and it is still how mandates get taken. A rating that will
              not move, a sector lenders have written off, a balance sheet that needs restructuring before it needs
              money — these are the situations where structuring earns its fee.
            </p>
            <p className="lede mt-5 text-warm/70">
              We are sector agnostic, and we work across the growth cycle — from a company&apos;s first institutional
              debt to resolution advisory when a cycle turns.
            </p>
            <ArrowLink href="/about" dark className="mt-8">
              Read our story
            </ArrowLink>
          </div>
        </div>
      </Section>

      <Section tone="light" labelledBy="practices-h">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="practices-h" eyebrow="What We Do" lines={["Three Practices,", "One Set of Standards."]} />
          <ArrowLink href="/what-we-do" className="shrink-0 self-start md:self-end">
            All services
          </ArrowLink>
        </div>
        <PracticeGrid practices={practices} />
        <RegulatoryNote className="mt-12" />
      </Section>

      <Section tone="paper" labelledBy="transactions-h">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="transactions-h" eyebrow="Selected Transactions" lines={["Deals That Took More", "Than a Term Sheet."]} />
          <ArrowLink href="/what-we-do#tombstones-h" className="shrink-0 self-start md:self-end">
            See the transactions
          </ArrowLink>
        </div>
        <TombstoneGrid items={tombstones} note="Selected transactions. Client names withheld. Values as arranged." />
      </Section>

      <Section tone="dark" labelledBy="process-h">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              id="process-h"
              dark
              eyebrow="How We Work"
              lines={["What Actually Happens", "Between the First Meeting", "and Disbursal."]}
              lede="We publish the whole sequence — nine steps from origination to the point our fee is collected, which is on sanction or first disbursal. The order of the steps is the argument."
            />
            <div data-reveal>
              <ProcessSteps steps={processSteps} compact />
              <ArrowLink href="/how-we-work" dark className="mt-9">
                Read the full process
              </ArrowLink>
            </div>
          </div>
          <ProcessDiagram className="mx-auto w-full max-w-[360px]" />
        </div>
      </Section>

      <Section tone="light" labelledBy="people-h">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="people-h"
            eyebrow="Leadership"
            lines={["Who Answers for the Firm,", "and Who Runs", "Your Mandate."]}
            lede="The board answers for how CFM is run. The management team runs the mandates. Careers at IFCI, the State Bank of India, Bank of Baroda and the Planning Commission sit behind both."
          />
          <ArrowLink href="/leadership" className="shrink-0 self-start md:self-end">
            Board, advisors and management
          </ArrowLink>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {featuredPeople.map((p, i) => (
            <PersonCard key={p.slug} person={p} index={i} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
