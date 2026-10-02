import type { ReactNode } from "react";

/**
 * Section heading: a small label that names the section, then a short
 * statement. A lede is optional and used only when it adds a fact.
 * Wrap part of the title in <Muted> to set it in the lighter tone.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  dark = false,
  size = "md",
  as: Tag = "h2",
  id,
  className = "",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  dark?: boolean;
  size?: "md" | "lg";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={className} data-reveal>
      {eyebrow ? <p className={`eyebrow mb-6 ${dark ? "text-brand-light" : "text-brand"}`}>{eyebrow}</p> : null}
      <Tag
        id={id}
        className={`${size === "lg" ? "display-lg max-w-[20ch]" : "display max-w-[24ch]"} ${dark ? "text-warm" : "text-ink"}`}
      >
        {title}
      </Tag>
      {lede ? (
        <div className={`lede mt-6 max-w-[62ch] ${dark ? "text-warm/75" : "text-grey"}`}>{lede}</div>
      ) : null}
      {children}
    </div>
  );
}

/** The quieter half of a two-tone heading. */
export function Muted({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={dark ? "text-brand-light" : "text-brand"}>{children}</span>;
}
