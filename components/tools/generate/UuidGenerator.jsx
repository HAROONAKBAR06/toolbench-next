"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

export default function UuidGenerator() {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState([]);

  function generate() {
    setUuids(Array.from({ length: count }, () => crypto.randomUUID()));
  }

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>How many</label>
          <input type="number" min="1" max="100" value={count} onChange={(e) => setCount(parseInt(e.target.value) || 1)} />
        </div>
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" onClick={generate}>Generate</button>
        {uuids.length > 0 && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(uuids.join("\n"))}>Copy All</button>}
      </div>
      {uuids.length > 0 && (
        <div style={{ marginTop: 14, fontFamily: "var(--f-mono)", fontSize: 13 }}>
          {uuids.map((u, i) => (
            <div key={i} style={{ padding: "6px 0", borderBottom: "1px solid var(--paper-line)" }}>{u}</div>
          ))}
        </div>
      )}
    </div>
  );
}
