import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { grievanceOfficer, sebiPortals } from "@/content/legal";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "How the Chartered Finance Management website is built to be usable by everyone, including people with disabilities, and how to tell us about a barrier.",
  alternates: { canonical: "/accessibility/" },
};

const LAST_REVIEWED = "16 October 2026";

/**
 * Accessibility statement, in line with SEBI's circulars on digital
 * accessibility under the Rights of Persons with Disabilities Act, 2016.
 * Claims here describe what the site does; the independent audit SEBI
 * requires is not claimed until it has been carried out.
 */
export default function AccessibilityPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Accessibility" lede={`Last reviewed ${LAST_REVIEWED}.`} />

      <Section tone="light">
        <div className="prose-house max-w-[72ch] text-grey">
          <p>
            We want everyone to be able to use this website, including people with disabilities and people using
            assistive technology. It is designed to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level
            AA, in line with SEBI&apos;s requirements for regulated entities under the Rights of Persons with
            Disabilities Act, 2016.
          </p>

          <h2 className="mt-12 font-display text-[1.35rem] text-ink">What we have done</h2>
          <ul className="mt-4 space-y-2.5">
            {[
              "Text and controls meet the WCAG AA contrast ratio against their backgrounds.",
              "Every page can be used with a keyboard alone, with a visible focus outline and a link to skip to the main content.",
              "Pages use a logical heading structure and landmarks for screen readers.",
              "Images that carry meaning have text alternatives; decorative images are hidden from screen readers.",
              "Information is never conveyed by colour alone.",
              "Pages reflow to fit small screens and remain usable when zoomed to 200%.",
              "Animation is switched off when your device asks for reduced motion.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-[1.35rem] text-ink">Known limitations</h2>
          <p>
            Some documents we publish, such as statutory filings and older regulatory documents, are scanned PDFs and
            may not work well with screen readers. We will provide any of them in an accessible format on request.
          </p>

          <h2 className="mt-12 font-display text-[1.35rem] text-ink">Tell us about a barrier</h2>
          <p>
            If anything on this website is difficult to use, write to {grievanceOfficer.name}, Compliance Officer, at{" "}
            <a href={`mailto:${grievanceOfficer.email}`} className="text-brand-deep underline underline-offset-4">
              {grievanceOfficer.email}
            </a>{" "}
            or call {grievanceOfficer.phone}, extension {grievanceOfficer.ext}. Tell us the page and the problem and we
            will respond and fix it or provide the information another way.
          </p>
          <p>
            If you are not satisfied with our response, you may lodge a complaint with SEBI on{" "}
            <a href={sebiPortals.scores.href} target="_blank" rel="noopener noreferrer" className="text-brand-deep underline underline-offset-4">
              {sebiPortals.scores.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            , which has a category for accessibility complaints.
          </p>
        </div>
      </Section>
    </>
  );
}
