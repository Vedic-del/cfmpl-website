/**
 * Key transactions and notable clients, from the firm's Corporate Profile
 * (July 2026). Deal sizes are in USD million as of the date of mandate or
 * sanction, as the profile states them. The CFM ARC pages of the profile are
 * not used here: CFM ARC is a separate company.
 */

export type KeyTransaction = {
  client: string;
  nature: string;
  /** USD million, as of the date of mandate or sanction. */
  usdMn: number;
};

const list: readonly KeyTransaction[] = [
  { client: "The Maharashtra State Co-operative Cotton Growers Marketing Federation Ltd", nature: "Working capital term loan syndication", usdMn: 156 },
  { client: "Hiranandani Group", nature: "Term loan syndication", usdMn: 97 },
  { client: "Maharashtra State Electricity Board", nature: "Restructuring of debt and term loan syndication", usdMn: 82 },
  { client: "Government of Maharashtra", nature: "Securitisation of housing loan", usdMn: 60 },
  { client: "Shree Naman Group", nature: "Project loan syndication", usdMn: 60 },
  { client: "Raiaskaran Infrastructure Private Limited", nature: "Project loan syndication", usdMn: 60 },
  { client: "Maharashtra State Road Development Corporation Ltd", nature: "Term loan syndication", usdMn: 40 },
  { client: "Maharashtra Industrial Development Corporation", nature: "Term loan syndication", usdMn: 15 },
  { client: "Kalpataru Limited", nature: "Corporate loan syndication", usdMn: 15 },
  { client: "ECL Finance Limited", nature: "Term loan", usdMn: 20.7 },
  { client: "JM Financial Credit Solutions Limited", nature: "Credit facilities", usdMn: 69.5 },
  { client: "Muthoot Capital Services Limited", nature: "Term loan", usdMn: 10.8 },
  { client: "Aditya Birla Sun Life AMC Limited", nature: "Secondary sale and placement of bonds", usdMn: 26.41 },
  { client: "Indiabulls Housing Finance Limited", nature: "Term loan: securitisation pool buyout", usdMn: 140.3 },
  { client: "JM Financial Products Limited", nature: "Secured rated listed redeemable NCDs", usdMn: 26.8 },
  { client: "KKR India Asset Finance Limited", nature: "Secured redeemable non-convertible debentures", usdMn: 42.1 },
  { client: "KKR India Asset Finance Limited", nature: "Term loans", usdMn: 98.3 },
  { client: "Simar Port Private Limited", nature: "Project finance term loan", usdMn: 130.72 },
  { client: "Nirmal Goenka Estates Pvt Ltd (Jairaj Ispat Group)", nature: "Lease rental discounting", usdMn: 54.13 },
  { client: "CSL Finance Limited", nature: "Credit facilities", usdMn: 9.5 },
  { client: "Edelweiss Housing Finance Limited", nature: "Credit facilities", usdMn: 65.5 },
  { client: "Indiabulls Commercial Credit Limited", nature: "Credit facilities", usdMn: 67.1 },
  { client: "Tamil Nadu Infrastructure Fund Management Corp Ltd", nature: "Fund raise for corpus", usdMn: 0.6 },
  { client: "Capacit'e Infraprojects Limited", nature: "Renewal and enhancement of credit facilities, including takeover of cash credit limits", usdMn: 28.2 },
  { client: "Sammaan Capital Limited", nature: "Working capital demand loan", usdMn: 28.5 },
  { client: "Jai Raj Ispat Limited", nature: "Term loan", usdMn: 68.8 },
  { client: "JM Financial Credit Solutions Limited", nature: "Term loan", usdMn: 38.9 },
  { client: "IDFC First Bank Limited", nature: "Placement of Basel III compliant Tier II bonds", usdMn: 134.4 },
  { client: "ECL Finance Limited", nature: "Credit facilities", usdMn: 12.1 },
  { client: "ECL Finance Limited", nature: "Credit facilities", usdMn: 25.8 },
  { client: "Jai Raj Ispat Limited", nature: "Working capital credit facilities", usdMn: 31.3 },
];

