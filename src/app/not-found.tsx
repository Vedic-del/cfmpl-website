import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="bg-deep text-warm">
      <div className="container-house py-24 md:py-32">
        <p className="eyebrow text-brand-light">Error 404</p>
        <h1 className="display mt-5 text-brand-light">Page Not Found</h1>
        <p className="lede mt-6 max-w-[52ch] text-warm/80">
          The page you are looking for does not exist, or has moved since the website was rebuilt.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full bg-brand px-6 py-3 font-display text-[14px] font-medium text-warm transition-colors duration-200 hover:bg-brand-deep"
          >
            Go to the home page
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-warm/30 px-6 py-3 font-display text-[14px] text-warm transition-colors duration-200 hover:border-warm/60"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
