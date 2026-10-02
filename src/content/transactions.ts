/**
 * Selected transactions and case studies, from the "Past Work" section of cfml.in.
 * Client names are withheld on the current site; they stay withheld here.
 */

export type Tombstone = {
  role: string;
  client: string;
  value: string;
  instrument: string;
  // FLAG: transaction dates are not stated on the current site.
  date: string | null;
};

export const tombstones: readonly Tombstone[] = [
  {
    role: "Debt Syndication",
    client: "Road EPC and HAM developer — Delhi–Mumbai Expressway corridor",
    value: "₹710 cr",
    instrument: "Hybrid Annuity Model project financing",
    date: null,
  },
  {
    role: "Debt Syndication",
    client: "Road EPC and HAM developer — second NHAI award",
    value: "₹480 cr",
    instrument: "Hybrid Annuity Model project financing",
    date: null,
  },
  {
    role: "Debt Capital Markets",
    client: "Indian private-sector bank, infrastructure finance focus",
    value: "₹1,000 cr",
    instrument: "Basel III-compliant Tier II bonds",
    date: null,
  },
] as const;

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  headline: readonly string[];
  value: string;
  valueNote: string;
  client: string;
  obstacles: readonly string[];
  actions: readonly string[];
  outcome: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "expressway-ham",
    eyebrow: "Roads · Hybrid Annuity Model",
    headline: ["Two Expressway Projects,", "Financed Against", "Every Objection."],
    value: "₹1,190 cr",
    valueNote: "₹480 crore and ₹710 crore, across two newly awarded HAM projects",
    client:
      "A road-construction business operating since 2005, with a regional EPC record on state road projects for the PWD and MSRDC in Gujarat and Maharashtra, then moving into National Highway construction under NHAI's Hybrid Annuity Model.",
    obstacles: [
      "Project sizes and costs well beyond anything the company had delivered before",
      "A limited track record with NHAI",
      "A credit rating below the A category",
      "Bankers reluctant to lend, and wider concern about the roads sector",
      "A slowdown brought on by COVID-19",
    ],
    actions: [
      "Structured funding of ₹480 crore and ₹710 crore for two newly awarded HAM projects on the Delhi–Mumbai Expressway corridor",
      "Built the case around the company's genuine strengths rather than around its gaps",
      "Answered each banker's concern with a specific mitigant in the deal structure",
      "Arranged the funding tie-ups",
      "Guided the company's CRISIL rating presentation, and helped build the case for an upgrade on its improved credit profile and demonstrated execution",
    ],
    outcome:
      "Both projects were funded. The company entered the National Highway segment with its financing in place, and with a stronger case for its credit rating than it began with.",
  },
  {
    slug: "tier-ii-bonds",
    eyebrow: "Banking · Basel III Capital",
    headline: ["A ₹1,000 Crore", "Tier II Raise for a", "Young Bank."],
    value: "₹1,000 cr",
    valueNote: "Basel III-compliant Tier II bonds",
    client:
      "An Indian private-sector bank operating since 2014, focused on infrastructure finance under RBI guidelines.",
    obstacles: ["Capital to be raised through the post-COVID recovery period"],
    actions: [
      "Structured the ₹1,000 crore raise through Basel III-compliant Tier II bonds",
      "Assisted with the required documentation",
      "Referred eligible investors",
      "Coordinated with the bank throughout, tracking progress and clearing bottlenecks",
      "Advised the bank on stressed-asset resolution alongside the raise",
    ],
    outcome:
      "The Tier II capital was raised, and the relationship continued into advisory work on stressed-asset resolution through the recovery period.",
  },
] as const;
