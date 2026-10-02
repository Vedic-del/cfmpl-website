/**
 * The nine-step transaction process, from the current cfml.in services page.
 * No other firm in the audited field publishes its process. This is the wedge.
 */

export const processSteps = [
  {
    n: "01",
    title: "The requirement arrives",
    body: "A funding requirement reaches us through a market reference or directly from the company.",
  },
  {
    n: "02",
    title: "We meet the business",
    body: "We sit down with promoters and management — in person or by video — to understand the business and what it needs.",
  },
  {
    n: "03",
    title: "We ask for what lenders will ask for",
    body: "We request the documents, background papers and specifics a lender or investor will need to see.",
  },
  {
    n: "04",
    title: "The teaser or IM is written",
    body: "We prepare a teaser or information memorandum in CFM's format. It is approved internally before it goes anywhere.",
  },
  {
    n: "05",
    title: "The lender universe is drawn",
    body: "We identify potential lenders or investors — leaving out anyone the company has already approached, and working within the company's own approved list.",
  },
  {
    n: "06",
    title: "We test the market first",
    body: "The teaser or IM is circulated and early feedback assessed. We only go further if there is real interest and the transaction is feasible.",
  },
  {
    n: "07",
    title: "Then the mandate is signed",
    body: "The mandate is executed on mutually agreed commercials, using standard mandate and non-disclosure formats.",
  },
  {
    n: "08",
    title: "Diligence, through to sanction",
    body: "We take the lender's or investor's diligence requirements and work through them with the company, to sanction and disbursal.",
  },
  {
    n: "09",
    title: "Our fee follows the money",
    body: "Our fee is collected on sanction or first disbursal.",
  },
] as const;

/** The two things the process makes unusual, stated plainly. */
export const processPrinciples = [
  {
    title: "The market is tested before the mandate is signed.",
    body: "Steps six and seven are in that order deliberately. You see real lender interest before you commit to us.",
  },
  {
    title: "The fee follows the money.",
    body: "We are paid on sanction or first disbursal — when the capital is committed, not when the work begins.",
  },
] as const;
