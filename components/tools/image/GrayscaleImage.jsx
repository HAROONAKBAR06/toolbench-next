"use client";
import { useState } from "react";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { downloadBlob } from "@/lib/browserUtils";
import { loadImageFile } from "@/lib/imageUtils";

export default function GrayscaleImage() {
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const [status, setStatus] = useState({ text: "", error: false });
  const [resultUrl, setResultUrl] = useState(null);

  async function addFiles(files) {
    const f = files[0];
    if (!f) return;
    setFile(f);
    const l = await loadImageFile(f);
    setLoaded(l);
    runConvert(l);
  }

  function runConvert(l) {
    const canvas = document.createElement("canvas");
    canvas.width = l.img.naturalWidth;
    canvas.height = l.img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(l.img, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const d = imageData.data;
    for (let i = 0; i < d.length; i += 4) {
      const avg = d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114;
      d[i] = d[i + 1] = d[i + 2] = avg;
    }
    ctx.putImageData(imageData, 0, 0);
    canvas.toBlob((blob) => {
      setResultUrl(URL.createObjectURL(blob));
      setStatus({ text: "Preview ready — click download to save.", error: false });
      canvas.toBlob((b2) => { canvas.dataset.blobReady = "1"; }, "image/png");
    }, "image/png");
  }

  function download() {
    if (!resultUrl) return;
    fetch(resultUrl).then((r) => r.blob()).then((blob) => downloadBlob(blob, "grayscale.png"));
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>Upload a color image to convert it to grayscale.</p>
      <Dropzone accept="image/*" hint="Any color image" files={file ? [file] : []} onFiles={addFiles} onRemove={() => { setFile(null); setLoaded(null); setResultUrl(null); }} />
      {resultUrl && (
        <>
          <img src={resultUrl} alt="Grayscale preview" style={{ maxWidth: 320, marginTop: 14, borderRadius: 4, border: "1px solid var(--paper-line)" }} />
          <div className="actions-row" style={{ marginTop: 10 }}>
            <button className="btn btn-primary" onClick={download}>Download</button>
            <StatusMsg text={status.text} error={status.error} />
          </div>
        </>
      )}
    </div>
  );
}