/** Largest first. */
export const keyTransactions: readonly KeyTransaction[] = [...list].sort((a, b) => b.usdMn - a.usdMn);

const totalMn = list.reduce((s, t) => s + t.usdMn, 0);

/** Totals, computed from the list so they never drift from it. */
export const trackRecord = {
  count: list.length,
  totalMn,
  /** e.g. "USD 1.7 bn" (rounded down to one decimal). */
  totalLabel: `USD ${(Math.floor(totalMn / 100) / 10).toFixed(1)} bn`,
  largestMn: Math.max(...list.map((t) => t.usdMn)),
  note: "Deal sizes in USD million as of the date of mandate or sanction.",
} as const;

export function formatUsdMn(v: number) {
  return `USD ${v.toLocaleString("en-IN", { maximumFractionDigits: 1 })} mn`;
}

export type ClientLogo = { name: string; file: string };

const logo = (name: string, file: string): ClientLogo => ({ name, file: `/images/clients/${file}.webp` });

/** Transaction advisory: notable clients, in the order of the profile. */
export const advisoryClients: readonly ClientLogo[] = [
  logo("The Maharashtra State Co-operative Cotton Growers Marketing Federation", "cotton-federation"),
  logo("Hiranandani Group", "hiranandani"),
  logo("Maharashtra State Electricity Board", "msedcl-mseb"),
  logo("Shree Naman Group", "shree-naman"),
  logo("Government of Maharashtra", "government-of-maharashtra"),
  logo("Maharashtra State Road Development Corporation", "msrdc"),
  logo("Kalpataru Limited", "kalpataru"),
  logo("Raiaskaran Infrastructure", "raiaskaran"),
  logo("Maharashtra Industrial Development Corporation", "midc"),
  logo("Edelweiss (ECL Finance and Edelweiss Housing Finance)", "edelweiss"),
  logo("Indiabulls (Housing Finance and Commercial Credit)", "indiabulls"),
  logo("JM Financial", "jm-financial"),
  logo("Muthoot Capital Services", "muthoot-capital"),
  logo("Aditya Birla Sun Life AMC", "aditya-birla"),
  logo("IDFC First Bank", "idfc-first"),
  logo("Jai Raj Ispat", "jai-raj"),
  logo("CSL Finance", "csl-finance"),
  logo("Tamil Nadu Infrastructure Fund Management Corporation", "tnifmc"),
  logo("Capacit'e Infraprojects", "capacite"),
  logo("LIC Housing Finance", "lic-hfl"),
  logo("KKR India Asset Finance", "kkr"),
  logo("Sammaan Capital", "sammaan"),
  logo("Piramal Capital & Housing Finance", "piramal"),
  logo("Simar Port (Shapoorji Pallonji Infra)", "shapoorji"),
];

/** Merchant banking: notable clients, in the order of the profile. */
export const merchantBankingClients: readonly ClientLogo[] = [
  logo("Tirumala Milk Products (Lactalis Group)", "tirumala-lactalis"),
  logo("Responsive Industries", "responsive"),
  logo("Deccan Fine Chemicals (India)", "deccan"),
  logo("Genlabs Healthcare", "genlabs"),
  logo("Suditi Industries", "suditi"),
  logo("Lasa Supergenerics", "lasa"),
  logo("Empee Hotels", "empee"),
  logo("Genesys International Corporation", "genesys"),
  logo("Sunfresh Agro Industries (Prabhat Dairy Group)", "prabhat"),
  logo("Heritage Foods", "heritage"),
  logo("SunEdison Infrastructure", "sunedison"),
  logo("AAA Technologies", "aaa"),
  logo("A R Dairy Foods", "ar-dairy"),
  logo("Parsi Dairy Farm", "parsi-dairy"),
  logo("Appasamy Associates", "appasamy"),
  logo("Next Leap Works India (Jombay)", "jombay"),
  logo("Texplast Industries", "texplast"),
  logo("Precision Camshafts", "precision"),
  logo("Ganesh Films India", "ganesh-films"),
  logo("Golden Trading Spices", "golden-spices"),
];
