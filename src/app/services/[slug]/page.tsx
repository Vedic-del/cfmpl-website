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

// Static export: only the three services exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) return {};
  return {
    title: practice.seoTitle,
    description: practice.summary,
    alternates: { canonical: `/services/${practice.slug}/` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();

  const others = practices.filter((p) => p.slug !== practice.slug);
  const isResolution = practice.slug === "stressed-asset-resolution-advisory";
  const deals = tombstones.filter((t) => t.practice === practice.slug);

  return (
    <>
      <PageHero eyebrow="Services" title={practice.name} lede={practice.intro} />

      <Section tone="light" labelledBy="offerings-h">
        <h2 id="offerings-h" className="sr-only">
          {practice.name} services
        </h2>
        <p className="max-w-[64ch] border-l-2 border-brand pl-6 text-[15.5px] leading-[1.75] text-ink" data-reveal>
          <strong className="font-display font-medium">Who this is for: </strong>
          {practice.forWhom}
        </p>

        <div className="mt-16 space-y-20">
          {practice.offerings.map((o) => (
            <article key={o.title} className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
              <div data-reveal>
                <h3 className="display">{o.title}</h3>
                <p className="lede mt-6 text-grey">{o.body}</p>
                <p className="mt-6 text-[15.5px] leading-[1.75] text-ink">
                  <strong className="font-display font-medium text-brand-deep">Our role: </strong>
                  {o.role}
                </p>
              </div>
              {o.points ? (
                <div data-reveal>
                  <h4 className="eyebrow text-brand">{o.pointsLabel}</h4>
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
            <SectionHeading id="sponsor-h" dark title="CFMPL and CFM ARC" />
            <div data-reveal>
              <p className="lede text-warm/80">
                {firm.arc.name} (CFM ARC) is a separate company, registered with the Reserve Bank of India as an asset
                reconstruction company under the SARFAESI Act, 2002. It buys stressed loans from banks and financial
                institutions and works to resolve them. CFMPL sponsored its establishment in 2016.
              </p>
              <p className="lede mt-5 text-warm/80">
                The two companies have different roles. CFMPL advises on stressed loans. CFM ARC acquires and resolves
                them, under its own licence and governance.
              </p>
              <ArrowLink href={firm.arc.url} external dark className="mt-8">
                Visit {firm.arc.display}
              </ArrowLink>
            </div>
          </div>
        </Section>
      ) : deals.length > 0 ? (
        <Section tone="paper" labelledBy="deals-h">
          <SectionHeading
            id="deals-h"
            title="Selected Transactions"
            lede="Financing we have arranged in this area. Client names are not disclosed."
          />
          <TombstoneGrid items={deals} />
        </Section>
      ) : null}

      <Section tone="light" labelledBy="other-h">
        <h2 id="other-h" className="eyebrow text-brand">
          Our other services
        </h2>
        <ul className="mt-8 grid gap-px bg-line md:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/services/${o.slug}`} className="group flex h-full flex-col bg-white px-7 py-9">
                <h3 className="font-display text-[1.35rem] font-medium transition-colors duration-200 group-hover:text-brand">
                  {o.name}
                </h3>
                <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-grey">{o.summary}</p>
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
