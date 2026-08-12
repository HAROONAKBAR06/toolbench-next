"use client";
import { useState, useMemo } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

const ENTITY_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

function encode(str) {
  return str.replace(/[&<>"']/g, (c) => ENTITY_MAP[c]);
}
function decode(str) {
  const textarea = typeof document !== "undefined" ? document.createElement("textarea") : null;
  if (!textarea) return str;
  textarea.innerHTML = str;
  return textarea.value;
}

export default function HtmlEntityEncodeDecode({ mode }) {
  const [input, setInput] = useState("");
  const output = useMemo(() => (mode === "encode" ? encode(input) : decode(input)), [input, mode]);

  return (
    <div className="tool-widget">
      <div className="field">
        <label>{mode === "encode" ? "Text" : "HTML with entities"}</label>
        <textarea rows={6} value={input} onChange={(e) => setInput(e.target.value)} placeholder={mode === "encode" ? "<div class=\"box\">" : "&lt;div class=&quot;box&quot;&gt;"} style={{ fontFamily: "var(--f-mono)" }} />
      </div>
      {output && (
        <>
          <div className="field" style={{ marginTop: 10 }}>
            <label>{mode === "encode" ? "Encoded" : "Decoded"}</label>
            <textarea readOnly rows={6} value={output} style={{ fontFamily: "var(--f-mono)" }} />
          </div>
          <div className="actions-row" style={{ marginTop: 10 }}>
            <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(output)}>Copy</button>
          </div>
        </>
      )}
    </div>
  );
}
