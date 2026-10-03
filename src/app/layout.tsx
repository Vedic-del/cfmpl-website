import type { Metadata, Viewport } from "next";
import { Figtree, Spline_Sans } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { UtilityBar } from "@/components/UtilityBar";
import { firm } from "@/content/firm";
import { isPreview } from "@/lib/site";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const spline = Spline_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-spline",
  display: "swap",
});


/**
 * Content Security Policy, delivered as a meta tag because GitHub Pages does not
 * allow custom response headers. Production only: the development server needs
 * eval and websockets for hot reload.
 *
 * - scripts and styles: this origin only. 'unsafe-inline' is required because a
 *   static Next.js export bootstraps with inline scripts and the design uses
 *   inline style variables; no third-party script origin is permitted.
 * - images: this origin plus Unsplash's CDN, which serves the photography.
 * - no plugins, no frames, no form posts off-site, no foreign <base>.
 * frame-ancestors cannot be set from a meta tag (browsers ignore it there).
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' https://images.unsplash.com data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const description =
  "Finding the right capital for Indian businesses since 1991: debt raising, syndication and restructuring, IPO and SME IPO advisory and stressed asset advisory. SEBI Category I Merchant Banker, Mumbai.";

export const metadata: Metadata = {
  metadataBase: new URL(firm.url),
  title: {
    default: `${firm.legalName} | Transaction Advisory & Equity Capital Markets, Mumbai`,
    template: `%s | ${firm.shortName}`,
  },
  description,
  applicationName: firm.legalName,
  openGraph: {
    type: "website",
    siteName: firm.legalName,
    locale: "en_IN",
    title: firm.legalName,
    description,
  },
  twitter: { card: "summary_large_image", title: firm.legalName, description },
  alternates: { canonical: "/" },
  formatDetection: { telephone: false },
  referrer: "strict-origin-when-cross-origin",
  // Preview builds are never indexed. See src/lib/site.ts.
  ...(isPreview ? { robots: { index: false, follow: false, nocache: true } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#f9f8f6",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: firm.legalName,
  alternateName: [firm.shortName, "CFMPL", firm.formerName],
  url: firm.url,
  email: firm.email.general,
  telephone: firm.phone.display,
  foundingDate: String(firm.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, Wakefield House, Sprott Road, Ballard Estate",
    addressLocality: "Mumbai",
    postalCode: "400038",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "IN",
  knowsAbout: ["Merchant banking", "Equity capital markets", "Debt syndication", "Debt restructuring", "Stressed asset resolution advisory"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${figtree.variable} ${spline.variable}`}>
      <head>
        {process.env.NODE_ENV === "production" ? <meta httpEquiv="Content-Security-Policy" content={csp} /> : null}
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only z-50 bg-brand px-4 py-3 font-display text-[14px] text-warm focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <UtilityBar />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <MotionProvider />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
