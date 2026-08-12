"use client";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { downloadBlob } from "@/lib/browserUtils";

export default function DeletePdfPages() {
  const [file, setFile] = useState(null);
  const [pagesInput, setPagesInput] = useState("");
  const [status, setStatus] = useState({ text: "", error: false });
  const [busy, setBusy] = useState(false);

  function addFiles(files) {
    if (files[0] && files[0].type === "application/pdf") setFile(files[0]);
  }

  async function runDelete() {
    setBusy(true);
    setStatus({ text: "Removing pages…", error: false });
    try {
      const toRemove = new Set(
        pagesInput.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => !Number.isNaN(n))
      );
      if (toRemove.size === 0) throw new Error("no pages specified");
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const pageCount = doc.getPageCount();
      const keepIndices = [];
      for (let i = 0; i < pageCount; i++) {
        if (!toRemove.has(i + 1)) keepIndices.push(i);
      }
      if (keepIndices.length === 0) throw new Error("would remove all pages");
      const out = await PDFDocument.create();
      const pages = await out.copyPages(doc, keepIndices);
      pages.forEach((p) => out.addPage(p));
      const outBytes = await out.save();
      downloadBlob(new Blob([outBytes], { type: "application/pdf" }), "pages-removed.pdf");
      setStatus({ text: `Done — removed ${toRemove.size} page(s).`, error: false });
    } catch (e) {
      console.error(e);
      setStatus({ text: "Check your page numbers and try again.", error: true });
    }
    setBusy(false);
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Upload a PDF, list the page numbers to remove, and download the cleaned-up file.
      </p>
      <Dropzone accept="application/pdf" hint=".pdf — one file" files={file ? [file] : []} onFiles={addFiles} onRemove={() => setFile(null)} />
      <div className="field-row">
        <div className="field" style={{ flex: 2 }}>
          <label>Pages to delete (comma-separated)</label>
          <input type="text" placeholder="e.g. 2, 5, 9" value={pagesInput} onChange={(e) => setPagesInput(e.target.value)} />
        </div>
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" disabled={!file || !pagesInput || busy} onClick={runDelete}>
          Delete Pages &amp; Download
        </button>
        <StatusMsg text={status.text} error={status.error} />
      </div>
    </div>
  );
}
