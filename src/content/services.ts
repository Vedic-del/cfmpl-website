/**
 * The firm's services. Source: cfml.in Services page and home page.
 *
 * CFMPL advises on stressed-asset resolution. It does not acquire or resolve
 * assets itself — that is the business of CFM Asset Reconstruction Private
 * Limited, a separate RBI-registered company that CFMPL sponsors.
 */

export type Offering = {
  title: string;
  body: string;
  role: string;
  points?: readonly string[];
  pointsLabel?: string;
};

export type Practice = {
  slug: string;
  name: string;
  /** Page title and meta title. */
  seoTitle: string;
  /** One-line summary used on cards and in meta descriptions. */
  summary: string;
  /** Who the service is for — used on the service page. */
  forWhom: string;
  intro: string;
  regulated: boolean;
  offerings: readonly Offering[];
  cardLinks: readonly string[];
};

export const practices: readonly Practice[] = [
  {
    slug: "investment-banking",
    name: "Investment Banking",
    seoTitle: "Investment Banking & Equity Capital Markets",
    summary:
      "Raising equity through public issues and other capital markets transactions, and private equity advisory for companies and investors.",
    forWhom: "Large and mid-size companies, SMEs and entrepreneurs raising equity, and private equity investors.",
    intro:
      "We help companies raise equity, either from the public through the capital markets or privately from investors. Our merchant banking work is carried out under our SEBI Category I registration, and we carry out our own due diligence on a company before we take on a mandate.",
    regulated: true,
    offerings: [
      {
        title: "Merchant Banking and Equity Capital Markets",
        body:
          "Equity capital markets are where companies raise money by issuing shares to the public or to institutions. We advise companies on these transactions and manage them through the regulatory process.",
        role: "We act as lead manager or book running lead manager on public issues, and as adviser on other capital markets transactions.",
        pointsLabel: "Transactions we handle",
        points: [
          "Initial and follow-on public offers (IPOs and FPOs), including offers for sale",
          "SME IPOs and FPOs",
          "Rights issues",
          "Qualified institutional placements (QIPs)",
          "Preferential issues",
          "Buybacks of securities",
          "Delisting of equity shares",
          "Substantial acquisitions of shares and takeovers",
          "Public issues of debt securities",
          "Private placements of non-convertible securities",
          "Non-convertible redeemable preference shares",
        ],
      },
      {
        title: "Private Equity Advisory",
        body:
          "Private equity is investment in a company by a fund or private investor, usually in exchange for a share of ownership. We bring together companies — large, mid-size and SME — with institutional and individual investors.",
        role: "We advise on the whole investment: finding and assessing opportunities, completing the investment and, later, the investor's exit.",
        pointsLabel: "What we cover",
        points: ["Finding investment opportunities", "Assessing them", "Completing the investment", "Planning and completing the exit"],
      },
    ],
    cardLinks: ["Merchant banking and capital markets", "Private equity advisory"],
  },
  {
    slug: "corporate-advisory",
    name: "Corporate Advisory",
    seoTitle: "Corporate Advisory, Debt Syndication & Restructuring",
    summary:
      "Arranging loans and other debt from banks, NBFCs and financial institutions, and restructuring existing debt.",
    forWhom: "Large and mid-size Indian companies that need debt finance or need to restructure their borrowings.",
    intro:
      "Debt has been part of our work since 1991, when the firm began by arranging loans. We help large and mid-size Indian companies raise loans and other debt from Indian and international banks, NBFCs and other financial institutions, and we help companies restructure debt they already have.",
    regulated: false,
    offerings: [
      {
        title: "Debt Syndication",
        body:
          "Debt syndication means arranging finance from one or more lenders for a single company or project. We work out the right type and structure of debt for the company's needs, and then approach the lenders most likely to provide it.",
        role: "We structure the financing, prepare the information lenders need, approach suitable lenders and support the company through to sanction and disbursal.",
        pointsLabel: "Types of finance we arrange",
        points: [
          "Project finance for new (greenfield) and expansion (brownfield) projects",
          "Corporate loans and rupee term loans",
          "Working capital finance",
          "Corporate bonds",
          "External commercial borrowings (ECBs) — loans from overseas lenders",
          "Foreign currency convertible bonds (FCCBs) — bonds issued abroad that can convert into shares",
          "Export credit agency (ECA) backed finance — loans supported by an overseas government's export credit agency",
        ],
      },
      {
        title: "Debt Restructuring",
        body:
          "When a company's existing debt no longer fits its cash flows, the answer is often to change the terms of the debt or the structure of the balance sheet, rather than to borrow more.",
        role: "We advise the company on restructuring its debt and balance sheet, and on related corporate finance transactions.",
        pointsLabel: "What we cover",
        points: ["Business advisory", "Corporate debt restructuring", "Balance-sheet restructuring", "Related corporate finance transactions"],
      },
    ],
    cardLinks: ["Debt syndication", "Debt restructuring"],
  },
  {
    slug: "stressed-asset-resolution-advisory",
    name: "Stressed Asset Resolution Advisory",
    seoTitle: "Stressed Asset Resolution Advisory",
    summary:
      "Advice to companies and lenders on loans that have become stressed or non-performing, and how to resolve them.",
    forWhom: "Companies with stressed borrowings, and the banks and financial institutions that have lent to them.",
    intro:
      "A loan becomes stressed when a company struggles to repay it — because of changes inside the business or a wider economic slowdown. We advise companies and lenders on how such loans can be resolved.",
    regulated: false,
    offerings: [
      {
        title: "Resolution Advisory",
        body:
          "We assess the stressed loan and the business behind it, test whether the business can recover, and advise on the resolution that works best for the lenders, the company and its other stakeholders.",
        role: "We act as adviser. CFMPL does not buy stressed loans. Acquiring and resolving stressed assets is the business of CFM Asset Reconstruction, a separate company.",
        pointsLabel: "What the advice covers",
        points: ["Assessment of the stressed loan", "Review of the business and its ability to recover", "Resolution options", "Structuring the resolution"],
      },
    ],
    cardLinks: ["Resolution advisory", "Our relationship with CFM ARC"],
  },
] as const;

export function getPractice(slug: string) {
  return practices.find((p) => p.slug === slug);
}

/** Disclosure of which activities are, and are not, regulated by SEBI. */
export const regulatoryNote =
  "CFMPL's merchant banking and equity capital markets activities are carried out under its SEBI Category I registration. Its debt syndication, debt restructuring and stressed-asset resolution advisory activities are not regulated by SEBI, and SEBI's investor protection mechanisms do not apply to them.";

export const sponsorNote =
  "CFMPL is the sponsor of CFM Asset Reconstruction Private Limited, a separate company registered with the Reserve Bank of India as an asset reconstruction company under the SARFAESI Act, 2002. CFM ARC acquires and resolves stressed financial assets; CFMPL does not.";

/**
 * Situations in which companies typically approach the firm. Each is drawn
 * from work described on cfml.in — the HAM financings, the credit rating
 * presentation, the Tier II raise and the restructuring practice.
 */
export const whenToCall = [
  "You have won a project and need to arrange the finance for it.",
  "Your credit rating is making it harder to borrow.",
  "Lenders have turned down your proposal and you want to understand why before you approach them again.",
  "Your existing debt needs restructuring before the business can take on more.",
  "You are planning to raise equity, publicly or privately.",
  "A loan has become stressed and you need advice on how to resolve it.",
] as const;
