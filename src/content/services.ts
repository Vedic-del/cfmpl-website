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
};

export type Practice = {
  /** Also the anchor of the practice's section on the Services page. */
  slug: string;
  name: string;
  /** One-word label shown above the name. */
  tag: string;
  /** One line, used on the home page cards. */
  summary: string;
  /** Who the service is for. */
  forWhom: string;
  intro: string;
  regulated: boolean;
  offerings: readonly Offering[];
};

export const practices: readonly Practice[] = [
  {
    slug: "investment-banking",
    tag: "Equity",
    name: "Investment Banking",
    summary: "Public issues, capital markets transactions and private equity.",
    forWhom: "Large and mid-size companies, SMEs, entrepreneurs and private equity investors.",
    intro:
      "We raise equity for companies, from the public markets or from private investors. Our merchant banking work is carried out under our SEBI Category I registration, and we complete our own due diligence before we take on a mandate.",
    regulated: true,
    offerings: [
      {
        title: "Merchant Banking and Equity Capital Markets",
        body: "We advise on public issues and other capital markets transactions and manage them through the regulatory process.",
        role: "Lead manager or book running lead manager on public issues; adviser on other transactions.",
        points: [
          "IPOs and FPOs, including offers for sale",
          "SME IPOs and FPOs",
          "Rights issues",
          "Qualified institutional placements",
          "Preferential issues",
          "Buybacks",
          "Delisting of equity shares",
          "Substantial acquisitions and takeovers",
          "Public issues of debt securities",
          "Private placements of non-convertible securities",
          "Non-convertible redeemable preference shares",
        ],
      },
      {
        title: "Private Equity Advisory",
        body: "We bring together companies, large, mid-size and SME, with institutional and individual investors.",
        role: "Adviser across the whole investment: sourcing, assessment, completion and exit.",
        points: ["Sourcing opportunities", "Assessment", "Completing the investment", "Planning and completing the exit"],
      },
    ],
  },
  {
    slug: "corporate-advisory",
    tag: "Debt",
    name: "Corporate Advisory",
    summary: "Debt syndication from banks, NBFCs and institutions, and debt restructuring.",
    forWhom: "Large and mid-size Indian companies raising debt or restructuring it.",
    intro:
      "Debt is where the firm began in 1991. We raise loans and other debt from Indian and international banks, NBFCs and financial institutions, and restructure debt that no longer fits the business.",
    regulated: false,
    offerings: [
      {
        title: "Debt Syndication",
        body: "We work out the right type and structure of debt, then take it to the lenders most likely to provide it.",
        role: "We structure the financing, prepare the lender materials, approach lenders and stay with the company to sanction and disbursal.",
        points: [
          "Project finance, greenfield and brownfield",
          "Corporate and rupee term loans",
          "Working capital",
          "Corporate bonds",
          "External commercial borrowings (ECBs)",
          "Foreign currency convertible bonds (FCCBs)",
          "Export credit agency (ECA) backed finance",
        ],
      },
      {
        title: "Debt Restructuring",
        body: "When debt no longer fits a company's cash flows, the answer is often to change its terms or the balance sheet, not to borrow more.",
        role: "Adviser to the company on restructuring its debt and balance sheet, and on related transactions.",
        points: ["Business advisory", "Corporate debt restructuring", "Balance-sheet restructuring", "Related corporate finance transactions"],
      },
    ],
  },
  {
    slug: "stressed-asset-resolution-advisory",
    tag: "Stressed Assets",
    name: "Stressed Asset Resolution Advisory",
    summary: "Advice to companies and lenders on resolving stressed and non-performing loans.",
    forWhom: "Companies with stressed borrowings, and the banks and institutions that lent to them.",
    intro:
      "We advise companies and lenders on loans that have become stressed: what the business behind the loan can still support, and which resolution serves the lenders, the company and its other stakeholders.",
    regulated: false,
    offerings: [
      {
        title: "Resolution Advisory",
        body: "We assess the loan and the business behind it, test whether the business can recover, and advise on the resolution.",
        role: "Adviser only. CFMPL does not buy stressed loans; acquiring and resolving them is the business of CFM Asset Reconstruction, a separate company.",
        points: ["Assessment of the stressed loan", "Review of the business and its prospects", "Resolution options", "Structuring the resolution"],
      },
    ],
  },
] as const;

/** Disclosure of which activities are, and are not, regulated by SEBI. */
export const regulatoryNote =
  "CFMPL's merchant banking and equity capital markets activities are carried out under its SEBI Category I registration. Its debt syndication, debt restructuring and stressed-asset resolution advisory activities are not regulated by SEBI, and SEBI's investor protection mechanisms do not apply to them.";

export const sponsorNote =
  "CFMPL is the sponsor of CFM Asset Reconstruction Private Limited, a separate company registered with the Reserve Bank of India as an asset reconstruction company under the SARFAESI Act, 2002. CFM ARC acquires and resolves stressed financial assets; CFMPL does not.";
