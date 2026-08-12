"use client";
import SimpleTextTransform from "./SimpleTextTransform";

export default function RemoveLineBreaks() {
  return (
    <SimpleTextTransform
      placeholder="Paste text with unwanted line breaks…"
      outputLabel="Result"
      extraControls={(state, setState) => (
        <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 13, marginTop: 10, textTransform: "none" }}>
          <input type="checkbox" checked={!!state.keepParagraphs} onChange={(e) => setState({ ...state, keepParagraphs: e.target.checked })} style={{ width: "auto" }} />
          Keep paragraph spacing (double line breaks)
        </label>
      )}
      transform={(text, state) => {
        if (state.keepParagraphs) {
          return text.split(/\n\s*\n/).map((p) => p.replace(/\s*\n\s*/g, " ").trim()).join("\n\n");
        }
        return text.replace(/\s*\n\s*/g, " ").trim();
      }}
    />
  );
}
