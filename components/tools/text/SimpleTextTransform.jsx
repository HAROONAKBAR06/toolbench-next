"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

/**
 * A generic "paste text -> transform -> copy result" widget shared by
 * several small text tools so each keeps its own real transform function
 * without duplicating the surrounding UI plumbing.
 */
export default function SimpleTextTransform({ transform, inputLabel = "Input", outputLabel = "Result", placeholder, extraControls }) {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [state, setState] = useState({});

  function run() {
    setOutput(transform(text, state));
  }

  return (
    <div className="tool-widget">
      <div className="field">
        <label>{inputLabel}</label>
        <textarea rows={9} value={text} onChange={(e) => setText(e.target.value)} placeholder={placeholder} style={{ width: "100%" }} />
      </div>
      {extraControls && extraControls(state, setState)}
      <div className="actions-row" style={{ marginTop: 14 }}>
        <button className="btn btn-primary" onClick={run}>Run</button>
        {output && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(output)}>Copy</button>}
      </div>
      {output && (
        <div className="field" style={{ marginTop: 14 }}>
          <label>{outputLabel}</label>
          <textarea rows={9} readOnly value={output} style={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
}
