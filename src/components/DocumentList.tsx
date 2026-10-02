import type { Doc } from "@/content/investors";

/**
 * Regulatory document list. A document with no known URL is listed and marked
 * as available on request — never linked to a guess.
 */
export function DocumentList({ docs, emptyText }: { docs: readonly Doc[]; emptyText?: string }) {
  if (docs.length === 0) {
    return (
      <div className="mt-10 border border-dashed border-line bg-white px-7 py-10 text-center" data-reveal>
        <p className="font-display text-[17px]">Nothing is hosted in this section at present.</p>
        {emptyText ? <p className="mx-auto mt-3 max-w-[56ch] text-[14px] text-grey">{emptyText}</p> : null}
      </div>
    );
  }
  return (
    <ul className="mt-10 border-t border-line" data-reveal>
      {docs.map((d) => {
        const label = (
          <span>
            <span className="font-display text-[16px]">{d.title}</span>
            {d.detail ? <span className="ml-3 text-[13px] text-grey">{d.detail}</span> : null}
          </span>
        );
        return (
          <li key={d.title} className="border-b border-line">
            {d.href ? (
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-5 transition-colors duration-200 hover:text-brand"
              >
                {label}
                <span className="shrink-0 font-display text-[12px] font-semibold tracking-[0.1em] text-brand">
                  PDF{" "}
                  <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    ↗
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            ) : (
              <div className="flex items-center justify-between gap-6 py-5">
                {label}
                <span className="shrink-0 text-[12.5px] text-grey">Available on request</span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
