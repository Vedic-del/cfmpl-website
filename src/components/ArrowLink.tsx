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
  const cls = `link-draw inline-flex min-h-11 items-center gap-2 text-[15px] transition-colors duration-200 ${
    dark ? "text-brand-light hover:text-warm" : "text-brand-deep"
  } ${className}`;
  const arrow = (
    <span aria-hidden="true" className="m-arrow">
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
