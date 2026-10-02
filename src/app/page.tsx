import { ArrowLink } from "@/components/ArrowLink";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { MetricsBand } from "@/components/MetricsBand";
import { PersonCard } from "@/components/PersonCard";
import { PracticeGrid } from "@/components/PracticeGrid";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { TombstoneGrid } from "@/components/TombstoneGrid";
import { metrics } from "@/content/firm";
import { featuredPeople } from "@/content/people";
import { practices } from "@/content/services";
import { tombstones } from "@/content/transactions";

/**
 * Home: a short introduction that hands off to the inner pages. Each section
 * says what it needs to and links on; nothing here is repeated in full
 * elsewhere on the page.
 */
export default function HomePage() {
  return (
    <>
      <Hero
        lines={["Financial Advisory and", "Merchant Banking, Since 1991"]}
        lede="We help Indian companies raise debt and equity, restructure their borrowings and resolve stressed loans. CFM is a SEBI-registered Category I Merchant Banker with its head office in Mumbai."
      />

      <MetricsBand metrics={metrics} />

      <Section tone="light" labelledBy="services-h">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="services-h"
            title="Our Services"
            lede="Our work falls into three areas. Each is explained in more detail on its own page."
          />
          <ArrowLink href="/services" className="shrink-0 self-start md:self-end">
            All services
          </ArrowLink>
        </div>
        <PracticeGrid practices={practices} />
      </Section>

      <Section tone="paper" labelledBy="transactions-h">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="transactions-h"
            title="Selected Transactions"
            lede="Examples of financing we have arranged. Client names are not disclosed."
          />
          <ArrowLink href="/services#transactions" className="shrink-0 self-start md:self-end">
            Transaction details
          </ArrowLink>
        </div>
        <TombstoneGrid items={tombstones} />
      </Section>

      <Section tone="dark" labelledBy="history-h">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <SectionHeading id="history-h" dark title="Our History" />
          <div data-reveal>
            <p className="lede text-warm/80">
              CFM began in 1991 in a small office in Kolkata, arranging loans for companies. Its founding commitment was
              to be available to clients whenever they needed us, even at short notice.
            </p>
            <p className="lede mt-5 text-warm/80">
              Over three decades the firm has grown into debt syndication, merchant banking and broader financial
              advisory, with offices in four cities. That commitment to clients has not changed.
            </p>
            <ArrowLink href="/about" dark className="mt-8">
              Read our history
            </ArrowLink>
          </div>
        </div>
      </Section>

      <Section tone="light" labelledBy="people-h">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="people-h"
            title="Leadership & Governance"
            lede="CFM is overseen by a board of directors with long experience in banking, finance and public policy, and run by its management team."
          />
          <ArrowLink href="/leadership" className="shrink-0 self-start md:self-end">
            Meet the board and management
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
