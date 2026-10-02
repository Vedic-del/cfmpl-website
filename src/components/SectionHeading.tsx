import type { ReactNode } from "react";

/**
 * The house section grammar: eyebrow → display heading broken across lines → lede.
 * `lines` are rendered on separate lines at md and up, and flow naturally on mobile.
 */
export function SectionHeading({
  eyebrow,
  lines,
  lede,
  dark = false,
  as: Tag = "h2",
  id,
  className = "",
  children,
}: {
  eyebrow: string;
  lines: readonly string[];
  lede?: ReactNode;
  dark?: boolean;
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={className} data-reveal>
      <p className={`eyebrow ${dark ? "text-brand-light" : "text-brand"}`}>{eyebrow}</p>
      <Tag id={id} className={`display mt-5 ${dark ? "text-brand-light" : "text-ink"}`}>
        {lines.map((line, i) => (
          <span key={i} className="md:block">
            {line}
            {i < lines.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
      {lede ? (
        <div className={`lede mt-6 max-w-[58ch] ${dark ? "text-warm/70" : "text-grey"}`}>{lede}</div>
      ) : null}
      {children}
    </div>
  );
}
