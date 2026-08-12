"use client";
import { useState } from "react";
import SimpleTextTransform from "./SimpleTextTransform";

export default function TextReverser() {
  return (
    <SimpleTextTransform
      placeholder="Type or paste text to reverse…"
      outputLabel="Reversed"
      extraControls={(state, setState) => (
        <div className="field-row">
          <div className="field">
            <label>Reverse by</label>
            <select value={state.mode || "char"} onChange={(e) => setState({ ...state, mode: e.target.value })}>
              <option value="char">Character</option>
              <option value="word">Word order</option>
            </select>
          </div>
        </div>
      )}
      transform={(text, state) => {
        const mode = state.mode || "char";
        if (mode === "word") return text.split(/\s+/).reverse().join(" ");
        return text.split("").reverse().join("");
      }}
    />
  );
}
