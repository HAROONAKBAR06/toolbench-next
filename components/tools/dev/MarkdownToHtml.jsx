"use client";
import { useState, useMemo } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

function mdToHtml(md) {
  let html = md
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  html = html
    .replace(/^### (.*)$/gm, "<h3>$1</h3>")
    .replace(/^## (.*)$/gm, "<h2>$1</h2>")
    .replace(/^# (.*)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/`(.+?)`/g, "<code>$1</code>");

  // Lists
  html = html.replace(/(^|\n)((?:- .*\n?)+)/g, (m, pre, block) => {
    const items = block.trim().split("\n").map((l) => `<li>${l.replace(/^- /, "")}</li>`).join("");
    return `${pre}<ul>${items}</ul>`;
  });

  // Paragraphs: wrap remaining plain lines
  html = html
    .split("\n\n")
    .map((block) => (/^<h[1-3]|^<ul/.test(block.trim()) ? block : `<p>${block.trim()}</p>`))
    .join("\n");

  return html;
}

export default function MarkdownToHtml() {
  const [md, setMd] = useState("# Heading\n\nSome **bold** and *italic* text with a [link](https://example.com).\n\n- item one\n- item two");
  const html = useMemo(() => mdToHtml(md), [md]);

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>Markdown</label>
          <textarea rows={12} value={md} onChange={(e) => setMd(e.target.value)} style={{ fontFamily: "var(--f-mono)", fontSize: 13 }} />
        </div>
        <div className="field">
          <label>Preview</label>
          <div style={{ border: "1px solid var(--paper-line)", borderRadius: 4, padding: 12, background: "#fff", minHeight: 240 }} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
      <div className="actions-row">
        <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(html)}>Copy HTML</button>
      </div>
      <textarea readOnly value={html} rows={6} style={{ width: "100%", marginTop: 10, fontFamily: "var(--f-mono)", fontSize: 12 }} />
    </div>
  );
}
