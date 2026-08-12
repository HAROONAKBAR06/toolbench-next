"use client";
import { useState, useMemo } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

const VALID_CHARS = {
  2: /^[01]+$/,
  8: /^[0-7]+$/,
  10: /^[0-9]+$/,
  16: /^[0-9a-fA-F]+$/,
};

export default function NumberBaseConverter({ fromBase, toBase }) {
  const [input, setInput] = useState("");

  const { output, error } = useMemo(() => {
    if (!input) return { output: "", error: "" };
    const re = VALID_CHARS[fromBase];
    if (!re.test(input.trim())) return { output: "", error: `Not a valid base-${fromBase} number.` };
    try {
      const decimal = parseInt(input.trim(), fromBase);
      return { output: decimal.toString(toBase).toUpperCase(), error: "" };
    } catch {
      return { output: "", error: "Could not convert that value." };
    }
  }, [input, fromBase, toBase]);

  return (
    <div className="tool-widget">
      <div className="field">
        <label>Base {fromBase} value</label>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} style={{ fontFamily: "var(--f-mono)" }} />
      </div>
      {error && <p className="status-err" style={{ marginTop: 8 }}>{error}</p>}
      {output && (
        <div className="result-display" style={{ marginTop: 14 }}>
          {output}
          <small>Base {toBase} equivalent</small>
          <div className="actions-row" style={{ marginTop: 8 }}>
            <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(output)}>Copy</button>
          </div>
        </div>
      )}
    </div>
  );
}
