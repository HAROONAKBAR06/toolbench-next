"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

export default function HashGenerator({ algorithm }) {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");

  async function run() {
    const enc = new TextEncoder().encode(input);
    const buf = await crypto.subtle.digest(algorithm, enc);
    const hex = Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
    setHash(hex);
  }

  return (
    <div className="tool-widget">
      <div className="field">
        <label>Text</label>
        <textarea rows={6} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type or paste text to hash…" />
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" onClick={run}>Generate {algorithm} Hash</button>
        {hash && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(hash)}>Copy</button>}
      </div>
      {hash && <div className="result-display" style={{ marginTop: 14, wordBreak: "break-all", fontSize: 15 }}>{hash}</div>}
    </div>
  );
}
