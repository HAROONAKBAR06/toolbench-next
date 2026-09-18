"use client";
import { useMemo, useState } from "react";
import { copyToClipboard } from "@/lib/browserUtils";

const GRADE_POINTS = {
  "A+": 4.0, "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7,
  "D+": 1.3, "D": 1.0, "D-": 0.7,
  "F": 0.0,
};
const GRADE_OPTIONS = Object.keys(GRADE_POINTS);

let nextId = 1;
function newCourse() {
  return { id: nextId++, name: "", grade: "A", credits: "3" };
}

export default function GpaCalculator() {
  const [courses, setCourses] = useState([newCourse(), newCourse(), newCourse()]);
  const [includePrior, setIncludePrior] = useState(false);
  const [priorGpa, setPriorGpa] = useState("");
  const [priorCredits, setPriorCredits] = useState("");

  function updateCourse(id, patch) {
    setCourses((cs) => cs.map((c) => (c.id === id ? { ...c, ...patch } : c)));
  }
  function addCourse() {
    setCourses((cs) => [...cs, newCourse()]);
  }
  function removeCourse(id) {
    setCourses((cs) => (cs.length > 1 ? cs.filter((c) => c.id !== id) : cs));
  }
  function reset() {
    setCourses([newCourse(), newCourse(), newCourse()]);
    setIncludePrior(false);
    setPriorGpa("");
    setPriorCredits("");
  }

  const { semesterGpa, semesterCredits, cumulativeGpa } = useMemo(() => {
    let points = 0;
    let credits = 0;
    for (const c of courses) {
      const cr = parseFloat(c.credits);
      if (Number.isNaN(cr) || cr <= 0) continue;
      points += GRADE_POINTS[c.grade] * cr;
      credits += cr;
    }
    const semGpa = credits > 0 ? points / credits : null;

    let cumGpa = null;
    if (includePrior) {
      const pGpa = parseFloat(priorGpa);
      const pCredits = parseFloat(priorCredits);
      if (!Number.isNaN(pGpa) && !Number.isNaN(pCredits) && pCredits >= 0) {
        const totalPoints = pGpa * pCredits + points;
        const totalCredits = pCredits + credits;
        cumGpa = totalCredits > 0 ? totalPoints / totalCredits : null;
      }
    }

    return {
      semesterGpa: semGpa === null ? null : Math.round(semGpa * 1000) / 1000,
      semesterCredits: credits,
      cumulativeGpa: cumGpa === null ? null : Math.round(cumGpa * 1000) / 1000,
    };
  }, [courses, includePrior, priorGpa, priorCredits]);

  return (
    <div className="tool-widget">
      {courses.map((c, i) => (
        <div className="field-row" key={c.id}>
          <div className="field" style={{ flex: 2 }}>
            <label>Course {i + 1} (optional)</label>
            <input
              type="text"
              value={c.name}
              placeholder="e.g. Calculus I"
              onChange={(e) => updateCourse(c.id, { name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Grade</label>
            <select value={c.grade} onChange={(e) => updateCourse(c.id, { grade: e.target.value })}>
              {GRADE_OPTIONS.map((g) => (
                <option key={g} value={g}>{g} ({GRADE_POINTS[g].toFixed(1)})</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Credit Hours</label>
            <input
              type="number"
              min="0"
              step="0.5"
              value={c.credits}
              onChange={(e) => updateCourse(c.id, { credits: e.target.value })}
            />
          </div>
          <button
            className="btn btn-outline copy-btn"
            style={{ alignSelf: "flex-end", marginBottom: 2 }}
            onClick={() => removeCourse(c.id)}
            disabled={courses.length <= 1}
            title="Remove course"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="actions-row">
        <button className="btn btn-outline copy-btn" onClick={addCourse}>+ Add course</button>
        <button className="btn btn-outline copy-btn" onClick={reset}>Reset</button>
      </div>

      <div className="field-row" style={{ marginTop: 22 }}>
        <div className="field-inline">
          <input
            type="checkbox"
            style={{ width: "auto" }}
            checked={includePrior}
            onChange={(e) => setIncludePrior(e.target.checked)}
          />
          <label style={{ textTransform: "none", fontSize: 14 }}>Include prior cumulative GPA</label>
        </div>
      </div>

      {includePrior && (
        <div className="field-row">
          <div className="field">
            <label>Prior Cumulative GPA</label>
            <input type="number" min="0" max="4.3" step="0.01" value={priorGpa} onChange={(e) => setPriorGpa(e.target.value)} placeholder="e.g. 3.45" />
          </div>
          <div className="field">
            <label>Prior Credit Hours</label>
            <input type="number" min="0" step="0.5" value={priorCredits} onChange={(e) => setPriorCredits(e.target.value)} placeholder="e.g. 60" />
          </div>
        </div>
      )}

      {semesterGpa !== null && (
        <div className="result-display" style={{ marginTop: 20 }}>
          Semester GPA: {semesterGpa.toFixed(2)}
          <small>
            {semesterCredits} credit hour{semesterCredits === 1 ? "" : "s"} this semester
            {includePrior && cumulativeGpa !== null && ` · Cumulative GPA: ${cumulativeGpa.toFixed(2)}`}
          </small>
        </div>
      )}

      {semesterGpa !== null && (
        <div className="actions-row">
          <button
            className="btn btn-outline copy-btn"
            onClick={() =>
              copyToClipboard(
                `Semester GPA: ${semesterGpa.toFixed(2)} (${semesterCredits} credits)` +
                  (includePrior && cumulativeGpa !== null ? ` — Cumulative GPA: ${cumulativeGpa.toFixed(2)}` : "")
              )
            }
          >
            Copy Result
          </button>
        </div>
      )}
    </div>
  );
}
