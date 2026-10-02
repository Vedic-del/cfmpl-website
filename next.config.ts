import path from "node:path";
import type { NextConfig } from "next";

/**
 * Built as a static site: every page is pre-rendered to plain HTML at build
 * time, so it can be hosted for free on GitHub Pages with no server.
 *
 * NEXT_PUBLIC_BASE_PATH is set by the deploy workflow when the site is served
 * from a sub-path (e.g. /cfmpl-website on github.io). It is empty locally and
 * on a custom domain.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  // This app sits inside another project's folder; keep Turbopack scoped to it.
  turbopack: { root: path.join(__dirname) },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    qualities: [70, 75, 85],
  },
  poweredByHeader: false,
};

export default nextConfig;
