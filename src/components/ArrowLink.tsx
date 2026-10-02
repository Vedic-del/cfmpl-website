import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowLink({
  href,
  children,
  dark = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  external?: boolean;
  className?: string;
}) {
  const cls = `group inline-flex items-center gap-2 border-b pb-1 text-[15px] font-light transition-colors duration-200 ${
    dark
      ? "border-brand-light/40 text-brand-light hover:border-brand-light hover:text-warm"
      : "border-brand-deep/35 text-brand-deep hover:border-brand-deep"
  } ${className}`;
  const arrow = (
    <span aria-hidden="true" className="transition-transform duration-200 ease-out group-hover:translate-x-1">
      {external ? "↗" : "→"}
    </span>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {arrow}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {arrow}
    </Link>
  );
}
