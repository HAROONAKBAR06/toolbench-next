"use client";
import SimpleTextTransform from "./SimpleTextTransform";

export default function SortLines() {
  return (
    <SimpleTextTransform
      placeholder="Paste your list, one item per line…"
      outputLabel="Sorted list"
      extraControls={(state, setState) => (
        <div className="field-row">
          <div className="field">
            <label>Order</label>
            <select value={state.order || "asc"} onChange={(e) => setState({ ...state, order: e.target.value })}>
              <option value="asc">A → Z</option>
              <option value="desc">Z → A</option>
            </select>
          </div>
        </div>
      )}
      transform={(text, state) => {
        const lines = text.split("\n").filter((l) => l.trim() !== "");
        lines.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
        if (state.order === "desc") lines.reverse();
        return lines.join("\n");
      }}
    />
  );
}
