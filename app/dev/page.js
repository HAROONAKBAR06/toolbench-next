import Link from "next/link";
import { SECTIONS, getToolsBySection } from "@/data/registry";

const SECTION_KEY = "dev";

export async function generateMetadata() {
  const info = SECTIONS[SECTION_KEY];
  const tools = getToolsBySection(SECTION_KEY);
  const url = `https://www.toolbench.cc/${SECTION_KEY}`;
  return {
    title: `${info.label} — ${tools.length}+ Free Tools`,
    description: `${info.description} Browse all ${tools.length} free ${info.label.toLowerCase()} on ToolBench — no sign-up, runs in your browser.`,
    alternates: { canonical: url },
  };
}

export default function CategoryPage() {
  const info = SECTIONS[SECTION_KEY];
  const tools = getToolsBySection(SECTION_KEY);

  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span>{info.label}</span>
        </div>
        <div className="section-head">
          <div className="spec-tag">{tools.length}+ TOOLS</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>{info.label}</h1>
          <p>{info.description}</p>
        </div>

        <div className="pill-nav">
          {Object.values(SECTIONS).map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className={s.slug === SECTION_KEY ? "active" : ""}>
              {s.label}
            </Link>
          ))}
        </div>

        <div className="section-tools-grid">
          {tools.map((t) => (
            <div className="section-tool-card" key={t.slug}>
              <h3>{t.title}</h3>
              <p>{t.tag}</p>
              <Link href={`/${t.section}/${t.slug}`} className="explore">Open tool →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
