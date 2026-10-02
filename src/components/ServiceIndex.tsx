"use client";

import { useEffect, useRef, useState } from "react";

type Item = { id: string; label: string };

/**
 * Index for a long page of sections. On wide screens it sits in a sticky
 * column, marks the section in view and steps up or down a section at a
 * time; on small screens it is a row of links pinned under the header.
 */
export function ServiceIndex({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const row = useRef<HTMLUListElement>(null);

  // Keep the active link visible in the small-screen row.
  useEffect(() => {
    const el = row.current?.querySelector<HTMLElement>('[aria-current="true"]');
    if (row.current && el) row.current.scrollTo({ left: el.offsetLeft - 24, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el);
    const onScroll = () => {
      // The active section is the last one whose top has passed a line a third of the way down the screen.
      const line = window.innerHeight * 0.33;
      let current = els[0]?.id;
      for (const el of els) if (el.getBoundingClientRect().top <= line) current = el.id;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  const index = Math.max(0, items.findIndex((i) => i.id === active));
  const go = (i: number) => {
    const target = items[i];
    if (!target) return;
    document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${target.id}`);
  };

  return (
    <>
      {/* Small screens: a scrollable row pinned under the header. */}
      <nav
        aria-label="Sections on this page"
        className="sticky top-18 z-30 -mx-6 border-b border-line bg-warm/95 backdrop-blur-md md:top-20 md:-mx-10 lg:hidden"
      >
        <ul ref={row} className="relative flex gap-6 overflow-x-auto px-6 font-display text-[13.5px] whitespace-nowrap md:px-10">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                aria-current={active === it.id ? "true" : undefined}
                className={`block border-b-2 py-3.5 transition-colors ${
                  active === it.id ? "border-brand text-brand-deep" : "border-transparent text-grey"
                }`}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Wide screens: sticky column with step controls. */}
      <nav aria-label="Sections on this page" className="hidden lg:block">
        <div className="sticky top-32">
          <p className="eyebrow text-brand">On this page</p>
          <ol className="mt-6 border-l border-line">
            {items.map((it) => (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  aria-current={active === it.id ? "true" : undefined}
                  className={`-ml-px block border-l-2 py-2.5 pl-5 font-display text-[14.5px] leading-snug transition-colors duration-200 ${
                    active === it.id
                      ? "border-brand text-ink"
                      : "border-transparent text-grey hover:text-ink"
                  }`}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={index === 0}
              aria-label="Previous section"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brand-deep transition-colors hover:border-brand hover:bg-brand hover:text-warm disabled:pointer-events-none disabled:opacity-35"
            >
              <span aria-hidden="true">↑</span>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              disabled={index === items.length - 1}
              aria-label="Next section"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brand-deep transition-colors hover:border-brand hover:bg-brand hover:text-warm disabled:pointer-events-none disabled:opacity-35"
            >
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
