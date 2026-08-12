import dynamic from "next/dynamic";
export const COMPONENT_MAP = {
  Base64EncodeDecode: dynamic(() => import("@/components/tools/convert/Base64EncodeDecode")),
  CsvJsonConverter: dynamic(() => import("@/components/tools/convert/CsvJsonConverter")),
  ColorConverter: dynamic(() => import("@/components/tools/convert/ColorConverter")),
  NumberBaseConverter: dynamic(() => import("@/components/tools/convert/NumberBaseConverter")),
  UnitConverter: dynamic(() => import("@/components/tools/convert/UnitConverter")),
};
