"use client";
import { useRef, useState } from "react";
import { formatBytes } from "@/lib/browserUtils";

export default function Dropzone({ accept, multiple = false, onFiles, files = [], onRemove, hint }) {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  function handleFiles(fileList) {
    onFiles(Array.from(fileList));
  }

  return (
    <div>
      <div
        className="dropzone"
        style={dragOver ? { borderColor: "var(--blue-line)" } : undefined}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 16V4M7 9l5-5 5 5" />
          <path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
        </svg>
        <div className="dz-title">Click to choose {multiple ? "files" : "a file"} or drop {multiple ? "them" : "it"} here</div>
        <div className="dz-sub">{hint}</div>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          hidden
          onChange={(e) => { if (e.target.files?.length) handleFiles(e.target.files); e.target.value = ""; }}
        />
      </div>
      {files.length > 0 && (
        <div className="file-list">
          {files.map((f, idx) => (
            <div className="file-chip" key={idx}>
              <span className="name">{idx + 1}. {f.name} — {formatBytes(f.size)}</span>
              {onRemove && <button type="button" onClick={() => onRemove(idx)}>Remove</button>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
