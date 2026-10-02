import type { ReactNode } from "react";

/**
 * Section heading: optional short label, a plain descriptive heading, and an
 * optional lede. Headings are deliberately simple ("Our Services", "Selected
 * Transactions") — see internal/voice.md.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  dark = false,
  as: Tag = "h2",
  id,
  className = "",
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  dark?: boolean;
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={className} data-reveal>
      {eyebrow ? <p className={`eyebrow mb-5 ${dark ? "text-brand-light" : "text-brand"}`}>{eyebrow}</p> : null}
      <Tag id={id} className={`display max-w-[24ch] ${dark ? "text-brand-light" : "text-ink"}`}>
        {title}
      </Tag>
      {lede ? (
        <div className={`lede mt-6 max-w-[60ch] ${dark ? "text-warm/75" : "text-grey"}`}>{lede}</div>
      ) : null}
      {children}
    </div>
  );
}
