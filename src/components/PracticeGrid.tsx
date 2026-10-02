import Link from "next/link";
import type { Practice } from "@/content/services";

export function PracticeGrid({ practices }: { practices: readonly Practice[] }) {
  return (
    <div className="mt-12 grid border-t border-line md:grid-cols-3">
      {practices.map((p, i) => (
        <article
          key={p.slug}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
          className={`flex flex-col border-line py-9 md:px-8 ${i > 0 ? "border-t md:border-l md:border-t-0" : ""} ${
            i === 0 ? "md:pl-0" : ""
          } ${i === practices.length - 1 ? "md:pr-0" : ""}`}
        >
          <p className="eyebrow text-brand">{p.index}</p>
          <h3 className="mt-4 text-[1.45rem] font-medium leading-tight">
            <Link href={`/what-we-do/${p.slug}`} className="transition-colors duration-200 hover:text-brand">
              {p.name}
            </Link>
          </h3>
          <p className="mt-4 text-[14.5px] leading-[1.75] text-grey">{p.short}</p>
          <ul className="mt-auto pt-6">
            {p.summaryLinks.map((label) => (
              <li key={label}>
                <Link
                  href={`/what-we-do/${p.slug}`}
                  className="group flex items-center justify-between border-t border-line py-3 font-display text-[13.5px] transition-colors duration-200 hover:text-brand"
                >
                  {label}
                  <span aria-hidden="true" className="text-brand transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
