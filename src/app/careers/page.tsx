import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { culture, events, howToApply, openRoles, qualities } from "@/content/careers";
import { imagery } from "@/content/imagery";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Chartered Finance Management: open positions in corporate finance and debt syndication, what we look for, and how to apply.",
  alternates: { canonical: "/careers/" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero title="Careers at CFM" lede={culture.intro} photo={imagery.lifeAtCfm} />

      <Section tone="light" labelledBy="values-h">
        <SectionHeading id="values-h" title="What We Value" />
        <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {culture.values.map((v, i) => (
            <article
              key={v.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className="bg-white px-7 py-9 md:px-9 md:py-10"
            >
              <h3 className="text-[1.3rem] font-medium">{v.title}</h3>
              <p className="mt-3 max-w-[48ch] text-[15px] leading-[1.75] text-grey">{v.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="paper" labelledBy="roles-h">
        <SectionHeading id="roles-h" title="Open Positions" />
        {openRoles.length > 0 ? (
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {openRoles.map((r, i) => (
              <li
                key={r.title}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                className="border border-line bg-white p-7"
              >
                <p className="eyebrow text-brand">{r.practice}</p>
                <h3 className="mt-4 font-display text-[1.35rem] font-medium">{r.title}</h3>
                <p className="mt-2 text-[14.5px] text-grey">{r.location}</p>
                <a
                  href={`mailto:${howToApply.email}?subject=${encodeURIComponent(`Application — ${r.title}`)}`}
                  className="mt-6 inline-flex items-center gap-2 border-b border-brand-deep/35 pb-1 text-[14.5px] text-brand-deep transition-colors hover:border-brand-deep"
                >
                  Apply for this position <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-12 border border-dashed border-line bg-white px-7 py-12 text-center" data-reveal>
            <p className="font-display text-[1.1rem]">There are no open positions at the moment.</p>
            <p className="mx-auto mt-3 max-w-[52ch] text-[15px] text-grey">
              You are welcome to send us your CV for future opportunities.
            </p>
          </div>
        )}
      </Section>

      <Section tone="light" labelledBy="apply-h">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="apply-h"
            title="How to Apply"
            lede={`Email ${howToApply.email} with the following.`}
          />
          <div data-reveal>
            <ol className="border-t border-line">
              {howToApply.asks.map((a, i) => (
                <li key={a} className="flex items-baseline gap-5 border-b border-line py-4">
                  <span className="num font-display text-[13px] font-semibold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15.5px]">{a}</span>
                </li>
              ))}
            </ol>
            <a
              href={`mailto:${howToApply.email}`}
              className="mt-8 inline-block rounded-full bg-brand px-7 py-3.5 font-display text-[15px] font-medium text-warm transition-colors duration-200 hover:bg-brand-deep"
            >
              Email {howToApply.email}
            </a>
            <div className="mt-12 border-t border-line pt-8">
              <h3 className="eyebrow text-brand">What we look for</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {qualities.map((q) => (
                  <li key={q} className="border border-line px-3.5 py-2 text-[14px] text-grey">
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark" labelledBy="life-h">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="life-h"
            dark
            title="Life at the Firm"
            lede="Some of the occasions we have marked together."
          />
          <ul className="self-center" data-reveal>
            {events.map((e) => (
              <li key={e} className="border-b border-line-dark py-4 text-[15.5px] text-warm/80">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
