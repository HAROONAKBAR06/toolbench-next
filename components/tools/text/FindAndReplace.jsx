"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

export default function FindAndReplace() {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [output, setOutput] = useState("");

  function run() {
    if (!find) return;
    const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = wholeWord ? `\\b${escaped}\\b` : escaped;
    const re = new RegExp(pattern, caseSensitive ? "g" : "gi");
    setOutput(text.replace(re, replace));
  }

  return (
    <div className="tool-widget">
      <textarea placeholder="Paste your text here…" rows={8} value={text} onChange={(e) => setText(e.target.value)} style={{ width: "100%" }} />
      <div className="field-row">
        <div className="field">
          <label>Find</label>
          <input type="text" value={find} onChange={(e) => setFind(e.target.value)} />
        </div>
        <div className="field">
          <label>Replace with</label>
          <input type="text" value={replace} onChange={(e) => setReplace(e.target.value)} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 18, fontSize: 13, marginBottom: 14, textTransform: "none" }}>
        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} style={{ width: "auto" }} /> Case sensitive
        </label>
        <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <input type="checkbox" checked={wholeWord} onChange={(e) => setWholeWord(e.target.checked)} style={{ width: "auto" }} /> Whole word only
        </label>
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" onClick={run}>Replace All</button>
        {output && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(output)}>Copy</button>}
      </div>
      {output && <textarea readOnly value={output} rows={8} style={{ width: "100%", marginTop: 14 }} />}
    </div>
  );
}
