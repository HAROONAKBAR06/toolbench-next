"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

const SETS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*-_=+",
};

export default function RandomStringGenerator() {
  const [length, setLength] = useState(20);
  const [opts, setOpts] = useState({ lower: true, upper: true, numbers: true, symbols: false });
  const [result, setResult] = useState("");

  function generate() {
    const charset = Object.entries(opts).filter(([, on]) => on).map(([k]) => SETS[k]).join("");
    if (!charset) return;
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    let out = "";
    for (let i = 0; i < length; i++) out += charset[arr[i] % charset.length];
    setResult(out);
  }

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>Length: {length}</label>
          <input type="range" min="4" max="128" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, fontSize: 13, marginBottom: 14, textTransform: "none" }}>
        {Object.keys(SETS).map((k) => (
          <label key={k} style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <input type="checkbox" checked={opts[k]} onChange={(e) => setOpts({ ...opts, [k]: e.target.checked })} style={{ width: "auto" }} />
            {k === "lower" ? "Lowercase" : k === "upper" ? "Uppercase" : k === "numbers" ? "Numbers" : "Symbols"}
          </label>
        ))}
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" onClick={generate}>Generate</button>
        {result && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(result)}>Copy</button>}
      </div>
      {result && <div className="result-display" style={{ marginTop: 14, wordBreak: "break-all" }}>{result}</div>}
    </div>
  );
}
