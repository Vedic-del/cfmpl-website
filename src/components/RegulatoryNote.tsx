import { firm } from "@/content/firm";
import { regulatoryNote, sponsorNote } from "@/content/services";

/** Regulated vs non-regulated disclosure, plus the one sanctioned mention of CFM ARC. */
export function RegulatoryNote({ showSponsor = true, className = "" }: { showSponsor?: boolean; className?: string }) {
  return (
    <aside aria-label="Regulated and non-regulated activity" className={`border-l-2 border-brand py-1.5 pl-6 ${className}`} data-reveal>
      <p className="max-w-[92ch] text-[13.5px] leading-[1.8] text-grey">
        <strong className="font-medium text-ink">Regulated and non-regulated activity.</strong> {regulatoryNote}
        {showSponsor ? (
          <>
            {" "}
            {sponsorNote}{" "}
            <a
              href={firm.arc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-brand-deep/35 text-brand-deep hover:border-brand-deep"
            >
              {firm.arc.display} ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </>
        ) : null}
      </p>
    </aside>
  );
}
