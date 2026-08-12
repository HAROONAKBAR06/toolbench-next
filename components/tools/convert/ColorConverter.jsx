"use client";
import { useState, useMemo } from "react";
import { copyToClipboard } from "@/lib/browserUtils";
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb, parseRgbString, parseHslString, COLOR_FORMATS } from "@/data/colorFormats";

function parseInput(format, str) {
  if (format === "hex") return hexToRgb(str);
  if (format === "rgb") return parseRgbString(str);
  if (format === "hsl") { const hsl = parseHslString(str); return hsl ? hslToRgb(hsl) : null; }
  return null;
}

function formatOutput(format, rgb) {
  if (!rgb) return "";
  if (format === "hex") return rgbToHex(rgb);
  if (format === "rgb") return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  if (format === "hsl") { const h = rgbToHsl(rgb); return `hsl(${h.h}, ${h.s}%, ${h.l}%)`; }
  return "";
}

export default function ColorConverter({ fromFormat, toFormat }) {
  const fromDef = COLOR_FORMATS[fromFormat];
  const toDef = COLOR_FORMATS[toFormat];
  const [input, setInput] = useState(fromDef.example);

  const rgb = useMemo(() => parseInput(fromFormat, input), [fromFormat, input]);
  const output = useMemo(() => formatOutput(toFormat, rgb), [toFormat, rgb]);
  const previewHex = rgb ? rgbToHex(rgb) : null;

  return (
    <div className="tool-widget">
      <div className="field">
        <label>{fromDef.label} value</label>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={fromDef.example} style={{ fontFamily: "var(--f-mono)" }} />
      </div>
      {!rgb && input && <p className="status-err" style={{ marginTop: 8 }}>Couldn't parse that as a valid {fromDef.label} value.</p>}
      {output && (
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 8, background: previewHex, border: "1px solid var(--paper-line)", flexShrink: 0 }} />
          <div className="result-display" style={{ margin: 0, flex: 1 }}>
            {output}
            <div className="actions-row" style={{ marginTop: 8 }}>
              <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(output)}>Copy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
