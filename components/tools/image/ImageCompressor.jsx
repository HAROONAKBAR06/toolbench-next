"use client";
import { useState } from "react";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { downloadBlob, formatBytes } from "@/lib/browserUtils";
import { loadImageFile } from "@/lib/imageUtils";

export default function ImageCompressor() {
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const [quality, setQuality] = useState(75);
  const [status, setStatus] = useState({ text: "", error: false });
  const [resultUrl, setResultUrl] = useState(null);
  const [resultSize, setResultSize] = useState(null);

  async function addFiles(files) {
    const f = files[0];
    if (!f) return;
    setFile(f);
    const l = await loadImageFile(f);
    setLoaded(l);
    setResultUrl(null);
  }

  function runCompress() {
    if (!loaded) return;
    setStatus({ text: "Compressing…", error: false });
    const canvas = document.createElement("canvas");
    canvas.width = loaded.img.naturalWidth;
    canvas.height = loaded.img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(loaded.img, 0, 0);
    canvas.toBlob((blob) => {
      if (!blob) { setStatus({ text: "Compression failed.", error: true }); return; }
      downloadBlob(blob, "compressed.jpg");
      setResultUrl(URL.createObjectURL(blob));
      setResultSize(blob.size);
      setStatus({ text: "Done — compressed.jpg downloaded.", error: false });
    }, "image/jpeg", quality / 100);
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Upload an image and adjust quality to shrink its file size.
      </p>
      <Dropzone accept="image/*" hint="JPG, PNG, or WEBP" files={file ? [file] : []} onFiles={addFiles} onRemove={() => { setFile(null); setLoaded(null); }} />
      {loaded && (
        <div className="field-row">
          <div className="field" style={{ flex: 2 }}>
            <label>Quality: {quality}%</label>
            <input type="range" min="10" max="100" value={quality} onChange={(e) => setQuality(parseInt(e.target.value))} />
          </div>
        </div>
      )}
      <div className="actions-row">
        <button className="btn btn-primary" disabled={!loaded} onClick={runCompress}>Compress &amp; Download</button>
        <StatusMsg text={status.text} error={status.error} />
      </div>
      {resultUrl && (
        <div style={{ marginTop: 14 }}>
          <p style={{ fontSize: 13, marginBottom: 8 }}>
            Original: <b>{formatBytes(file.size)}</b> · New: <b>{formatBytes(resultSize)}</b> · Saved: <b>{Math.max(0, Math.round((1 - resultSize / file.size) * 100))}%</b>
          </p>
          <img src={resultUrl} alt="Compressed preview" style={{ maxWidth: 320, borderRadius: 4, border: "1px solid var(--paper-line)" }} />
        </div>
      )}
    </div>
  );
}
