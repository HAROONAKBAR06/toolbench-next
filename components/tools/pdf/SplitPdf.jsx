"use client";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { downloadBlob } from "@/lib/browserUtils";

export default function SplitPdf() {
  const [file, setFile] = useState(null);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(1);
  const [status, setStatus] = useState({ text: "", error: false });
  const [busy, setBusy] = useState(false);

  function addFiles(files) {
    if (files[0] && files[0].type === "application/pdf") setFile(files[0]);
  }

  async function runSplit() {
    setBusy(true);
    setStatus({ text: "Splitting…", error: false });
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      const pageCount = doc.getPageCount();
      const f = Math.max(1, from || 1);
      const t = Math.min(pageCount, to || pageCount);
      if (f > t) throw new Error("range");
      const out = await PDFDocument.create();
      const indices = [];
      for (let i = f - 1; i <= t - 1; i++) indices.push(i);
      const pages = await out.copyPages(doc, indices);
      pages.forEach((p) => out.addPage(p));
      const outBytes = await out.save();
      downloadBlob(new Blob([outBytes], { type: "application/pdf" }), "split.pdf");
      setStatus({ text: `Done — pages ${f}–${t} downloaded.`, error: false });
    } catch (e) {
      console.error(e);
      setStatus({ text: "Check your page range and try again.", error: true });
    }
    setBusy(false);
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Upload one PDF, choose a page range, and download just those pages as a new file.
      </p>
      <Dropzone accept="application/pdf" hint=".pdf — one file" files={file ? [file] : []} onFiles={addFiles} onRemove={() => setFile(null)} />
      <div className="field-row">
        <div className="field">
          <label>From page</label>
          <input type="number" min="1" value={from} onChange={(e) => setFrom(parseInt(e.target.value) || 1)} />
        </div>
        <div className="field">
          <label>To page</label>
          <input type="number" min="1" value={to} onChange={(e) => setTo(parseInt(e.target.value) || 1)} />
        </div>
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" disabled={!file || busy} onClick={runSplit}>
          Split &amp; Download
        </button>
        <StatusMsg text={status.text} error={status.error} />
      </div>
    </div>
  );
}
