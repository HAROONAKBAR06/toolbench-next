"use client";
import SimpleTextTransform from "./SimpleTextTransform";

export default function RemoveDuplicateLines() {
  return (
    <SimpleTextTransform
      placeholder="Paste your list, one item per line…"
      outputLabel="De-duplicated list"
      extraControls={(state, setState) => (
        <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, marginTop: 10, textTransform: "none" }}>
          <input type="checkbox" checked={!!state.caseSensitive} onChange={(e) => setState({ ...state, caseSensitive: e.target.checked })} style={{ width: "auto" }} />
          Case sensitive
        </label>
      )}
      transform={(text, state) => {
        const lines = text.split("\n");
        const seen = new Set();
        const result = [];
        for (const line of lines) {
          const key = state.caseSensitive ? line : line.toLowerCase();
          if (!seen.has(key)) { seen.add(key); result.push(line); }
        }
        return result.join("\n");
      }}
    />
  );
}
