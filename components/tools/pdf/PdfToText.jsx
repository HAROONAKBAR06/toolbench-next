"use client";
import { useState } from "react";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { loadPdfJs } from "@/lib/pdfjsLoader";
import { copyToClipboard } from "@/lib/browserUtils";

export default function PdfToText() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ text: "", error: false });
  const [busy, setBusy] = useState(false);
  const [output, setOutput] = useState("");

  function addFiles(files) {
    if (files[0] && files[0].type === "application/pdf") setFile(files[0]);
  }

  async function runExtract() {
    setBusy(true);
    setStatus({ text: "Extracting text…", error: false });
    setOutput("");
    try {
      const pdfjsLib = await loadPdfJs();
      const bytes = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
      const full = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items.map((it) => it.str);
        full.push(`--- Page ${i} ---\n${strings.join(" ")}`);
      }
      setOutput(full.join("\n\n"));
      setStatus({ text: `Done — text extracted from ${pdf.numPages} page(s).`, error: false });
    } catch (e) {
      console.error(e);
      setStatus({ text: "Could not extract text from that PDF.", error: true });
    }
    setBusy(false);
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Extract the readable text layer from a PDF so you can copy or search it.
      </p>
      <Dropzone accept="application/pdf" hint=".pdf — one file" files={file ? [file] : []} onFiles={addFiles} onRemove={() => setFile(null)} />
      <div className="actions-row">
        <button className="btn btn-primary" disabled={!file || busy} onClick={runExtract}>
          Extract Text
        </button>
        {output && (
          <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(output)}>
            Copy Text
          </button>
        )}
        <StatusMsg text={status.text} error={status.error} />
      </div>
      {output && (
        <textarea readOnly value={output} rows={14} style={{ width: "100%", marginTop: 14 }} />
      )}
    </div>
  );
}
