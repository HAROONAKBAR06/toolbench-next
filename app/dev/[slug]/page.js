import { getToolsBySection } from "@/data/registry";
import { COMPONENT_MAP } from "@/components/tools/maps/devMap";
import ToolPageTemplate, { buildToolMetadata } from "@/components/ToolPageTemplate";

export function generateStaticParams() {
  return getToolsBySection("dev").map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  return buildToolMetadata("dev", params.slug);
}

export default function Page({ params }) {
  return <ToolPageTemplate section="dev" slug={params.slug} componentMap={COMPONENT_MAP} />;
}
