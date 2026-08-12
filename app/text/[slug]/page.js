import { getToolsBySection } from "@/data/registry";
import { COMPONENT_MAP } from "@/components/tools/maps/textMap";
import ToolPageTemplate, { buildToolMetadata } from "@/components/ToolPageTemplate";

export function generateStaticParams() {
  return getToolsBySection("text").map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  return buildToolMetadata("text", params.slug);
}

export default function Page({ params }) {
  return <ToolPageTemplate section="text" slug={params.slug} componentMap={COMPONENT_MAP} />;
}
