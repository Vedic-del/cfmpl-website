"use client";

import Link from "next/link";
import { useEffect } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Forwarding page for an address that has moved. GitHub Pages cannot send
 * server redirects, so the old address serves this page: a refresh tag for
 * browsers without script, an immediate client redirect, and a plain link.
 */
export function Redirect({ to, label }: { to: string; label: string }) {
  const href = `${basePath}${to}`;
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <meta name="robots" content="noindex" />
      <section className="container-house py-28">
        <h1 className="display">This page has moved</h1>
        <p className="lede mt-6 text-grey">
          It is now part of <Link href={to} className="text-brand-deep underline underline-offset-4">{label}</Link>.
        </p>
      </section>
    </>
  );
}
