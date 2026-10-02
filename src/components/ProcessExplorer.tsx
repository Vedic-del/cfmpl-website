"use client";

import { useState } from "react";

type Step = { n: string; title: string; body: string };

/**
 * The nine steps as an accordion. Open one, the rest stay reachable. Height is
 * animated with a grid-rows transition so nothing is clipped from the
 * accessibility tree when open, and closed panels are properly hidden.
 */
export function ProcessExplorer({ steps, highlight = [] }: { steps: readonly Step[]; highlight?: readonly string[] }) {
  const [open, setOpen] = useState<string | null>(steps[0]?.n ?? null);

  return (
    <div className="mt-12 border-t border-line-dark">
      {steps.map((s) => {
        const isOpen = open === s.n;
        const marked = highlight.includes(s.n);
        return (
          <div key={s.n} className="border-b border-line-dark">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`step-${s.n}`}
                onClick={() => setOpen(isOpen ? null : s.n)}
                className="group flex w-full items-center gap-5 py-6 text-left md:gap-8"
              >
                <span
                  className={`num shrink-0 font-display text-[1.75rem] leading-none transition-colors duration-300 ${
                    isOpen ? "text-warm" : "text-brand-light"
                  }`}
                >
                  {s.n}
                </span>
                <span
                  className={`flex-1 font-display text-[1.2rem] font-medium transition-colors duration-200 md:text-[1.35rem] ${
                    isOpen ? "text-warm" : "text-warm/85 group-hover:text-warm"
                  }`}
                >
                  {s.title}
                  {marked ? (
                    <span className="ml-3 align-middle text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand-light">
                      Worth noting
                    </span>
                  ) : null}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-brand-light transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "rotate-45" : "group-hover:translate-y-0.5"
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`step-${s.n}`}
              hidden={!isOpen}
              className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[68ch] pb-8 pl-[3.25rem] text-[15.5px] leading-[1.8] text-warm/70 md:pl-[4.5rem]">
                  {s.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
