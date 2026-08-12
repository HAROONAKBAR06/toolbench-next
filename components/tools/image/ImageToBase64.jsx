"use client";
import { useState } from "react";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { copyToClipboard } from "@/lib/browserUtils";

export default function ImageToBase64() {
  const [file, setFile] = useState(null);
  const [dataUrl, setDataUrl] = useState("");
  const [status, setStatus] = useState({ text: "", error: false });

  function addFiles(files) {
    const f = files[0];
    if (!f) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = () => setDataUrl(reader.result);
    reader.onerror = () => setStatus({ text: "Could not read that image.", error: true });
    reader.readAsDataURL(f);
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Upload an image to get a ready-to-embed Base64 data URI.
      </p>
      <Dropzone accept="image/*" hint="PNG, JPG, WEBP, GIF, or SVG" files={file ? [file] : []} onFiles={addFiles} onRemove={() => { setFile(null); setDataUrl(""); }} />
      <StatusMsg text={status.text} error={status.error} />
      {dataUrl && (
        <>
          <textarea readOnly value={dataUrl} rows={8} style={{ width: "100%", marginTop: 14, fontFamily: "var(--f-mono)", fontSize: 12 }} />
          <div className="actions-row" style={{ marginTop: 10 }}>
            <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(dataUrl)}>Copy</button>
          </div>
        </>
      )}
    </div>
  );
}
