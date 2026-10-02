type Step = { n: string; title: string; body: string };

/** Compact two-column list for the home page; the full list with descriptions on /how-we-work. */
export function ProcessSteps({
  steps,
  compact = false,
  dark = true,
}: {
  steps: readonly Step[];
  compact?: boolean;
  dark?: boolean;
}) {
  const rule = dark ? "border-line-dark" : "border-line";
  const num = dark ? "text-brand-light" : "text-brand";

  if (compact) {
    return (
      <ol className="mt-9 grid gap-x-9 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-5">
        {steps.map((s) => (
          <li key={s.n} className={`flex gap-4 border-b py-3 text-[14px] ${rule} ${dark ? "text-warm/80" : "text-ink"}`}>
            <span className={`num w-6 shrink-0 font-display ${num}`}>{s.n}</span>
            {s.title}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className={`mt-4 border-t ${rule}`}>
      {steps.map((s, i) => (
        <li
          key={s.n}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${(i % 3) * 60}ms` }}
          className={`grid gap-3 border-b py-8 md:grid-cols-[88px_1fr_1.4fr] md:gap-8 ${rule}`}
        >
          <span className={`num font-display text-[2rem] leading-none ${num}`}>{s.n}</span>
          <h3 className={`text-[1.3rem] font-medium ${dark ? "text-warm" : "text-ink"}`}>{s.title}</h3>
          <p className={`text-[15px] leading-[1.75] ${dark ? "text-warm/70" : "text-grey"}`}>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
