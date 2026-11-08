import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PeopleRail } from "@/components/PeopleRail";
import { Section } from "@/components/Section";
import { Muted, SectionHeading } from "@/components/SectionHeading";
import { imagery } from "@/content/imagery";
import { advisors, board, management } from "@/content/people";

export const metadata: Metadata = {
  title: "Leadership & Governance",
  description:
    "The board, management and senior advisors of Chartered Finance Management, with careers at IFCI, SBI, Bank of Baroda and in public policy.",
  alternates: { canonical: "/leadership/" },
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership & Governance"
        title={
          <>
            Decades in banking, <Muted dark>finance and public policy.</Muted>
          </>
        }
        lede="The board sets the firm's direction and standards. Management runs its work."
        photo={imagery.governance}
        actions={
          <Link href="/contact" className="btn btn--light">
            Discuss a mandate
          </Link>
        }
      />

      <section data-moment="word-highlight" aria-label="Our board" className="bg-white py-22 text-ink md:py-32">
        <div className="container-house">
          <p className="mo-wh__text">
            Our board brings together a former Finance Minister of Jammu &amp; Kashmir, a former chief executive of
            IFCI, a chartered accountant, a merchant banker associated with <strong>more than a hundred IPOs</strong>{" "}
            and the firm&apos;s founder.
          </p>
        </div>
      </section>

      <Section tone="light" labelledBy="board-h">
        <SectionHeading id="board-h" title="Board of Directors" />
        <PeopleRail people={board} groupId="board" label="Board of Directors" />
      </Section>

      <Section tone="paper" labelledBy="mgmt-h">
        <SectionHeading id="mgmt-h" title="Management" />
        <PeopleRail people={management} groupId="management" label="Management" />
      </Section>

      <Section tone="light" labelledBy="advisors-h">
        <SectionHeading id="advisors-h" title="Senior Advisors" />
        <PeopleRail people={advisors} groupId="advisors" label="Senior Advisors" />
      </Section>

      <CtaBand />
    </>
  );
}
