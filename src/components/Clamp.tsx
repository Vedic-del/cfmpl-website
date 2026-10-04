"use client";

import { useState, type ReactNode } from "react";

/**
 * On phones, shortens a long list to its first few rows with a "Show all"
 * control; on wider screens it does nothing. The full list is always in the
 * page, so search engines and screen readers get every item.
 */
export function Clamp({ count, threshold = 5, children }: { count: number; threshold?: number; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  if (count <= threshold) return <>{children}</>;
  return (
    <div>
      <div className={`relative ${open ? "" : "max-md:max-h-[14rem] max-md:overflow-hidden"}`}>
        {children}
        {open ? null : (
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white md:hidden" />
        )}
      </div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 font-display text-[14px] text-brand-deep md:hidden"
      >
        {open ? "Show fewer" : `Show all ${count}`}
        <span aria-hidden="true" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ↓
        </span>
      </button>
    </div>
  );
}
