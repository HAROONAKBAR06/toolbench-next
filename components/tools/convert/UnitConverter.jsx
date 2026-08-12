"use client";
import { useState, useMemo } from "react";
import { CATEGORIES, convertValue } from "@/data/units";
import { copyToClipboard } from "@/lib/browserUtils";

export default function UnitConverter({ category, fromUnit, toUnit }) {
  const cat = CATEGORIES[category];
  const from = cat.units[fromUnit];
  const to = cat.units[toUnit];
  const [value, setValue] = useState("1");

  const result = useMemo(() => {
    const num = parseFloat(value);
    if (Number.isNaN(num)) return null;
    const r = convertValue(category, fromUnit, toUnit, num);
    if (r === null) return null;
    // Round sensibly: more decimals for very small results
    const abs = Math.abs(r);
    const dp = abs !== 0 && abs < 1 ? 8 : abs < 1000 ? 6 : 4;
    return parseFloat(r.toFixed(dp));
  }, [value, category, fromUnit, toUnit]);

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>{from.label} ({from.short})</label>
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className="field">
          <label>{to.label} ({to.short})</label>
          <input type="text" readOnly value={result === null ? "" : result} />
        </div>
      </div>
      {result !== null && (
        <div className="actions-row">
          <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(String(result))}>Copy Result</button>
        </div>
      )}
    </div>
  );
}
