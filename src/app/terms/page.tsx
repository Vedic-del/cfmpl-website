import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { firm } from "@/content/firm";
import { grievanceOfficer } from "@/content/legal";
import { regulatoryNote } from "@/content/services";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms on which the Chartered Finance Management website may be used.",
  alternates: { canonical: "/terms/" },
};

const LAST_UPDATED = "16 October 2026";

function H({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 font-display text-[1.35rem] text-ink first:mt-0">{children}</h2>;
}

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" lede={`Last updated ${LAST_UPDATED}.`} />

      <Section tone="light">
        <div className="prose-house max-w-[72ch] text-grey">
          <H>About these terms</H>
          <p>
            This website is published by {firm.legalName}, CIN {firm.cin}, registered office{" "}
            {firm.offices[0].lines.join(", ")}. By using it you agree to these terms. If you do not agree, please do not
            use the website.
          </p>

          <H>Information, not advice</H>
          <p>
            The website gives general information about the firm. It is not financial, legal, tax or investment advice
            and it is not an offer or solicitation to buy or sell any security or service. Our services are provided only
            under a written mandate. The{" "}
            <Link href="/disclaimer" className="text-brand-deep underline underline-offset-4">
              Disclaimer
            </Link>{" "}
            forms part of these terms.
          </p>
          <p>{regulatoryNote}</p>

          <H>No payments or fees through this website</H>
          <p>
            No payment is taken through this website and nothing can be bought on it. Fees for any engagement are agreed
            in, and governed by, the mandate letter for that engagement. There is therefore no separate refund policy for
            the website.
          </p>

          <H>Intellectual property</H>
          <p>
            The text, design and the CFM name and logo belong to {firm.legalName}. You may view, print and share pages
            for your own information, with attribution, but may not reproduce them commercially without our written
            permission.
          </p>
          <p>
            Photographs and typefaces are used under their licences. Photographs of the firm&apos;s people are its own.
            Other photographs are licensed from Unsplash or are in the public domain (CC0) via the WordPress Photo
            Directory and rawpixel. The typefaces, Figtree and Spline Sans, are licensed under the SIL Open Font
            Licence.
          </p>

          <H>Acceptable use</H>
          <p>
            You must not use the website unlawfully, attempt to gain unauthorised access to it or to our systems,
            introduce malicious code, or copy its content in bulk by automated means. Such acts may be offences under
            the Information Technology Act, 2000.
          </p>

          <H>Links to other websites</H>
          <p>
            Links to other websites, including SEBI&apos;s portals and {firm.arc.name}, are provided for convenience. We
            are not responsible for their content or their handling of your information.
          </p>

          <H>Liability</H>
          <p>
            We take care over the website but do not warrant that it is complete, accurate, current or always available.
            To the extent the law allows, we are not liable for any loss arising from its use or from reliance on it.
          </p>

          <H>Privacy</H>
          <p>
            Our{" "}
            <Link href="/privacy" className="text-brand-deep underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            explains how we handle personal data, how to exercise your rights and how to contact our Grievance Officer.
          </p>

          <H>Governing law</H>
          <p>These terms are governed by the laws of India. The courts at Mumbai have exclusive jurisdiction.</p>

          <H>Changes and contact</H>
          <p>
            We may update these terms and will publish any change on this page. Questions to {grievanceOfficer.name},
            Compliance Officer, at{" "}
            <a href={`mailto:${grievanceOfficer.email}`} className="text-brand-deep underline underline-offset-4">
              {grievanceOfficer.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
