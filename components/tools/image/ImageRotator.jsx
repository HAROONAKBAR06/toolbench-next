"use client";
import { useState } from "react";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { downloadBlob } from "@/lib/browserUtils";
import { loadImageFile } from "@/lib/imageUtils";

export default function ImageRotator() {
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const [deg, setDeg] = useState(90);
  const [status, setStatus] = useState({ text: "", error: false });
  const [resultUrl, setResultUrl] = useState(null);

  async function addFiles(files) {
    const f = files[0];
    if (!f) return;
    setFile(f);
    const l = await loadImageFile(f);
    setLoaded(l);
    setResultUrl(null);
  }

  function runRotate() {
    if (!loaded) return;
    const { naturalWidth: w, naturalHeight: h } = loaded.img;
    const swap = deg === 90 || deg === 270;
    const canvas = document.createElement("canvas");
    canvas.width = swap ? h : w;
    canvas.height = swap ? w : h;
    const ctx = canvas.getContext("2d");
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.drawImage(loaded.img, -w / 2, -h / 2);
    canvas.toBlob((blob) => {
      downloadBlob(blob, "rotated.png");
      setResultUrl(URL.createObjectURL(blob));
      setStatus({ text: "Done — rotated.png downloaded.", error: false });
    }, "image/png");
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>Upload an image and choose a rotation angle.</p>
      <Dropzone accept="image/*" hint="Any image" files={file ? [file] : []} onFiles={addFiles} onRemove={() => { setFile(null); setLoaded(null); }} />
      {loaded && (
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
      )}
      <div className="actions-row">
        <button className="btn btn-primary" disabled={!loaded} onClick={runRotate}>Rotate &amp; Download</button>
        <StatusMsg text={status.text} error={status.error} />
      </div>
      {resultUrl && <img src={resultUrl} alt="Rotated preview" style={{ maxWidth: 320, marginTop: 14, borderRadius: 4, border: "1px solid var(--paper-line)" }} />}
    </div>
  );
}
