import Image from "next/image";
import { ArrowLink } from "@/components/ArrowLink";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { MetricsBand } from "@/components/MetricsBand";
import { Plate } from "@/components/Plate";
import { PracticeGrid } from "@/components/PracticeGrid";
import { Section } from "@/components/Section";
import { Muted, SectionHeading } from "@/components/SectionHeading";
import { Ticker } from "@/components/Ticker";
import { TombstoneGrid } from "@/components/TombstoneGrid";
import { metrics } from "@/content/firm";
import { imagery } from "@/content/imagery";
import { practices } from "@/content/services";
import { tombstones } from "@/content/transactions";

const plates = {
  "transaction-advisory": imagery.transactionAdvisory,
  "equity-capital-markets": imagery.equityCapitalMarkets,
  "stressed-asset-resolution-advisory": imagery.stressedAssets,
};

export default function HomePage() {
  return (
    <>
      <Hero
        lines={["Finding the right capital", "for your business, since 1991."]}
        lede="Transaction advisory, equity capital markets and stressed asset advisory from a SEBI Category I Merchant Banker headquartered in Mumbai."
      />

      <MetricsBand metrics={metrics} />

      <Ticker
        items={[
          "Debt raising",
          "Debt syndication",
          "Debt restructuring",
          "IPO advisory",
          "SME IPOs",
          "Rights issues",
          "Qualified institutional placements",
          "Private equity",
          "Stressed asset advisory",
        ]}
      />

      <Section tone="light" labelledBy="services-h">
        <SectionHeading
          id="services-h"
          eyebrow="Our Services"
          size="lg"
          title={
            <>
              We raise capital, restructure debt <Muted>and advise on stressed assets.</Muted>
            </>
          }
          className="mb-14 md:mb-18"
        />
        <PracticeGrid practices={practices} plates={plates} />
      </Section>

      <section aria-labelledby="transactions-h" className="relative isolate overflow-hidden bg-deep text-warm">
        <Plate photo={imagery.transactions} decorative parallax={0.14} sizes="100vw" className="absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/80 via-deep/70 to-deep/90" />
        <div className="container-house py-22 md:py-32">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              id="transactions-h"
              eyebrow="Selected Transactions"
              dark
              size="lg"
              title={
                <>
                  ₹2,190 crore, <Muted dark>structured across three financings.</Muted>
                </>
              }
            />
            <ArrowLink href="/services#transactions" dark className="shrink-0 self-start lg:self-end">
              The case studies
            </ArrowLink>
          </div>
          <div className="mt-14">
            <TombstoneGrid items={tombstones} dark />
          </div>
          <p className="mt-5 text-[13px] text-warm/60">Client names are not disclosed.</p>
        </div>
      </section>

      <section aria-labelledby="history-h" className="bg-paper lg:grid lg:grid-cols-2">
        <Plate
          photo={imagery.kolkata}
          parallax={0.1}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/3] lg:aspect-auto lg:min-h-[680px]"
        />
        <div className="flex flex-col justify-center px-6 py-18 md:px-10 md:py-24 lg:px-16 xl:px-24">
          <SectionHeading
            id="history-h"
            eyebrow="Our History"
            title={
              <>
                Founded in 1991, <Muted>the year India opened its economy.</Muted>
              </>
            }
          />
          <p className="lede mt-8 max-w-[52ch] text-grey" data-reveal>
            CFM began in a small office in Kolkata, arranging loans for companies. Three and a half decades on, we advise
            on debt, equity and stressed assets from Mumbai, New Delhi, Chennai and Ahmedabad.
          </p>
          <ArrowLink href="/about" className="mt-10 self-start">
            Our history
          </ArrowLink>
        </div>
      </section>

      <Section tone="light" labelledBy="people-h">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <SectionHeading
            id="people-h"
            eyebrow="Our People"
            size="lg"
            title={
              <>
                Bankers, policymakers <Muted>and a team across four cities.</Muted>
              </>
            }
          />
          <div data-reveal>
            <p className="lede text-grey">
              Our board brings together a former Finance Minister of Jammu &amp; Kashmir, a former chief executive of
              IFCI, a chartered accountant, a merchant banker associated with more than a hundred IPOs and the
              firm&apos;s founder. Our senior advisors spent their careers at State Bank of India, Bank of Baroda and
              Vijaya Bank.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <ArrowLink href="/leadership">Leadership &amp; Governance</ArrowLink>
              <ArrowLink href="/life-at-cfm">Life at CFM</ArrowLink>
            </div>
          </div>
        </div>
        <figure className="mt-14 md:mt-18" data-reveal>
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-[21/9]">
            <Image
              src={imagery.team.src}
              alt={imagery.team.alt}
              fill
              sizes="(min-width: 1440px) 1320px, 100vw"
              quality={75}
              className="object-cover object-[50%_55%]"
            />
          </div>
          <figcaption className="mt-3 text-[13px] text-grey">Team Synergy Retreat, 2024</figcaption>
        </figure>
      </Section>

      <CtaBand />
    </>
  );
}
