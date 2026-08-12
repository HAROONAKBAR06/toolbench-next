import { CATEGORIES } from "@/data/units";
import { convertValue } from "@/data/units";

const TRUST_PARAGRAPH =
  "ToolBench runs this tool entirely in your browser. Your file or text is processed on your own device using JavaScript — nothing is uploaded to a server, nothing is stored, and there's no sign-up wall between you and the result. That's true of every one of the 500+ tools on this site, from PDF utilities to unit converters.";

function round(n, dp = 6) {
  if (n === null || n === undefined || Number.isNaN(n)) return n;
  const factor = Math.pow(10, dp);
  const r = Math.round(n * factor) / factor;
  return r;
}

// ---------------------------------------------------------------------
// UNIT CONVERSION (length, weight, temperature, volume, area, speed,
// time, data, pressure, energy, angle, power) — powers ~450 pages.
// ---------------------------------------------------------------------
export function unitConversionContent(categoryKey, fromKey, toKey) {
  const cat = CATEGORIES[categoryKey];
  const from = cat.units[fromKey];
  const to = cat.units[toKey];
  const oneResult = round(convertValue(categoryKey, fromKey, toKey, 1), 8);
  const sampleValues = [1, 5, 10, 25, 50, 100, 500, 1000];
  const rows = sampleValues.map((v) => [
    `${v} ${from.short}`,
    `${round(convertValue(categoryKey, fromKey, toKey, v), 6)} ${to.short}`,
  ]);

  const catLabelLower = cat.label.toLowerCase();

  const intro =
    `Converting ${from.label.toLowerCase()} to ${to.label.toLowerCase()} is a small, specific task, but getting it wrong ` +
    `by even a rounding error can throw off a recipe, a shipping quote, a construction cut list, or a homework answer. ` +
    `This page runs a live ${from.label} to ${to.label} converter — type a number in ${from.short} and get the exact ` +
    `${to.short} equivalent instantly, calculated with the standard conversion factor rather than an approximation. ` +
    `One ${from.short} equals ${oneResult} ${to.short}, and the calculator below scales that ratio to any amount you enter.`;

  const sections = [
    {
      heading: `How to convert ${from.label} to ${to.label}`,
      paragraphs: [
        `To convert a value from ${from.label.toLowerCase()} to ${to.label.toLowerCase()}, multiply the number of ` +
          `${from.short} by ${oneResult}. That figure comes from expressing both units against the same reference — ` +
          `${cat.base ? `in this case, ${cat.label.toLowerCase()} are compared through a common ${cat.label.toLowerCase()} base unit` : "a shared physical reference point"} — ` +
          `so the ratio holds no matter how large or small the input is.`,
      ],
      list: [
        `Enter your ${from.label.toLowerCase()} value into the "From" field above.`,
        `The tool multiplies it by the conversion factor automatically.`,
        `Read the converted ${to.label.toLowerCase()} value in the result field.`,
        `Use the swap button to flip the conversion direction instantly.`,
      ],
    },
    {
      heading: `${from.label} to ${to.label} conversion table`,
      paragraphs: [
        `Common ${from.short} amounts and their ${to.short} equivalents, rounded to six decimal places for accuracy:`,
      ],
    },
    {
      heading: `Why ${catLabelLower} conversions matter`,
      paragraphs: [
        `${cat.label} conversions come up constantly outside of a classroom. Recipes written for a US audience use ` +
          `${catLabelLower === "volume" ? "cups and tablespoons" : catLabelLower === "weight & mass" ? "ounces and pounds" : "units"} ` +
          `while international ones use metric measurements; travel and navigation mix miles, kilometers, and nautical units ` +
          `depending on the country and mode of transport; and technical fields like engineering, medicine, and manufacturing ` +
          `often require converting between systems to match a spec sheet, a prescription, or a purchase order.`,
        `Manual conversion is where mistakes creep in — misplacing a decimal, using an outdated or rounded factor, or mixing ` +
          `up which unit is larger. Because this converter applies the exact multiplier every time, the result for ` +
          `${from.label.toLowerCase()} to ${to.label.toLowerCase()} is consistent whether you're converting a single small ` +
          `number or a large batch of values one at a time.`,
      ],
    },
    {
      heading: "Frequently asked questions",
      paragraphs: [],
      faq: [
        {
          q: `How many ${to.short} are in 1 ${from.short}?`,
          a: `1 ${from.short} equals ${oneResult} ${to.short}. Multiply any ${from.short} value by this factor to get ${to.short}.`,
        },
        {
          q: `Is this conversion exact or approximate?`,
          a: `It uses the standard defined conversion factor for ${from.label.toLowerCase()} and ${to.label.toLowerCase()}, so results are precise to the rounding shown, not a rough estimate.`,
        },
        {
          q: `Can I convert ${to.label.toLowerCase()} back to ${from.label.toLowerCase()} on this page?`,
          a: `Yes — use the swap control in the calculator to reverse the direction and convert ${to.label.toLowerCase()} into ${from.label.toLowerCase()} instead.`,
        },
        {
          q: `Does this tool store or upload the numbers I enter?`,
          a: `No. The calculation runs locally in your browser using JavaScript, so nothing you type is sent anywhere.`,
        },
      ],
    },
    {
      heading: "About this tool",
      paragraphs: [TRUST_PARAGRAPH],
    },
  ];

  return { intro, sections, table: { headers: [from.label, to.label], rows } };
}

