import Link from "next/link";
import { firm } from "@/content/firm";
import { primaryAction } from "@/content/navigation";

/** Closing band on most pages. States how to get in touch — no promises about terms or timing. */
export function CtaBand({
  title = "Have a mandate in mind?",
  body = "Call our Mumbai office or write to us.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand text-warm">
      <div className="container-house grid gap-10 py-18 md:grid-cols-[1.3fr_1fr] md:items-end md:py-22">
        <div data-reveal>
          <h2 className="display-lg max-w-[16ch] text-warm">{title}</h2>
          <p className="lede mt-5 max-w-[52ch] text-warm/90">{body}</p>
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
