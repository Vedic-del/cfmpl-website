import Link from "next/link";
import type { Photo } from "@/content/imagery";
import type { Practice } from "@/content/services";
import { Plate } from "./Plate";

/** The three practices as picture cards, each opening its section on the Services page. */
export function PracticeGrid({
  practices,
  plates,
}: {
  practices: readonly Practice[];
  plates: Record<string, Photo>;
}) {
  return (
    <ul className="grid items-start gap-10 md:grid-cols-3 md:gap-5 lg:gap-8">
      {practices.map((p) => (
        <li key={p.slug}>
          <Link href={`/services#${p.slug}`} className="m-card group block">
            <div className="m-zoom">
              <Plate
                photo={plates[p.slug]}
                decorative
                tone={p.slug === "stressed-asset-resolution-advisory" ? "soft" : "full"}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[3/2] w-full md:aspect-[4/5]"
              />
            </div>
            <h3 className="mt-6 font-display text-[1.5rem] leading-tight font-medium transition-colors duration-200 group-hover:text-brand">
              {p.name} <span aria-hidden="true" className="m-arrow text-brand">→</span>
            </h3>
            <p className="mt-3 max-w-[40ch] text-[15px] leading-[1.7] text-grey">{p.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
