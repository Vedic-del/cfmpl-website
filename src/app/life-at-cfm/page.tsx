import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { Muted, SectionHeading } from "@/components/SectionHeading";
import { culture, howToApply, openRoles, qualities } from "@/content/careers";
import { imagery, moments } from "@/content/imagery";

export const metadata: Metadata = {
  title: "Life at CFM",
  description:
    "Life at Chartered Finance Management: the team, the occasions we mark together, and open positions in corporate finance and debt syndication.",
  alternates: { canonical: "/life-at-cfm/" },
};

// Bento placement for the gallery on wide screens, in the order of `moments`.
const tiles = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-6",
  "lg:col-span-6",
];

export default function LifeAtCfmPage() {
  return (
    <>
      <PageHero
        eyebrow="Life at CFM"
        title={
          <>
            One team, <Muted dark>four cities.</Muted>
          </>
        }
        lede={culture.intro}
        photo={imagery.offsite}
        natural
      />

      <Section tone="light" labelledBy="moments-h">
        <SectionHeading
          id="moments-h"
          eyebrow="Moments"
          title={
            <>
              The occasions <Muted>we mark together.</Muted>
            </>
          }
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-12 xl:auto-rows-[300px]">
          {moments.map((m, i) => (
            <li
              key={m.src}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              className={`group relative aspect-[4/3] overflow-hidden bg-paper lg:aspect-auto ${tiles[i] ?? "lg:col-span-6"}`}
            >
              <figure className="h-full">
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"}
                  quality={75}
                  className="object-cover transition-transform duration-700 ease-[var(--ease-house)] group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/85 to-transparent px-5 pt-14 pb-4 font-display text-[15px] text-warm">
                  {m.title}
                  {m.year ? <span className="ml-2 text-warm/70">{m.year}</span> : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper" labelledBy="values-h">
        <SectionHeading id="values-h" eyebrow="What We Value" title="How we work together." />
        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {culture.values.map((v, i) => (
            <article
              key={v.title}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className="bg-paper py-9 sm:px-7 lg:px-8 lg:first:pl-0"
            >
              <span aria-hidden="true" className="block h-2 w-2 rotate-45 bg-brand" />
              <h3 className="mt-6 text-[1.3rem] font-medium">{v.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-grey">{v.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light" id="careers" labelledBy="careers-h" className="scroll-mt-20">
        <SectionHeading
          id="careers-h"
          eyebrow="Careers"
          size="lg"
          title={
            <>
              Build a career <Muted>in Indian corporate finance.</Muted>
            </>
          }
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h3 className="eyebrow text-brand">Open positions</h3>
            {openRoles.length > 0 ? (
              <ul className="mt-6 border-t border-line">
                {openRoles.map((r) => (
                  <li
                    key={r.title}
                    data-reveal
                    className="grid gap-4 border-b border-line py-7 sm:grid-cols-[1fr_auto] sm:items-center"
                  >
                    <div>
                      <p className="font-display text-[1.35rem] font-medium">{r.title}</p>
                      <p className="mt-1.5 text-[14.5px] text-grey">
                        {r.practice} · {r.location}
                      </p>
                    </div>
                    <a
                      href={`mailto:${howToApply.email}?subject=${encodeURIComponent(`Application — ${r.title}`)}`}
                      className="inline-flex items-center gap-2 justify-self-start rounded-full border border-brand px-5 py-2.5 font-display text-[14px] text-brand-deep transition-colors duration-200 hover:bg-brand hover:text-warm"
                    >
                      Apply <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 border border-dashed border-line px-7 py-12 text-center" data-reveal>
                <p className="font-display text-[1.1rem]">There are no open positions at the moment.</p>
                <p className="mx-auto mt-3 max-w-[52ch] text-[15px] text-grey">
                  You are welcome to send us your CV for future opportunities.
                </p>
              </div>
            )}

            <h3 className="eyebrow mt-14 text-brand">What we look for</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {qualities.map((q) => (
                <li key={q} className="border border-line px-3.5 py-2 text-[14px] text-grey">
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-line lg:pl-16" data-reveal>
            <h3 className="eyebrow text-brand">How to apply</h3>
            <p className="mt-6 text-[16px] leading-[1.7]">
              Email{" "}
              <a href={`mailto:${howToApply.email}`} className="text-brand-deep underline underline-offset-4">
                {howToApply.email}
              </a>{" "}
              with:
            </p>
            <ul className="mt-5 border-t border-line">
              {howToApply.asks.map((a) => (
                <li key={a} className="flex items-baseline gap-4 border-b border-line py-4 text-[15.5px]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rotate-45 bg-brand" />
                  {a}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${howToApply.email}`}
              className="mt-8 inline-block rounded-full bg-brand px-7 py-3.5 font-display text-[15px] font-medium text-warm transition-colors duration-200 hover:bg-brand-deep"
            >
              Email {howToApply.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
