import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { firm } from "@/content/firm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact CFM: head office at Ballard Estate in Mumbai and offices in New Delhi, Chennai and Ahmedabad. +91 22 4783 6944, info@cfml.in.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const [hq, ...branches] = firm.offices;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to us."
        lede="Call our Mumbai office or write to us and we will put you in touch with the right person."
      />

      <Section tone="light" labelledBy="direct-h">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <h2 id="direct-h" className="font-display text-[1.6rem] font-medium">
              Head Office
            </h2>
            <address className="mt-5 text-[16px] not-italic leading-8 text-ink">
              {firm.legalName}
              <br />
              {hq.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>

            <dl className="mt-8 border-t border-line text-[15px]">
              <div className="border-b border-line py-4">
                <dt className="text-grey">Telephone</dt>
                <dd className="num mt-1 font-display text-[1.15rem]">
                  <a href={firm.phone.href} className="transition-colors hover:text-brand">
                    {firm.phone.display}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-4">
                <dt className="text-grey">General enquiries</dt>
                <dd className="mt-1 font-display text-[1.15rem]">
                  <a href={`mailto:${firm.email.general}`} className="transition-colors hover:text-brand">
                    {firm.email.general}
                  </a>
                </dd>
              </div>
              <div className="border-b border-line py-4">
                <dt className="text-grey">Careers</dt>
                <dd className="mt-1 font-display text-[1.15rem]">
                  <a href={`mailto:${firm.email.careers}`} className="transition-colors hover:text-brand">
                    {firm.email.careers}
                  </a>
                </dd>
              </div>
            </dl>

            <h3 className="eyebrow mt-10 text-brand">Office hours</h3>
            <dl className="mt-4 border-t border-line text-[15px]">
              {firm.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-6 border-b border-line py-3">
                  <dt className="text-grey">{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-[14.5px] leading-[1.75] text-grey">
              Investor complaints relating to our merchant banking activities should follow the{" "}
              <Link href="/regulatory#grievances" className="text-brand-deep underline underline-offset-4">
                grievance redressal process
              </Link>
              .
            </p>
          </div>

          <div className="lg:border-l lg:border-line lg:pl-16">
            <h2 className="font-display text-[1.6rem] font-medium">Send Us a Message</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark" labelledBy="offices-h">
        <SectionHeading id="offices-h" dark title="Our Offices" />
        <div className="mt-12 grid gap-px bg-line-dark md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-deep px-7 py-9 first:pl-0">
            <p className="font-display text-[13px] text-brand-light">{hq.role}</p>
            <h3 className="mt-3 font-display text-[1.4rem]">{hq.city}</h3>
            <p className="mt-4 text-[14.5px] leading-7 text-warm/70">{hq.lines.slice(0, 2).join(", ")}</p>
          </div>
          {branches.map((b) => (
            <div key={b.city} className="bg-deep px-7 py-9">
              <p className="font-display text-[13px] text-brand-light">{b.role}</p>
              <h3 className="mt-3 font-display text-[1.4rem]">{b.city}</h3>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[14px] text-warm/60">Enquiries for every office go through the head office in Mumbai.</p>
      </Section>
    </>
  );
}
