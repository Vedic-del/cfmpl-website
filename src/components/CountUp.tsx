"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts the leading number in a figure ("30+", "USD 40", "₹1,190 cr") up from
 * zero when it enters view. Non-numeric figures ("SEBI") render as-is. The final
 * value is server-rendered, so crawlers, no-JS and reduced-motion see it directly.
 */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(/^(\D*?)([\d,]+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    const grouped = digits.includes(",");
    const fmt = (n: number) => (grouped ? n.toLocaleString("en-IN") : String(n));
    const el = ref.current;
    let raf = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(`${prefix}${fmt(Math.round(target * eased))}${suffix}`);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        setDisplay(`${prefix}0${suffix}`);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={`num ${className}`}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
