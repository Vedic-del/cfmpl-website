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
    <ul className="grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
      {practices.map((p, i) => (
        <li key={p.slug} data-reveal style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
          <Link href={`/services#${p.slug}`} className="group block">
            <div className="overflow-hidden">
              <Plate
                photo={plates[p.slug]}
                decorative
                tone={p.slug === "stressed-asset-resolution-advisory" ? "soft" : "full"}
                sizes="(min-width: 768px) 32vw, 100vw"
                className="aspect-[4/5] w-full"
              />
            </div>
            <p className="eyebrow mt-6 text-brand">{p.tag}</p>
            <h3 className="mt-3 font-display text-[1.5rem] leading-tight font-medium transition-colors duration-200 group-hover:text-brand">
              {p.name}
            </h3>
            <p className="mt-3 max-w-[40ch] text-[15px] leading-[1.7] text-grey">{p.summary}</p>
            <span
              aria-hidden="true"
              className="mt-5 inline-block text-brand transition-transform duration-200 group-hover:translate-x-1.5"
            >
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
