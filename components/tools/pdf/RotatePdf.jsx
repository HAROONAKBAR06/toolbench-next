"use client";
import { useState } from "react";
import { PDFDocument, degrees } from "pdf-lib";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { downloadBlob } from "@/lib/browserUtils";

export default function RotatePdf() {
  const [file, setFile] = useState(null);
  const [deg, setDeg] = useState(90);
  const [status, setStatus] = useState({ text: "", error: false });
  const [busy, setBusy] = useState(false);

  function addFiles(files) {
    if (files[0] && files[0].type === "application/pdf") setFile(files[0]);
  }

  async function runRotate() {
    setBusy(true);
    setStatus({ text: "Rotating…", error: false });
    try {
      const bytes = await file.arrayBuffer();
      const doc = await PDFDocument.load(bytes);
      doc.getPages().forEach((page) => {
        const current = page.getRotation().angle;
        page.setRotation(degrees((current + deg) % 360));
      });
      const outBytes = await doc.save();
      downloadBlob(new Blob([outBytes], { type: "application/pdf" }), "rotated.pdf");
      setStatus({ text: "Done — rotated.pdf downloaded.", error: false });
    } catch (e) {
      console.error(e);
      setStatus({ text: "Something went wrong rotating that file.", error: true });
    }
    setBusy(false);
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Rotate every page in a PDF by 90, 180 or 270 degrees, then download the result.
      </p>
      <Dropzone accept="application/pdf" hint=".pdf — one file" files={file ? [file] : []} onFiles={addFiles} onRemove={() => setFile(null)} />
      <div className="field-row">
        <div className="field">
          <label>Rotation</label>
          <select value={deg} onChange={(e) => setDeg(parseInt(e.target.value))}>
            <option value="90">90° clockwise</option>
            <option value="180">180°</option>
            <option value="270">270° clockwise</option>
          </select>
        </div>
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" disabled={!file || busy} onClick={runRotate}>
          Rotate &amp; Download
        </button>
        <StatusMsg text={status.text} error={status.error} />
      </div>
    </div>
  );
}
