"use client";
import { useState, useMemo } from "react";

function analyze(pw) {
  if (!pw) return { score: 0, label: "", feedback: [] };
  let score = 0;
  const feedback = [];
  if (pw.length >= 8) score += 1; else feedback.push("Use at least 8 characters.");
  if (pw.length >= 12) score += 1;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score += 1; else feedback.push("Mix uppercase and lowercase letters.");
  if (/[0-9]/.test(pw)) score += 1; else feedback.push("Add at least one number.");
  if (/[^a-zA-Z0-9]/.test(pw)) score += 1; else feedback.push("Add at least one symbol.");
  const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Very Strong"];
  return { score, label: labels[score], feedback };
}

export default function PasswordStrengthChecker() {
  const [pw, setPw] = useState("");
  const result = useMemo(() => analyze(pw), [pw]);
  const colors = ["#B5442E", "#B5442E", "#E8A33D", "#E8A33D", "#4C9A6A", "#4C9A6A"];

  return (
    <div className="tool-widget">
      <div className="field">
        <label>Password</label>
        <input type="text" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Type a password to check…" />
      </div>
      {pw && (
        <div style={{ marginTop: 14 }}>
          <div style={{ height: 8, background: "var(--paper-dim)", borderRadius: 4, overflow: "hidden", marginBottom: 8 }}>
            <div style={{ width: `${(result.score / 5) * 100}%`, height: "100%", background: colors[result.score], transition: "width .2s" }} />
          </div>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>{result.label}</p>
          {result.feedback.length > 0 && (
            <ul style={{ paddingLeft: 20, fontSize: 13, color: "var(--navy-700)" }}>
              {result.feedback.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
