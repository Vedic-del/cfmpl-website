/**
 * Publication stage.
 *
 * The site defaults to PREVIEW: every page carries a noindex instruction, so a
 * build shown to colleagues on a temporary address cannot be picked up by
 * search engines and compete with the live cfml.in.
 *
 * Only a build made with NEXT_PUBLIC_SITE_STAGE=production is indexable. Going
 * live is therefore a deliberate act, never an accident.
 */
export const isPreview = process.env.NEXT_PUBLIC_SITE_STAGE !== "production";

/**
 * AI crawler policy, applied only in production.
 *
 * Search and answer crawlers (which cite and link back to the site) are always
 * allowed. Training crawlers (which ingest content into model training sets)
 * are governed separately by this switch. It defaults to false because
 * training is the one choice that cannot be reversed once content is taken;
 * set it to true to allow them.
 */
export const allowAiTraining = false;

/** Crawlers that power AI search answers and link back to the source. */
export const aiSearchCrawlers = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
] as const;

/** Crawlers that collect content for AI model training. */
export const aiTrainingCrawlers = [
  "GPTBot",
  "Google-Extended",
  "ClaudeBot",
  "CCBot",
  "Applebot-Extended",
  "Bytespider",
  "meta-externalagent",
] as const;
