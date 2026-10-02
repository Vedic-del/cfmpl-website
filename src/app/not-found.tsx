import Link from "next/link";
import { ProcessDiagram } from "@/components/ProcessDiagram";

export default function NotFound() {
  return (
    <section className="bg-deep text-warm">
      <div className="container-house grid items-center gap-12 py-24 md:py-32 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow text-brand-light">404</p>
          <h1 className="display mt-5 text-brand-light">
            <span className="md:block">This Page Has</span> <span className="md:block">Been Restructured.</span>
          </h1>
          <p className="lede mt-6 max-w-[52ch] text-warm/70">
            The address you followed does not exist on this site. It may have moved when we rebuilt it.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-full bg-brand px-6 py-3 font-display text-[14px] font-medium text-warm transition-colors duration-200 hover:bg-brand-deep"
            >
              Back to the home page
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-warm/25 px-6 py-3 font-display text-[14px] text-warm transition-colors duration-200 hover:border-warm/60"
            >
              Discuss a mandate
            </Link>
          </div>
        </div>
        <ProcessDiagram className="mx-auto w-full max-w-[280px]" />
      </div>
    </section>
  );
}
