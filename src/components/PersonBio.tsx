import type { Person } from "@/content/people";
import { Portrait } from "./PersonCard";

export function PersonBio({ person }: { person: Person }) {
  return (
    <article
      id={person.slug}
      className="grid scroll-mt-28 gap-8 border-t border-line py-12 md:grid-cols-[240px_1fr] md:gap-14"
      data-reveal
    >
      <Portrait person={person} className="max-w-[240px]" />
      <div>
        <h3 className="text-[1.6rem] font-medium">{person.name}</h3>
        <p className="eyebrow mt-2 text-brand">{person.role}</p>
        <div className="prose-house mt-6 max-w-[68ch] text-grey">
          {person.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
