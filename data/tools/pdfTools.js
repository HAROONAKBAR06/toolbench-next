import { manualToolContent } from "@/lib/content";

const section = "pdf";

export const pdfTools = [
  {
    slug: "merge-pdf",
    section, title: "Merge PDF", tag: "combine multiple files",
    component: "MergePdf",
    metaDescription: "Merge two or more PDF files into a single document for free, directly in your browser. No upload, no sign-up.",
    content: () => manualToolContent({
      title: "Merge PDF",
      whatItDoes: "The Merge PDF tool combines two or more PDF files into a single document, in the order you select them. It's built for the everyday task of pulling separate PDFs — a cover letter and a resume, a set of scanned receipts, or several report chapters — into one file you can send or archive as a single attachment.",
      howToSteps: [
        "Click the upload area and select two or more PDF files (or drag them in).",
        "Files merge in the order they were added — re-select if you need a different order.",
        "Click \"Merge & Download\" to combine every page into one PDF.",
        "The merged file downloads automatically to your device.",
      ],
      useCases: [
        "Merging a cover letter, resume, and portfolio into one application PDF is one of the most common uses — most application portals only accept a single file.",
        "Combining scanned receipts, invoices, or contracts into one document makes them easier to file, email, or archive than a folder of loose pages.",
        "Students and researchers often merge separate chapter or section PDFs into a single document before printing or submitting coursework.",
        "Businesses use PDF merging to assemble multi-part reports — cover page, appendix, and signed forms — into one client-ready file.",
      ],
      faq: [
        { q: "Is there a limit to how many PDFs I can merge?", a: "There's no hard limit built into the tool — you can select as many PDF files as your browser can comfortably handle at once." },
        { q: "Does merging affect the quality of the original pages?", a: "No. Pages are combined as-is; text, images and formatting inside each PDF stay exactly as they were." },
        { q: "Can I change the order of pages after merging?", a: "Not on this page — reorder by re-selecting your files in the order you want them to appear before merging, or use the Split PDF tool afterward to rearrange sections." },
        { q: "Are my files uploaded to a server?", a: "No. The merge happens entirely in your browser using JavaScript — your PDFs never leave your device." },
      ],
    }),
  },
  {
    slug: "split-pdf",
    section, title: "Split PDF", tag: "extract page ranges",
    component: "SplitPdf",
    metaDescription: "Split a PDF and extract a specific page range into a new file — free, private, and runs in your browser.",
    content: () => manualToolContent({
      title: "Split PDF",
      whatItDoes: "The Split PDF tool pulls a specific range of pages out of a larger PDF and saves them as a new, standalone document. Instead of sending someone an entire 40-page file when they only need pages 3 through 7, you can extract exactly what's needed in a few seconds.",
      howToSteps: [
        "Upload the PDF you want to split.",
        "Enter the starting page number in \"From page\".",
        "Enter the ending page number in \"To page\".",
        "Click \"Split & Download\" to save just that page range as a new PDF.",
      ],
      useCases: [
        "Pulling a single chapter, section, or exhibit out of a long report to share separately.",
        "Extracting a signed page or specific form from a larger scanned document.",
        "Breaking a large PDF into smaller chunks that are easier to email under attachment size limits.",
        "Isolating one invoice or statement from a PDF that contains several months' worth of records.",
      ],
      faq: [
        { q: "Can I extract more than one page range at once?", a: "This tool extracts a single continuous range per run. For multiple separate ranges, run the tool again for each range." },
        { q: "Does page numbering start at 1?", a: "Yes — page 1 is the first page of the uploaded PDF, matching what you'd see in a PDF viewer." },
        { q: "What happens if I enter a page number beyond the document's length?", a: "The tool will only extract pages that exist in the file; double check the \"To page\" value against your PDF's total page count first." },
        { q: "Is the original PDF modified?", a: "No — the original file on your device is untouched. A new file containing only the selected pages is created for download." },
      ],
    }),
  },
  {
    slug: "rotate-pdf",
    section, title: "Rotate PDF", tag: "turn every page",
    component: "RotatePdf",
    metaDescription: "Rotate every page in a PDF by 90, 180, or 270 degrees for free, right in your browser.",
    content: () => manualToolContent({
      title: "Rotate PDF",
      whatItDoes: "The Rotate PDF tool turns every page of a PDF document by 90, 180, or 270 degrees. It's the fix for a document that was scanned sideways or upside down, so it reads correctly on screen and prints the right way up.",
      howToSteps: [
        "Upload the PDF you want to rotate.",
        "Choose a rotation amount — 90°, 180°, or 270° clockwise.",
        "Click \"Rotate & Download\" to apply the rotation to every page.",
        "The corrected PDF downloads automatically.",
      ],
      useCases: [
        "Fixing a scanned document where the scanner fed pages in sideways.",
        "Correcting a PDF exported in landscape when portrait orientation was needed (or vice versa).",
        "Preparing a document for printing where the current orientation would come out upside down.",
        "Standardizing orientation across a batch of scanned pages before merging them into one file.",
      ],
      faq: [
        { q: "Does rotation apply to every page or just one?", a: "This tool rotates every page in the document by the same amount, which covers the common case of a whole document scanned in the wrong orientation." },
        { q: "Can I rotate individual pages differently?", a: "Not on this page — it applies one rotation angle uniformly. For page-specific rotation, split the PDF first and rotate each part separately." },
        { q: "Will rotating affect the PDF's text or image quality?", a: "No — rotation changes the page orientation metadata; the underlying content is not re-rendered or compressed." },
      ],
    }),
  },
  {
    slug: "pdf-to-images",
    section, title: "PDF to Images", tag: "export pages as PNG",
    component: "PdfToImages",
    metaDescription: "Convert every page of a PDF into downloadable PNG images for free, directly in your browser.",
    content: () => manualToolContent({
      title: "PDF to Images",
      whatItDoes: "The PDF to Images tool renders each page of a PDF as a separate PNG image you can download individually. It's useful whenever you need a page as a picture rather than a document — for a slide, a social post, a thumbnail, or embedding in a webpage.",
      howToSteps: [
        "Upload the PDF you want to convert.",
        "Click \"Convert Pages\" and wait while each page renders.",
        "Download each page as a PNG image from the results list.",
      ],
      useCases: [
        "Turning a slide or diagram from a PDF report into an image for a presentation or blog post.",
        "Creating thumbnail previews of document pages for a website or file browser.",
        "Extracting a single page as an image to paste into a chat, email, or design tool that doesn't accept PDFs.",
        "Archiving pages as images when a downstream system only accepts image formats.",
      ],
      faq: [
        { q: "What image format do pages convert to?", a: "Pages are rendered as PNG images, which preserves sharp text and line art without lossy compression artifacts." },
        { q: "Does image quality depend on the original PDF?", a: "Yes — pages are rendered at a resolution based on the PDF's own content, so a high-resolution source PDF produces a clearer image." },
        { q: "Can I convert just one page instead of the whole document?", a: "The tool renders every page; simply download only the page images you need from the results and discard the rest." },
      ],
    }),
  },
  {
    slug: "pdf-to-text",
    section, title: "PDF to Text", tag: "extract readable text",
    component: "PdfToText",
    metaDescription: "Extract the text content from a PDF for free — copy, search, or paste it elsewhere. Runs entirely in your browser.",
    content: () => manualToolContent({
      title: "PDF to Text",
      whatItDoes: "The PDF to Text tool pulls the readable text out of a PDF document so you can copy, search, or paste it into another program. It reads the text layer of the PDF directly, which is faster and more accurate than retyping content by hand.",
      howToSteps: [
        "Upload the PDF you want to extract text from.",
        "Click \"Extract Text\" and wait a moment while it processes.",
        "Review the extracted text in the output box.",
        "Click \"Copy Text\" to copy it to your clipboard.",
      ],
      useCases: [
        "Pulling a paragraph or quote out of a report without retyping it manually.",
        "Getting text from a PDF into a word processor for editing.",
        "Making the content of a PDF searchable by pasting it into a notes app or search tool.",
        "Extracting contract or policy text to review or compare against another version.",
      ],
      faq: [
        { q: "Does this work on scanned PDFs (images of text)?", a: "This tool reads the PDF's embedded text layer. A scanned PDF that's purely an image, with no text layer, won't have extractable text unless it's already been OCR-processed." },
        { q: "Is formatting like bold or bullet points preserved?", a: "The tool extracts plain text content; visual formatting like bold, italics, and columns is not preserved in the output." },
        { q: "Can I extract text from just part of the document?", a: "This tool extracts all text from the file. To isolate a section, use the Split PDF tool first, then extract text from that smaller file." },
      ],
    }),
  },
  {
    slug: "delete-pdf-pages",
    section, title: "Delete PDF Pages", tag: "remove unwanted pages",
    component: "DeletePdfPages",
    metaDescription: "Remove specific pages from a PDF for free, directly in your browser, without uploading your file anywhere.",
    content: () => manualToolContent({
      title: "Delete PDF Pages",
      whatItDoes: "The Delete PDF Pages tool removes one or more specific pages from a PDF, producing a new file with those pages gone and everything else left intact. It's a quick way to strip out a blank page, a duplicate scan, or an outdated section without rebuilding the whole document.",
      howToSteps: [
        "Upload the PDF you want to edit.",
        "Enter the page numbers you want removed, separated by commas (e.g. 2, 5, 9).",
        "Click \"Delete Pages & Download\" to generate the new file.",
        "The resulting PDF, minus the specified pages, downloads automatically.",
      ],
      useCases: [
        "Removing a blank page left over from scanning.",
        "Cutting an outdated cover page before resending a document.",
        "Stripping a confidential internal page before sharing a report externally.",
        "Cleaning up a merged PDF that ended up with an unwanted duplicate page.",
      ],
      faq: [
        { q: "Can I delete a range of pages, not just individual ones?", a: "List each page number you want removed, separated by commas. For a large continuous range, the Split PDF tool (extracting the pages you want to keep) may be quicker." },
        { q: "What happens to the page numbering after deletion?", a: "Remaining pages shift up to fill the gap, so a 10-page document with page 5 removed becomes a 9-page document." },
        { q: "Is this reversible?", a: "The tool creates a new file rather than modifying your original — your original PDF on disk is left untouched." },
      ],
    }),
  },
  {
    slug: "extract-pdf-pages",
    section, title: "Extract PDF Pages", tag: "pull specific pages",
    component: "ExtractPdfPages",
    metaDescription: "Extract specific, non-consecutive pages from a PDF into a new file — free and private, right in your browser.",
    content: () => manualToolContent({
      title: "Extract PDF Pages",
      whatItDoes: "The Extract PDF Pages tool pulls out a custom list of pages — not necessarily consecutive — and saves them as a new PDF. Unlike splitting by range, you can pick pages 2, 5, and 9 in one pass, which is useful when the pages you need are scattered through a longer document.",
      howToSteps: [
        "Upload the source PDF.",
        "Enter the page numbers you want to keep, separated by commas (e.g. 1, 4, 7).",
        "Click \"Extract & Download\" to build the new file.",
        "The extracted pages download as a single new PDF, in the order listed.",
      ],
      useCases: [
        "Pulling only the signature pages out of a long contract for a quick review.",
        "Assembling a custom handout from selected slides across a longer PDF deck.",
        "Collecting specific exhibit pages referenced in a legal or academic document.",
        "Building a condensed version of a report that keeps only the key pages.",
      ],
      faq: [
        { q: "Does the order I list page numbers matter?", a: "Yes — pages are extracted into the new PDF in the order you list them, so you can also use this to reorder select pages." },
        { q: "Can I extract the same page twice?", a: "Yes, listing a page number more than once will include it more than once in the output." },
        { q: "How is this different from Split PDF?", a: "Split PDF extracts one continuous page range; Extract PDF Pages lets you hand-pick any combination of individual pages." },
      ],
    }),
  },
  {
    slug: "pdf-page-counter",
    section, title: "PDF Page Counter", tag: "check total pages",
    component: "PdfPageCounter",
    metaDescription: "Instantly check how many pages are in a PDF file — free, no upload, works entirely in your browser.",
    content: () => manualToolContent({
      title: "PDF Page Counter",
      whatItDoes: "The PDF Page Counter reads a PDF's internal structure and reports its total page count instantly, without opening the file in a full PDF viewer. It's a fast way to confirm a document's length before printing, submitting, or splitting it.",
      howToSteps: [
        "Upload the PDF you want to check.",
        "The page count appears immediately once the file loads.",
        "Use that number to plan printing, splitting, or page-range extraction.",
      ],
      useCases: [
        "Confirming a submission meets a page-count limit before sending it in.",
        "Checking how many print-outs a document will require before hitting print.",
        "Verifying a batch-merged PDF contains the expected total number of pages.",
        "Planning page ranges for the Split or Extract PDF Pages tools ahead of time.",
      ],
      faq: [
        { q: "Does this tool open or display the PDF's content?", a: "No — it only reads the document's internal page structure to count pages; it doesn't render or display the content itself." },
        { q: "Does file size affect how quickly the count appears?", a: "Very large PDFs may take a moment longer to load, but the count itself is calculated almost instantly once the file is read." },
      ],
    }),
  },
];
