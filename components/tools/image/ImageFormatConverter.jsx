"use client";
import { useState } from "react";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { downloadBlob } from "@/lib/browserUtils";
import { loadImageFile, extFor } from "@/lib/imageUtils";
import { IMAGE_FORMATS } from "@/data/pairFamilies";

export default function ImageFormatConverter({ fromFormat, toFormat }) {
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const [status, setStatus] = useState({ text: "", error: false });
  const [resultUrl, setResultUrl] = useState(null);
  const targetMime = IMAGE_FORMATS[toFormat].mime;

  async function addFiles(files) {
    const f = files[0];
    if (!f) return;
    setFile(f);
    const l = await loadImageFile(f);
    setLoaded(l);
    setResultUrl(null);
  }

  function runConvert() {
    if (!loaded) return;
    const canvas = document.createElement("canvas");
    canvas.width = loaded.img.naturalWidth;
    canvas.height = loaded.img.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (targetMime === "image/jpeg") {
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(loaded.img, 0, 0);
    canvas.toBlob((blob) => {
      if (!blob) { setStatus({ text: "This browser cannot export that format.", error: true }); return; }
      const filename = `converted.${extFor(targetMime)}`;
      downloadBlob(blob, filename);
      setResultUrl(URL.createObjectURL(blob));
      setStatus({ text: `Done — ${filename} downloaded.`, error: false });
    }, targetMime, 0.92);
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Upload a {IMAGE_FORMATS[fromFormat].label} image to convert it to {IMAGE_FORMATS[toFormat].label}.
      </p>
      <Dropzone accept="image/*" hint={`${IMAGE_FORMATS[fromFormat].label} image`} files={file ? [file] : []} onFiles={addFiles} onRemove={() => { setFile(null); setLoaded(null); }} />
      <div className="actions-row">
        <button className="btn btn-primary" disabled={!loaded} onClick={runConvert}>
          Convert to {IMAGE_FORMATS[toFormat].label}
        </button>
        <StatusMsg text={status.text} error={status.error} />
      </div>
      {resultUrl && <img src={resultUrl} alt="Converted preview" style={{ maxWidth: 320, marginTop: 14, borderRadius: 4, border: "1px solid var(--paper-line)" }} />}
    </div>
  );
}
