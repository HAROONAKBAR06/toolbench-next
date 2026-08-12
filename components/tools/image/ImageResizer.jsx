"use client";
import { useState, useRef } from "react";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { downloadBlob } from "@/lib/browserUtils";
import { loadImageFile } from "@/lib/imageUtils";

export default function ImageResizer() {
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [lock, setLock] = useState(true);
  const [status, setStatus] = useState({ text: "", error: false });
  const [resultUrl, setResultUrl] = useState(null);
  const ratio = useRef(1);

  async function addFiles(files) {
    const f = files[0];
    if (!f) return;
    setFile(f);
    const l = await loadImageFile(f);
    setLoaded(l);
    ratio.current = l.img.naturalWidth / l.img.naturalHeight;
    setW(l.img.naturalWidth);
    setH(l.img.naturalHeight);
    setResultUrl(null);
  }

  function onW(v) {
    setW(v);
    if (lock && ratio.current) setH(Math.round(v / ratio.current));
  }
  function onH(v) {
    setH(v);
    if (lock && ratio.current) setW(Math.round(v * ratio.current));
  }

  function runResize() {
    if (!loaded || !w || !h) { setStatus({ text: "Enter a valid width and height.", error: true }); return; }
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(loaded.img, 0, 0, w, h);
    canvas.toBlob((blob) => {
      downloadBlob(blob, "resized.png");
      setResultUrl(URL.createObjectURL(blob));
      setStatus({ text: `Done — resized.png (${w}×${h}) downloaded.`, error: false });
    }, "image/png");
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>Upload an image and set exact pixel dimensions.</p>
      <Dropzone accept="image/*" hint="JPG, PNG, or WEBP" files={file ? [file] : []} onFiles={addFiles} onRemove={() => { setFile(null); setLoaded(null); }} />
      {loaded && (
        <>
          <div className="field-row">
            <div className="field">
              <label>Width (px)</label>
              <input type="number" value={w} onChange={(e) => onW(parseInt(e.target.value) || "")} />
            </div>
            <div className="field">
              <label>Height (px)</label>
              <input type="number" value={h} onChange={(e) => onH(parseInt(e.target.value) || "")} />
            </div>
          </div>
          <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, marginBottom: 14, textTransform: "none" }}>
            <input type="checkbox" checked={lock} onChange={(e) => setLock(e.target.checked)} style={{ width: "auto" }} />
            Lock aspect ratio
          </label>
        </>
      )}
      <div className="actions-row">
        <button className="btn btn-primary" disabled={!loaded} onClick={runResize}>Resize &amp; Download</button>
        <StatusMsg text={status.text} error={status.error} />
      </div>
      {resultUrl && <img src={resultUrl} alt="Resized preview" style={{ maxWidth: 320, marginTop: 14, borderRadius: 4, border: "1px solid var(--paper-line)" }} />}
    </div>
  );
}
