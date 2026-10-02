import type { CaseStudy as CaseStudyT } from "@/content/transactions";

/** One transaction, written up in a consistent format: client, challenge, our role, result. */
export function CaseStudy({ study, dark = false }: { study: CaseStudyT; dark?: boolean }) {
  const muted = dark ? "text-warm/75" : "text-grey";
  const rule = dark ? "border-line-dark" : "border-line";
  const accent = dark ? "text-brand-light" : "text-brand";

  return (
    <article id={study.slug} className="scroll-mt-28" aria-labelledby={`${study.slug}-h`}>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div data-reveal>
          <p className={`eyebrow ${accent}`}>{study.type}</p>
          <h3 id={`${study.slug}-h`} className={`display mt-5 ${dark ? "text-brand-light" : ""}`}>
            {study.title}
          </h3>
          <p className={`lede mt-6 ${muted}`}>{study.client}</p>
          {study.explainer ? (
            <p className={`mt-5 border-l-2 pl-5 text-[14.5px] leading-[1.75] ${muted} ${dark ? "border-brand-light/50" : "border-brand/40"}`}>
              {study.explainer}
            </p>
          ) : null}
        </div>
        <div className={`self-end border-t pt-6 ${rule}`} data-reveal>
          <p className="num font-display text-[3rem] leading-none tracking-[-0.02em]">{study.value}</p>
          <p className={`mt-3 text-[14px] ${muted}`}>{study.valueNote}</p>
        </div>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
        <div data-reveal>
          <h4 className={`eyebrow ${accent}`}>The challenge</h4>
          <ul className={`mt-5 border-t ${rule}`}>
            {study.challenges.map((c) => (
              <li key={c} className={`border-b py-4 text-[15px] leading-relaxed ${rule} ${muted}`}>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal>
          <h4 className={`eyebrow ${accent}`}>Our role</h4>
          <ul className={`mt-5 border-t ${rule}`}>
            {study.role.map((r) => (
              <li key={r} className={`flex gap-4 border-b py-4 text-[15px] leading-relaxed ${rule}`}>
                <span aria-hidden="true" className={`mt-0.5 ${accent}`}>
                  →
                </span>
                <span className={dark ? "text-warm/90" : "text-ink"}>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={`mt-10 max-w-[70ch] text-[15.5px] leading-relaxed ${dark ? "text-warm/90" : "text-ink"}`} data-reveal>
        <strong className={`font-display font-medium ${accent}`}>Result: </strong>
        {study.result}
      </p>
    </article>
  );
}
