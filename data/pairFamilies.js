// Definitions for the remaining small "paired route" families:
// number bases, image formats, hash algorithms, encode/decode modes,
// and text-case modes. Each is genuinely computed / transformed client
// side — no fake output.

export const NUMBER_BASES = {
  binary:      { label: "Binary",      slug: "binary",      base: 2,  example: "1010" },
  octal:       { label: "Octal",       slug: "octal",       base: 8,  example: "12" },
  decimal:     { label: "Decimal",     slug: "decimal",     base: 10, example: "10" },
  hexadecimal: { label: "Hexadecimal", slug: "hexadecimal", base: 16, example: "A" },
};

export const IMAGE_FORMATS = {
  png:  { label: "PNG",  slug: "png",  mime: "image/png" },
  jpg:  { label: "JPG",  slug: "jpg",  mime: "image/jpeg" },
  webp: { label: "WEBP", slug: "webp", mime: "image/webp" },
};

export const IMAGE_FORMAT_PAIRS = [
  ["png", "jpg"], ["jpg", "png"],
  ["png", "webp"], ["webp", "png"],
  ["jpg", "webp"], ["webp", "jpg"],
];

export const HASH_ALGORITHMS = {
  "SHA-1":   { label: "SHA-1",   slug: "sha-1" },
  "SHA-256": { label: "SHA-256", slug: "sha-256" },
  "SHA-512": { label: "SHA-512", slug: "sha-512" },
};

export const TEXT_CASE_MODES = {
  upper:       { label: "UPPERCASE",      slug: "uppercase" },
  lower:       { label: "lowercase",      slug: "lowercase" },
  title:       { label: "Title Case",     slug: "title-case" },
  sentence:    { label: "Sentence case",  slug: "sentence-case" },
  alternating: { label: "aLtErNaTiNg CaSe", slug: "alternating-case" },
};

export function applyTextCase(mode, text) {
  switch (mode) {
    case "upper": return text.toUpperCase();
    case "lower": return text.toLowerCase();
    case "title":
      return text.toLowerCase().replace(/(^|\s|-)\S/g, (c) => c.toUpperCase());
    case "sentence":
      return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    case "alternating":
      return text.split("").map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase())).join("");
    default:
      return text;
  }
}
