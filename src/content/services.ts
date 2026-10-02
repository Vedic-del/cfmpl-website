/**
 * The three practices. CFMPL advises on stressed-asset resolution — it does not
 * acquire or resolve assets. That work belongs to CFM ARC, a separate company.
 */

export type Offering = {
  title: string;
  body: string;
  points?: readonly string[];
  pointsLabel?: string;
};

export type Practice = {
  slug: string;
  index: string;
  name: string;
  short: string;
  eyebrow: string;
  headline: readonly string[];
  lede: string;
  regulated: boolean;
  offerings: readonly Offering[];
  summaryLinks: readonly string[];
};

export const practices: readonly Practice[] = [
  {
    slug: "investment-banking",
    index: "01",
    name: "Investment Banking",
    short:
      "Merchant banking and equity capital markets, and private equity advisory connecting large, mid-size and SME enterprises with institutional and individual investors. Due diligence precedes every engagement we accept.",
    eyebrow: "Investment Banking",
    headline: ["Equity Capital,", "Raised on Diligence", "Done First."],
    lede:
      "We help companies raise equity through the capital markets and from private investors. Every engagement begins with our own due diligence — before we accept a mandate, not after.",
    regulated: true,
    offerings: [
      {
        title: "Merchant Banking & Equity Capital Markets",
        body:
          "Fundraising through the equity and capital markets for companies across sectors, drawing on sector understanding, regulatory expertise and financial structuring. Undertaken under CFMPL's SEBI Category I registration.",
        pointsLabel: "Mandates we act on",
        points: [
          "IPOs and FPOs, including offers for sale",
          "SME IPOs and FPOs",
          "Rights issues",
          "Qualified institutional placements",
          "Preferential issues",
          "Buyback of securities",
          "Delisting of equity shares",
          "Substantial acquisition of shares and takeovers",
          "Public issues of debt securities",
          "Private placement of non-convertible securities",
          "Non-convertible redeemable preference shares",
        ],
      },
      {
        title: "Private Equity Advisory",
        body:
          "We connect large, mid-size and SME enterprises with institutional and individual private equity investors — and work on both sides of the table: sourcing and evaluating opportunities, then executing the investment and, in time, the exit.",
        pointsLabel: "Across the investment cycle",
        points: ["Sourcing opportunities", "Evaluating investments", "Executing the investment", "Executing the exit"],
      },
    ],
    summaryLinks: ["Merchant Banking & ECM", "Private Equity Advisory"],
  },
  {
    slug: "corporate-advisory",
    index: "02",
    name: "Corporate Advisory",
    short:
      "Debt syndication and restructuring across domestic banks, international banks, NBFCs and other institutions — project finance, working capital, corporate bonds, ECBs, FCCBs and ECA-backed structures.",
    eyebrow: "Corporate Advisory",
    headline: ["Debt, Structured for", "the Business You Run."],
    lede:
      "We arrange debt for large and mid-size Indian corporates from local banks, international banks, NBFCs and other financial institutions — and when a balance sheet needs rebuilding first, we restructure it.",
    regulated: false,
    offerings: [
      {
        title: "Debt Syndication",
        body:
          "Structuring the right financing for what a company needs, then placing it with the lenders best suited to hold it.",
        pointsLabel: "What we arrange",
        points: [
          "Greenfield project finance",
          "Brownfield project finance",
          "Wholesale corporate debt",
          "Rupee term loans",
          "Working capital funding",
          "Corporate bonds",
          "External commercial borrowings (ECBs)",
          "Foreign currency convertible bonds (FCCBs)",
          "ECA-backed financing",
        ],
      },
      {
        title: "Debt Restructuring",
        body:
          "When the capital structure itself is the problem, new money is not the first answer. We advise on restructuring the debt and the balance sheet so the business can be financed again.",
        pointsLabel: "Scope",
        points: [
          "Business advisory",
          "Corporate debt restructuring",
          "Balance-sheet restructuring",
          "Corporate finance transactions",
        ],
      },
    ],
    summaryLinks: ["Debt Syndication", "Debt Restructuring"],
  },
  {
    slug: "stressed-asset-resolution-advisory",
    index: "03",
    name: "Stressed Asset Resolution Advisory",
    short:
      "Assessment, structuring and resolution strategy on stressed and non-performing exposures. CFMPL advises on resolution. It does not acquire assets.",
    eyebrow: "Stressed Asset Resolution Advisory",
    headline: ["Stress Is a Stage", "in the Cycle,", "Not the End of It."],
    lede:
      "Stress arises from shifts in a company's own policies and from slowdowns in the wider economy. We advise companies and lenders on stressed and non-performing exposures — assessing the stress, identifying a viable path to resolution, and structuring it.",
    regulated: false,
    offerings: [
      {
        title: "Resolution Advisory",
        body:
          "An objective assessment of a stressed exposure against stress and sustainability parameters, followed by advice on the resolution path that serves the lending banks, the company and its stakeholders.",
        pointsLabel: "What the advice covers",
        points: [
          "Assessment of the stressed exposure",
          "Stress and sustainability analysis",
          "Resolution strategy",
          "Structuring the resolution",
        ],
      },
    ],
    summaryLinks: ["Resolution Advisory", "Sponsor, CFM ARC"],
  },
] as const;

export function getPractice(slug: string) {
  return practices.find((p) => p.slug === slug);
}

// FLAG: wording modelled on SBI Capital Markets' disclosure; compliance officer to confirm.
export const regulatoryNote =
  "Merchant banking and equity capital markets activities are undertaken under CFMPL's SEBI Category I registration. Debt syndication, debt restructuring and stressed-asset resolution advisory are non-SEBI-regulated activities, and SEBI's investor protection mechanisms do not extend to them.";

export const sponsorNote =
  "CFMPL is the sponsor of CFM Asset Reconstruction Private Limited — a separate company, registered with the Reserve Bank of India as an asset reconstruction company under the SARFAESI Act, 2002, which acquires and resolves stressed financial assets.";

/**
 * Self-qualification. Every situation below is drawn from work the firm has
 * actually done — the HAM financings, the rating presentation, the Tier II
 * raise, the restructuring practice — so none of it is invented.
 */
export const whenToCall = [
  "You have won work you cannot yet finance.",
  "Your credit rating is standing between you and the money.",
  "Lenders have declined, and you want to know why before you ask again.",
  "The balance sheet needs restructuring before it can carry new debt.",
  "You are raising equity and want the diligence done before you go to market.",
  "An exposure has gone bad and you need a route out of it.",
] as const;

export const whenToCallNote =
  "If the market will not take a transaction, our process is built to find that out before you sign anything. It is why steps six and seven are in that order.";
