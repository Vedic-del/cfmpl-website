import Image from "next/image";
import { ArrowLink } from "@/components/ArrowLink";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { Plate } from "@/components/Plate";
import { PracticeGrid } from "@/components/PracticeGrid";
import { Section } from "@/components/Section";
import { Muted, SectionHeading } from "@/components/SectionHeading";
import { LogoWall } from "@/components/LogoWall";
import { imagery, imgAttrs } from "@/content/imagery";
import { practices } from "@/content/services";
import { advisoryClients, formatUsdMn, keyTransactions, merchantBankingClients, trackRecord } from "@/content/clients";

const plates = {
  "transaction-advisory": imagery.transactionAdvisory,
  "equity-capital-markets": imagery.equityCapitalMarkets,
  "stressed-asset-resolution-advisory": imagery.stressedAssets,
};

const facts = [
  { figure: "1991", label: "Founded in Kolkata" },
  { figure: "USD 40 bn+", label: "Transactions arranged" },
  { figure: "SEBI Cat. I", label: "Merchant banker" },
  { figure: "4 offices", label: "Head office in Mumbai" },
];

/** The history as three chapters: the page's dealt moment (photo-chapters). */
const chapters = [
  {
    title: "Kolkata, 1991",
    body: "CFM begins in a small office, arranging loans for companies.",
    photo: imagery.kolkata,
    tone: true,
  },
  {
    title: "Mumbai, 1995",
    body: "The head office moves to Mumbai. New Delhi follows in 2006 and Chennai in 2009.",
    photo: imagery.regulatory,
    tone: true,
  },
  {
    title: "Four cities today",
    body: "Mumbai, New Delhi, Chennai and Ahmedabad: one team advising on debt, equity and stressed assets.",
    photo: imagery.team,
    tone: false,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        lines={["Finding the right capital", "for your business, since 1991."]}
        lede="Transaction advisory, equity capital markets and stressed asset advisory from a SEBI Category I Merchant Banker headquartered in Mumbai."
        facts={facts}
      />

      <Section tone="light" labelledBy="services-h">
        <SectionHeading
          id="services-h"
          size="lg"
          title={
            <>
              We raise capital, restructure debt <Muted>and advise on stressed assets.</Muted>
            </>
          }
          className="mb-12 md:mb-16"
        />
        <PracticeGrid practices={practices} plates={plates} />
      </Section>

      <section aria-labelledby="transactions-h" className="relative isolate overflow-hidden bg-deep text-warm">
        <Plate photo={imagery.transactions} decorative sizes="(max-width: 767px) 420vw, 100vw" className="absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/90 via-deep/85 to-deep/95" />
        <div className="container-house py-22 md:py-32">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              id="transactions-h"
              dark
              size="lg"
              title={
                <>
                  {trackRecord.totalLabel} <Muted dark>across {trackRecord.count} key mandates.</Muted>
                </>
              }
            />
            <ArrowLink href="/services#transactions" dark className="shrink-0 self-start lg:self-end">
              See every transaction
            </ArrowLink>
          </div>
          <ul className="mt-14 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
            {keyTransactions.slice(0, 6).map((t) => (
              <li key={`${t.client}-${t.nature}`} className="flex flex-col bg-deep/80 p-6 md:p-8">
                <span className="num font-display text-[2rem] leading-none tracking-[-0.02em] text-warm md:text-[2.4rem]">
                  {formatUsdMn(t.usdMn)}
                </span>
                <span className="mt-5 font-display text-[17px] leading-snug text-warm">{t.client}</span>
                <span className="mt-2 text-[14px] text-warm/75">{t.nature}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[13px] text-warm/70">{trackRecord.note}</p>
        </div>
      </section>

      <Section tone="light" labelledBy="clients-h">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="clients-h"
            size="lg"
            title={
              <>
                State bodies, lenders <Muted>and listed companies.</Muted>
              </>
            }
          />
          <ArrowLink href="/services#clients" className="shrink-0 self-start lg:self-end">
            All clients
          </ArrowLink>
        </div>
        <LogoWall
          label="Selected clients"
          className="mt-12"
          logos={[...advisoryClients.slice(0, 9), ...merchantBankingClients.slice(0, 3)]}
        />
      </Section>

      <section data-moment="photo-chapters" aria-labelledby="history-h" className="bg-white py-18 text-ink md:py-24">
        <div className="container-house mo-ph">
          <div className="mo-ph__head">
            <h2 id="history-h" className="display">
              Founded in 1991, <Muted>the year India opened its economy.</Muted>
            </h2>
            <p className="lede text-grey">
              From one office in Kolkata to a merchant bank with four.{" "}
              <ArrowLink href="/about">Our history</ArrowLink>
            </p>
          </div>
          <ol className="mo-ph__list">
            {chapters.map((c) => (
              <li key={c.title} className="mo-ph__ch">
                <figure className="mo-ph__pic">
                  {/* eslint-disable-next-line @next/next/no-img-element -- the kit moment takes a plain img */}
                  <img
                    {...imgAttrs(c.photo)}
                    alt={c.photo.alt}
                    sizes="(min-width: 1440px) 1320px, 100vw"
                    width={1920}
                    height={1280}
                    loading="lazy"
                    className={c.tone ? "tone-house" : undefined}
                  />
                </figure>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section tone="paper" labelledBy="people-h">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-20">
          <SectionHeading
            id="people-h"
            size="lg"
            title={
              <>
                Bankers, policymakers <Muted>and a team across four cities.</Muted>
              </>
            }
          />
          <div>
            <p className="lede text-grey">
              Our board brings together a former Finance Minister of Jammu &amp; Kashmir, a former chief executive of
              IFCI, a chartered accountant, a merchant banker associated with more than a hundred IPOs and the
              firm&apos;s founder. Our senior advisors spent their careers at State Bank of India, Bank of Baroda, Punjab
              National Bank, IIFCL and National Housing Bank.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2">
              <ArrowLink href="/leadership">Leadership &amp; Governance</ArrowLink>
              <ArrowLink href="/life-at-cfm">Life at CFM</ArrowLink>
            </div>
          </div>
        </div>
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/life-at-cfm/`} className="m-zoom mt-14 block md:mt-16" aria-label="Life at CFM">
          <span className="relative block aspect-[16/10] overflow-hidden md:aspect-[21/9]">
            <Image
              src={imagery.townhall.src}
              alt={imagery.townhall.alt}
              fill
              sizes="(min-width: 1440px) 1320px, 100vw"
              quality={75}
              className="object-cover object-[50%_40%]"
            />
          </span>
        </a>
      </Section>

      <CtaBand />
    </>
  );
}
