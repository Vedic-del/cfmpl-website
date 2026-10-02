"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The CFM mark, drawn: three pairs of parallel lines at 0°, 60° and 120° around
 * a filled hexagon, each line ending in a node — twelve in all. This is one of
 * the two sanctioned appearances of the mandala motif outside the logo.
 *
 * Draws once when it enters view. Under reduced motion it renders complete.
 */

const R = 120; // half-length of each line
const D = 22; // offset of each line from centre = apothem of the hexagon
const C = 150; // centre of the 300×300 viewBox

type Seg = { x1: number; y1: number; x2: number; y2: number };

function buildLines(): Seg[] {
  const segs: Seg[] = [];
  for (const deg of [0, 60, 120]) {
    const t = (deg * Math.PI) / 180;
    const ux = Math.cos(t);
    const uy = Math.sin(t);
    const nx = -uy;
    const ny = ux;
    for (const s of [1, -1]) {
      const ox = C + s * D * nx;
      const oy = C + s * D * ny;
      segs.push({ x1: ox - R * ux, y1: oy - R * uy, x2: ox + R * ux, y2: oy + R * uy });
    }
  }
  return segs;
}

function hexagon(): string {
  // Apothem D, flat edges parallel to the lines → vertices at 30° + 60k.
  const r = (2 * D) / Math.sqrt(3);
  return Array.from({ length: 6 }, (_, k) => {
    const a = ((30 + 60 * k) * Math.PI) / 180;
    return `${(C + r * Math.cos(a)).toFixed(2)},${(C + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}

const LINES = buildLines();
const HEX = hexagon();
const LEN = 2 * R;

export function ProcessDiagram({ dark = true, className = "" }: { dark?: boolean; className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Deferred: render it complete on the next frame rather than cascading now.
      const raf = requestAnimationFrame(() => setDrawn(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ink = dark ? "var(--color-brand-light)" : "var(--color-brand)";

  return (
    <svg
      ref={ref}
      viewBox="0 0 300 300"
      role="img"
      aria-label="The CFM mark: six lines crossing around a central hexagon, ending in twelve points"
      className={className}
      fill="none"
    >
      <circle cx={C} cy={C} r={R + 18} stroke={ink} strokeOpacity={0.12} strokeWidth={0.75} />
      {LINES.map((l, i) => (
        <g key={i}>
          <line
            {...l}
            stroke={ink}
            strokeWidth={1.1}
            strokeLinecap="round"
            strokeDasharray={LEN}
            strokeDashoffset={drawn ? 0 : LEN}
            style={{ transition: `stroke-dashoffset 1100ms cubic-bezier(0.22,1,0.36,1) ${i * 140}ms` }}
          />
          {[
            [l.x1, l.y1],
            [l.x2, l.y2],
          ].map(([cx, cy], j) => (
            <circle
              key={j}
              cx={cx}
              cy={cy}
              r={4.2}
              fill={ink}
              style={{
                opacity: drawn ? 1 : 0,
                transition: `opacity 500ms ease-out ${i * 140 + 700}ms`,
              }}
            />
          ))}
        </g>
      ))}
      <polygon
        points={HEX}
        fill={ink}
        style={{
          opacity: drawn ? 1 : 0,
          transformOrigin: `${C}px ${C}px`,
          transform: drawn ? "scale(1)" : "scale(0.6)",
          transition: "opacity 700ms ease-out 1300ms, transform 900ms cubic-bezier(0.22,1,0.36,1) 1300ms",
        }}
      />
    </svg>
  );
}
