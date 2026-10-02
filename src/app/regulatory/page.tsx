import type { Metadata } from "next";
import Link from "next/link";
import { ComplaintsTables } from "@/components/ComplaintsTables";
import { CtaBand } from "@/components/CtaBand";
import { DocumentList } from "@/components/DocumentList";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { firm } from "@/content/firm";
import { imagery } from "@/content/imagery";
import {
  charterCategories,
  charterDocument,
  complaintsData,
  grievance,
  investorCareNote,
  policies,
  regulatorySections,
  statutoryFilings,
} from "@/content/investors";

export const metadata: Metadata = {
  title: "Regulatory Information",
  description:
    "Investor charter, complaints data, grievance redressal, offer documents, policies and statutory filings for Chartered Finance Management, a SEBI Category I Merchant Banker.",
  alternates: { canonical: "/regulatory/" },
};

export default function RegulatoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Regulatory Information"
        lines={["Our Disclosures,", "in One Place."]}
        lede="CFMPL is a SEBI-registered Category I Merchant Banker. Everything that registration requires us to publish is collected here: the investor charter, complaints data, the grievance route, offer documents, policies and statutory filings."
        photo={imagery.regulatory}
      />

      {/* Section index */}
      <div className="border-b border-line bg-warm">
        <nav aria-label="Regulatory sections" className="container-house py-5">
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {regulatorySections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="font-display text-[13.5px] text-grey transition-colors hover:text-brand">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Section tone="light" labelledBy="charter">
        <SectionHeading
          id="charter"
          eyebrow="Investor Charter"
          lines={["What We Do, and What", "You Can Expect of Us."]}
          lede="The charter sets out the merchant banking activities CFM undertakes and the service an investor is entitled to expect in each. It covers eleven categories of activity."
        />
        <ol className="mt-10 grid gap-px bg-line md:grid-cols-2">
          {charterCategories.map((c, i) => (
            <li key={c} className="flex items-baseline gap-5 bg-white px-6 py-4 md:px-8">
              <span className="num font-display text-[13px] font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-snug">{c}</span>
            </li>
          ))}
        </ol>
        <DocumentList
          docs={charterDocument.href ? [charterDocument] : []}
          emptyText="The signed charter is available from our compliance officer on request, and will be published here once migrated from the current site."
        />
      </Section>

      <Section tone="paper" labelledBy="complaints">
        <SectionHeading
          id="complaints"
          eyebrow="Investor Complaints Data"
          lines={["Complaints Received,", "and How They", "Were Resolved."]}
          lede="Disclosed in the format SEBI prescribes for merchant bankers, and updated by the seventh of the following month."
        />
        <ComplaintsTables data={complaintsData} />
      </Section>

      <Section tone="light" labelledBy="grievances">
        <SectionHeading
          id="grievances"
          eyebrow="Grievance Redressal"
          lines={["How to Raise a", "Grievance With Us."]}
          lede={investorCareNote}
        />
        <ol className="mt-10 border-t border-line">
          {grievance.contacts.map((c, i) => (
            <li key={c.email} className="grid gap-4 border-b border-line py-8 md:grid-cols-[110px_1fr_1fr] md:gap-10" data-reveal>
              <div>
                <span className="num font-display text-[1.9rem] leading-none text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-[12.5px] text-grey">{c.level}</p>
              </div>
              <div>
                <p className="font-display text-[1.2rem] font-medium">{c.name}</p>
                <p className="mt-1.5 text-[14px] text-grey">{c.title}</p>
              </div>
              <div className="text-[14.5px] leading-7">
                <a href={`mailto:${c.email}`} className="border-b border-brand-deep/30 text-brand-deep hover:border-brand-deep">
                  {c.email}
                </a>
                <br />
                <span className="num text-grey">
                  {c.phone} <span className="text-grey-light">ext. {c.ext}</span>
                </span>
              </div>
            </li>
          ))}
          <li className="grid gap-4 border-b border-line py-8 md:grid-cols-[110px_1fr_1fr] md:gap-10" data-reveal>
            <div>
              <span className="num font-display text-[1.9rem] leading-none text-brand">03</span>
              <p className="mt-2 text-[12.5px] text-grey">Escalation to the regulator</p>
            </div>
            <div>
              <p className="font-display text-[1.2rem] font-medium">SEBI</p>
              <p className="mt-1.5 max-w-[42ch] text-[14px] text-grey">
                If you are not satisfied with our response, you may lodge the grievance with SEBI, or approach a SEBI
                office directly.
              </p>
            </div>
            <div className="text-[14.5px] leading-7">
              <a href={grievance.sebi.scores.href} target="_blank" rel="noopener noreferrer" className="border-b border-brand-deep/30 text-brand-deep hover:border-brand-deep">
                {grievance.sebi.scores.label} ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <br />
              <a href={grievance.sebi.odr.href} target="_blank" rel="noopener noreferrer" className="border-b border-brand-deep/30 text-brand-deep hover:border-brand-deep">
                {grievance.sebi.odr.label} ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </li>
        </ol>
        <dl className="mt-10 grid gap-px bg-line sm:grid-cols-3" data-reveal>
          <div className="bg-white px-6 py-6">
            <dt className="eyebrow text-brand">Investor grievances</dt>
            <dd className="mt-3 text-[15px]">
              <a href={`mailto:${grievance.grievanceEmail}`} className="text-brand-deep underline underline-offset-4">
                {grievance.grievanceEmail}
              </a>
            </dd>
          </div>
          <div className="bg-white px-6 py-6">
            <dt className="eyebrow text-brand">Customer care</dt>
            <dd className="mt-3 text-[15px]">
              <a href={`mailto:${grievance.customerCareEmail}`} className="text-brand-deep underline underline-offset-4">
                {grievance.customerCareEmail}
              </a>
            </dd>
          </div>
          <div className="bg-white px-6 py-6">
            <dt className="eyebrow text-brand">By post</dt>
            <dd className="mt-3 text-[14px] leading-6">{grievance.address}</dd>
          </div>
        </dl>
        <DocumentList docs={[grievance.document]} />
      </Section>

      <Section tone="dark" labelledBy="documents">
        <SectionHeading
          id="documents"
          dark
          eyebrow="Offer Documents & Track Record"
          lines={["Held Behind a", "Confirmation, as the", "Regulations Require."]}
          lede="Offer documents are hosted under Regulation 26(1) of the SEBI ICDR Regulations, 2018. The post-listing record of public issues is published under SEBI Circular CIR/MIRSD/1/2012. Both are intended for residents of India and sit behind the confirmations those rules require."
        />
        <div className="mt-10 grid gap-px bg-line-dark md:grid-cols-2" data-reveal>
          <Link href="/regulatory/offer-documents" className="group bg-deep px-7 py-8 md:px-9">
            <h3 className="font-display text-[1.25rem] font-medium text-warm transition-colors group-hover:text-brand-light">
              Offer Documents
            </h3>
            <p className="mt-3 max-w-[44ch] text-[14.5px] leading-relaxed text-warm/70">
              For issues where CFM acted as Lead Manager or Book Running Lead Manager.
            </p>
            <span aria-hidden="true" className="mt-6 block text-brand-light transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link href="/regulatory/public-issues-track-record" className="group bg-deep px-7 py-8 md:px-9">
            <h3 className="font-display text-[1.25rem] font-medium text-warm transition-colors group-hover:text-brand-light">
              Track Record of Public Issues
            </h3>
            <p className="mt-3 max-w-[44ch] text-[14.5px] leading-relaxed text-warm/70">
              Post-listing performance of issues we have managed. Not a recommendation, and not an indicator of future
              performance.
            </p>
            <span aria-hidden="true" className="mt-6 block text-brand-light transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Section>

      <Section tone="light" labelledBy="policies">
        <SectionHeading id="policies" eyebrow="Policies" lines={["The Rules We Set", "for Ourselves."]} />
        <DocumentList docs={policies} emptyText="Policy documents are available from our compliance officer on request." />
      </Section>

      <Section tone="paper" labelledBy="filings">
        <SectionHeading
          id="filings"
          eyebrow="Statutory Filings"
          lines={["Annual Returns,", "As Filed."]}
          lede="Published under Section 92(3) of the Companies Act, 2013, as amended by the Companies (Amendment) Act, 2017."
        />
        <DocumentList docs={statutoryFilings} />
        <dl className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3" data-reveal>
          <div className="bg-paper px-6 py-6">
            <dt className="eyebrow text-brand">Legal name</dt>
            <dd className="mt-3 text-[15px] leading-snug">{firm.legalName}</dd>
          </div>
          <div className="bg-paper px-6 py-6">
            <dt className="eyebrow text-brand">CIN</dt>
            <dd className="num mt-3 text-[15px]">{firm.cin}</dd>
          </div>
          <div className="bg-paper px-6 py-6">
            <dt className="eyebrow text-brand">Registered office</dt>
            <dd className="mt-3 text-[15px] leading-snug">{firm.offices[0].lines.join(", ")}</dd>
          </div>
        </dl>
      </Section>

      <CtaBand />
    </>
  );
}
