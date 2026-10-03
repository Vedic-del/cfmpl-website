import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { CountUp } from "@/components/CountUp";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Muted, SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { approach, clientTypes, firm, founderMessage, history, timeline } from "@/content/firm";
import { imagery } from "@/content/imagery";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CFM began in 1991 in Kolkata, arranging loans. Today it is a Mumbai-based financial advisory firm and SEBI Category I Merchant Banker with offices in four cities.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  // The opening sentence is set large; the rest of the note follows it.
  const [opening, ...rest] = founderMessage.paragraphs;
  const cut = opening.indexOf(". ") + 1;
  const quote = opening.slice(0, cut);
  const note = [opening.slice(cut).trim(), ...rest].filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Thirty-five years of finding capital <Muted dark>for Indian companies.</Muted>
          </>
        }
        lede="CFM is a Mumbai-based financial advisory firm and SEBI Category I Merchant Banker, with offices in New Delhi, Chennai and Ahmedabad."
        photo={imagery.history}
      />

      <Section tone="light" labelledBy="history-h">
        <SectionHeading
          id="history-h"
          eyebrow="Our History"
          size="lg"
          title={
            <>
              Started in Kolkata. <Muted>Built in Mumbai.</Muted>
            </>
          }
        />
        <div className="prose-house mt-12 gap-14 text-grey md:columns-2 lg:columns-3 [&>p]:mt-0 [&>p]:mb-5 [&>p]:break-inside-avoid lg:[&>p]:text-[1.0625rem]" data-reveal>
          {history.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Section>

      <Section tone="dark" labelledBy="milestones-h">
        <SectionHeading id="milestones-h" dark title="Milestones" />
        <Timeline entries={timeline} />
      </Section>

      <Section tone="paper" labelledBy="founder-h">
        <h2 id="founder-h" className="eyebrow text-brand">
          A Note from Our Founder
        </h2>
        <figure className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-x-20 lg:gap-y-8" data-reveal>
          <blockquote className="lg:row-span-2">
            <p className="display-lg max-w-[14ch] text-ink">
              <span aria-hidden="true" className="text-brand">
                &ldquo;
              </span>
              {quote}
              <span aria-hidden="true" className="text-brand">
                &rdquo;
              </span>
            </p>
          </blockquote>
          <div className="prose-house self-end text-ink">
            {note.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <figcaption className="border-t border-line pt-5 lg:col-start-2">
            <span className="block font-display text-[1.1rem] font-medium">{founderMessage.name}</span>
            <span className="mt-1 block text-[14px] text-grey">{founderMessage.title}</span>
          </figcaption>
        </figure>
      </Section>

      <Section tone="light" labelledBy="approach-h">
        <SectionHeading
          id="approach-h"
          eyebrow="How We Work"
          title={
            <>
              What we bring <Muted>to every mandate.</Muted>
            </>
          }
        />
        <div className="mt-14 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((a, i) => (
            <article
              key={a.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className="flex flex-col border-b border-line py-10 sm:px-7 sm:max-lg:[&:nth-child(odd)]:pl-0 lg:border-b-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <CountUp value={a.figure} className="block font-display text-[2.4rem] leading-none tracking-[-0.02em] text-brand-deep" />
              <p className="mt-2 h-5 font-display text-[14px] text-brand">{a.unit}</p>
              <h3 className="mt-8 text-[1.25rem] font-medium leading-snug">{a.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-grey">{a.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper" labelledBy="clients-h">
        <SectionHeading
          id="clients-h"
          eyebrow="Our Clients"
          title={
            <>
              Sector agnostic, <Muted>from SMEs to government undertakings.</Muted>
            </>
          }
        />
        <ul className="mt-12 grid grid-cols-2 gap-px bg-line md:grid-cols-3 lg:grid-cols-6" data-reveal>
          {clientTypes.map((c) => (
            <li key={c} className="bg-paper px-5 py-6 font-display text-[15.5px]">
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-8 md:flex-row md:items-center md:justify-between" data-reveal>
          <p className="max-w-[80ch] text-[15px] leading-[1.8] text-grey">
            CFMPL is the sponsor of {firm.arc.name}, a separate RBI-registered company that acquires and resolves
            stressed financial assets.
          </p>
          <ArrowLink href={firm.arc.url} external className="shrink-0">
            {firm.arc.display}
          </ArrowLink>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
