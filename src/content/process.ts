/**
 * How a debt or equity fundraising mandate runs: the nine-step process
 * published on the cfml.in Services page.
 */

export const processSteps = [
  {
    n: "01",
    title: "Requirement received",
    body: "A company's funding requirement reaches us, either through a market reference or directly from the company.",
  },
  {
    n: "02",
    title: "First discussions",
    body: "We meet the promoters and management, in person or by video call, to understand the business and what it needs.",
  },
  {
    n: "03",
    title: "Information request",
    body: "We ask for the documents and background information that lenders or investors will want to see.",
  },
  {
    n: "04",
    title: "Teaser or information memorandum",
    body: "We prepare a short teaser or a full information memorandum describing the company and the proposal. It is approved internally before it is shared.",
  },
  {
    n: "05",
    title: "List of lenders or investors",
    body: "We draw up a list of suitable lenders or investors. We leave out any the company has already approached, and work within a list the company approves.",
  },
  {
    n: "06",
    title: "Market feedback",
    body: "We share the teaser or memorandum and gauge initial interest. We take the proposal forward only if there is genuine interest.",
  },
  {
    n: "07",
    title: "Mandate signed",
    body: "If there is interest, we sign a mandate with the company on agreed terms, using our standard mandate and non-disclosure agreement.",
  },
  {
    n: "08",
    title: "Due diligence to sanction",
    body: "We work with the company through the lender's or investor's due diligence, until the funding is sanctioned and disbursed.",
  },
  {
    n: "09",
    title: "Fees",
    body: "Our fee is payable when the funding is sanctioned or first disbursed.",
  },
] as const;

/** The two terms a company most needs to know before it engages us. */
export const processPrinciples = [
  {
    title: "Lender interest is tested before a mandate is signed.",
    body: "We gauge the market's response to the proposal first (step 6). The mandate is signed only if there is genuine interest (step 7).",
  },
  {
    title: "Our fee is linked to the funding.",
    body: "It is payable when the funding is sanctioned or first disbursed (step 9).",
  },
] as const;
