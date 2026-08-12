"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

const SETS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [opts, setOpts] = useState({ lower: true, upper: true, numbers: true, symbols: true });
  const [password, setPassword] = useState("");

  function generate() {
    const charset = Object.entries(opts).filter(([, on]) => on).map(([k]) => SETS[k]).join("");
    if (!charset) return;
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    let result = "";
    for (let i = 0; i < length; i++) result += charset[arr[i] % charset.length];
    setPassword(result);
  }

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>Length: {length}</label>
          <input type="range" min="6" max="64" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
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
        {password && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(password)}>Copy</button>}
      </div>
      {password && <div className="result-display" style={{ marginTop: 14, wordBreak: "break-all" }}>{password}</div>}
    </div>
  );
}
