"use client";
import { useState } from "react";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [result, setResult] = useState(null);

  function generate() {
    const lo = Math.min(min, max), hi = Math.max(min, max);
    const range = hi - lo + 1;
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    setResult(lo + (arr[0] % range));
  }

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>Min</label>
          <input type="number" value={min} onChange={(e) => setMin(parseInt(e.target.value) || 0)} />
        </div>
        <div className="field">
          <label>Max</label>
          <input type="number" value={max} onChange={(e) => setMax(parseInt(e.target.value) || 0)} />
        </div>
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" onClick={generate}>Generate</button>
      </div>
      {result !== null && <div className="result-display" style={{ marginTop: 14 }}>{result}</div>}
    </div>
  );
}
