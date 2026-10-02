import type { MetadataRoute } from "next";
import { firm } from "@/content/firm";
import { aiSearchCrawlers, aiTrainingCrawlers, allowAiTraining, isPreview } from "@/lib/site";

export const dynamic = "force-static";

// Gated, India-only regulatory material. Also noindexed at page level.
const gated = ["/regulatory/offer-documents/", "/regulatory/public-issues-track-record/"];

export default function robots(): MetadataRoute.Robots {
  if (isPreview) {
    // Preview build: keep every crawler out. Pages also carry a noindex tag.
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: [
      // Search engines (Googlebot, Bingbot, Applebot, DuckDuckBot and others).
      { userAgent: "*", allow: "/", disallow: gated },
      // AI search and answer engines: cite and link back, so allowed.
      { userAgent: [...aiSearchCrawlers], allow: "/", disallow: gated },
      // AI model training: governed separately — see src/lib/site.ts.
      allowAiTraining
        ? { userAgent: [...aiTrainingCrawlers], allow: "/", disallow: gated }
        : { userAgent: [...aiTrainingCrawlers], disallow: "/" },
    ],
    sitemap: new URL("/sitemap.xml", firm.url).toString(),
  };
}
