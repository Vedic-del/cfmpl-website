/**
 * A slow, exchange-style ticker of the work the firm does. Decorative: the
 * same list is set out properly on the Services page, so screen readers get
 * one plain list and the duplicate used for the seamless loop is hidden.
 * Under reduced motion it stands still.
 */
export function Ticker({ items }: { items: readonly string[] }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((it) => (
        <li key={it} className="flex items-center whitespace-nowrap">
          <span className="px-7 font-display text-[clamp(1.25rem,0.9rem+1.4vw,2rem)] font-light tracking-[-0.01em] text-warm/85 md:px-10">
            {it}
          </span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-brand-light" />
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label="What we do" className="ticker overflow-hidden border-y border-line-dark bg-deep py-6 md:py-7">
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
