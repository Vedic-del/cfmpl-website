import Link from "next/link";
import type { Tombstone } from "@/content/transactions";

/** Transaction tiles. Each links to its full write-up on the Services page. */
export function TombstoneGrid({ items, note }: { items: readonly Tombstone[]; note?: string }) {
  return (
    <>
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <li key={t.client} data-reveal style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
            <Link
              href={`/services#${t.caseSlug}`}
              className="group flex h-full min-h-[250px] flex-col border border-line bg-white p-7 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand/40"
            >
              <span className="eyebrow text-brand">{t.role}</span>
              <span className="mt-4 font-display text-[19px] leading-snug">{t.client}</span>
              <span className="num mt-auto pt-7 font-display text-[2rem] tracking-[-0.02em]">{t.value}</span>
              <span className="mt-2 border-t border-line pt-3 text-[13px] text-grey">{t.instrument}</span>
              <span className="mt-4 font-display text-[13px] text-brand-deep group-hover:underline">Read more →</span>
            </Link>
          </li>
        ))}
      </ul>
      {note ? <p className="mt-5 text-[13px] text-grey">{note}</p> : null}
    </>
  );
}
