import { getToolsBySection } from "@/data/registry";
import { COMPONENT_MAP } from "@/components/tools/maps/generateMap";
import ToolPageTemplate, { buildToolMetadata } from "@/components/ToolPageTemplate";

export function generateStaticParams() {
  return getToolsBySection("generate").map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  return buildToolMetadata("generate", params.slug);
}

export default function Page({ params }) {
  return <ToolPageTemplate section="generate" slug={params.slug} componentMap={COMPONENT_MAP} />;
}
