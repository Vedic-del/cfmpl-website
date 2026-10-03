"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { primaryAction, primaryNav } from "@/content/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    // Deferred so the first paint isn't a cascading render.
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the menu when the route changes — adjusted during render, not in an effect.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    if (open) setOpen(false);
  }

  // Lock page scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open ? "border-line bg-warm/95 backdrop-blur-md" : "border-transparent bg-warm/90 backdrop-blur-sm"
      }`}
    >
      {/* Reading progress, driven by CSS scroll timelines where supported. */}
      <span aria-hidden="true" className="scroll-progress absolute inset-x-0 -bottom-px hidden h-[2px] bg-brand" />
      <div className="container-house flex h-18 items-center justify-between gap-6 md:h-20">
        <Logo className="h-10 w-auto md:h-12" />

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-8 font-display text-[14px]">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative py-2 transition-colors duration-200 hover:text-brand ${
                    isActive(item.href) ? "text-brand" : "text-ink"
                  } after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-brand after:transition-transform after:duration-300 ${
                    isActive(item.href) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={primaryAction.href}
            className="hidden rounded-full bg-brand px-5 py-2.5 font-display text-[14px] font-medium text-warm transition-colors duration-200 hover:bg-brand-deep sm:inline-block"
          >
            {primaryAction.label}
          </Link>
          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto border-t border-line bg-warm md:top-20 xl:hidden"
      >
        <nav aria-label="Mobile" className="container-house py-8">
          <ul className="divide-y divide-line border-y border-line">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between py-5 font-display text-2xl ${isActive(item.href) ? "text-brand" : "text-ink"}`}
                >
                  {item.label}
                  <span aria-hidden="true" className="text-brand">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={primaryAction.href}
            className="mt-8 inline-block rounded-full bg-brand px-6 py-3.5 font-display text-[15px] font-medium text-warm"
          >
            {primaryAction.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
