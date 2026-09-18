"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CURRENCIES, SNAPSHOT_DATE, convertCurrency } from "@/data/currencies";
import { copyToClipboard } from "@/lib/browserUtils";

// Free, keyless, CORS-enabled exchange rate endpoint. Swap this for your
// own provider/key if you want, the rest of the component doesn't care
// where the rate comes from.
const RATE_API = (code) => `https://open.er-api.com/v6/latest/${code}`;

export default function CurrencyConverter({ fromCurrency, toCurrency }) {
  const from = CURRENCIES[fromCurrency];
  const to = CURRENCIES[toCurrency];

  const [value, setValue] = useState("1");
  const [rate, setRate] = useState(null);       // live rate, once fetched
  const [status, setStatus] = useState("loading"); // "loading" | "live" | "fallback"
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setRate(null);

    fetch(RATE_API(from.code))
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const liveRate = data?.rates?.[to.code];
        if (typeof liveRate !== "number") throw new Error("missing rate");
        setRate(liveRate);
        setUpdated(data.time_last_update_utc || null);
        setStatus("live");
      })
      .catch(() => {
        if (cancelled) return;
        // Fall back to the static reference factor shipped with the page.
        setRate(convertCurrency(fromCurrency, toCurrency, 1));
        setStatus("fallback");
      });

    return () => {
      cancelled = true;
    };
  }, [fromCurrency, toCurrency, from.code, to.code]);

  const result = useMemo(() => {
    const num = parseFloat(value);
    if (Number.isNaN(num) || rate === null) return null;
    const r = num * rate;
    const abs = Math.abs(r);
    const dp = abs !== 0 && abs < 1 ? 6 : abs < 1000 ? 4 : 2;
    return r.toLocaleString(undefined, { maximumFractionDigits: dp });
  }, [value, rate]);

  const reversePairSlug = `${to.slug}-to-${from.slug}`;

  return (
    <div className="tool-widget">
      <div className="field-row">
        <div className="field">
          <label>{from.label} ({from.code})</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="1"
          />
        </div>
        <div className="field">
          <label>{to.label} ({to.code})</label>
          <input type="text" readOnly value={result === null ? "" : result} />
        </div>
      </div>

      {result !== null && (
        <div className="result-display">
          {from.short}{value || 0} = {to.short}{result} {to.code}
          <small>
            {status === "loading" && "Fetching the latest exchange rate…"}
            {status === "live" &&
              `1 ${from.code} = ${rate.toLocaleString(undefined, { maximumFractionDigits: 6 })} ${to.code} · live rate` +
                (updated ? ` · updated ${updated}` : "")}
            {status === "fallback" &&
              `1 ${from.code} ≈ ${rate?.toLocaleString(undefined, { maximumFractionDigits: 6 })} ${to.code} · live rate unavailable, showing reference rate as of ${SNAPSHOT_DATE}`}
          </small>
        </div>
      )}

      <div className="actions-row">
        {result !== null && (
          <button
            className="btn btn-outline copy-btn"
            onClick={() => copyToClipboard(`${value} ${from.code} = ${result} ${to.code}`)}
          >
            Copy Result
          </button>
        )}
        <Link href={`/convert/${reversePairSlug}`} className="btn btn-outline copy-btn">
          Reverse: {to.code} → {from.code}
        </Link>
      </div>
    </div>
  );
}
