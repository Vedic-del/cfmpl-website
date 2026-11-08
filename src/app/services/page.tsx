import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";
import { CaseStudy } from "@/components/CaseStudy";
import { Clamp } from "@/components/Clamp";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { RegulatoryNote } from "@/components/RegulatoryNote";
import { Muted } from "@/components/SectionHeading";
import { ServiceIndex } from "@/components/ServiceIndex";
import { firm } from "@/content/firm";
import { imagery, imgAttrs, type Photo } from "@/content/imagery";
import { practices, type Practice } from "@/content/services";
import { caseStudies } from "@/content/transactions";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Transaction advisory (debt raising, syndication and restructuring), equity capital markets (IPO and SME IPO advisory, private equity) and stressed asset resolution advisory for Indian companies.",
  alternates: { canonical: "/services/" },
};

const plates: Record<string, Photo> = {
  "transaction-advisory": imagery.transactionAdvisory,
  "equity-capital-markets": imagery.equityCapitalMarkets,
  "stressed-asset-resolution-advisory": imagery.stressedAssets,
};

const index = [
  ...practices.map((p) => ({ id: p.slug, label: p.name })),
  { id: "transactions", label: "Selected Transactions" },
];

function PracticeSection({ practice }: { practice: Practice }) {
  const isResolution = practice.slug === "stressed-asset-resolution-advisory";
  return (
    <section
      id={practice.slug}
      aria-labelledby={`${practice.slug}-h`}
      className="scroll-mt-36 border-t border-line py-18 first:border-t-0 first:pt-14 md:py-24 lg:scroll-mt-20"
    >
      <div className="max-w-[62rem]">
        <div>
          <h2 id={`${practice.slug}-h`} className="display max-w-[20ch]">
            {practice.name}
          </h2>
          <p className="lede mt-6 max-w-[58ch] text-grey">{practice.intro}</p>
          <p className="mt-6 max-w-[58ch] border-l-2 border-brand pl-5 text-[15px] leading-[1.7] text-ink">
            <span className="font-display font-medium">For </span>
            {practice.forWhom.charAt(0).toLowerCase() + practice.forWhom.slice(1)}
          </p>
        </div>
      </div>

      <div className="mt-16 space-y-14">
        {practice.offerings.map((o) => (
          <article
            key={o.title}
            className="grid gap-8 border-t border-line pt-10 md:grid-cols-[1fr_1.15fr] md:gap-14"
          >
            <div>
              <p className={`text-[14px] font-display font-medium ${o.sebi ? "text-brand" : "text-grey"}`}>
                {o.sebi ? "Regulated by SEBI" : "Not regulated by SEBI"}
              </p>
              <h3 className="mt-2 font-display text-[1.6rem] leading-tight font-medium">{o.title}</h3>
              <p className="mt-4 text-[16px] leading-[1.75] text-grey">{o.body}</p>
              <p className="mt-5 text-[15px] leading-[1.7] text-ink">
                <span className="font-display font-medium text-brand-deep">Our role: </span>
                {o.role}
              </p>
            </div>
            {o.points ? (
              <Clamp count={o.points.length}>
                <ul className="grid content-start gap-x-8 sm:grid-cols-2">
                  {o.points.map((pt) => (
                    <li key={pt} className="flex gap-3 border-b border-line py-3 text-[14.5px] leading-snug">
                      <span aria-hidden="true" className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Clamp>
            ) : null}
          </article>
        ))}
      </div>

      {isResolution ? (
        <aside
          aria-label="CFMPL and CFM ARC"
          className="relative isolate mt-14 grid gap-6 bg-deep px-7 py-9 text-warm md:grid-cols-[1fr_auto] md:items-end md:px-10"
        >
          <div>
            <p className="font-display text-[1.25rem] font-medium text-warm">CFMPL and CFM ARC</p>
            <p className="mt-4 max-w-[70ch] text-[15.5px] leading-[1.75] text-warm/85">
              CFMPL sponsored {firm.arc.name} in 2016. CFM ARC is a separate company, registered with the Reserve Bank
              of India under the SARFAESI Act, 2002, that acquires and resolves stressed loans. CFMPL advises; CFM ARC
              acquires and resolves.
            </p>
          </div>
          <ArrowLink href={firm.arc.url} external dark className="shrink-0">
            {firm.arc.display}
          </ArrowLink>
        </aside>
      ) : null}
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Transaction advisory, equity capital markets <Muted dark>and stressed asset advisory.</Muted>
          </>
        }
        lede="For Indian companies and the institutions that lend to them."
        photo={imagery.transactions}
        actions={
          <Link href="/contact" className="btn btn--light">
            Discuss a mandate
          </Link>
        }
      />

      <section data-moment="pinned-chapters" aria-labelledby="practices-h" className="bg-white py-18 text-ink md:py-24">
        <div className="container-house mo-pc__grid">
          <div className="mo-pc__text">
            <h2 id="practices-h" className="display max-w-[20ch]">
              Three practices, <Muted>one team from first meeting to close.</Muted>
            </h2>
            <ol className="mo-pc__steps">
              {practices.map((p) => (
                <li key={p.slug} className="mo-pc__step">
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                  <figure className="mo-pc__visual">
                    {/* eslint-disable-next-line @next/next/no-img-element -- the kit moment takes a plain img */}
                    <img {...imgAttrs(plates[p.slug])} alt={plates[p.slug].alt} sizes="(min-width: 1024px) 50vw, 100vw" width={1920} height={1440} loading="lazy" className="tone-house" />
                  </figure>
                </li>
              ))}
            </ol>
          </div>
          <div className="mo-pc__visuals frame" />
        </div>
      </section>

      <div className="bg-white">
        <div className="container-house lg:grid lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-16 xl:gap-24 lg:py-10">
          <ServiceIndex items={index} />

          <div>
            {practices.map((p) => (
              <PracticeSection key={p.slug} practice={p} />
            ))}

            <section
              id="transactions"
              aria-labelledby="transactions-h"
              className="scroll-mt-36 border-t border-line py-18 md:py-24 lg:scroll-mt-20"
            >
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <h2 id="transactions-h" className="display max-w-[20ch]">
                    ₹2,190 crore, <Muted>structured across three financings.</Muted>
                  </h2>
                </div>
                <p className="shrink-0 text-[13px] text-grey">Client names are not disclosed.</p>
              </div>
              <div className="mt-16 space-y-24">
                {caseStudies.map((study) => (
                  <CaseStudy key={study.slug} study={study} />
                ))}
              </div>
              <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
                <p className="text-[15px] text-grey">Public issues we have lead-managed are listed under Regulatory Information.</p>
                <ArrowLink href="/regulatory/public-issues-track-record" className="shrink-0">
                  Track record of public issues
                </ArrowLink>
              </div>
            </section>

            <RegulatoryNote showSponsor={false} className="mb-18 md:mb-24" />
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
