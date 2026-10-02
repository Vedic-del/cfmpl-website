import type { Metadata } from "next";
import { ArrowLink } from "@/components/ArrowLink";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { approach, clientTypes, firm, founderMessage, history, timeline } from "@/content/firm";
import { imagery } from "@/content/imagery";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CFM began in 1991 in Kolkata, arranging loans. Today it is a Mumbai-based financial advisory and merchant banking firm with offices in four cities.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About CFM"
        lede="A Mumbai-based financial advisory and merchant banking firm, advising Indian companies since 1991."
        photo={imagery.about}
      />

      <Section tone="light" labelledBy="history-h">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="history-h" title="Our History" />
          <div className="prose-house max-w-[64ch] text-grey" data-reveal>
            {history.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="dark" labelledBy="milestones-h">
        <SectionHeading id="milestones-h" dark title="Milestones" />
        <Timeline entries={timeline} />
      </Section>

      <Section tone="paper" labelledBy="founder-h">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="founder-h" title="A Note from Our Founder" />
          <figure data-reveal>
            <blockquote className="prose-house max-w-[64ch] text-ink">
              {founderMessage.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </blockquote>
            <figcaption className="mt-8 border-t border-line pt-5">
              <span className="block font-display text-[1.1rem] font-medium">{founderMessage.name}</span>
              <span className="mt-1 block text-[14px] text-grey">{founderMessage.title}</span>
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="light" labelledBy="approach-h">
        <SectionHeading
          id="approach-h"
          title="How We Work with Clients"
          lede="What clients can expect when they work with us."
        />
        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {approach.map((a, i) => (
            <article
              key={a.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className="bg-white px-7 py-9 md:px-9 md:py-10"
            >
              <h3 className="text-[1.3rem] font-medium">{a.title}</h3>
              <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.75] text-grey">{a.body}</p>
            </article>
          ))}
        </div>
        <ArrowLink href="/how-we-work" className="mt-10">
          The steps of a typical mandate
        </ArrowLink>
      </Section>

      <Section tone="paper" labelledBy="clients-h">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="clients-h"
            title="Who We Work With"
            lede="We are sector agnostic. Our clients have included government undertakings, large and mid-size companies, manufacturers, banks and SMEs."
          />
          <ul className="grid grid-cols-2 gap-px self-start bg-line" data-reveal>
            {clientTypes.map((c) => (
              <li key={c} className="bg-paper px-5 py-5 font-display text-[15px]">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14 grid gap-6 border-t border-line pt-8 md:grid-cols-2" data-reveal>
          <p className="max-w-[56ch] text-[15px] leading-[1.8] text-grey">
            CFMPL is the sponsor of {firm.arc.name}, a separate company registered with the Reserve Bank of India,
            which acquires and resolves stressed financial assets.
          </p>
          <div className="flex flex-col gap-4 md:items-end">
            <ArrowLink href="/services">Our services</ArrowLink>
            <ArrowLink href="/leadership">Our board and management</ArrowLink>
            <ArrowLink href={firm.arc.url} external>
              Visit {firm.arc.display}
            </ArrowLink>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
