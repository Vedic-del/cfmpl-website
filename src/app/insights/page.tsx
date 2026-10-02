import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { imagery } from "@/content/imagery";
import { insights, insightsIntro } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Project finance, syndication markets, restructuring, and what lenders are willing to underwrite this quarter — written by the people arranging it.",
  alternates: { canonical: "/insights/" },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow={insightsIntro.eyebrow} lines={insightsIntro.headline} lede={insightsIntro.lede} photo={imagery.trackRecord} />

      <Section tone="light" labelledBy="index-h">
        <h2 id="index-h" className="sr-only">
          Articles
        </h2>
        {insights.length > 0 ? (
          <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((a, i) => (
              <li key={a.slug} data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                <article className="border-t border-line pt-5">
                  <p className="font-display text-[11px] tracking-[0.06em] text-grey-light">
                    {new Date(a.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" }).toUpperCase()}
                    <span className="mx-2">·</span>
                    {a.topic}
                  </p>
                  <h3 className="mt-3 text-[1.2rem] font-normal leading-snug">
                    <Link href={`/insights/${a.slug}`} className="transition-colors duration-200 hover:text-brand">
                      {a.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-grey">{a.summary}</p>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto max-w-[62ch] border border-dashed border-line px-8 py-16 text-center" data-reveal>
            <p className="eyebrow text-brand">In preparation</p>
            <p className="mt-5 font-display text-[1.6rem] leading-snug">
              The first notes are being written now.
            </p>
            <p className="mt-5 text-[15px] leading-[1.8] text-grey">
              We would rather publish nothing than publish filler. When there is something worth saying about a
              syndication market, a rating committee or a resolution, it will appear here — from the people who were in
              the room.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-brand px-6 py-3 font-display text-[14px] font-medium text-warm transition-colors duration-200 hover:bg-brand-deep"
            >
              Ask us directly instead
            </Link>
          </div>
        )}
      </Section>

      <CtaBand />
    </>
  );
}
