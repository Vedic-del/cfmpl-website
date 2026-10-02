type Entry = { year: string; event: string };

/** Milestones. A vertical list on small screens; a single line across the page on wide ones. */
export function Timeline({ entries }: { entries: readonly Entry[] }) {
  return (
    <ol className="mt-14 border-t border-line-dark lg:grid lg:border-t-0" style={{ gridTemplateColumns: `repeat(${entries.length}, minmax(0, 1fr))` }}>
      {entries.map((e, i) => (
        <li
          key={e.year}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
          className="group grid gap-2 border-b border-line-dark py-7 md:grid-cols-[160px_1fr] md:gap-10 lg:relative lg:block lg:border-b-0 lg:border-t lg:pt-10 lg:pr-8 lg:pb-0"
        >
          <span
            aria-hidden="true"
            className="absolute -top-[5px] left-0 hidden h-[9px] w-[9px] rotate-45 bg-brand-light transition-colors duration-300 group-hover:bg-warm lg:block"
          />
          <span className="num font-display text-[1.6rem] leading-none text-brand-light transition-colors duration-300 group-hover:text-warm lg:text-[2.6rem]">
            {e.year}
          </span>
          <p className="max-w-[62ch] text-[15.5px] leading-[1.75] text-warm/75 lg:mt-5 lg:text-[15px]">{e.event}</p>
        </li>
      ))}
    </ol>
  );
}
