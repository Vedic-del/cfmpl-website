"use client";

import { useRef, useState } from "react";
import { Portrait } from "./PersonCard";
import type { Person } from "@/content/people";

/**
 * A horizontal rail of people. One is open at a time: opening another contracts
 * the rest to a spine carrying the name. The rail scrolls and swipes sideways,
 * so long groups never become an endless vertical scroll.
 *
 * On phones the rail becomes a plain list of names that open in place, so no
 * one is hidden off the edge of a narrow screen.
 *
 * Built as a disclosure group rather than tabs, because the control and the
 * content it reveals are the same panel. Arrow keys, Home and End move between
 * spines; the open panel is scrolled into view.
 */
export function PeopleRail({ people, groupId, label }: { people: readonly Person[]; groupId: string; label: string }) {
  const [open, setOpen] = useState(0);
  const railRef = useRef<HTMLUListElement>(null);

  function activate(i: number) {
    setOpen(i);
    const el = railRef.current?.children[i] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    const last = people.length - 1;
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const target = Math.min(last, Math.max(0, next));
    activate(target);
    (railRef.current?.children[target]?.querySelector("button") as HTMLElement | undefined)?.focus();
  }

  return (
    <>
      {/* Phones: every person visible in a list; tap a name to read the biography. */}
      <ul aria-label={label} className="mt-8 border-t border-line md:hidden">
        {people.map((p, i) => (
          <li key={p.slug} id={`${p.slug}-m`} className="border-b border-line">
            <details className="group/p" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <Portrait person={p} className="w-14 shrink-0 [&_span]:text-[1.05rem]" />
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[1.15rem] leading-snug font-medium">{p.name}</span>
                  <span className="mt-1 block text-[13px] leading-snug text-grey">{p.role}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="relative h-10 w-10 shrink-0 rounded-full border border-line transition-transform duration-300 group-open/p:rotate-45"
                >
                  <span className="absolute top-1/2 left-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 bg-brand-deep" />
                  <span className="absolute top-1/2 left-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-brand-deep" />
                </span>
              </summary>
              <div className="prose-house pb-7 text-grey">
                {p.bio.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </details>
          </li>
        ))}
      </ul>

    <ul
      ref={railRef}
      aria-label={label}
      className="mt-10 hidden snap-x snap-mandatory gap-px overflow-x-auto bg-line-dark/30 [scrollbar-width:thin] md:flex"
    >
      {people.map((p, i) => {
        const isOpen = i === open;
        const panelId = `${groupId}-panel-${p.slug}`;
        return (
          <li
            key={p.slug}
            id={p.slug}
            className={`relative flex shrink-0 snap-start scroll-mt-28 bg-white transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              isOpen ? "w-[min(760px,86vw)]" : "w-[76px] md:w-[92px]"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => activate(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`flex shrink-0 items-center justify-center py-8 transition-colors duration-300 ${
                isOpen ? "w-[54px] cursor-default bg-brand md:w-[64px]" : "w-full hover:bg-paper"
              }`}
            >
              <span
                className={`flex items-center gap-5 whitespace-nowrap font-display text-[15px] ${
                  isOpen ? "text-warm" : "text-ink"
                }`}
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                <span className="num text-[11px] font-semibold tracking-[0.16em] opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium">{p.name}</span>
                <span className={`text-[12px] ${isOpen ? "text-warm/90" : "text-grey"}`}>{p.role}</span>
              </span>
            </button>

            <div
              id={panelId}
              hidden={!isOpen}
              className="min-w-0 flex-1 overflow-hidden px-6 py-9 md:px-10 md:py-11"
            >
              <div className="grid gap-7 sm:grid-cols-[180px_1fr] sm:gap-9">
                <Portrait person={p} className="w-full max-w-[180px]" />
                <div className="min-w-0">
                  <h3 className="font-display text-[1.5rem] font-medium leading-tight">{p.name}</h3>
                  <p className="eyebrow mt-2 text-brand">{p.role}</p>
                  <div className="prose-house mt-5 text-grey">
                    {p.bio.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
    </>
  );
}
