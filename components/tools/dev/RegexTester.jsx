"use client";
import { useState, useMemo } from "react";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");

  const { html, error, matchCount } = useMemo(() => {
    if (!pattern) return { html: text, error: "", matchCount: 0 };
    try {
      const re = new RegExp(pattern, flags);
      let count = 0;
      const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
      const highlighted = escaped.replace(new RegExp(pattern, flags.includes("g") ? flags : flags + "g"), (m) => {
        count++;
        return `<mark>${m}</mark>`;
      });
      return { html: highlighted, error: "", matchCount: count };
    } catch (e) {
      return { html: text, error: e.message, matchCount: 0 };
    }
  }, [pattern, flags, text]);

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field" style={{ flex: 2 }}>
          <label>Pattern</label>
          <input type="text" value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder="[A-Z]\w+" style={{ fontFamily: "var(--f-mono)" }} />
        </div>
        <div className="field">
          <label>Flags</label>
          <input type="text" value={flags} onChange={(e) => setFlags(e.target.value)} placeholder="gi" style={{ fontFamily: "var(--f-mono)" }} />
        </div>
      </div>
      <div className="field">
        <label>Test text</label>
        <textarea rows={8} value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste text to test against your pattern…" />
      </div>
      {error && <p className="status-err" style={{ marginTop: 10 }}>Invalid regex: {error}</p>}
      {!error && text && (
        <div style={{ marginTop: 14 }}>
          <p style={{ fontSize: 13, marginBottom: 8 }}><b>{matchCount}</b> match{matchCount === 1 ? "" : "es"}</p>
          <div
            style={{ fontFamily: "var(--f-mono)", fontSize: 13, whiteSpace: "pre-wrap", background: "var(--paper-dim)", padding: 14, borderRadius: 4 }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      )}
    </div>
  );
}
