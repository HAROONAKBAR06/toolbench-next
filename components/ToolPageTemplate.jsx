import Link from "next/link";
import { notFound } from "next/navigation";
import { SECTIONS, getToolBySlug, getRelatedTools } from "@/data/registry";
import ArticleContent from "@/components/ArticleContent";

export function buildToolMetadata(section, slug) {
  const tool = getToolBySlug(section, slug);
  if (!tool) return {};
  const url = `https://www.toolbench.cc/${tool.section}/${tool.slug}`;
  return {
    title: `${tool.title} Online Free`,
    description: tool.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${tool.title} — Free Online Tool | ToolBench`,
      description: tool.metaDescription,
      url,
      type: "website",
    },
    twitter: { card: "summary", title: tool.title, description: tool.metaDescription },
  };
}

export default function ToolPageTemplate({ section, slug, componentMap }) {
  const tool = getToolBySlug(section, slug);
  if (!tool) notFound();

  const Component = componentMap[tool.component];
  const content = tool.content();
  const related = getRelatedTools(tool, 6);
  const sectionInfo = SECTIONS[tool.section];
  const url = `https://www.toolbench.cc/${tool.section}/${tool.slug}`;
  const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.toolbench.cc/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: sectionInfo.label,
      item: https://www.toolbench.cc/${tool.section},
    },
    {
      "@type": "ListItem",
      position: 3,
      name: tool.title,
      item: url,
    },
  ],
};

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.title,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (runs in browser)",
    description: tool.metaDescription,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url,
  };

  const faqSection = content.sections.find((s) => s.faq);
  const faqJsonLd = faqSection ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSection.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbJsonLd),
  }}
/>
      <section className="section" style={{ paddingTop: 40, paddingBottom: 0 }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href={`/${tool.section}`}>{sectionInfo.label}</Link>
            <span className="sep">/</span>
            <span>{tool.title}</span>
          </div>
          <div className="spec-tag">{sectionInfo.label.toUpperCase()}</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", marginBottom: 10, maxWidth: 760 }}>{tool.title}</h1>
          <p style={{ color: "#4B5262", fontSize: 16, maxWidth: 680, marginBottom: 32 }}>{tool.tag}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          {Component ? <Component {...(tool.props || {})} /> : (
            <div className="tool-widget"><p>This tool is coming soon.</p></div>
          )}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ArticleContent content={content} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <h2 style={{ fontSize: 20, marginBottom: 4 }}>More {sectionInfo.label.toLowerCase()}</h2>
            <div className="related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/${r.section}/${r.slug}`}>{r.title}</Link>
              ))}
            </div>
            <p style={{ marginTop: 18 }}>
              <Link href={`/${tool.section}`} style={{ color: "var(--blue-line)", fontWeight: 600, fontSize: 14 }}>
                View all {sectionInfo.label.toLowerCase()} →
              </Link>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
