import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { firm } from "@/content/firm";
import { regulatoryNote, sponsorNote } from "@/content/services";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Terms on which information on the Chartered Finance Management website is provided.",
  alternates: { canonical: "/disclaimer/" },
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero eyebrow="Legal" lines={["Disclaimer"]} />

      <Section tone="light">
        <div className="prose-house max-w-[72ch] text-grey">
          <h2 className="font-display text-[1.35rem] text-ink">Information only</h2>
          <p>
            Information on this website is provided for general information only. It does not constitute financial,
            legal, accounting, tax or investment advice, and it is neither an offer to sell nor a solicitation of an
            offer to buy any security or service. Nothing here should be relied upon as the basis for any investment or
            financing decision.
          </p>

          <h2 className="mt-10 font-display text-[1.35rem] text-ink">Regulated and non-regulated activity</h2>
          <p>{regulatoryNote}</p>
          <p>{sponsorNote} Statements on this website concern CFMPL only, and should not be read as statements by or about that company.</p>

          <h2 className="mt-10 font-display text-[1.35rem] text-ink">Accuracy</h2>
          <p>
            We take care over what is published here, but {firm.legalName} does not warrant that the content is
            complete, accurate or current, and accepts no liability for any loss arising from reliance on it, nor for
            any interruption to this website. Documents transmitted electronically may be altered in transmission, and
            we accept no liability for any such alteration.
          </p>

          <h2 className="mt-10 font-display text-[1.35rem] text-ink">Jurisdiction</h2>
          <p>
            Certain sections of this website, including offer documents and the track record of public issues, are
            intended only for residents of India and are subject to their own confirmations. Access to that material
            may be restricted by law in other jurisdictions, and it is not directed at any person in the United States.
          </p>

          <h2 className="mt-10 font-display text-[1.35rem] text-ink">External links</h2>
          <p>
            Where this website links to a third party, including {firm.arc.name}, we are not responsible for the
            content of that site or for its handling of your information.
          </p>

          <h2 className="mt-10 font-display text-[1.35rem] text-ink">Questions</h2>
          <p>
            Write to{" "}
            <a href={`mailto:${firm.email.compliance}`} className="text-brand-deep underline underline-offset-4">
              {firm.email.compliance}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
