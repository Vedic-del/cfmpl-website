import Link from "next/link";
import { firm } from "@/content/firm";
import { primaryAction } from "@/content/navigation";

/** Closing band on every page — the one place contact is invited outright. */
export function CtaBand({
  eyebrow = "Discuss a Mandate",
  lines = ["Tell Us Where the", "Business Stands."],
  body = "A short conversation is usually enough to tell whether we can help, and what kind of capital would suit. There is no obligation, and nothing is billed for it.",
}: {
  eyebrow?: string;
  lines?: readonly string[];
  body?: string;
}) {
  return (
    <section className="bg-brand text-warm">
      <div className="container-house grid gap-10 py-18 md:grid-cols-[1.3fr_1fr] md:items-end md:py-22">
        <div data-reveal>
          <p className="eyebrow text-warm/90">{eyebrow}</p>
          <h2 className="display mt-5 text-warm">
            {lines.map((l, i) => (
              <span key={i} className="md:block">
                {l}{" "}
              </span>
            ))}
          </h2>
          <p className="lede mt-6 max-w-[52ch] text-warm/95">{body}</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end" data-reveal>
          <Link
            href={primaryAction.href}
            className="rounded-full bg-warm px-7 py-3.5 font-display text-[15px] font-medium text-brand-deep transition-colors duration-200 hover:bg-white"
          >
            {primaryAction.label}
          </Link>
          <a href={firm.phone.href} className="text-[14px] text-warm/90 hover:text-warm">
            or call {firm.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
