"use client";
import { useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

function parseCsvLine(line) {
  const result = [];
  let cur = "", inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuotes) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else cur += c;
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ",") { result.push(cur); cur = ""; }
      else cur += c;
    }
  }
  result.push(cur);
  return result;
}

function csvToJson(csv) {
  const lines = csv.split("\n").filter((l) => l.trim() !== "");
  if (lines.length === 0) return "[]";
  const headers = parseCsvLine(lines[0]);
  const rows = lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const obj = {};
    headers.forEach((h, i) => { obj[h] = values[i] ?? ""; });
    return obj;
  });
  return JSON.stringify(rows, null, 2);
}

function jsonToCsv(jsonStr) {
  const data = JSON.parse(jsonStr);
  if (!Array.isArray(data) || data.length === 0) return "";
  const headerSet = new Set();
  data.forEach((row) => Object.keys(row).forEach((k) => headerSet.add(k)));
  const headers = Array.from(headerSet);
  const escapeCell = (v) => {
    const s = typeof v === "object" && v !== null ? JSON.stringify(v) : String(v ?? "");
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const lines = [headers.join(",")];
  data.forEach((row) => lines.push(headers.map((h) => escapeCell(row[h])).join(",")));
  return lines.join("\n");
}

export default function CsvJsonConverter({ direction }) {
  const isCsvToJson = direction === "csv-to-json";
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function run() {
    try {
      setOutput(isCsvToJson ? csvToJson(input) : jsonToCsv(input));
      setError("");
    } catch (e) {
      setError("Could not parse that input: " + e.message);
      setOutput("");
    }
  }

  return (
    <div className="tool-widget">
      <div className="field">
        <label>{isCsvToJson ? "CSV" : "JSON array"}</label>
        <textarea
          rows={9}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isCsvToJson ? "name,age\nAlice,30\nBob,25" : '[{"name":"Alice","age":30}]'}
          style={{ fontFamily: "var(--f-mono)", fontSize: 13 }}
        />
      </div>
      <div className="actions-row">
        <button className="btn btn-primary" onClick={run}>Convert</button>
        {output && <button className="btn btn-outline copy-btn" onClick={() => copyToClipboard(output)}>Copy</button>}
        {error && <span className="status-err">{error}</span>}
      </div>
      {output && <textarea readOnly value={output} rows={9} style={{ width: "100%", marginTop: 14, fontFamily: "var(--f-mono)", fontSize: 13 }} />}
    </div>
  );
}
