import dynamic from "next/dynamic";
export const COMPONENT_MAP = {
  WordCounter: dynamic(() => import("@/components/tools/text/WordCounter")),
  LoremIpsumGenerator: dynamic(() => import("@/components/tools/text/LoremIpsumGenerator")),
  TextDiffChecker: dynamic(() => import("@/components/tools/text/TextDiffChecker")),
  FindAndReplace: dynamic(() => import("@/components/tools/text/FindAndReplace")),
  TextCaseConverter: dynamic(() => import("@/components/tools/text/TextCaseConverter")),
  TextReverser: dynamic(() => import("@/components/tools/text/TextReverser")),
  RemoveLineBreaks: dynamic(() => import("@/components/tools/text/RemoveLineBreaks")),
  RemoveDuplicateLines: dynamic(() => import("@/components/tools/text/RemoveDuplicateLines")),
  SortLines: dynamic(() => import("@/components/tools/text/SortLines")),
  RemoveExtraSpaces: dynamic(() => import("@/components/tools/text/RemoveExtraSpaces")),
  SlugGenerator: dynamic(() => import("@/components/tools/text/SlugGenerator")),
};
