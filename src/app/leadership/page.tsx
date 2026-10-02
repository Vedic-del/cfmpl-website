import type { Metadata } from "next";
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
      />

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
