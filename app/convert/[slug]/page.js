import { getToolsBySection } from "@/data/registry";
import { COMPONENT_MAP } from "@/components/tools/maps/convertMap";
import ToolPageTemplate, { buildToolMetadata } from "@/components/ToolPageTemplate";

export function generateStaticParams() {
  return getToolsBySection("convert").map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  return buildToolMetadata("convert", params.slug);
}

export default function Page({ params }) {
  return <ToolPageTemplate section="convert" slug={params.slug} componentMap={COMPONENT_MAP} />;
}
