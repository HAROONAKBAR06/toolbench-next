"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function format(minify = false) {
    try {
      const parsed = JSON.parse(input);
      setOutput(minify ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError(e.message);
      setOutput("");
    }
  }

  return (
    <div className="tool-widget">
      <textarea placeholder="Paste JSON here…" rows={10} value={input} onChange={(e) => setInput(e.target.value)} style={{ width: "100%", fontFamily: "var(--f-mono)" }} />
      <div className="actions-row">
        <button className="btn btn-primary" onClick={() => format(false)}>Format</button>
        <button className="btn btn-outline" onClick={() => format(true)}>Minify</button>
        {output && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(output)}>Copy</button>}
        {error && <span className="status-err">Invalid JSON: {error}</span>}
      </div>
      {output && <textarea readOnly value={output} rows={12} style={{ width: "100%", marginTop: 14, fontFamily: "var(--f-mono)" }} />}
    </div>
  );
}
