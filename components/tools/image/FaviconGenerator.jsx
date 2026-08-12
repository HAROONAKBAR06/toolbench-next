"use client";
import { useState } from "react";
import Dropzone from "@/components/ui/Dropzone";
import StatusMsg from "@/components/ui/StatusMsg";
import { loadImageFile } from "@/lib/imageUtils";

const SIZES = [16, 32, 48, 64, 128, 180, 192, 512];

export default function FaviconGenerator() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ text: "", error: false });
  const [results, setResults] = useState([]);

  async function addFiles(files) {
    const f = files[0];
    if (!f) return;
    setFile(f);
    setStatus({ text: "Generating sizes…", error: false });
    try {
      const { img } = await loadImageFile(f);
      const outputs = SIZES.map((size) => {
        const canvas = document.createElement("canvas");
        canvas.width = size; canvas.height = size;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, size, size);
        return { size, src: canvas.toDataURL("image/png") };
      });
      setResults(outputs);
      setStatus({ text: "Done — download the sizes you need below.", error: false });
    } catch (e) {
      console.error(e);
      setStatus({ text: "Could not read that image.", error: true });
    }
  }

  return (
    <div className="tool-widget">
      <p className="tool-desc" style={{ marginBottom: 14 }}>
        Upload a square logo to generate every standard favicon size.
      </p>
      <Dropzone accept="image/*" hint="Square logo, 512×512px or larger recommended" files={file ? [file] : []} onFiles={addFiles} onRemove={() => { setFile(null); setResults([]); }} />
      <StatusMsg text={status.text} error={status.error} />
      {results.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 14 }}>
          {results.map((r) => (
            <div key={r.size} style={{ textAlign: "center" }}>
              <img src={r.src} alt={`${r.size}x${r.size}`} width={Math.min(r.size, 64)} height={Math.min(r.size, 64)} style={{ border: "1px solid var(--paper-line)", borderRadius: 4 }} />
              <a href={r.src} download={`favicon-${r.size}.png`} className="btn btn-outline" style={{ marginTop: 8, fontSize: 11, padding: "6px 10px", display: "block" }}>
                {r.size}×{r.size}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
