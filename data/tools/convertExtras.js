import { manualToolContent, colorConversionContent, numberBaseContent } from "@/lib/content";
import { COLOR_FORMATS } from "@/data/colorFormats";
import { NUMBER_BASES } from "@/data/pairFamilies";

const section = "convert";

const base64Tools = [
  {
    slug: "base64-encode-text",
    section, title: "Base64 Encoder", tag: "text → Base64",
    component: "Base64EncodeDecode",
    props: { mode: "encode" },
    metaDescription: "Encode text into Base64 for free, instantly, right in your browser.",
    content: () => manualToolContent({
      title: "Base64 Encoder",
      whatItDoes: "This tool encodes plain text into Base64, a text-safe encoding scheme commonly used to embed binary-like data in places that only accept plain text, such as JSON fields, URLs, or email attachments.",
      howToSteps: [
        "Type or paste the text you want to encode.",
        "The Base64-encoded result generates automatically.",
        "Copy the encoded string for your use case.",
      ],
      useCases: [
        "Encoding a string to safely include in a URL, config file, or API payload.",
        "Preparing a small piece of data to embed inline in HTML or CSS as a data URI.",
        "Encoding credentials or tokens for use in a Basic Auth header during development.",
      ],
      faq: [
        { q: "Is Base64 encoding a form of encryption?", a: "No — Base64 is an encoding, not encryption. It's easily reversible and doesn't provide any security or confidentiality on its own." },
        { q: "Does Base64 increase the size of the text?", a: "Yes, typically by around 33%, since it represents binary data using a limited set of readable characters." },
      ],
    }),
  },
  {
    slug: "base64-decode-text",
    section, title: "Base64 Decoder", tag: "Base64 → text",
    component: "Base64EncodeDecode",
    props: { mode: "decode" },
    metaDescription: "Decode a Base64 string back into readable text — free and instant.",
    content: () => manualToolContent({
      title: "Base64 Decoder",
      whatItDoes: "This tool decodes a Base64-encoded string back into its original, readable text.",
      howToSteps: [
        "Paste the Base64 string into the input box.",
        "The decoded text generates automatically.",
        "Copy the decoded result.",
      ],
      useCases: [
        "Reading the original content of a Base64-encoded API field or config value.",
        "Debugging an authentication header or token during development.",
        "Converting an encoded data URI back into readable text.",
      ],
      faq: [
        { q: "What happens if the input isn't valid Base64?", a: "Invalid Base64 input will produce a decoding error, which the tool flags so you can check the string." },
      ],
    }),
  },
];

const csvJsonTools = [
  {
    slug: "csv-to-json",
    section, title: "CSV to JSON", tag: "structured data",
    component: "CsvJsonConverter",
    props: { direction: "csv-to-json" },
    metaDescription: "Convert CSV data into JSON for free, instantly, right in your browser.",
    content: () => manualToolContent({
      title: "CSV to JSON Converter",
      whatItDoes: "This tool converts CSV (comma-separated values) data into a JSON array of objects, using the first row as field names, ready to use in code, an API, or a database import.",
      howToSteps: [
        "Paste your CSV data into the input box, including the header row.",
        "Click \"Convert\" to generate the JSON output.",
        "Copy the resulting JSON array.",
      ],
      useCases: [
        "Converting an exported spreadsheet into JSON for use in a web app.",
        "Preparing CSV data for import into a database or API that requires JSON.",
        "Quickly inspecting spreadsheet data in a structured, code-friendly format.",
      ],
      faq: [
        { q: "Does the CSV need a header row?", a: "Yes — the first row is used as the field names for each JSON object; make sure it's included at the top of your data." },
        { q: "What if a value contains a comma?", a: "Values containing commas should be wrapped in quotes in the CSV, following standard CSV formatting, so they're parsed correctly." },
      ],
    }),
  },
  {
    slug: "json-to-csv",
    section, title: "JSON to CSV", tag: "flatten to spreadsheet",
    component: "CsvJsonConverter",
    props: { direction: "json-to-csv" },
    metaDescription: "Convert a JSON array into CSV for free, instantly, right in your browser.",
    content: () => manualToolContent({
      title: "JSON to CSV Converter",
      whatItDoes: "This tool converts a JSON array of objects into CSV format, generating a header row from the object keys, so the data can be opened in a spreadsheet program.",
      howToSteps: [
        "Paste your JSON array into the input box.",
        "Click \"Convert\" to generate CSV output.",
        "Copy the CSV data or paste it into a spreadsheet.",
      ],
      useCases: [
        "Turning an API response into a CSV file you can open in a spreadsheet.",
        "Exporting structured JSON data for a non-technical teammate to review.",
        "Preparing JSON data for import into a tool that only accepts CSV.",
      ],
      faq: [
        { q: "What if the JSON objects have different fields?", a: "The header row is built from the combined set of keys found across all objects; missing fields for a given row appear blank in that column." },
        { q: "Does this handle nested JSON objects?", a: "Deeply nested values are converted to their JSON string representation within a cell, since CSV itself only supports flat, tabular data." },
      ],
    }),
  },
];

const colorPairs = [
  ["hex", "rgb"], ["rgb", "hex"],
  ["hex", "hsl"], ["hsl", "hex"],
  ["rgb", "hsl"], ["hsl", "rgb"],
];

const colorConverterTools = colorPairs.map(([from, to]) => {
  const fromFmt = COLOR_FORMATS[from];
  const toFmt = COLOR_FORMATS[to];
  return {
    slug: `${fromFmt.slug}-to-${toFmt.slug}`,
    section,
    title: `${fromFmt.label} to ${toFmt.label}`,
    tag: "color format converter",
    component: "ColorConverter",
    props: { fromFormat: from, toFormat: to },
    metaDescription: `Convert a ${fromFmt.label} color to ${toFmt.label} for free, instantly, right in your browser.`,
    content: () => colorConversionContent(fromFmt.label, toFmt.label, fromFmt.example),
  };
});

const basePairs = [
  ["binary", "decimal"], ["decimal", "binary"],
  ["binary", "hexadecimal"], ["hexadecimal", "binary"],
  ["decimal", "hexadecimal"], ["hexadecimal", "decimal"],
  ["octal", "decimal"], ["decimal", "octal"],
];

const numberBaseTools = basePairs.map(([from, to]) => {
  const fromB = NUMBER_BASES[from];
  const toB = NUMBER_BASES[to];
  return {
    slug: `${fromB.slug}-to-${toB.slug}`,
    section,
    title: `${fromB.label} to ${toB.label}`,
    tag: "number base converter",
    component: "NumberBaseConverter",
    props: { fromBase: fromB.base, toBase: toB.base },
    metaDescription: `Convert ${fromB.label.toLowerCase()} to ${toB.label.toLowerCase()} for free, instantly, right in your browser.`,
    content: () => numberBaseContent(fromB.label, toB.label, fromB.base, toB.base),
  };
});

export const convertExtras = [...base64Tools, ...csvJsonTools, ...colorConverterTools, ...numberBaseTools];
