import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PeopleRail } from "@/components/PeopleRail";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { imagery } from "@/content/imagery";
import { advisors, board, management } from "@/content/people";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The board, management and advisors of Chartered Finance Management — former bank chief executives, chartered accountants and a professional economist in governance, and the team that takes and executes mandates.",
  alternates: { canonical: "/leadership/" },
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        lines={["Who Answers for the Firm,", "and Who Runs", "Your Mandate."]}
        lede="Two responsibilities, held by different people. The board answers for how CFM is run — the mandates it accepts, the controls it keeps, the conduct expected of everyone here. The management team runs those mandates day to day. Both are below, with the careers behind them."
        photo={imagery.leadership}
      />

      <Section tone="light" labelledBy="board-h">
        <SectionHeading
          id="board-h"
          eyebrow="Board of Directors"
          lines={["Where the Firm's", "Standards Are Set."]}
          lede="The board decides how CFM is run: which mandates the firm accepts, the controls it keeps, and the conduct expected of everyone in it. Its members have led IFCI, served as executive directors of nationalised banks, advised national economic policy bodies, and practised as chartered accountants for four decades."
        />
        <PeopleRail people={board} groupId="board" label="Board of Directors" />
        <p className="mt-4 text-[13px] text-grey">Select a name to read the full biography.</p>
      </Section>

      <Section tone="paper" labelledBy="mgmt-h">
        <SectionHeading
          id="mgmt-h"
          eyebrow="Management"
          lines={["Where the Mandates", "Are Run."]}
          lede="This is the side of the firm you work with. They write the information memorandum, build the lender list, and stay with the transaction through diligence to disbursal."
        />
        <PeopleRail people={management} groupId="management" label="Management" />
        <p className="mt-6 max-w-[62ch] border-l-2 border-brand pl-6 text-[14.5px] leading-[1.8] text-grey" data-reveal>
          The remainder of the management team, including the chief executives of the operating businesses, is being
          added to this page.
        </p>
      </Section>

      <Section tone="light" labelledBy="advisors-h">
        <SectionHeading
          id="advisors-h"
          eyebrow="Advisors"
          lines={["Careers Spent on", "the Lending Side."]}
          lede="Between them, a century inside State Bank of India, Bank of Baroda and Vijaya Bank, sanctioning credit of exactly the kind our clients need. They know how a proposal is read long before it reaches a committee."
        />
        <PeopleRail people={advisors} groupId="advisors" label="Advisors" />
      </Section>

      <CtaBand />
    </>
  );
}
