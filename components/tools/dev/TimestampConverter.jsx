"use client";
import { useState } from "react";

export default function TimestampConverter() {
  const [ts, setTs] = useState("");
  const [dateStr, setDateStr] = useState("");

  function fromTimestamp(v) {
    setTs(v);
    const num = Number(v);
    if (!v || Number.isNaN(num)) { setDateStr(""); return; }
    const ms = String(v).length > 10 ? num : num * 1000;
    const d = new Date(ms);
    if (Number.isNaN(d.getTime())) { setDateStr(""); return; }
    setDateStr(d.toISOString().slice(0, 16));
  }

  function fromDate(v) {
    setDateStr(v);
    if (!v) { setTs(""); return; }
    const d = new Date(v);
    if (Number.isNaN(d.getTime())) { setTs(""); return; }
    setTs(String(Math.floor(d.getTime() / 1000)));
  }

  const preview = ts && !Number.isNaN(Number(ts))
    ? new Date(String(ts).length > 10 ? Number(ts) : Number(ts) * 1000)
    : null;

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>Unix timestamp</label>
          <input type="text" value={ts} onChange={(e) => fromTimestamp(e.target.value)} placeholder="1700000000" />
        </div>
        <div className="field">
          <label>Date &amp; time</label>
          <input type="datetime-local" value={dateStr} onChange={(e) => fromDate(e.target.value)} />
        </div>
      </div>
      {preview && (
        <div className="result-display" style={{ marginTop: 4 }}>
          {preview.toUTCString()}
          <small>Local: {preview.toString()}</small>
        </div>
      )}
    </div>
  );
}
