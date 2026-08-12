"use client";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";

export default function PdfPageCounter() {
  const [file, setFile] = useState(null);
  const [count, setCount] = useState(null);
  const [status, setStatus] = useState({ text: "", error: false });

  async function addFiles(files) {
    const f = files[0];
    if (!f || f.type !== "application/pdf") return;
    setFile(f);
    setCount(null);
    setStatus({ text: "Reading…", error: false });
    try {
      const bytes = await f.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      setCount(doc.getPageCount());
      setStatus({ text: "", error: false });
    } catch (e) {
      console.error(e);
      setStatus({ text: "Could not read that PDF.", error: true });
    }
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Upload a PDF to instantly see its total page count.
      </p>
      <Dropzone accept="application/pdf" hint=".pdf — one file" files={file ? [file] : []} onFiles={addFiles} onRemove={() => { setFile(null); setCount(null); }} />
      <StatusMsg text={status.text} error={status.error} />
      {count !== null && (
        <div className="result-display" style={{ marginTop: 14 }}>
          {count} page{count === 1 ? "" : "s"}
          <small>Total pages in {file?.name}</small>
        </div>
      )}
    </div>
  );
}
