import { CURRENCIES, SNAPSHOT_DATE, convertCurrency } from "@/data/currencies";

const TRUST_PARAGRAPH =
  "ToolBench runs this tool entirely in your browser. The calculator fetches a live exchange rate " +
  "over a public rate API and converts your amount locally — nothing you type is uploaded or stored, " +
  "and there's no sign-up wall between you and the result.";

function round(n, dp = 6) {
  if (n === null || n === undefined || Number.isNaN(n)) return n;
  const factor = Math.pow(10, dp);
  return Math.round(n * factor) / factor;
}

// ---------------------------------------------------------------------
// Unique SEO content per currency pair. Mirrors the shape/voice of
// unitConversionContent() in lib/content.js, but calls out that this is
// a fluctuating market rate rather than a fixed physical conversion.
// ---------------------------------------------------------------------
function currencyConversionContent(fromKey, toKey) {
  const from = CURRENCIES[fromKey];
  const to = CURRENCIES[toKey];
  const oneResult = round(convertCurrency(fromKey, toKey, 1), 6);
  const sampleValues = [1, 5, 10, 50, 100, 500, 1000, 5000];
  const rows = sampleValues.map((v) => [
    `${v} ${from.code}`,
    `${round(convertCurrency(fromKey, toKey, v), 4)} ${to.code}`,
  ]);

  const intro =
    `Converting ${from.code} to ${to.code} means finding out how many ${to.label.toLowerCase()} (${to.code}) ` +
    `a given amount of ${from.label.toLowerCase()} (${from.code}) is worth right now. Unlike a physical unit ` +
    `conversion, this ratio moves with the foreign exchange market, so the calculator above fetches a live ` +
    `${from.code}/${to.code} rate rather than using a fixed number. As a reference point, 1 ${from.code} was ` +
    `worth approximately ${oneResult} ${to.code} as of ${SNAPSHOT_DATE} — enter any amount above to see today's rate.`;

  const sections = [
    {
      heading: `How to convert ${from.code} to ${to.code}`,
      paragraphs: [
        `To convert ${from.label.toLowerCase()} to ${to.label.toLowerCase()}, multiply your ${from.code} amount ` +
          `by the current ${from.code}/${to.code} exchange rate. That rate is set by the foreign exchange market and ` +
          `changes throughout the trading day based on supply and demand, interest rate differences between the two ` +
          `currencies' central banks, inflation expectations, and broader economic and political news.`,
      ],
      list: [
        `Enter the ${from.code} amount you want to convert into the field above.`,
        `The tool fetches the current ${from.code}/${to.code} exchange rate automatically.`,
        `Your amount is multiplied by that rate to show the ${to.code} equivalent instantly.`,
        `If the live rate can't be reached, a recent reference rate is used instead and clearly labeled.`,
      ],
    },
    {
      heading: `${from.code} to ${to.code} conversion table`,
      paragraphs: [
        `Common ${from.code} amounts and their approximate ${to.code} equivalents at the reference rate used on ` +
          `this page. Actual figures will shift with the live market rate:`,
      ],
    },
    {
      heading: `What moves the ${from.code}/${to.code} exchange rate`,
      paragraphs: [
        `Currency pairs like ${from.code}/${to.code} float against each other based on relative economic strength. ` +
          `When a central bank raises interest rates, its currency often strengthens as investors seek higher returns ` +
          `on deposits and bonds denominated in it. Trade balances, inflation data, political stability, and general ` +
          `market risk appetite all push the rate up or down as well — which is why the same ${from.code} amount can ` +
          `buy a noticeably different amount of ${to.code} from one week to the next.`,
        `Because of that movement, a rate quoted a few hours ago can already be slightly out of date. This page ` +
          `pulls a fresh rate each time it loads so the figure you see reflects current market pricing rather than ` +
          `a cached or outdated number.`,
      ],
    },
    {
      heading: "Frequently asked questions",
      paragraphs: [],
      faq: [
        {
          q: `What is 1 ${from.code} in ${to.code}?`,
          a: `As a recent reference point, 1 ${from.code} equals approximately ${oneResult} ${to.code}, but exchange ` +
            `rates change constantly — use the calculator above for the current rate.`,
        },
        {
          q: `Is this a live exchange rate?`,
          a: `The calculator fetches a current rate from a public exchange-rate feed each time you load the page. If that ` +
            `request fails, it falls back to a recent reference rate and labels it as such.`,
        },
        {
          q: `Why is the rate different from what my bank or card offers?`,
          a: `Banks, card networks, and money transfer services typically add a margin or fee on top of the ` +
            `market ("mid-market") exchange rate shown here, so the rate you're actually charged is usually a bit ` +
            `less favorable than the raw market rate.`,
        },
        {
          q: `Does this tool store the amounts I enter?`,
          a: `No. The conversion runs in your browser and nothing you type is sent to or stored on a server.`,
        },
        {
          q: `Can I convert ${to.code} back to ${from.code}?`,
          a: `Yes — open the ${to.code} to ${from.code} page to convert in the other direction using the current rate.`,
        },
      ],
    },
    { heading: "About this tool", paragraphs: [TRUST_PARAGRAPH] },
  ];

  return { intro, sections, table: { headers: [from.code, to.code], rows } };
}

// ---------------------------------------------------------------------
// Build one tool entry per ordered currency pair (68 currencies -> 4,556
// pages), same pattern as buildUnitConversionTools() in data/registry.js.
// ---------------------------------------------------------------------
function buildCurrencyConversionTools() {
  const tools = [];
  const keys = Object.keys(CURRENCIES);
  for (const fromKey of keys) {
    for (const toKey of keys) {
      if (fromKey === toKey) continue;
      const from = CURRENCIES[fromKey];
      const to = CURRENCIES[toKey];
      tools.push({
        slug: `${from.slug}-to-${to.slug}`,
        section: "convert",
        title: `${from.code} to ${to.code}`,
        tag: `Convert ${from.label} to ${to.label} at today's exchange rate`,
        component: "CurrencyConverter",
        props: { fromCurrency: fromKey, toCurrency: toKey },
        metaDescription: `Convert ${from.code} to ${to.code} at the live exchange rate. Free ${from.label.toLowerCase()} to ${to.label.toLowerCase()} currency converter, updated in real time.`,
        content: () => currencyConversionContent(fromKey, toKey),
      });
    }
  }
  return tools;
}

export const currencyTools = buildCurrencyConversionTools();
