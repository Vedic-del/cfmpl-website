import type { Metadata } from "next";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { DocumentList } from "@/components/DocumentList";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { publicIssueTrackRecord, trackRecordDisclaimer } from "@/content/investors";

export const metadata: Metadata = {
  title: "Track Record of Public Issues",
  description:
    "Post-listing performance of public issues managed by CFM, published pursuant to SEBI Circular CIR/MIRSD/1/2012 dated 10 January 2012.",
  alternates: { canonical: "/regulatory/public-issues-track-record/" },
  robots: { index: false, follow: false },
};

export default function PublicIssuesTrackRecordPage() {
  return (
    <>
      <PageHero
        eyebrow="Regulatory Information"
        title="Track Record of Public Issues"
        lede="Published under SEBI Circular CIR/MIRSD/1/2012. This information is not a recommendation or an advertisement and past performance is no indication of future performance."
      />

      <Section tone="light">
        <DisclaimerGate
          storageKey="cfm-public-issues"
          title="Important — please read before proceeding"
          paragraphs={trackRecordDisclaimer}
          confirmations={[
            "I have read and understood the disclaimer above.",
            "I understand this information is not a recommendation or an indicator of future performance.",
          ]}
        >
          <div>
            <h2 className="display">Track record</h2>
            <DocumentList
              docs={publicIssueTrackRecord}
              emptyText="Records are published for the period the circular requires."
            />
          </div>
        </DisclaimerGate>
      </Section>

    </>
  );
}
