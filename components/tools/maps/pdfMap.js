import dynamic from "next/dynamic";
export const COMPONENT_MAP = {
  MergePdf: dynamic(() => import("@/components/tools/pdf/MergePdf")),
  SplitPdf: dynamic(() => import("@/components/tools/pdf/SplitPdf")),
  RotatePdf: dynamic(() => import("@/components/tools/pdf/RotatePdf")),
  PdfToImages: dynamic(() => import("@/components/tools/pdf/PdfToImages")),
  PdfToText: dynamic(() => import("@/components/tools/pdf/PdfToText")),
  DeletePdfPages: dynamic(() => import("@/components/tools/pdf/DeletePdfPages")),
  ExtractPdfPages: dynamic(() => import("@/components/tools/pdf/ExtractPdfPages")),
  PdfPageCounter: dynamic(() => import("@/components/tools/pdf/PdfPageCounter")),
};
