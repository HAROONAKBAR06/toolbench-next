"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();
}

export default function CssMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div className="tool-widget">
      <textarea placeholder="Paste your CSS here…" rows={10} value={input} onChange={(e) => setInput(e.target.value)} style={{ width: "100%", fontFamily: "var(--f-mono)" }} />
      <div className="actions-row">
        <button className="btn btn-primary" onClick={() => setOutput(minifyCss(input))}>Minify</button>
        {output && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(output)}>Copy</button>}
      </div>
      {output && (
        <>
          <textarea readOnly value={output} rows={8} style={{ width: "100%", marginTop: 14, fontFamily: "var(--f-mono)", fontSize: 12 }} />
          <p style={{ fontSize: 13, marginTop: 8, color: "var(--navy-700)" }}>
            {input.length} → {output.length} characters ({Math.max(0, Math.round((1 - output.length / input.length) * 100))}% smaller)
          </p>
        </>
      )}
    </div>
  );
}
