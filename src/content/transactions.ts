/**
 * Selected transactions, from the "Past Work" case studies on cfml.in.
 * Client names are not disclosed on the current site; they stay undisclosed.
 *
 * The two case studies cover three financings: tiles on the home page, full
 * write-ups on the Services page.
 */

export type Tombstone = {
  role: string;
  client: string;
  value: string;
  instrument: string;
  /** Anchor of the full write-up on the Services page. */
  caseSlug: string;
};

export const tombstones: readonly Tombstone[] = [
  {
    role: "Debt Syndication",
    client: "Road construction company — Delhi–Mumbai Expressway corridor",
    value: "₹710 crore",
    instrument: "Project finance for a Hybrid Annuity Model highway project",
    caseSlug: "highway-projects",
  },
  {
    role: "Debt Syndication",
    client: "Road construction company — second NHAI project",
    value: "₹480 crore",
    instrument: "Project finance for a Hybrid Annuity Model highway project",
    caseSlug: "highway-projects",
  },
  {
    role: "Debt Capital Markets",
    client: "Indian private-sector bank focused on infrastructure finance",
    value: "₹1,000 crore",
    instrument: "Basel III-compliant Tier II bonds",
    caseSlug: "tier-ii-bonds",
  },
] as const;

export type CaseStudy = {
  slug: string;
  type: string;
  title: string;
  value: string;
  valueNote: string;
  client: string;
  /** Plain explanation of a specialist term, where the case needs one. */
  explainer?: string;
  challenges: readonly string[];
  role: readonly string[];
  result: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "highway-projects",
    type: "Debt syndication · Roads",
    title: "Funding for Two Highway Projects",
    value: "₹1,190 crore",
    valueNote: "₹710 crore and ₹480 crore, for two newly awarded projects",
    client:
      "A road construction company operating since 2005. It had built state road projects for the PWD and MSRDC in Gujarat and Maharashtra before winning its first National Highway projects from NHAI, on the Delhi–Mumbai Expressway corridor.",
    explainer:
      "Under NHAI's Hybrid Annuity Model (HAM), the contractor raises debt for its share of the construction cost and is repaid in annuities after completion.",
    challenges: [
      "The projects were much larger than any the company had built before.",
      "It had a limited track record with NHAI.",
      "Its credit rating was below the A category.",
      "Banks were cautious about lending to the roads sector.",
      "The economic slowdown caused by COVID-19.",
    ],
    role: [
      "Structured funding of ₹710 crore and ₹480 crore for the two projects.",
      "Presented the company's strengths to lenders.",
      "Addressed each lender's concerns through specific features of the deal structure.",
      "Arranged the funding tie-ups with lenders.",
      "Advised the company on its presentation to CRISIL and helped it make the case for a rating upgrade based on its improved credit profile and execution record.",
    ],
    result: "Funding tie-ups were arranged for both projects.",
  },
  {
    slug: "tier-ii-bonds",
    type: "Debt capital markets · Banking",
    title: "Tier II Bonds for a Private-Sector Bank",
    value: "₹1,000 crore",
    valueNote: "Basel III-compliant Tier II bonds",
    client: "An Indian private-sector bank, operating since 2014, focused on infrastructure finance under RBI guidelines.",
    challenges: ["The funding was raised during the recovery period after COVID-19."],
    role: [
      "Structured ₹1,000 crore of funding through Basel III-compliant Tier II bonds.",
      "Assisted with the required documentation.",
      "Introduced eligible investors.",
      "Worked closely with the bank throughout, tracking progress and resolving bottlenecks.",
      "Also advised the bank on stressed-asset resolution.",
    ],
    result: "CFM continued to work with the bank through the post-COVID recovery period, including on stressed-asset resolution.",
  },
] as const;
