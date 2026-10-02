import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Chartered Finance Management handles information submitted through this website.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />

      <Section tone="light">
        <div className="prose-house max-w-[72ch] text-grey">
          <p>
            This policy describes what {firm.legalName} does with information you give us through this website. It does
            not cover information you give us in the course of an engagement, which is governed by our mandate
            documentation.
          </p>

          <h2 className="mt-10 font-display text-[1.35rem] text-ink">What this website collects</h2>
          <p>
            Nothing. The enquiry form does not send or store anything itself: it prepares your message and opens your
            own email application, and the enquiry reaches us only if you choose to send it. We do not run advertising
            or analytics trackers on this website, and we do not set cookies for marketing or measurement.
          </p>

          <h2 className="mt-10 font-display text-[1.35rem] text-ink">What we hold when you write to us</h2>
          <p>
            The contents of your email — typically your name, organisation, contact details and message. We use it to
            read and reply to your enquiry and to keep a record of correspondence. We do not sell it, and we do not
            share it with anyone outside the firm.
          </p>

          <h2 className="mt-10 font-display text-[1.35rem] text-ink">Storage in the browser</h2>
          <p>
            Where a section of the site requires a regulatory confirmation before it is shown — offer documents and the
            track record of public issues — your confirmation is remembered in your own browser for that session only.
            It is not sent to us and does not persist after you close the browser.
          </p>

          <h2 className="mt-10 font-display text-[1.35rem] text-ink">How long we keep it</h2>
          <p>
            For as long as we need it to deal with your enquiry and to meet any record-keeping obligation that applies
            to us as a SEBI-registered merchant banker.
          </p>

          <h2 className="mt-10 font-display text-[1.35rem] text-ink">Your request</h2>
          <p>
            To ask what we hold about you, to correct it, or to ask us to delete it, write to{" "}
            <a href={`mailto:${firm.email.compliance}`} className="text-brand-deep underline underline-offset-4">
              {firm.email.compliance}
            </a>
            . Complaints about how we have handled your information can be raised the same way.
          </p>
        </div>
      </Section>
    </>
  );
}
