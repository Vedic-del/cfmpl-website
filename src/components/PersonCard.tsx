import Image from "next/image";
import Link from "next/link";
import type { Person } from "@/content/people";

function initials(name: string) {
  return name
    .replace(/^(Dr\.|Mr\.|Ms\.)\s+/, "")
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

/** Portrait slot. Renders a toned monogram until real photographs are supplied. */
export function Portrait({ person, className = "" }: { person: Person; className?: string }) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden bg-paper bg-gradient-to-br from-paper to-[#dcdccf] ${className}`}>
      {person.photo ? (
        <Image
          src={person.photo}
          alt={`Portrait of ${person.name}`}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover grayscale"
        />
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-display text-[2.6rem] tracking-[0.04em] text-brand-deep"
        >
          {initials(person.name)}
        </span>
      )}
    </div>
  );
}

export function PersonCard({ person, index = 0 }: { person: Person; index?: number }) {
  return (
    <article data-reveal style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}>
      <Link href={`/leadership#${person.slug}`} className="group block">
        <Portrait person={person} className="transition-transform duration-500 ease-out group-hover:scale-[1.01]" />
        <h3 className="mt-5 text-[19px] font-medium transition-colors duration-200 group-hover:text-brand">
          {person.name}
        </h3>
      </Link>
      <p className="eyebrow mt-2 text-brand">{person.role}</p>
      <p className="mt-3 text-[13.5px] leading-relaxed text-grey">{person.summary}</p>
    </article>
  );
}
