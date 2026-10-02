type Entry = { year: string; event: string };

export function Timeline({ entries }: { entries: readonly Entry[] }) {
  return (
    <ol className="mt-12 border-t border-line-dark">
      {entries.map((e, i) => (
        <li
          key={e.year}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
          className="group grid gap-2 border-b border-line-dark py-7 md:grid-cols-[160px_1fr] md:gap-10"
        >
          <span className="num font-display text-[1.6rem] leading-none text-brand-light transition-colors duration-300 group-hover:text-warm">
            {e.year}
          </span>
          <p className="max-w-[62ch] text-[15.5px] leading-[1.75] text-warm/70">{e.event}</p>
        </li>
      ))}
    </ol>
  );
}
