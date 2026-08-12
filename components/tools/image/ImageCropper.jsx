"use client";
import { useState, useRef, useEffect } from "react";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { downloadBlob } from "@/lib/browserUtils";
import { loadImageFile } from "@/lib/imageUtils";

export default function ImageCropper() {
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const [status, setStatus] = useState({ text: "", error: false });
  const [box, setBox] = useState({ x: 20, y: 20, w: 60, h: 60 }); // percentages
  const containerRef = useRef(null);
  const dragState = useRef(null);

  async function addFiles(files) {
    const f = files[0];
    if (!f) return;
    setFile(f);
    const l = await loadImageFile(f);
    setLoaded(l);
    setBox({ x: 10, y: 10, w: 80, h: 80 });
  }

  function onMouseDown(e) {
    const rect = containerRef.current.getBoundingClientRect();
    dragState.current = {
      startX: e.clientX, startY: e.clientY,
      origBox: { ...box }, rectW: rect.width, rectH: rect.height,
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }
  function onMouseMove(e) {
    const d = dragState.current;
    if (!d) return;
    const dxPct = ((e.clientX - d.startX) / d.rectW) * 100;
    const dyPct = ((e.clientY - d.startY) / d.rectH) * 100;
    setBox((b) => ({
      ...b,
      x: Math.min(100 - d.origBox.w, Math.max(0, d.origBox.x + dxPct)),
      y: Math.min(100 - d.origBox.h, Math.max(0, d.origBox.y + dyPct)),
    }));
  }
  function onMouseUp() {
    dragState.current = null;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }

  function runCrop() {
    if (!loaded) return;
    const nw = loaded.img.naturalWidth, nh = loaded.img.naturalHeight;
    const sx = (box.x / 100) * nw, sy = (box.y / 100) * nh;
    const sw = (box.w / 100) * nw, sh = (box.h / 100) * nh;
    const canvas = document.createElement("canvas");
    canvas.width = sw; canvas.height = sh;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(loaded.img, sx, sy, sw, sh, 0, 0, sw, sh);
    canvas.toBlob((blob) => {
      downloadBlob(blob, "cropped.png");
      setStatus({ text: "Done — cropped.png downloaded.", error: false });
    }, "image/png");
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>Upload an image, drag the box, then crop.</p>
      <Dropzone accept="image/*" hint="Any image" files={file ? [file] : []} onFiles={addFiles} onRemove={() => { setFile(null); setLoaded(null); }} />
      {loaded && (
        <div ref={containerRef} style={{ position: "relative", marginTop: 14, maxWidth: 480, userSelect: "none" }}>
          <img src={loaded.url} alt="To crop" style={{ width: "100%", display: "block", borderRadius: 4 }} draggable={false} />
          <div
            onMouseDown={onMouseDown}
            style={{
              position: "absolute", left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%`,
              border: "2px dashed var(--amber)", background: "rgba(232,163,61,0.15)", cursor: "move",
            }}
          />
        </div>
      )}
      <div className="actions-row" style={{ marginTop: 14 }}>
        <button className="btn btn-primary" disabled={!loaded} onClick={runCrop}>Crop &amp; Download</button>
        <StatusMsg text={status.text} error={status.error} />
      </div>
    </div>
  );
}
