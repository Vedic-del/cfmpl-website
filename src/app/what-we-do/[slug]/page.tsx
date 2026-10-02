import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/ArrowLink";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { RegulatoryNote } from "@/components/RegulatoryNote";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { TombstoneGrid } from "@/components/TombstoneGrid";
import { firm } from "@/content/firm";
import { getPractice, practices } from "@/content/services";
import { tombstones } from "@/content/transactions";

// Static export: only the three practices exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) return {};
  return {
    title: practice.name,
    description: practice.lede,
    alternates: { canonical: `/what-we-do/${practice.slug}/` },
  };
}

export default async function PracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();

  const others = practices.filter((p) => p.slug !== practice.slug);
  const isResolution = practice.slug === "stressed-asset-resolution-advisory";

  return (
    <>
      <PageHero eyebrow={practice.eyebrow} lines={practice.headline} lede={practice.lede} />

      <Section tone="light" labelledBy="offerings-h">
        <h2 id="offerings-h" className="sr-only">
          {practice.name} services
        </h2>
        <div className="space-y-20">
          {practice.offerings.map((o, i) => (
            <article key={o.title} className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
              <div data-reveal>
                <p className="eyebrow text-brand">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="display mt-5">{o.title}</h3>
                <p className="lede mt-6 text-grey">{o.body}</p>
              </div>
              {o.points ? (
                <div data-reveal>
                  <p className="eyebrow text-brand">{o.pointsLabel}</p>
                  <ul className="mt-5 grid gap-px bg-line sm:grid-cols-2">
                    {o.points.map((p) => (
                      <li key={p} className="bg-white px-5 py-4 text-[14.5px] leading-snug">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <RegulatoryNote showSponsor={isResolution} className="mt-16" />
      </Section>

      {isResolution ? (
        <Section tone="dark" labelledBy="sponsor-h">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              id="sponsor-h"
              dark
              eyebrow="The Sponsor Relationship"
              lines={["We Advise on Resolution.", "CFM ARC Resolves."]}
            />
            <div data-reveal>
              <p className="lede text-warm/70">
                {firm.arc.name} is a separate company, registered with the Reserve Bank of India as an asset
                reconstruction company under the SARFAESI Act, 2002. It acquires and resolves stressed financial assets
                from banks and financial institutions. CFMPL sponsored its establishment in 2016.
              </p>
              <p className="lede mt-5 text-warm/70">
                The distinction matters. CFMPL&apos;s role here is advisory — assessing a stressed exposure and advising
                on the resolution path. Acquisition and resolution of assets is CFM ARC&apos;s business, conducted under
                its own licence and its own governance.
              </p>
              <ArrowLink href={firm.arc.url} external dark className="mt-8">
                Visit {firm.arc.display}
              </ArrowLink>
            </div>
          </div>
        </Section>
      ) : (
        <Section tone="paper" labelledBy="tr-h">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading id="tr-h" eyebrow="Selected Transactions" lines={["What This Looks Like", "in Practice."]} />
            <ArrowLink href="/what-we-do#tombstones-h" className="shrink-0 self-start md:self-end">
              All transactions
            </ArrowLink>
          </div>
          <TombstoneGrid items={tombstones} note="Selected transactions. Client names withheld. Values as arranged." />
        </Section>
      )}

      <Section tone="light" labelledBy="other-h">
        <h2 id="other-h" className="eyebrow text-brand">
          The other practices
        </h2>
        <ul className="mt-8 grid gap-px bg-line md:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/what-we-do/${o.slug}`} className="group flex h-full flex-col bg-white px-7 py-9 transition-colors duration-200">
                <h3 className="font-display text-[1.35rem] font-medium transition-colors duration-200 group-hover:text-brand">
                  {o.name}
                </h3>
                <p className="mt-3 max-w-[48ch] text-[14.5px] leading-relaxed text-grey">{o.short}</p>
                <span aria-hidden="true" className="mt-6 text-brand transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
