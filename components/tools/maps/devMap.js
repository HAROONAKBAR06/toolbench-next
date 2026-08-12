import dynamic from "next/dynamic";
export const COMPONENT_MAP = {
  JsonFormatter: dynamic(() => import("@/components/tools/dev/JsonFormatter")),
  RegexTester: dynamic(() => import("@/components/tools/dev/RegexTester")),
  HashGenerator: dynamic(() => import("@/components/tools/dev/HashGenerator")),
  UrlEncodeDecode: dynamic(() => import("@/components/tools/dev/UrlEncodeDecode")),
  HtmlEntityEncodeDecode: dynamic(() => import("@/components/tools/dev/HtmlEntityEncodeDecode")),
  TimestampConverter: dynamic(() => import("@/components/tools/dev/TimestampConverter")),
  JwtDecoder: dynamic(() => import("@/components/tools/dev/JwtDecoder")),
  CssMinifier: dynamic(() => import("@/components/tools/dev/CssMinifier")),
  MarkdownToHtml: dynamic(() => import("@/components/tools/dev/MarkdownToHtml")),
};
