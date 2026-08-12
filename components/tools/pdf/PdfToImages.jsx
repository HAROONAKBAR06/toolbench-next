"use client";
import { useState } from "react";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { loadPdfJs } from "@/lib/pdfjsLoader";

export default function PdfToImages() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ text: "", error: false });
  const [busy, setBusy] = useState(false);
  const [pages, setPages] = useState([]);

  function addFiles(files) {
    if (files[0] && files[0].type === "application/pdf") setFile(files[0]);
  }

  async function runConvert() {
    setBusy(true);
    setStatus({ text: "Rendering pages…", error: false });
    setPages([]);
    try {
      const pdfjsLib = await loadPdfJs();
      const bytes = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
      const results = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.4 });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d");
        await page.render({ canvasContext: ctx, viewport }).promise;
        results.push({ page: i, src: canvas.toDataURL("image/png") });
      }
      setPages(results);
      setStatus({ text: `Done — ${pdf.numPages} page(s) rendered below.`, error: false });
    } catch (e) {
      console.error(e);
      setStatus({ text: "Could not render that PDF.", error: true });
    }
    setBusy(false);
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Render each page of a PDF as a downloadable PNG image.
      </p>
      <Dropzone accept="application/pdf" hint=".pdf — one file" files={file ? [file] : []} onFiles={addFiles} onRemove={() => setFile(null)} />
      <div className="actions-row">
        <button className="btn btn-primary" disabled={!file || busy} onClick={runConvert}>
          Convert Pages
        </button>
        <StatusMsg text={status.text} error={status.error} />
      </div>
      {pages.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 18 }}>
          {pages.map((p) => (
            <div key={p.page} style={{ textAlign: "center" }}>
              <img src={p.src} alt={`Page ${p.page}`} style={{ maxWidth: 160, border: "1px solid var(--paper-line)", borderRadius: 4 }} />
              <a href={p.src} download={`page-${p.page}.png`} className="btn btn-outline" style={{ marginTop: 8, fontSize: 11, padding: "6px 10px" }}>
                Page {p.page}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
