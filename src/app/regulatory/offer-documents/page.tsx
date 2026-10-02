import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { DocumentList } from "@/components/DocumentList";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { offerDocuments, offerDocumentsConfirmation, offerDocumentsDisclaimer } from "@/content/investors";

export const metadata: Metadata = {
  title: "Offer Documents",
  description:
    "Offer documents hosted under Regulation 26(1) of the SEBI ICDR Regulations, 2018, for issues where CFM acted as lead manager or book running lead manager.",
  alternates: { canonical: "/regulatory/offer-documents/" },
  // Gated, India-only material — kept out of search indexes.
  robots: { index: false, follow: false },
};

export default function OfferDocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Offer Documents"
        lines={["Hosted Under", "Regulation 26(1)."]}
        lede="Offer documents for issues in which CFM, or its affiliates, acted as Lead Manager or Book Running Lead Manager. Intended for residents of India only."
      />

      <Section tone="light">
        <DisclaimerGate
          storageKey="cfm-offer-documents"
          title="Important — please read before proceeding"
          paragraphs={offerDocumentsDisclaimer}
          confirmations={offerDocumentsConfirmation}
        >
          <div>
            <h2 className="display">Offer documents</h2>
            <DocumentList
              docs={offerDocuments}
              emptyText="When CFM is appointed to a live issue, the offer documents for that issue are published here for the period the regulations require."
            />
          </div>
        </DisclaimerGate>
      </Section>

      <CtaBand />
    </>
  );
}
