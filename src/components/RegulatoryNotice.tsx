"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { firm } from "@/content/firm";
import { nonSebiActivities, nonSebiNotice, sebiGrievanceEmail } from "@/content/legal";
import { MARK_HEX, MARK_LINES } from "@/lib/mark";

const STORAGE_KEY = "cfm-regulatory-notice-v1";

/**
 * The regulatory notice every visitor sees on first arrival: SEBI registration,
 * the two grievance routes and the disclosure on activities SEBI does not
 * regulate (SEBI circular of 2 January 2026). Built on the native <dialog>, so
 * focus is held inside it, Escape closes it and the page behind is inert.
 * Once acknowledged it stays closed for the rest of that browser session and
 * returns on the next visit; the same text is always available on the
 * Regulatory Information page.
 */
export function RegulatoryNotice() {
  const ref = useRef<HTMLDialogElement>(null);

  // The dialog is in the page from the start, closed; it opens unless the
  // notice has already been acknowledged in this browser session.
  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Storage unavailable (private mode): show the notice each visit.
    }
    const dialog = ref.current;
    if (!seen && dialog && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
    }
  }, []);

  function acknowledge() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Nothing to do: the notice simply returns next visit.
    }
    ref.current?.close();
  }

  return (
    <dialog
      ref={ref}
      aria-labelledby="reg-notice-title"
      onCancel={acknowledge}
      className="reg-notice m-0 h-auto max-h-[92dvh] w-full max-w-none overflow-y-auto bg-warm p-0 text-ink shadow-2xl max-md:mt-auto md:m-auto md:max-h-[90dvh] md:max-w-[1060px] lg:overflow-hidden lg:bg-[linear-gradient(to_right,var(--color-deep)_300px,var(--color-warm)_300px)]"
    >
      <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)]">
      {/* Header: who we are and the registration number. */}
      <div className="relative isolate overflow-hidden bg-deep px-6 pt-8 pb-7 text-warm md:px-10 md:pt-10 md:pb-9 lg:flex lg:flex-col lg:justify-between lg:px-9 lg:py-10">
        <svg aria-hidden="true" viewBox="0 0 300 300" className="reg-notice-mark absolute -top-16 -right-16 -z-10 w-64 text-warm/10 md:w-80">
          {MARK_LINES.map((l, k) => (
            <g key={k}>
              <line {...l} stroke="currentColor" strokeWidth="1.2" />
              <circle cx={l.x1} cy={l.y1} r="4" fill="currentColor" />
              <circle cx={l.x2} cy={l.y2} r="4" fill="currentColor" />
            </g>
          ))}
          <polygon points={MARK_HEX} fill="currentColor" />
        </svg>
        <button
          type="button"
          onClick={acknowledge}
          aria-label="Close notice"
          className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full text-warm/80 transition-colors hover:bg-warm/10 hover:text-warm"
        >
          <span aria-hidden="true" className="relative block h-4 w-4">
            <span className="absolute top-1/2 left-0 h-px w-4 rotate-45 bg-current" />
            <span className="absolute top-1/2 left-0 h-px w-4 -rotate-45 bg-current" />
          </span>
        </button>
        <div>
          <p className="eyebrow text-brand-light">Regulatory notice</p>
          <h2 id="reg-notice-title" className="mt-4 max-w-[22ch] font-display text-[1.65rem] leading-tight md:text-[2rem] lg:text-[1.75rem]">
            Registered with SEBI as a {firm.sebiCategory}
          </h2>
        </div>
        <div>
          <p className="mt-6 text-[12px] tracking-[0.12em] text-warm/60 uppercase">Registration No.</p>
          <p className="reg-notice-number num mt-1 font-display text-[1.9rem] tracking-[0.08em] text-brand-light md:text-[2.4rem] lg:text-[1.75rem]">
            {firm.sebiRegistrationNo}
          </p>
        </div>
      </div>

      {/* Body: the two grievance routes, then the disclosure. */}
      <div className="px-6 py-7 md:px-10 md:py-9 lg:max-h-[90dvh] lg:overflow-y-auto lg:px-9 lg:py-8">
        <div className="grid gap-4 md:grid-cols-[1fr_1.35fr]">
          <section className="border border-line bg-white p-5">
            <p className="text-[11.5px] font-display font-semibold tracking-[0.08em] text-brand uppercase">SEBI-regulated</p>
            <h3 className="mt-2 font-display text-[1.1rem] font-medium">Merchant banking</h3>
            <p className="mt-3 text-[13.5px] text-grey">Investor grievances</p>
            <a href={`mailto:${sebiGrievanceEmail}`} className="mt-1 inline-block break-all text-[15px] text-brand-deep underline underline-offset-4">
              {sebiGrievanceEmail}
            </a>
          </section>
          <section className="border border-line bg-white p-5">
            <p className="text-[11.5px] font-display font-semibold tracking-[0.08em] text-grey uppercase">Not regulated by SEBI</p>
            <h3 className="mt-2 font-display text-[1.1rem] font-medium">Other activities</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {nonSebiActivities.map((a) => (
                <li key={a} className="border border-line px-2.5 py-1 text-[12.5px] text-ink">
                  {a}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="mt-6 text-[14px] leading-[1.75] text-grey">{nonSebiNotice.statement}</p>
        <p className="mt-5 border-l-2 border-brand bg-paper py-3 pr-4 pl-4 text-[14.5px] leading-[1.7] text-ink">
          <strong className="font-display font-semibold">Note:</strong> {nonSebiNotice.note}
        </p>
        <p className="mt-5 text-[12px] leading-[1.7] text-grey">{nonSebiNotice.basis}</p>

        <div className="mt-8 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/regulatory#non-sebi"
            onClick={acknowledge}
            className="text-center text-[14px] text-brand-deep underline underline-offset-4 sm:text-left"
          >
            Full regulatory information
          </Link>
          <button
            type="button"
            onClick={acknowledge}
            className="min-h-12 rounded-full bg-brand px-8 font-display text-[15px] font-medium text-warm transition-colors hover:bg-brand-deep"
          >
            I understand
          </button>
        </div>
      </div>
      </div>
    </dialog>
  );
}
