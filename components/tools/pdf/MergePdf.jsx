"use client";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { downloadBlob } from "@/lib/browserUtils";

export default function MergePdf() {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState({ text: "", error: false });
  const [busy, setBusy] = useState(false);

  function addFiles(newFiles) {
    setFiles((f) => [...f, ...newFiles.filter((nf) => nf.type === "application/pdf")]);
  }
  function removeFile(idx) {
    setFiles((f) => f.filter((_, i) => i !== idx));
  }

  async function runMerge() {
    setBusy(true);
    setStatus({ text: "Merging…", error: false });
    try {
      const merged = await PDFDocument.create();
      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const doc = await PDFDocument.load(bytes);
        const pages = await merged.copyPages(doc, doc.getPageIndices());
        pages.forEach((p) => merged.addPage(p));
      }
      const outBytes = await merged.save();
      downloadBlob(new Blob([outBytes], { type: "application/pdf" }), "merged.pdf");
      setStatus({ text: "Done — merged.pdf downloaded.", error: false });
    } catch (e) {
      console.error(e);
      setStatus({ text: "Something went wrong merging those files.", error: true });
    }
    setBusy(false);
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Choose two or more PDF files. They'll be combined in the order shown below.
      </p>
      <Dropzone accept="application/pdf" multiple hint=".pdf — any number of files" files={files} onFiles={addFiles} onRemove={removeFile} />
      <div className="actions-row" style={{ marginTop: 14 }}>
        <button className="btn btn-primary" disabled={files.length < 2 || busy} onClick={runMerge}>
          Merge &amp; Download
        </button>
        <StatusMsg text={status.text} error={status.error} />
      </div>
    </div>
  );
}
