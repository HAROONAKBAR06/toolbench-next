import { getToolsBySection } from "@/data/registry";
import { COMPONENT_MAP } from "@/components/tools/maps/pdfMap";
import ToolPageTemplate, { buildToolMetadata } from "@/components/ToolPageTemplate";

export function generateStaticParams() {
  return getToolsBySection("pdf").map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  return buildToolMetadata("pdf", params.slug);
}

export default function Page({ params }) {
  return <ToolPageTemplate section="pdf" slug={params.slug} componentMap={COMPONENT_MAP} />;
}
