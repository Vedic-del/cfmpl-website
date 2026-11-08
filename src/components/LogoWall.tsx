import type { ClientLogo } from "@/content/clients";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Client logos on white tiles, printed in grey to sit inside the house
 * palette; each takes its own colours back on hover. The files are the
 * firm's own (from its Corporate Profile), served from this site.
 */
export function LogoWall({
  logos,
  label,
  wide = 6,
  className = "",
}: {
  logos: readonly ClientLogo[];
  label: string;
  /** Columns on wide screens: 6, or 5 for a set of twenty. */
  wide?: 5 | 6;
  className?: string;
}) {
  return (
    <ul
      aria-label={label}
      className={`grid grid-cols-3 border-t border-l border-line bg-white sm:grid-cols-4 ${wide === 5 ? "lg:grid-cols-5" : "lg:grid-cols-6"} ${className}`}
    >
      {logos.map((l) => (
        <li key={l.file} className="logo-tile flex aspect-[3/2] items-center justify-center border-r border-b border-line p-3 sm:p-5 md:p-6">
          {/* eslint-disable-next-line @next/next/no-img-element -- small fixed logo files, no responsive variants */}
          <img src={`${basePath}${l.file}`} alt={l.name} loading="lazy" className="max-h-full max-w-full object-contain" />
        </li>
      ))}
    </ul>
  );
}
