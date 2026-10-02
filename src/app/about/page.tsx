import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { CtaBand } from "@/components/CtaBand";
import { MetricsBand } from "@/components/MetricsBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { clientTypes, evolution, firm, metrics, strengths, timeline } from "@/content/firm";
import { imagery } from "@/content/imagery";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Chartered Finance Management has advised Indian growth corporates since 1991 — a loan arranger that became a syndicator, then a full-service advisory house, and the sponsor of an asset reconstruction company.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        lines={["Thirty-Five Years Spent", "Learning Where Capital", "Is Willing to Go."]}
        lede="Chartered Finance Management is an independent Indian merchant bank. We advise growth-focused corporates on raising, restructuring and resolving capital, and we have been doing it since 1991."
        photo={imagery.about}
      />

      <MetricsBand metrics={metrics} />

      <Section tone="light" labelledBy="who-h">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="who-h"
            eyebrow="Who We Are"
            lines={["A Firm Built Around", "One Question: What", "Does This Business", "Need Next?"]}
          />
          <div className="prose-house max-w-[62ch] text-grey" data-reveal>
            <p>
              We work with companies across their growth cycle, and the need changes as the cycle turns. Sometimes it is
              structured lending. Sometimes a fundraise, a restructuring, a merchant banking mandate or advice on a
              stressed exposure. We are sector agnostic, and the answer follows the business rather than the product.
            </p>
            <p>
              The work is built on research, predictive analysis and forward-looking planning — not only to structure
              what a company needs today, but to see the pitfalls likely to arrive later. We hold to professional and
              ethical standards and to transparency, because a merchant bank that is not trusted has nothing to sell.
            </p>
            <p>
              Once we take a mandate we stay with it. That is the part clients tend to remember: not the pitch, but who
              was still on the call at the point of disbursal.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="paper" labelledBy="evolution-h">
        <SectionHeading id="evolution-h" eyebrow="How the Firm Grew" lines={["From Arranging Loans", "to Advising on Everything", "Around Them."]} />
        <ol className="mt-12 grid gap-px bg-line md:grid-cols-4">
          {evolution.map((stage, i) => (
            <li
              key={stage}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              className="bg-paper px-6 py-9 first:pl-0 md:px-7"
            >
              <span className="num font-display text-[13px] font-semibold tracking-[0.14em] text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-display text-[1.2rem] leading-snug">{stage}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="dark" labelledBy="journey-h">
        <SectionHeading id="journey-h" dark eyebrow="Our Journey" lines={["The Dates That", "Mattered."]} />
        <Timeline entries={timeline} />
      </Section>

      <Section tone="light" labelledBy="strengths-h">
        <SectionHeading id="strengths-h" eyebrow="What We Bring" lines={["Four Things Worth", "Paying For."]} />
        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {strengths.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className="bg-white px-7 py-9 md:px-9 md:py-11"
            >
              <h3 className="text-[1.3rem] font-medium">{s.title}</h3>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.75] text-grey">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper" labelledBy="clients-h">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="clients-h"
            eyebrow="Who We Work With"
            lines={["What a Company Makes", "Matters Less Than", "Where It Stands."]}
            lede="We have advised government undertakings, large and mid-size corporates, manufacturers, banks and SMEs. What matters to us is where a company stands, what it owes, and what it is trying to build next."
          />
          <ul className="grid grid-cols-2 gap-px self-start bg-line" data-reveal>
            {clientTypes.map((c) => (
              <li key={c} className="bg-paper px-5 py-6 font-display text-[15px]">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 border-t border-line pt-8" data-reveal>
          <p className="max-w-[60ch] text-[15px] leading-[1.8] text-grey">
            CFMPL is also the sponsor of {firm.arc.name}, a separate company registered with the Reserve Bank of India,
            which acquires and resolves stressed financial assets.
          </p>
          <ArrowLink href={firm.arc.url} external className="mt-5">
            Visit {firm.arc.display}
          </ArrowLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
