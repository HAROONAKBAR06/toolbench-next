import { ALL_TOOLS, SECTIONS } from "@/data/registry";

export default function sitemap() {
  const base = "https://www.toolbench.cc";
  const staticEntries = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    ...Object.keys(SECTIONS).map((s) => ({
      url: `${base}/${s}`,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  ];
  const toolEntries = ALL_TOOLS.map((t) => ({
    url: `${base}/${t.section}/${t.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticEntries, ...toolEntries];
}
