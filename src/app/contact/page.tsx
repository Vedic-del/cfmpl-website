import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { firm } from "@/content/firm";
import { imagery } from "@/content/imagery";

export const metadata: Metadata = {
  title: "Discuss a Mandate",
  description:
    "Talk to Chartered Finance Management about raising, restructuring or resolving capital. Offices in Mumbai, New Delhi, Chennai and Ahmedabad.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const [hq, ...branches] = firm.offices;

  return (
    <>
      <PageHero
        eyebrow="Discuss a Mandate"
        lines={["Tell Us Where the", "Business Stands."]}
        lede="A short conversation is usually enough to tell whether we can help, and what kind of capital would. There is no obligation, and nothing is billed for it."
        photo={imagery.about}
      />

      <Section tone="light" labelledBy="form-h">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <h2 id="form-h" className="eyebrow text-brand">
              Send an enquiry
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:border-l lg:border-line lg:pl-16">
            <h2 className="eyebrow text-brand">Or reach us directly</h2>
            <dl className="mt-8 border-t border-line text-[15px]">
              <div className="border-b border-line py-5">
                <dt className="text-grey">Telephone</dt>
                <dd className="num mt-1.5 font-display text-[1.15rem]">
                  <a href={firm.phone.href} className="transition-colors hover:text-brand">
                    {firm.phone.display}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="text-grey">General enquiries</dt>
                <dd className="mt-1.5 font-display text-[1.15rem]">
                  <a href={`mailto:${firm.email.general}`} className="transition-colors hover:text-brand">
                    {firm.email.general}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="text-grey">Careers</dt>
                <dd className="mt-1.5 font-display text-[1.15rem]">
                  <a href={`mailto:${firm.email.careers}`} className="transition-colors hover:text-brand">
                    {firm.email.careers}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="text-grey">Investor grievances</dt>
                <dd className="mt-1.5 font-display text-[1.15rem]">
                  <a href={`mailto:${firm.email.compliance}`} className="transition-colors hover:text-brand">
                    {firm.email.compliance}
                  </a>
                </dd>
              </div>
            </dl>

            <h3 className="eyebrow mt-12 text-brand">Office hours</h3>
            <dl className="mt-5 border-t border-line text-[14.5px]">
              {firm.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-6 border-b border-line py-3.5">
                  <dt className="text-grey">{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="dark" labelledBy="offices-h">
        <SectionHeading id="offices-h" dark eyebrow="Offices" lines={["Mumbai, and Three", "Others."]} />
        <div className="mt-12 grid gap-px bg-line-dark md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-deep px-7 py-9 first:pl-0">
            <p className="font-display text-[13px] text-brand-light">{hq.role}</p>
            <h3 className="mt-3 font-display text-[1.4rem]">{hq.city}</h3>
            <address className="mt-4 text-[14px] not-italic leading-7 text-warm/60">
              {hq.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <a href={firm.phone.href} className="num mt-4 inline-block text-[14px] text-brand-light hover:text-warm">
              {firm.phone.display}
            </a>
          </div>
          {branches.map((b) => (
            <div key={b.city} className="bg-deep px-7 py-9">
              <p className="font-display text-[13px] text-brand-light">{b.role}</p>
              <h3 className="mt-3 font-display text-[1.4rem]">{b.city}</h3>
              {/* FLAG: branch street addresses not supplied. */}
              <p className="mt-4 text-[14px] leading-7 text-warm/60">
                Address on request — please call the Mumbai office or write to{" "}
                <a href={`mailto:${firm.email.general}`} className="text-brand-light hover:text-warm">
                  {firm.email.general}
                </a>
                .
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
