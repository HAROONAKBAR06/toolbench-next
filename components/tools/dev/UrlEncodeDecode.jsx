"use client";
import { useState, useMemo } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

export default function UrlEncodeDecode({ mode }) {
  const [input, setInput] = useState("");
  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: "" };
    try {
      return { output: mode === "encode" ? encodeURIComponent(input) : decodeURIComponent(input), error: "" };
    } catch (e) {
      return { output: "", error: "Invalid input for decoding." };
    }
  }, [input, mode]);

  return (
    <div className="tool-widget">
      <div className="field">
        <label>{mode === "encode" ? "Text" : "Encoded text"}</label>
        <textarea rows={6} value={input} onChange={(e) => setInput(e.target.value)} placeholder={mode === "encode" ? "hello world & more" : "hello%20world%20%26%20more"} style={{ fontFamily: "var(--f-mono)" }} />
      </div>
      {error && <p className="status-err">{error}</p>}
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
