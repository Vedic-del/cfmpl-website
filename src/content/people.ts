/**
 * Leadership, from the Team page of cfml.in. Biographies are published as
 * approved; edits go through the firm before they are made here.
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
    slug: "om-porwal",
    name: "Om Porwal",
    role: "Founder and Director",
    summary: "Founded CFM in 1991. Chartered accountant since 1985, specialising in financial structuring.",
    bio: [
      "Om Porwal founded CFM in 1991. He has been a member of the Institute of Chartered Accountants of India since 1985. His expertise is financial structuring, and he has advised large corporates and government undertakings on financial modelling.",
      "He has served as a director of Yashraj Biotechnology Limited and of the OTC Exchange of India.",
    ],
    photo: null,
  },
  {
    slug: "malay-mukherjee",
    name: "Malay Mukherjee",
    role: "Director",
    summary: "Former CEO and Managing Director, IFCI Limited. Former Executive Director, Central Bank of India.",
    bio: [
      "Malay Mukherjee brings more than forty years of experience across banking, NBFCs, venture funding, factoring and broking. He was Chief Executive Officer and Managing Director of IFCI Limited, chaired several IFCI group companies, and served as Executive Director of Central Bank of India.",
      "His thirty-six years with Indian Bank took him across Assam, Bihar, West Bengal, Karnataka, Maharashtra, Gujarat and New Delhi, with responsibility at various points for credit, human resources, administration, IT, corporate communications, marketing, client coverage and new initiatives.",
      "He is a former Chairman of the Board of Governors of the Management Development Institute, Chairman of the Institute of Leadership Development, Jaipur, and a former member of the governing body of the Entrepreneurship Development Institute of India, Ahmedabad.",
    ],
    photo: null,
  },
  {
    slug: "haseeb-drabu",
    name: "Dr. Haseeb Drabu",
    role: "Director",
    summary: "Economist. Former Finance Minister of Jammu & Kashmir. Former bank chairman and chief executive.",
    bio: [
      "Dr. Haseeb Drabu is a professional economist whose career spans lawmaking, policy planning, banking and economic commentary. He has worked in national economic policymaking with the Planning Commission, the Finance Commission and the Economic Advisory Council to the Prime Minister.",
      "He was a member of the Jammu & Kashmir Legislative Assembly and served as the state's Finance Minister. He has been chairman and chief executive of a bank, and head of Business Standard, where he began in journalism. He wrote a fortnightly column for Mint.",
      "He has served on the Prime Minister's Task Force on Long-term Development, the Planning Commission Working Group on Resources other than Tax Resources for the Eleventh Five-Year Plan, the Commission on Centre-State Relations, and a Government of India expert group on diversity in living, education and workspaces. He has also been a consultant to the Asian Development Bank on reform and reconstruction in Jammu & Kashmir.",
      "His directorships include Iris Business Services Limited, Aspira Pathlab & Diagnostics Limited, Air Works MRO Services Private Limited, Air Works India (Engineering) Private Limited, Kahnov Realty Private Limited, Kahnov E-Learning Private Limited and Yashraj Biotechnology Limited.",
    ],
    photo: null,
  },
  {
    slug: "arvind-bhandari",
    name: "Arvind Bhandari",
    role: "Director",
    summary: "Fellow of the ICAI. Thirty years across manufacturing, international trade, finance and enterprise.",
    bio: [
      "Arvind Bhandari is a Fellow member of the Institute of Chartered Accountants of India with more than thirty years of experience.",
      "Until 2005 he was a promoter-director of a publicly listed flexible-packaging company operating in collaboration with a South Korean partner. His experience spans manufacturing, international trade, finance and entrepreneurship.",
    ],
    photo: null,
  },
  {
    slug: "ss-sudanthiram",
    name: "S. S. Sudanthiram",
    role: "Director",
    summary: "Former merchant banker, associated with more than a hundred IPOs.",
    bio: [
      "S. S. Sudanthiram is a former merchant banker with experience across credit, merchant banking, treasury and the capital markets, and has been associated with more than a hundred initial public offerings.",
      "He is a promoter of the Sreevee and Bhalakh group companies, which are engaged in investment banking.",
    ],
    photo: null,
  },
] as const;

/**
 * Management. The president is the only member published so far; the chief
 * executives and the rest of the transaction team are to be added.
 */
export const president: Person = {
  slug: "r-ramnath",
  name: "R. Ramnath",
  role: "President, Investment Banking & Equity Capital Markets",
  summary: "Thirty years across investment banking, private equity and corporate finance. Lead-managed IPOs, FPOs and rights issues.",
  bio: [
    "R. Ramnath has more than thirty years of experience: around twenty-one in investment banking, private equity and financial services, preceded by nine in corporate finance.",
    "At Dabur India he established a joint-venture project in Nepal and handled the Hajmola and guar gum projects. At Kanoria Chemicals & Industries he took the polypropylene and captive power projects from inception to financial closure. He went on to lead investment banking at VLS Finance and SREI Capital Markets, lead-managing IPOs, FPOs and rights issues, and has also run his own enterprise.",
    "At CFM he leads merchant banking, investment banking, equity capital markets, private equity and M&A.",
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
      "He was Chief General Manager of the Credit Review Department at SBI's Corporate Centre in Mumbai, where he chaired the CGM committee empowered to sanction large corporate loans, and Chief General Manager of the Commercial Clients Group for the South India network. Earlier, as General Manager, he headed the Corporate Accounts Group in Mumbai and Delhi.",
    ],
    photo: null,
  },
  {
    slug: "murali-ramaswami",
    name: "Murali Ramaswami",
    role: "Advisor",
    summary: "Former Executive Director of Bank of Baroda and of Vijaya Bank. Over thirty years in banking.",
    bio: [
      "Murali Ramaswami has more than thirty years in banking, beginning in 1985. He joined Vijaya Bank and rose to Executive Director, holding credit, operations and CFO responsibilities along the way, and was Executive Director of Bank of Baroda from 2019 to 2020. Before banking he was an Accounts Officer at Indian Oil Blending Limited.",
      "His experience covers credit, treasury, international operations, cash management, integration management, digital banking and IT. He holds a B.Com and an MBA in corporate finance, foreign trade and market research from the University of Madras, is a CAIIB and an AICWA, and holds a DBF from the Institute of Chartered Financial Analysts of India.",
      "At CFM, he works on business development for debt syndication and resolution, and on the firm's South India operations.",
    ],
    photo: null,
  },
  {
    slug: "raja-sekhar",
    name: "Raja Sekhar",
    role: "Advisor",
    summary: "Thirty-seven years in banking with SBI. Corporate finance and NPA management.",
    bio: [
      "Raja Sekhar has more than thirty-seven years in banking, beginning with State Bank of India in 1984. His focus has been corporate finance and NPA management.",
      "For more than seventeen consecutive years he handled high-value advances above ₹50 crore across SBI Commercial Clients Group branches, later serving as Deputy General Manager and Head of Branch Operations, with supervisory roles across branches and the Local Head Office.",
    ],
    photo: null,
  },
] as const;

export const management: readonly Person[] = [president];

export const allPeople = [...board, ...management, ...advisors];
