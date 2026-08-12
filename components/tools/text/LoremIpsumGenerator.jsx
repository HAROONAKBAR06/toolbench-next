"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

const WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");

function randWord() { return WORDS[Math.floor(Math.random() * WORDS.length)]; }
function makeSentence() {
  const len = 6 + Math.floor(Math.random() * 10);
  const words = Array.from({ length: len }, randWord);
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(" ") + ".";
}
function makeParagraph() {
  const len = 3 + Math.floor(Math.random() * 4);
  return Array.from({ length: len }, makeSentence).join(" ");
}

export default function LoremIpsumGenerator() {
  const [unit, setUnit] = useState("paragraphs");
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");

  function generate() {
    let result;
    if (unit === "paragraphs") result = Array.from({ length: count }, makeParagraph).join("\n\n");
    else if (unit === "sentences") result = Array.from({ length: count }, makeSentence).join(" ");
    else result = Array.from({ length: count }, randWord).join(" ");
    setOutput(result);
  }

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>Generate</label>
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>
        </div>
        <div className="field">
          <label>Count</label>
          <input type="number" min="1" max="50" value={count} onChange={(e) => setCount(parseInt(e.target.value) || 1)} />
        </div>
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" onClick={generate}>Generate</button>
        {output && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(output)}>Copy</button>}
      </div>
      {output && <textarea readOnly value={output} rows={10} style={{ width: "100%", marginTop: 14 }} />}
    </div>
  );
}
