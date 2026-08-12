"use client";
import { useState, useMemo } from "react";
import { copyToClipboard } from "@/lib/browserUtils";
import { applyTextCase, TEXT_CASE_MODES } from "@/data/pairFamilies";

export default function TextCaseConverter({ mode }) {
  const [text, setText] = useState("");
  const output = useMemo(() => applyTextCase(mode, text), [mode, text]);

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>Input</label>
          <textarea rows={8} value={text} onChange={(e) => setText(e.target.value)} placeholder="Type or paste text…" />
        </div>
        <div className="field">
          <label>{TEXT_CASE_MODES[mode].label}</label>
          <textarea rows={8} value={output} readOnly />
        </div>
      </div>
      <div className="actions-row">
        <button className="btn btn-outline copy-btn" disabled={!output} onClick={() => copyToClipboard(output)}>Copy Result</button>
      </div>
    </div>
  );
}
