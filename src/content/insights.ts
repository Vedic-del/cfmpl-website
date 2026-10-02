/**
 * Insights. Ships empty by design: no article is published until the firm has
 * written it. The index page renders a composed empty state.
 *
 * To publish, add an entry here and a page under src/app/insights/[slug].
 */

export type Insight = {
  slug: string;
  date: string; // ISO yyyy-mm-dd
  title: string;
  summary: string;
  topic: "Project finance" | "Debt markets" | "Capital markets" | "Restructuring" | "Policy";
};

export const insights: readonly Insight[] = [];

export const insightsIntro = {
  eyebrow: "Insights",
  headline: ["What Lenders Are", "Underwriting Now."],
  lede:
    "Project finance, syndication markets, restructuring, and what lenders are willing to underwrite this quarter — from the people arranging it.",
} as const;
