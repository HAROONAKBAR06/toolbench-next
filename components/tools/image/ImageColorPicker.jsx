"use client";
import { useState, useRef } from "react";
import Dropzone from "@/components/ui/Dropzone";
import { copyToClipboard } from "@/lib/browserUtils";
import { loadImageFile } from "@/lib/imageUtils";

export default function ImageColorPicker() {
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const [picked, setPicked] = useState(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  async function addFiles(files) {
    const f = files[0];
    if (!f) return;
    setFile(f);
    const l = await loadImageFile(f);
    setLoaded(l);
    setPicked(null);
  }

  function onClickImage(e) {
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();
    const scaleX = loaded.img.naturalWidth / rect.width;
    const scaleY = loaded.img.naturalHeight / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    const canvas = canvasRef.current;
    canvas.width = loaded.img.naturalWidth;
    canvas.height = loaded.img.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(loaded.img, 0, 0);
    const [r, g, b] = ctx.getImageData(x, y, 1, 1).data;
    const hex = "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();
    setPicked({ hex, rgb: `rgb(${r}, ${g}, ${b})` });
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>Upload an image, then click any pixel to sample its color.</p>
      <Dropzone accept="image/*" hint="Any image" files={file ? [file] : []} onFiles={addFiles} onRemove={() => { setFile(null); setLoaded(null); setPicked(null); }} />
      {loaded && (
        <img ref={imgRef} src={loaded.url} alt="Sample" onClick={onClickImage} style={{ maxWidth: 480, marginTop: 14, borderRadius: 4, cursor: "crosshair", border: "1px solid var(--paper-line)" }} />
      )}
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {picked && (
        <div className="result-display" style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 32, height: 32, borderRadius: 4, background: picked.hex, border: "1px solid var(--paper-line)", flexShrink: 0 }} />
          <div>
            <div>{picked.hex} <button className="btn btn-outline copy-btn" style={{ marginLeft: 8 }} onClick={() => copyToClipboard(picked.hex)}>Copy</button></div>
            <small>{picked.rgb}</small>
          </div>
        </div>
      )}
    </div>
  );
}
