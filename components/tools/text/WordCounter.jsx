"use client";
import { useState, useMemo } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const sentences = text.trim() ? (text.match(/[.!?]+(\s|$)/g) || []).length : 0;
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter((p) => p.trim()).length : 0;
    return { words, chars, charsNoSpaces, sentences, paragraphs };
  }, [text]);

  return (
    <div className="tool-widget">
      <textarea
        placeholder="Paste or type your text here…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        style={{ width: "100%" }}
      />
      <div className="related-grid" style={{ marginTop: 14 }}>
        <div className="section-tool-card" style={{ textAlign: "center" }}><h3>{stats.words}</h3><p>Words</p></div>
        <div className="section-tool-card" style={{ textAlign: "center" }}><h3>{stats.chars}</h3><p>Characters</p></div>
        <div className="section-tool-card" style={{ textAlign: "center" }}><h3>{stats.charsNoSpaces}</h3><p>Chars (no spaces)</p></div>
        <div className="section-tool-card" style={{ textAlign: "center" }}><h3>{stats.sentences}</h3><p>Sentences</p></div>
        <div className="section-tool-card" style={{ textAlign: "center" }}><h3>{stats.paragraphs}</h3><p>Paragraphs</p></div>
      </div>
    </div>
  );
}
