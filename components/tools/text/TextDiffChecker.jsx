"use client";
import { useState } from "react";

function diffLines(a, b) {
  const aLines = a.split("\n");
  const bLines = b.split("\n");
  const max = Math.max(aLines.length, bLines.length);
  const rows = [];
  for (let i = 0; i < max; i++) {
    const la = aLines[i] ?? "";
    const lb = bLines[i] ?? "";
    if (la === lb) rows.push({ type: "same", a: la, b: lb });
    else if (la === "") rows.push({ type: "added", a: la, b: lb });
    else if (lb === "") rows.push({ type: "removed", a: la, b: lb });
    else rows.push({ type: "changed", a: la, b: lb });
  }
  return rows;
}

export default function TextDiffChecker() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [rows, setRows] = useState(null);

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>Original text</label>
          <textarea rows={8} value={a} onChange={(e) => setA(e.target.value)} />
        </div>
        <div className="field">
          <label>Revised text</label>
          <textarea rows={8} value={b} onChange={(e) => setB(e.target.value)} />
        </div>
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" onClick={() => setRows(diffLines(a, b))}>Compare</button>
      </div>
      {rows && (
        <div style={{ marginTop: 14, fontFamily: "var(--f-mono)", fontSize: 13 }}>
          {rows.map((r, i) => (
            <div key={i} style={{
              padding: "4px 8px",
              background: r.type === "same" ? "transparent" : r.type === "removed" ? "rgba(181,68,46,0.12)" : r.type === "added" ? "rgba(76,154,106,0.12)" : "rgba(232,163,61,0.15)",
              borderLeft: r.type === "same" ? "3px solid transparent" : r.type === "removed" ? "3px solid #B5442E" : r.type === "added" ? "3px solid var(--green)" : "3px solid var(--amber)",
            }}>
              {r.type === "removed" ? `− ${r.a}` : r.type === "added" ? `+ ${r.b}` : r.type === "changed" ? `~ ${r.a} → ${r.b}` : `  ${r.a}`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
