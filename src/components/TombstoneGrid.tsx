import type { Tombstone } from "@/content/transactions";

export function TombstoneGrid({ items, note }: { items: readonly Tombstone[]; note?: string }) {
  return (
    <>
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <li
            key={t.client}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            className="flex min-h-[250px] flex-col border border-line bg-white p-7 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand/40"
          >
            <p className="eyebrow text-brand">{t.role}</p>
            <p className="mt-4 font-display text-[19px] leading-snug">{t.client}</p>
            <p className="num mt-auto pt-7 font-display text-[2.1rem] tracking-[-0.02em]">{t.value}</p>
            <p className="mt-2 border-t border-line pt-3 text-[12.5px] text-grey-light">
              {t.instrument}
              {t.date ? ` · ${t.date}` : ""}
            </p>
          </li>
        ))}
      </ul>
      {note ? <p className="mt-5 text-[12.5px] text-grey">{note}</p> : null}
    </>
  );
}
