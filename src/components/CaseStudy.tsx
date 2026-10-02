import type { CaseStudy as CaseStudyT } from "@/content/transactions";

export function CaseStudy({ study, dark = false }: { study: CaseStudyT; dark?: boolean }) {
  const muted = dark ? "text-warm/70" : "text-grey";
  const rule = dark ? "border-line-dark" : "border-line";
  const accent = dark ? "text-brand-light" : "text-brand";

  return (
    <article id={study.slug} className="scroll-mt-28">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div data-reveal>
          <p className={`eyebrow ${accent}`}>{study.eyebrow}</p>
          <h2 className={`display mt-5 ${dark ? "text-brand-light" : ""}`}>
            {study.headline.map((l, i) => (
              <span key={i} className="md:block">
                {l}{" "}
              </span>
            ))}
          </h2>
          <p className={`lede mt-6 ${muted}`}>{study.client}</p>
        </div>
        <div className={`self-end border-t pt-6 ${rule}`} data-reveal>
          <p className="num font-display text-[3.2rem] leading-none tracking-[-0.02em]">{study.value}</p>
          <p className={`mt-3 text-[14px] ${muted}`}>{study.valueNote}</p>
        </div>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <div data-reveal>
          <h3 className={`eyebrow ${accent}`}>What stood in the way</h3>
          <ul className={`mt-5 border-t ${rule}`}>
            {study.obstacles.map((o) => (
              <li key={o} className={`border-b py-4 text-[15px] leading-relaxed ${rule} ${muted}`}>
                {o}
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal>
          <h3 className={`eyebrow ${accent}`}>What we did</h3>
          <ul className={`mt-5 border-t ${rule}`}>
            {study.actions.map((a) => (
              <li key={a} className={`flex gap-4 border-b py-4 text-[15px] leading-relaxed ${rule}`}>
                <span aria-hidden="true" className={`mt-0.5 ${accent}`}>
                  →
                </span>
                <span className={dark ? "text-warm/85" : "text-ink"}>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        className={`mt-10 max-w-[70ch] border-l-2 pl-6 font-display text-[1.15rem] leading-relaxed ${
          dark ? "border-brand-light text-warm" : "border-brand text-ink"
        }`}
        data-reveal
      >
        {study.outcome}
      </p>
    </article>
  );
}
