"use client";
import { useState, useMemo } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

export default function Base64EncodeDecode({ mode }) {
  const [input, setInput] = useState("");
  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: "" };
    try {
      if (mode === "encode") return { output: btoa(unescape(encodeURIComponent(input))), error: "" };
      return { output: decodeURIComponent(escape(atob(input))), error: "" };
    } catch {
      return { output: "", error: mode === "decode" ? "That doesn't look like valid Base64." : "Could not encode that text." };
    }
  }, [input, mode]);

  return (
    <div className="tool-widget">
      <div className="field">
        <label>{mode === "encode" ? "Text" : "Base64"}</label>
        <textarea rows={6} value={input} onChange={(e) => setInput(e.target.value)} style={{ fontFamily: "var(--f-mono)" }} />
      </div>
      {error && <p className="status-err">{error}</p>}
      {output && (
        <>
          <div className="field" style={{ marginTop: 10 }}>
            <label>{mode === "encode" ? "Base64" : "Decoded text"}</label>
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
