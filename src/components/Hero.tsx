"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { firm } from "@/content/firm";
import { imagery } from "@/content/imagery";

/**
 * Home hero, scrubbed by scroll while the section is pinned.
 *
 *   p 0.00 → 0.45   the coastal road under construction; headline held
 *   p 0.30 → 0.65   crossfade to the finished interchange; headline clears
 *   p 0.45 → 0.88   the CFM mark assembles — six lines out from the centre,
 *                   twelve nodes, then the hexagon lands
 *   p 0.80 → 1.00   the tagline resolves
 *
 * Something unfinished becomes whole, which is both the mandala metaphor the
 * About page already uses and what the photograph is doing. CFM ARC runs the
 * same idea as parched ground turning green.
 *
 * Progress is written to CSS variables; React never re-renders during scroll.
 * Under reduced motion the section does not pin and shows the finished state.
 */

const R = 118; // half-length of each line
const D = 22; // offset from centre = apothem of the hexagon
const C = 150;

const LINES = [0, 60, 120].flatMap((deg) => {
  const t = (deg * Math.PI) / 180;
  const ux = Math.cos(t);
  const uy = Math.sin(t);
  return [1, -1].map((s) => {
    const ox = C + s * D * -uy;
    const oy = C + s * D * ux;
    return { x1: ox - R * ux, y1: oy - R * uy, x2: ox + R * ux, y2: oy + R * uy };
  });
});

const HEX = Array.from({ length: 6 }, (_, k) => {
  const a = ((30 + 60 * k) * Math.PI) / 180;
  const r = (2 * D) / Math.sqrt(3);
  return `${(C + r * Math.cos(a)).toFixed(2)},${(C + r * Math.sin(a)).toFixed(2)}`;
}).join(" ");

export function Hero({ lines, lede }: { lines: readonly string[]; lede: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const set = (k: string, v: number) => el.style.setProperty(k, v.toFixed(3));
    const seg = (p: number, a: number, b: number) => Math.min(1, Math.max(0, (p - a) / (b - a)));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      set("--p", 1);
      set("--photo", 1);
      set("--copy", 0);
      set("--mark", 1);
      set("--tag", 1);
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const p = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;
      set("--p", p);
      set("--photo", seg(p, 0.3, 0.65));
      set("--copy", 1 - seg(p, 0.28, 0.46));
      set("--mark", seg(p, 0.45, 0.88));
      set("--tag", seg(p, 0.8, 1));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative h-[160svh] bg-deep md:h-[260svh] motion-reduce:h-auto"
      style={{ ["--p" as string]: 0, ["--photo" as string]: 0, ["--copy" as string]: 1, ["--mark" as string]: 0, ["--tag" as string]: 0 }}
    >
      <div className="sticky top-18 flex h-[calc(100svh-4.5rem)] min-h-[560px] items-center justify-center overflow-hidden md:top-20 md:h-[calc(100svh-5rem)] motion-reduce:relative motion-reduce:top-0">
        {/* next/image fill needs an absolute/relative parent; the pinned wrapper is sticky. */}
        <div aria-hidden="true" className="absolute inset-0">
        <Image
          src={imagery.heroBefore.src}
          alt={imagery.heroBefore.alt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="object-cover will-change-transform motion-reduce:hidden"
          style={{ transform: "scale(calc(1.08 - var(--p) * 0.08))" }}
        />
        <Image
          src={imagery.heroAfter.src}
          alt={imagery.heroAfter.alt}
          fill
          loading="eager"
          sizes="100vw"
          quality={75}
          className="object-cover will-change-[opacity,transform]"
          style={{ opacity: "var(--photo)", transform: "scale(calc(1.06 - var(--p) * 0.06))" }}
        />

        </div>

        {/* Tone to the brand hue, then darken enough for white type to sit on it */}
        <div aria-hidden="true" className="absolute inset-0 bg-brand mix-blend-color opacity-50" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/60 to-deep/80" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "radial-gradient(60% 52% at 50% 46%, rgb(20 21 15 / 0.62), transparent 72%)" }}
        />

        {/* Headline */}
        <div
          className="container-house absolute z-10 text-center motion-reduce:relative"
          style={{ opacity: "var(--copy)", transform: "translate3d(0, calc(var(--p) * -28px), 0)" }}
        >
          <h1
            id="hero-heading"
            className="mx-auto max-w-[26ch] font-display text-[2rem] font-semibold leading-[1.18] text-warm sm:text-[2.5rem] lg:max-w-none lg:text-[3.1rem]"
          >
            {lines.map((l, i) => (
              <span
                key={i}
                className="intro-mask block lg:whitespace-nowrap"
                style={{ ["--intro-delay" as string]: `${200 + i * 140}ms` }}
              >
                {l}
                {i < lines.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p
            className="intro mx-auto mt-7 max-w-[60ch] text-[16px] font-light leading-[1.7] text-warm md:text-[17px]"
            style={{ ["--intro-delay" as string]: "560ms" }}
          >
            {lede}
          </p>
        </div>

        {/* The mark assembling, then the tagline */}
        <div
          aria-hidden="true"
          className="absolute z-10 flex flex-col items-center motion-reduce:hidden"
          style={{ opacity: "calc(var(--mark) * 1.6)" }}
        >
          <svg viewBox="0 0 300 300" fill="none" className="w-[clamp(180px,26vw,300px)]">
            {LINES.map((l, i) => (
              <g key={i}>
                <line
                  {...l}
                  stroke="var(--color-warm)"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray={1}
                  style={{
                    strokeDashoffset: `calc(1 - clamp(0, (var(--mark) - ${(i * 0.07).toFixed(2)}) / 0.5, 1))`,
                    opacity: 0.9,
                  }}
                />
                {[
                  [l.x1, l.y1],
                  [l.x2, l.y2],
                ].map(([cx, cy], j) => (
                  <circle
                    key={j}
                    cx={cx}
                    cy={cy}
                    r={4}
                    fill="var(--color-warm)"
                    style={{ opacity: `clamp(0, (var(--mark) - 0.55 - ${(i * 0.04).toFixed(2)}) / 0.2, 1)` }}
                  />
                ))}
              </g>
            ))}
            <polygon
              points={HEX}
              fill="var(--color-warm)"
              style={{
                opacity: "clamp(0, (var(--mark) - 0.8) / 0.2, 1)",
                transformOrigin: "150px 150px",
                transform: "scale(calc(0.5 + clamp(0, (var(--mark) - 0.8) / 0.2, 1) * 0.5))",
              }}
            />
          </svg>
          <p
            className="mt-7 font-display text-[clamp(1.25rem,3.4vw,2.1rem)] font-light lowercase tracking-[0.06em] text-warm"
            style={{ opacity: "var(--tag)", transform: "translate3d(0, calc((1 - var(--tag)) * 14px), 0)" }}
          >
            {firm.tagline}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 font-display text-[10.5px] tracking-[0.22em] text-warm/75 motion-reduce:hidden"
          style={{ opacity: "calc(1 - var(--p) * 4)" }}
        >
          SCROLL
          <span className="block h-10 w-px bg-gradient-to-b from-warm/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}