// ---------------------------------------------------------------------
// COLOR FORMAT CONVERSION
// ---------------------------------------------------------------------
export function colorConversionContent(fromLabel, toLabel, example) {
  const intro =
    `${fromLabel} and ${toLabel} are two of the most common ways to represent a color in web design, CSS, and image ` +
    `editing software. This tool converts a ${fromLabel} color value into its exact ${toLabel} equivalent — no manual ` +
    `math, no reference charts, and no risk of a rounding mistake changing how a brand color renders on screen.`;

  const sections = [
    {
      heading: `How ${fromLabel} to ${toLabel} conversion works`,
      paragraphs: [
        `Colors on a screen are ultimately stored as red, green, and blue light intensities. ${fromLabel} and ${toLabel} ` +
          `are just different notations for describing that same underlying value — ${fromLabel} might express it as ` +
          `${example}, while ${toLabel} expresses the identical color using its own syntax. Converting between them means ` +
          `parsing the input format, extracting the red, green and blue (or hue, saturation and lightness) components, and ` +
          `re-formatting them into the target notation.`,
      ],
      list: [
        `Paste or type your ${fromLabel} color value into the input field.`,
        `The converter parses it and computes the RGB components internally.`,
        `Those components are reformatted into valid ${toLabel} syntax.`,
        `Copy the converted value directly into your CSS, design tool, or code.`,
      ],
    },
    {
      heading: `When to use ${fromLabel} vs ${toLabel}`,
      paragraphs: [
        `Different tools and workflows favor different color formats. Design software and some CSS custom properties often ` +
          `default to HEX because it's compact and easy to copy. RGB is useful when you need to programmatically adjust ` +
          `individual color channels, and HSL is often preferred by designers because hue, saturation and lightness map more ` +
          `intuitively to how humans actually perceive and adjust color — sliding "lightness" up or down feels natural in a ` +
          `way that editing raw RGB numbers does not.`,
        `Converting between formats is common when migrating a design system, matching a color picked from an image against ` +
          `a brand's documented palette, or translating a value from a design tool into code a browser can render.`,
      ],
    },
    {
      heading: "Frequently asked questions",
      paragraphs: [],
      faq: [
        {
          q: `Will the converted ${toLabel} value look identical to the original ${fromLabel} color?`,
          a: `Yes — this is a lossless format conversion. The same color is represented in different notation, with no visible difference on screen.`,
        },
        {
          q: `Does this tool support alpha/transparency values?`,
          a: `This converter focuses on solid RGB-based colors. For transparency, add an alpha channel to the output format manually (e.g. rgba() or an 8-digit hex).`,
        },
        {
          q: `Can I convert multiple colors at once?`,
          a: `This tool converts one color at a time so you can verify each result, but you can run it repeatedly for as many colors as you need.`,
        },
      ],
    },
    { heading: "About this tool", paragraphs: [TRUST_PARAGRAPH] },
  ];

  return { intro, sections };
}

