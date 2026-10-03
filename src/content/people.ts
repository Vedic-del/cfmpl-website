/**
 * Leadership. Biographies draw on the Team page of cfml.in and on public
 * records (company filings, bank board profiles), kept to a similar length.
 */

export type Person = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  bio: readonly string[];
  // Optional. Without a portrait, cards show the person's initials.
  photo: string | null;
};

export const board: readonly Person[] = [
  {
    slug: "haseeb-drabu",
    name: "Dr. Haseeb Drabu",
    role: "Director",
    summary: "Economist. Former Finance Minister of Jammu & Kashmir and Chairman of J&K Bank.",
    bio: [
      "Dr. Haseeb Drabu is an economist whose career spans policy, banking and public office. He began in financial journalism at Business Standard and went on to work with the Planning Commission, the Finance Commission and the Economic Advisory Council to the Prime Minister.",
      "He was Chairman and Chief Executive of Jammu & Kashmir Bank from 2005 to 2010. As Finance Minister of Jammu & Kashmir from 2015 to 2018, he sat on the GST Council while the new tax was designed and introduced.",
    ],
    photo: null,
  },
  {
    slug: "malay-mukherjee",
    name: "Malay Mukherjee",
    role: "Director",
    summary: "Former CEO and Managing Director of IFCI. Former Executive Director, Central Bank of India.",
    bio: [
      "Malay Mukherjee joined Indian Bank as a probationary officer in 1976 and spent thirty-six years there. He managed branches across eastern, western and northern India and headed the bank's Bangalore, Delhi and Kolkata zones.",
      "He became Executive Director of Central Bank of India in 2012 and Chief Executive Officer and Managing Director of IFCI in December 2013, chairing several IFCI group companies. He has also chaired the Board of Governors of the Management Development Institute.",
    ],
    photo: null,
  },
  {
    slug: "arvind-bhandari",
    name: "Arvind Bhandari",
    role: "Director",
    summary: "Fellow Chartered Accountant. Thirty years across manufacturing, international trade and finance.",
    bio: [
      "Arvind Bhandari is a Fellow of the Institute of Chartered Accountants of India with more than thirty years in industry and finance. His experience spans manufacturing, international trade, corporate finance and entrepreneurship.",
      "Until 2005 he was a promoter-director of a publicly listed flexible-packaging company that operated in collaboration with a South Korean partner. He brings to the board the view of someone who has built and financed a listed manufacturing business.",
    ],
    photo: null,
  },
  {
    slug: "ss-sudanthiram",
    name: "S. S. Sudanthiram",
    role: "Director",
    summary: "Former merchant banker. Associated with more than a hundred initial public offerings.",
    bio: [
      "S. S. Sudanthiram is a former merchant banker whose career ran through public and private sector financial institutions. His experience covers credit, merchant banking, treasury and capital market operations.",
      "He has been associated with more than a hundred initial public offerings. He is the promoter of the Sreevee and Bhalakh group companies, which carry out investment banking. He brings long experience of taking companies to the public markets.",
    ],
    photo: null,
  },
  {
    slug: "om-porwal",
    name: "Om Porwal",
    role: "Founder and Director",
    summary: "Founded CFM in 1991. Fellow Chartered Accountant, specialising in financial structuring.",
    bio: [
      "Om Porwal founded CFM in 1991. A Fellow Chartered Accountant in practice since 1986, he specialises in financial structuring and has advised large corporates and government undertakings on financial models and financing plans.",
      "He has raised syndicated debt for the Government of Maharashtra and its undertakings, including the Maharashtra State Electricity Board and the Maharashtra State Road Development Corporation. He has been a Public Representative Director of the OTC Exchange of India and is a director of CFM Asset Reconstruction.",
    ],
    photo: null,
  },
] as const;

/**
 * Management. The president is the only member published so far.
 */
export const president: Person = {
  slug: "r-ramnath",
  name: "R. Ramnath",
  role: "President, Investment Banking & Equity Capital Markets",
  summary: "Thirty years in corporate finance and investment banking. Lead-managed IPOs, FPOs and rights issues.",
  bio: [
    "R. Ramnath has more than thirty years in corporate finance and investment banking. He began in industry: at Dabur India he set up a joint venture in Nepal and at Kanoria Chemicals & Industries he took the polypropylene and captive power projects from inception to financial closure.",
    "He went on to lead investment banking at VLS Finance and SREI Capital Markets, lead-managing IPOs, FPOs and rights issues. At CFM he leads merchant banking, equity capital markets, private equity and M&A.",
  ],
  photo: null,
};

export const advisors: readonly Person[] = [
  {
    slug: "pradeep-kelshikar",
    name: "Pradeep Kelshikar",
    role: "Advisor",
    summary: "Thirty-five years with State Bank of India. Former Chief General Manager, Credit Review.",
    bio: [
      "Pradeep Kelshikar spent more than thirty-five years with State Bank of India across business development, corporate finance and organisational strategy.",
      "As Chief General Manager of the Credit Review Department at SBI's Corporate Centre in Mumbai, he chaired the committee empowered to sanction large corporate loans. He was also Chief General Manager of the Commercial Clients Group for South India and, earlier, as General Manager, headed the Corporate Accounts Group in Mumbai and Delhi.",
    ],
    photo: null,
  },
  {
    slug: "murali-ramaswami",
    name: "Murali Ramaswami",
    role: "Advisor",
    summary: "Former Executive Director of Bank of Baroda and of Vijaya Bank. Four decades in banking.",
    bio: [
      "Murali Ramaswami began his career in 1984 and joined Vijaya Bank in 1989, rising over thirty years to Executive Director with credit, operations and CFO responsibilities along the way. He was Executive Director of Bank of Baroda from 2019 to 2020.",
      "He has served as an independent director of Karur Vysya Bank and Can Fin Homes. A CAIIB and AICWA with an MBA from the University of Madras, he advises CFM on debt syndication and resolution and on its work in South India.",
    ],
    photo: null,
  },
  {
    slug: "raja-sekhar",
    name: "Raja Sekhar",
    role: "Advisor",
    summary: "Thirty-seven years with State Bank of India. Corporate finance and NPA management.",
    bio: [
      "Raja Sekhar spent more than thirty-seven years in banking, beginning with State Bank of India in 1984. His focus has been corporate finance and the management of non-performing assets.",
      "For more than seventeen consecutive years he handled high-value advances above ₹50 crore in SBI's Commercial Clients Group branches. He later served as Deputy General Manager and Head of Branch Operations, supervising branches and the Local Head Office.",
    ],
    photo: null,
  },
] as const;

export const management: readonly Person[] = [president];

export const allPeople = [...board, ...management, ...advisors];
