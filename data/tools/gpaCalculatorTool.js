import { manualToolContent } from "@/lib/content";

export const gpaCalculatorTool = {
  slug: "gpa-calculator",
  section: "convert",
  title: "GPA Calculator",
  tag: "Calculate your semester and cumulative GPA from letter grades and credit hours",
  component: "GpaCalculator",
  metaDescription:
    "Free GPA calculator. Add your courses, letter grades and credit hours to get your semester GPA, and combine it with a prior GPA for your cumulative GPA.",
  content: () =>
    manualToolContent({
      title: "GPA Calculator",
      whatItDoes:
        "This GPA calculator works out your grade point average from the letter grades and credit hours of the " +
        "courses you're taking this semester. Add a row per course, pick each letter grade, enter its credit " +
        "hours, and the tool weights every grade by its credits to compute your semester GPA. Turn on the " +
        "cumulative GPA option to combine that with your prior GPA and credit hours for a running total.",
      howToSteps: [
        "Add a row for each course you want included, using the \"Add course\" button.",
        "Pick the letter grade you earned (or expect) in that course from the dropdown.",
        "Enter the credit hours (or credit units) the course is worth.",
        "Repeat for every course — the semester GPA updates automatically as you go.",
        "Optionally turn on \"Include prior GPA\" and enter your existing cumulative GPA and total credit hours to see your new cumulative GPA.",
        "Use \"Reset\" to clear everything and start over.",
      ],
      useCases: [
        "Checking your semester GPA partway through the term, before final grades are posted.",
        "Working out what grades you'd need on remaining coursework to hit a target GPA.",
        "Combining a new semester's grades with your existing cumulative GPA and credit hours.",
        "Comparing how a retake or an extra course would move your overall average.",
      ],
      extraHeading: "How the GPA calculation works",
      extraParagraphs: [
        "Each letter grade maps to a grade point value on a 4.0 scale — A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, and " +
          "so on down to F = 0.0. GPA isn't a simple average of those grade points; it's a credit-weighted average, " +
          "so a 4-credit course pulls the average further than a 1-credit course. The formula is: GPA = (sum of " +
          "grade points × credit hours, for every course) ÷ (sum of credit hours).",
        "Cumulative GPA works the same way but treats your prior GPA and credit total as one large \"course\" being " +
          "combined with the new semester: it multiplies your prior GPA by your prior credit hours to recover your " +
          "prior grade-point total, adds this semester's grade-point total on top, then divides by your combined " +
          "credit hours.",
      ],
      faq: [
        {
          q: "What GPA scale does this calculator use?",
          a: "It uses the standard US 4.0 plus/minus scale (A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, C- = 1.7, D+ = 1.3, D = 1.0, D- = 0.7, F = 0.0). Some schools use a slightly different scale, most commonly counting A+ as 4.3 instead of 4.0 — check your school's official grading policy if your GPA needs to match a transcript exactly.",
        },
        {
          q: "Why isn't my GPA just the average of my grade points?",
          a: "Because courses carry different credit hours. GPA weights each grade by how many credits that course is worth, so a 3-credit A affects your average more than a 1-credit A.",
        },
        {
          q: "How do I calculate my cumulative GPA, not just this semester's?",
          a: "Turn on \"Include prior GPA,\" then enter your current cumulative GPA and total credit hours earned so far. The calculator combines that history with this semester's courses into one cumulative figure.",
        },
        {
          q: "Does a Pass/Fail or Withdraw grade count toward GPA?",
          a: "Typically no — most schools exclude Pass/Fail and Withdraw grades from the GPA calculation entirely, though the credit hours may still count toward your total for other purposes. Leave those courses out of this calculator if your school excludes them.",
        },
        {
          q: "Does this tool store my grades anywhere?",
          a: "No. Everything you enter stays in your browser for this session only — nothing is uploaded or saved.",
        },
      ],
    }),
};
