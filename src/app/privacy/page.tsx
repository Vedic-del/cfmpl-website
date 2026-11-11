import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { firm } from "@/content/firm";
import { dataProtectionBoard, grievanceOfficer } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Chartered Finance Management collects, uses and protects personal data, your rights under the Digital Personal Data Protection Act, 2023 and how to contact our Grievance Officer.",
  alternates: { canonical: "/privacy/" },
};

const LAST_UPDATED = "16 October 2026";

function H({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 font-display text-[1.35rem] text-ink first:mt-0">{children}</h2>;
}

function List({ items }: { items: readonly ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Privacy policy and notice. Written to meet rule 4 of the IT (Reasonable
 * Security Practices and Procedures and Sensitive Personal Data or
 * Information) Rules, 2011 (published policy; rule 5(9) Grievance Officer)
 * and the notice, contact and grievance requirements of the Digital Personal
 * Data Protection Act, 2023 and DPDP Rules, 2025.
 */
export default function PrivacyPage() {
  const mail = (
    <a href={`mailto:${grievanceOfficer.email}`} className="text-brand-deep underline underline-offset-4">
      {grievanceOfficer.email}
    </a>
  );

  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" lede={`Last updated ${LAST_UPDATED}.`} />

      <Section tone="light">
        <div className="prose-house max-w-[72ch] text-grey">
          <H>Who we are</H>
          <p>
            {firm.legalName} (&ldquo;CFM&rdquo;, &ldquo;we&rdquo;), CIN {firm.cin}, registered office{" "}
            {firm.offices[0].lines.join(", ")}, decides why and how the personal data described here is processed. In
            the language of the Digital Personal Data Protection Act, 2023 we are the Data Fiduciary and you are the
            Data Principal.
          </p>
          <p>
            This policy is published under rule 4 of the Information Technology (Reasonable Security Practices and
            Procedures and Sensitive Personal Data or Information) Rules, 2011 and is our notice to you under the
            Digital Personal Data Protection Act, 2023.
          </p>

          <H>What this website collects</H>
          <p>
            The website itself collects nothing from you. The enquiry form prepares a message in your own email
            application and nothing reaches us unless you choose to send it. We do not use cookies, advertising or
            analytics trackers and the website loads no content from third-party servers.
          </p>
          <p>
            Like any website, the service that hosts it automatically receives technical information when your browser
            requests a page, such as your IP address and browser type, in order to deliver the page and protect the
            service.
          </p>

          <H>Cookies</H>
          <p>
            This website does not set cookies and so asks for no cookie consent. It stores two small items in your own
            browser, neither of which identifies you or is sent to us: a note that you have read our regulatory notice,
            so it is not shown again during your visit, and your confirmation on the offer documents and track record
            pages. Both are kept for that browser session only.
          </p>

          <H>Personal data we process</H>
          <p>When you contact us, engage us or apply to work with us, we may process:</p>
          <List
            items={[
              "Identity and contact details: name, organisation, designation, email address, telephone number and postal address.",
              "The content of your enquiry and our correspondence with you.",
              "Information we are required by law to collect when we take on a merchant banking mandate, such as KYC documents.",
              "Information you share in the course of a mandate, under the confidentiality terms agreed with you.",
              "For job applicants: your CV, qualifications and work experience.",
            ]}
          />
          <p>
            We do not ask for passwords, card or bank details through this website and you should not send them to us
            by email.
          </p>

          <H>Why we process it</H>
          <List
            items={[
              "To reply to your enquiry and to keep a record of our correspondence.",
              "To assess, enter into and carry out a mandate.",
              "To meet our legal and regulatory obligations, including those that apply to us as a SEBI-registered merchant banker and under anti-money laundering, company and tax law.",
              "To handle complaints and grievances.",
              "To consider applications for employment.",
            ]}
          />
          <p>
            We process personal data with your consent or, where the law permits, for a legitimate use such as
            complying with a legal obligation. Where we rely on your consent, you may withdraw it at any time by
            writing to us; withdrawal does not affect processing already carried out.
          </p>

          <H>Who we share it with</H>
          <p>We do not sell personal data. We share it only:</p>
          <List
            items={[
              "With service providers who run our email, IT and hosting, under contracts that require them to protect it.",
              "With lenders, investors and other parties to a transaction, where you have instructed us to as part of a mandate.",
              "With regulators, courts and authorities, where the law requires it.",
              "With our professional advisers, such as auditors and lawyers, under a duty of confidentiality.",
            ]}
          />
          <p>
            Some of our service providers may store data outside India. We transfer personal data outside India only as
            the law permits.
          </p>

          <H>How long we keep it</H>
          <p>
            For as long as we need it for the purpose for which it was collected and then for any period the law
            requires. Many records relating to our merchant banking business must be kept for at least five years. When
            personal data is no longer needed, we erase it.
          </p>

          <H>How we protect it</H>
          <p>
            We follow reasonable security practices, including restricted access to personal data, encrypted
            connections to this website and confidentiality obligations on our staff and service providers. If a
            personal data breach occurs, we will inform the people affected and the {dataProtectionBoard} as the law
            requires.
          </p>

          <H>Your rights</H>
          <p>You may ask us to:</p>
          <List
            items={[
              "Give you a summary of the personal data we hold about you and how we process it.",
              "Correct, complete or update your personal data.",
              "Erase your personal data, unless we must keep it to meet a legal obligation.",
              "Stop processing that is based on your consent, by withdrawing it.",
              "Act on the instructions of a person you nominate, if you die or become unable to act.",
              "Address any grievance about how we have handled your personal data.",
            ]}
          />
          <p>To exercise any of these rights, write to our Grievance Officer at {mail}.</p>
          <p>
            <a
              href={`mailto:${grievanceOfficer.email}?subject=${encodeURIComponent("Personal data request")}&body=${encodeURIComponent(
                "I would like to (keep what applies): access / correct / delete my personal data / withdraw consent / nominate a person.\n\nName:\nEmail or phone you used with CFM:\nDetails of the request:",
              )}`}
              className="mt-2 inline-block rounded-full bg-brand px-6 py-3 font-display text-[15px] font-medium text-warm no-underline transition-colors hover:bg-brand-deep"
            >
              Request access, correction or deletion
            </a>
          </p>

          <H>Grievance Officer</H>
          <address className="not-italic">
            <span className="block font-medium text-ink">{grievanceOfficer.name}</span>
            <span className="block">{grievanceOfficer.designation}</span>
            <span className="block">{grievanceOfficer.address}</span>
            <span className="block">Email: {mail}</span>
            <span className="block">
              Telephone: {grievanceOfficer.phone}, extension {grievanceOfficer.ext}
            </span>
          </address>
          <p>
            We will acknowledge your grievance promptly and resolve it within one month of receiving it. The same
            person can answer any question about how we process personal data.
          </p>

          <H>Complaints to the Data Protection Board</H>
          <p>
            If you are not satisfied with our response, or do not receive one in time, you may complain to the{" "}
            {dataProtectionBoard} under section 13 of the Digital Personal Data Protection Act, 2023, in the manner the
            Government prescribes.
          </p>

          <H>Children</H>
          <p>This website is not directed at children and we do not knowingly process children&apos;s personal data.</p>

          <H>Changes to this policy</H>
          <p>We will publish any change on this page and update the date at the top.</p>
        </div>
      </Section>
    </>
  );
}
