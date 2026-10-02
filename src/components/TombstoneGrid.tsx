import Link from "next/link";
import type { Tombstone } from "@/content/transactions";

/** Transaction tiles. Each links to its full write-up on the Services page. */
export function TombstoneGrid({ items, dark = false }: { items: readonly Tombstone[]; dark?: boolean }) {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {items.map((t, i) => (
        <li key={t.client} data-reveal style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
          <Link
            href={`/services#${t.caseSlug}`}
            className={`group flex h-full min-h-[270px] flex-col border p-7 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 md:p-8 ${
              dark
                ? "border-line-dark bg-deep/55 backdrop-blur-sm hover:border-brand-light/60 hover:bg-deep/75"
                : "border-line bg-white hover:border-brand/40"
            }`}
          >
            <span className={`eyebrow ${dark ? "text-brand-light" : "text-brand"}`}>{t.role}</span>
            <span className={`mt-4 font-display text-[18px] leading-snug ${dark ? "text-warm" : ""}`}>{t.client}</span>
            <span className={`num mt-auto pt-8 font-display text-[2.4rem] leading-none tracking-[-0.02em] ${dark ? "text-warm" : ""}`}>
              {t.value}
            </span>
            <span className={`mt-3 border-t pt-3 text-[13px] ${dark ? "border-line-dark text-warm/70" : "border-line text-grey"}`}>
              {t.instrument}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
