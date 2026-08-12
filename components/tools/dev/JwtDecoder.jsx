"use client";
import { useState, useMemo } from "react";

function base64UrlDecode(str) {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/").padEnd(str.length + ((4 - (str.length % 4)) % 4), "=");
  try {
    return decodeURIComponent(
      atob(padded).split("").map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("")
    );
  } catch {
    return null;
  }
}

export default function JwtDecoder() {
  const [token, setToken] = useState("");

  const decoded = useMemo(() => {
    const parts = token.trim().split(".");
    if (parts.length < 2) return null;
    const header = base64UrlDecode(parts[0]);
    const payload = base64UrlDecode(parts[1]);
    if (!header || !payload) return null;
    try {
      return {
        header: JSON.stringify(JSON.parse(header), null, 2),
        payload: JSON.stringify(JSON.parse(payload), null, 2),
      };
    } catch {
      return null;
    }
  }, [token]);

  return (
    <div className="tool-widget">
      <div className="field">
        <label>JWT</label>
        <textarea rows={4} value={token} onChange={(e) => setToken(e.target.value)} placeholder="eyJhbGciOi..." style={{ fontFamily: "var(--f-mono)", fontSize: 12 }} />
      </div>
      {token && !decoded && <p className="status-err" style={{ marginTop: 10 }}>Couldn't decode that as a valid JWT.</p>}
      {decoded && (
        <div className="field-row" style={{ marginTop: 14 }}>
          <div className="field">
            <label>Header</label>
            <textarea readOnly rows={8} value={decoded.header} style={{ fontFamily: "var(--f-mono)", fontSize: 12 }} />
          </div>
          <div className="field">
            <label>Payload</label>
            <textarea readOnly rows={8} value={decoded.payload} style={{ fontFamily: "var(--f-mono)", fontSize: 12 }} />
          </div>
        </div>
      )}
    </div>
  );
}
