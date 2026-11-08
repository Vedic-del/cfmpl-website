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
        <div>
          <h2 className="display max-w-[16ch] text-warm">{title}</h2>
          <p className="lede mt-5 max-w-[52ch] text-warm/90">{body}</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Link href={primaryAction.href} className="btn btn--light">
            {primaryAction.label}
          </Link>
          <a href={firm.phone.href} className="link-draw inline-flex min-h-11 items-center text-[14px] text-warm">
            or call {firm.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
