import Link from "next/link";
import { Logo } from "./Logo";
import { firm } from "@/content/firm";
import { grievanceOfficer, sebiPortals } from "@/content/legal";
import { footerNav } from "@/content/navigation";
import { regulatoryNote } from "@/content/services";

function FooterList({ title, items }: { title: string; items: readonly { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="eyebrow text-warm/60">{title}</h2>
      <ul className="mt-5 space-y-2.5 text-[14px]">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-warm/75 transition-colors duration-200 hover:text-warm">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const hq = firm.offices[0];
  return (
    <footer className="bg-deep text-warm/70">
      <div className="container-house pb-8 pt-18 md:pt-22">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 border-b border-line-dark pb-12 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Logo light className="h-11 w-auto" />
            <address className="mt-6 text-[14px] not-italic leading-7 text-warm/60">
              {hq.lines.join(", ")}
            </address>
            <p className="mt-4 text-[14px] leading-7 text-warm/60">
              <a href={firm.phone.href} className="hover:text-warm">
                {firm.phone.display}
              </a>
              <span className="mx-2 text-warm/60">·</span>
              <a href={`mailto:${firm.email.general}`} className="hover:text-warm">
                {firm.email.general}
              </a>
              <br />
              Mumbai · New Delhi · Chennai · Ahmedabad
            </p>
            {/* Required on the home page: a named contact for queries and grievances
                (Companies Act s.12 with rule 26 of the Incorporation Rules) and a link
                to SEBI's online dispute resolution portal. The footer carries both on every page. */}
            <p className="mt-5 max-w-[46ch] text-[13.5px] leading-6 text-warm/60">
              Queries and grievances: {grievanceOfficer.name}, Compliance Officer,{" "}
              <a href={`mailto:${grievanceOfficer.email}`} className="text-warm/80 hover:text-warm">
                {grievanceOfficer.email}
              </a>
            </p>
            <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[13.5px]">
              {[sebiPortals.scores, sebiPortals.odr].map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-warm">
                  {l.label} ↗<span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </p>
          </div>
          <FooterList title="Firm" items={footerNav.firm} />
          <FooterList title="Regulatory" items={footerNav.regulatory} />
        </div>

        <div className="pt-7 text-[12px] leading-6 text-warm/60">
          <p className="max-w-[118ch]">
            © {new Date().getFullYear()} {firm.legalName}, formerly {firm.formerName}. CIN {firm.cin}. SEBI{" "}
            {firm.sebiCategory}, Registration No. {firm.sebiRegistrationNo}. {regulatoryNote} CFMPL is the sponsor of {firm.arc.name}, a separate RBI-registered
            asset reconstruction company —{" "}
            <a
              href={firm.arc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light hover:text-warm"
            >
              {firm.arc.display} ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
