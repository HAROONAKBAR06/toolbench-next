"use client";
import { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function QrCodeGenerator() {
  const [value, setValue] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!value.trim()) { setDataUrl(""); return; }
    QRCode.toDataURL(value, { width: 320, margin: 1, color: { dark: "#12161F", light: "#FFFFFF" } })
      .then(setDataUrl)
      .catch(() => setDataUrl(""));
  }, [value]);

  return (
    <div className="tool-widget">
      <div className="field">
        <label>Text or link</label>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="https://example.com" />
      </div>
      {dataUrl && (
        <div style={{ marginTop: 18, textAlign: "center" }}>
          <img src={dataUrl} alt="QR code" style={{ width: 220, height: 220, border: "1px solid var(--paper-line)", borderRadius: 4 }} />
          <div style={{ marginTop: 10 }}>
            <a href={dataUrl} download="qrcode.png" className="btn btn-primary">Download PNG</a>
          </div>
        </div>
      )}
    </div>
  );
}
