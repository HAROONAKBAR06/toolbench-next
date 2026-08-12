"use client";
import SimpleTextTransform from "./SimpleTextTransform";

export default function RemoveExtraSpaces() {
  return (
    <SimpleTextTransform
      placeholder="Paste messy text here…"
      outputLabel="Cleaned text"
      transform={(text) =>
        text
          .split("\n")
          .map((line) => line.replace(/[ \t]+/g, " ").trim())
          .join("\n")
          .replace(/\n{3,}/g, "\n\n")
      }
    />
  );
}
