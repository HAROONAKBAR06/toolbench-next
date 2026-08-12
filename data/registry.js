import { CATEGORIES } from "@/data/units";
import { unitConversionContent } from "@/lib/content";
import { pdfTools } from "@/data/tools/pdfTools";
import { imageTools } from "@/data/tools/imageTools";
import { textTools } from "@/data/tools/textTools";
import { generateTools } from "@/data/tools/generateTools";
import { devTools } from "@/data/tools/devTools";
import { convertExtras } from "@/data/tools/convertExtras";

// ---------------------------------------------------------------------
// Generate one tool entry per ordered unit pair within every category
// (e.g. miles -> kilometers AND kilometers -> miles). This is the single
// biggest contributor to total tool count, and every page is a real,
// independently-functioning converter for that specific pair.
// ---------------------------------------------------------------------
function buildUnitConversionTools() {
  const tools = [];
  for (const [categoryKey, cat] of Object.entries(CATEGORIES)) {
    const unitKeys = Object.keys(cat.units);
    for (const fromKey of unitKeys) {
      for (const toKey of unitKeys) {
        if (fromKey === toKey) continue;
        const from = cat.units[fromKey];
        const to = cat.units[toKey];
        tools.push({
          slug: `${from.slug}-to-${to.slug}`,
          section: "convert",
          title: `${from.label} to ${to.label}`,
          tag: `${cat.label} converter`,
          component: "UnitConverter",
          props: { category: categoryKey, fromUnit: fromKey, toUnit: toKey },
          metaDescription: `Convert ${from.label.toLowerCase()} to ${to.label.toLowerCase()} instantly with exact, accurate figures. Free ${cat.label.toLowerCase()} converter, no sign-up.`,
          content: () => unitConversionContent(categoryKey, fromKey, toKey),
        });
      }
    }
  }
  return tools;
}

export const ALL_TOOLS = [
  ...pdfTools,
  ...imageTools,
  ...textTools,
  ...generateTools,
  ...devTools,
  ...convertExtras,
  ...buildUnitConversionTools(),
];

export const SECTIONS = {
  pdf:      { label: "PDF Tools",       slug: "pdf",      description: "Merge, split, rotate, and extract from PDFs — processed locally in your browser." },
  image:    { label: "Image Tools",     slug: "image",    description: "Compress, resize, convert and edit images without uploading them anywhere." },
  text:     { label: "Text Tools",      slug: "text",     description: "Count, clean, compare, and reformat text instantly." },
  convert:  { label: "Converters",      slug: "convert",  description: "Unit, color, number base, and data-format converters — accurate and instant." },
  generate: { label: "Generators",      slug: "generate", description: "Generate QR codes, passwords, UUIDs, and random data on demand." },
  dev:      { label: "Developer Tools", slug: "dev",      description: "JSON, regex, hashing, encoding, and other everyday developer utilities." },
};

export function getToolBySlug(section, slug) {
  return ALL_TOOLS.find((t) => t.section === section && t.slug === slug) || null;
}

export function getToolsBySection(section) {
  return ALL_TOOLS.filter((t) => t.section === section);
}

export function getRelatedTools(tool, limit = 6) {
  return ALL_TOOLS
    .filter((t) => t.section === tool.section && t.slug !== tool.slug)
    .slice(0, limit);
}
