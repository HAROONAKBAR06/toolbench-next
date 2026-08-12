"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

export default function HexColorGenerator() {
  const [hex, setHex] = useState(null);

  function generate() {
    const arr = new Uint8Array(3);
    crypto.getRandomValues(arr);
    setHex("#" + Array.from(arr).map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase());
  }

  return (
    <div className="tool-widget">
      <div className="actions-row">
        <button className="btn btn-primary" onClick={generate}>Generate Random Color</button>
        {hex && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(hex)}>Copy</button>}
      </div>
      {hex && (
        <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 64, height: 64, borderRadius: 8, background: hex, border: "1px solid var(--paper-line)" }} />
          <div className="result-display" style={{ margin: 0 }}>{hex}</div>
        </div>
      )}
    </div>
  );
}
