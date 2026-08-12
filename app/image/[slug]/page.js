import { getToolsBySection } from "@/data/registry";
import { COMPONENT_MAP } from "@/components/tools/maps/imageMap";
import ToolPageTemplate, { buildToolMetadata } from "@/components/ToolPageTemplate";

export function generateStaticParams() {
  return getToolsBySection("image").map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  return buildToolMetadata("image", params.slug);
}

export default function Page({ params }) {
  return <ToolPageTemplate section="image" slug={params.slug} componentMap={COMPONENT_MAP} />;
}
