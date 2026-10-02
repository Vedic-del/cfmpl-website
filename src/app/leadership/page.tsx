import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PeopleRail } from "@/components/PeopleRail";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
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
        title="Leadership & Governance"
        lede="CFM is overseen by its board of directors and run by its management team, with the support of senior advisors who spent their careers in Indian banking."
        photo={imagery.leadership}
      />

      <Section tone="light" labelledBy="board-h">
        <SectionHeading
          id="board-h"
          title="Board of Directors"
          lede="The board is responsible for the governance of the firm: its direction, its controls and the standards it works to. Its members include the firm's founder, a former chief executive of IFCI, an economist who served as Finance Minister of Jammu & Kashmir, a chartered accountant with thirty years in manufacturing and finance, and a former merchant banker associated with more than a hundred IPOs."
        />
        <PeopleRail people={board} groupId="board" label="Board of Directors" />
        <p className="mt-4 text-[13px] text-grey">Select a name to read the full biography.</p>
      </Section>

      <Section tone="paper" labelledBy="mgmt-h">
        <SectionHeading
          id="mgmt-h"
          title="Management"
          lede="The management team leads the firm's client work and its day-to-day operations."
        />
        <PeopleRail people={management} groupId="management" label="Management" />
      </Section>

      <Section tone="light" labelledBy="advisors-h">
        <SectionHeading
          id="advisors-h"
          title="Senior Advisors"
          lede="Our advisors held senior positions at State Bank of India, Bank of Baroda and Vijaya Bank, including roles in credit review, credit sanction and the management of large corporate accounts."
        />
        <PeopleRail people={advisors} groupId="advisors" label="Senior Advisors" />
      </Section>

      <CtaBand />
    </>
  );
}
