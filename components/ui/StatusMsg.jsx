"use client";
export default function StatusMsg({ text, error }) {
  if (!text) return null;
  return <span className={`status-msg ${error ? "status-err" : "status-ok"}`}>{text}</span>;
}
