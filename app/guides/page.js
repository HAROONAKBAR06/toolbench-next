import Link from "next/link";
import { SECTIONS, getToolsBySection } from "@/data/registry";

const URL = "https://www.toolbench.cc/guides";

export const metadata = {
  title: "Guides",
  description:
    "Guides for getting the most out of ToolBench's free PDF, image, text, conversion, and developer tools — organized by category.",
  alternates: { canonical: URL },
};

const GUIDE_SECTIONS = Object.values(SECTIONS).map((s) => ({
  ...s,
  tools: getToolsBySection(s.slug).slice(0, 4),
  count: getToolsBySection(s.slug).length,
}));

export default function GuidesPage() {
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span>Guides</span>
        </div>
        <div className="section-head">
          <div className="spec-tag">RESOURCES</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>Guides</h1>
          <p>
            Short, practical guides for getting the most out of ToolBench. Pick a category
            below to find how-to notes for the tools inside it — everything still runs
            locally in your browser, no sign-up required.
          </p>
        </div>

        <div className="article" style={{ maxWidth: 760, marginBottom: 48 }}>
          <h2 style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
            How ToolBench works
          </h2>
          <p>
            Every tool on ToolBench runs entirely client-side. That means when you open a
            PDF, image, or piece of text in a tool, it's processed directly in your browser's
            memory — it's never uploaded to a server, which is what makes the tools fast and
            keeps your files private. Closing the tab clears everything.
          </p>
          <p>
            Most tools work the same basic way: choose or drop in your file (or paste your
            text), adjust any options, and download or copy the result. There's nothing to
            install and no account to create.
          </p>
        </div>

        <div className="guide-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {GUIDE_SECTIONS.map((s) => (
            <div className="section-tool-card" key={s.slug}>
              <h3>{s.label}</h3>
              <p>{s.description}</p>
              <ul style={{ margin: "12px 0 16px", paddingLeft: 18, listStyle: "disc" }}>
                {s.tools.map((t) => (
                  <li key={t.slug} style={{ marginBottom: 6, fontSize: 14 }}>
                    <Link href={`/${t.section}/${t.slug}`}>{t.title}</Link>
                  </li>
                ))}
              </ul>
              <Link href={`/${s.slug}`} className="explore">
                Browse all {s.count} {s.label.toLowerCase()} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}