"use client";
import { useState, useMemo } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

function slugify(text) {
  return text
    .toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function SlugGenerator() {
  const [text, setText] = useState("");
  const slug = useMemo(() => slugify(text), [text]);

  return (
    <div className="tool-widget">
      <div className="field">
        <label>Text</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="10 Best Ways to Learn a New Language" />
      </div>
      {slug && (
        <div className="result-display" style={{ marginTop: 14 }}>
          {slug}
          <div className="actions-row" style={{ marginTop: 10 }}>
            <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(slug)}>Copy</button>
          </div>
        </div>
      )}
    </div>
  );
}