// ---------------------------------------------------------------------
// NUMBER BASE CONVERSION
// ---------------------------------------------------------------------
export function numberBaseContent(fromLabel, toLabel, fromBase, toBase) {
  const intro =
    `${fromLabel} and ${toLabel} are two of the numbering systems used constantly in computing, electronics, and ` +
    `low-level programming. This tool converts a ${fromLabel.toLowerCase()} number (base ${fromBase}) into its exact ` +
    `${toLabel.toLowerCase()} (base ${toBase}) equivalent, handling the place-value math so you don't have to work it ` +
    `out by hand.`;

  const sections = [
    {
      heading: `How ${fromLabel.toLowerCase()} to ${toLabel.toLowerCase()} conversion works`,
      paragraphs: [
        `Every number system represents a quantity using positional place values raised to powers of its base. ${fromLabel} ` +
          `uses base ${fromBase}, meaning each digit position represents a power of ${fromBase}. To convert into ${toLabel.toLowerCase()} ` +
          `(base ${toBase}), the value is first reduced to a plain decimal quantity, then re-expressed using base-${toBase} ` +
          `digits. This tool performs that two-step conversion instantly and validates that your input only contains digits ` +
          `valid for base ${fromBase}.`,
      ],
      list: [
        `Type a valid base-${fromBase} value into the input field.`,
        `The tool parses it into a decimal number internally.`,
        `That decimal value is re-encoded into base ${toBase}.`,
        `The converted value appears immediately, ready to copy.`,
      ],
    },
    {
      heading: `Where ${fromLabel.toLowerCase()} and ${toLabel.toLowerCase()} are used`,
      paragraphs: [
        `Binary and hexadecimal show up throughout software development — file permissions, color codes, memory addresses, ` +
          `and low-level debugging output are commonly shown in hex because it's a compact, human-readable stand-in for ` +
          `binary data. Octal appears in older Unix file-permission notation and some embedded systems. Decimal is the ` +
          `everyday counting system most people think in, which is why converting to and from it is usually the first step ` +
          `in translating between any two non-decimal bases.`,
        `Developers reach for a converter like this when reading a hex dump, setting file permissions, working with color ` +
          `values, or double-checking a manual calculation before it ends up in production code.`,
      ],
    },
    {
      heading: "Frequently asked questions",
      paragraphs: [],
      faq: [
        {
          q: `What characters are valid in a base-${fromBase} number?`,
          a: fromBase === 2
            ? "Only the digits 0 and 1 are valid in binary."
            : fromBase === 8
            ? "Only the digits 0 through 7 are valid in octal."
            : fromBase === 16
            ? "Digits 0–9 plus letters A–F (case-insensitive) are valid in hexadecimal."
            : "Only the digits 0 through 9 are valid in decimal.",
        },
        {
          q: `Can I convert negative numbers?`,
          a: `This tool is built for standard unsigned positive values. Negative numbers in binary typically use two's complement representation, which depends on a fixed bit width.`,
        },
        {
          q: `Is there a limit to how large a number I can convert?`,
          a: `Very large numbers are supported up to standard JavaScript integer precision limits, which comfortably covers typical use cases like memory addresses and color values.`,
        },
      ],
    },
    { heading: "About this tool", paragraphs: [TRUST_PARAGRAPH] },
  ];

  return { intro, sections };
}

// ---------------------------------------------------------------------
// GENERIC / MANUAL TOOL CONTENT (PDF, image, text, generate, dev tools)
// ---------------------------------------------------------------------
export function manualToolContent({ title, tagline, whatItDoes, howToSteps, useCases, faq, extraHeading, extraParagraphs }) {
  const intro = whatItDoes;

  const sections = [
    {
      heading: `How to use the ${title.toLowerCase()} tool`,
      paragraphs: [],
      list: howToSteps,
    },
    {
      heading: "When you'd use this",
      paragraphs: useCases,
    },
  ];

  if (extraHeading && extraParagraphs) {
    sections.push({ heading: extraHeading, paragraphs: extraParagraphs });
  }

  sections.push({
    heading: "Frequently asked questions",
    paragraphs: [],
    faq,
  });

  sections.push({ heading: "About this tool", paragraphs: [TRUST_PARAGRAPH] });

  return { intro, sections };
}
