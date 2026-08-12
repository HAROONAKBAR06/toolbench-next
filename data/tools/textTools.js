import { manualToolContent } from "@/lib/content";
import { TEXT_CASE_MODES } from "@/data/pairFamilies";

const section = "text";

const staticTextTools = [
  {
    slug: "word-counter",
    section, title: "Word & Character Counter", tag: "live stats",
    component: "WordCounter",
    metaDescription: "Count words, characters, sentences and paragraphs in real time — free, private, and instant.",
    content: () => manualToolContent({
      title: "Word & Character Counter",
      whatItDoes: "This tool counts words, characters, sentences, and paragraphs in any text as you type or paste, updating live. It's built for writers, students, and editors working against a word or character limit.",
      howToSteps: [
        "Paste or type your text into the box.",
        "Word, character, sentence, and paragraph counts update automatically.",
        "Edit your text and watch the counts adjust in real time.",
      ],
      useCases: [
        "Checking an essay or article meets a required word count before submitting.",
        "Making sure a tweet, meta description, or ad copy fits within a character limit.",
        "Tracking progress while drafting a long piece of writing.",
      ],
      faq: [
        { q: "Does the character count include spaces?", a: "Both counts are shown so you can check the exact figure a platform or requirement asks for, with and without spaces." },
        { q: "Is my text saved anywhere?", a: "No — text is only processed locally in your browser and is never stored or transmitted." },
      ],
    }),
  },
  {
    slug: "lorem-ipsum-generator",
    section, title: "Lorem Ipsum Generator", tag: "placeholder text",
    component: "LoremIpsumGenerator",
    metaDescription: "Generate Lorem Ipsum placeholder text — choose paragraphs, sentences, or words. Free and instant.",
    content: () => manualToolContent({
      title: "Lorem Ipsum Generator",
      whatItDoes: "This tool generates classic Lorem Ipsum placeholder text in the amount you choose — by paragraphs, sentences, or words — for filling mockups and layouts before real content is ready.",
      howToSteps: [
        "Choose whether you want paragraphs, sentences, or words.",
        "Enter how many you need.",
        "Click generate to produce the placeholder text.",
        "Copy it into your design, mockup, or document.",
      ],
      useCases: [
        "Filling a website or app mockup with realistic-looking body text before copy is finalized.",
        "Testing how a layout handles varying amounts of text.",
        "Populating a template or CMS during development.",
      ],
      faq: [
        { q: "Why is Lorem Ipsum used instead of readable text?", a: "Its scrambled Latin-derived words look like natural text without being distractingly readable, which keeps attention on layout and typography rather than content." },
        { q: "Can I generate a specific character count instead?", a: "Choose words as the unit and adjust the count, then trim to the exact character length you need if precision matters." },
      ],
    }),
  },
  {
    slug: "text-diff-checker",
    section, title: "Text Diff Checker", tag: "compare two texts",
    component: "TextDiffChecker",
    metaDescription: "Compare two blocks of text and highlight the differences, line by line — free and private.",
    content: () => manualToolContent({
      title: "Text Diff Checker",
      whatItDoes: "The Text Diff Checker compares two blocks of text line by line and highlights what's been added, removed, or changed between them, making it easy to spot edits without reading both versions word for word.",
      howToSteps: [
        "Paste your original text into the left box.",
        "Paste the revised text into the right box.",
        "Click \"Compare\" to see the differences highlighted.",
        "Review added, removed, and unchanged lines.",
      ],
      useCases: [
        "Checking what changed between two drafts of a document or contract.",
        "Reviewing an edited version of an article before publishing.",
        "Comparing two versions of code, config, or data before merging.",
      ],
      faq: [
        { q: "Does this compare word-by-word or line-by-line?", a: "Comparisons are made line by line, which makes larger structural changes easy to spot at a glance." },
        { q: "Can I compare very long documents?", a: "Yes, though extremely long texts may take a moment longer to process and render." },
      ],
    }),
  },
  {
    slug: "find-and-replace",
    section, title: "Find & Replace", tag: "bulk text edits",
    component: "FindAndReplace",
    metaDescription: "Find and replace text in bulk, with case-sensitive and whole-word options — free and instant.",
    content: () => manualToolContent({
      title: "Find & Replace",
      whatItDoes: "This tool finds every occurrence of a word or phrase in a block of text and replaces it with something else, all in one pass, with options for case sensitivity and whole-word matching.",
      howToSteps: [
        "Paste your text into the input box.",
        "Enter the word or phrase to find.",
        "Enter the replacement text.",
        "Click \"Replace All\" and copy the updated result.",
      ],
      useCases: [
        "Updating a company name, date, or term throughout a document at once.",
        "Cleaning up inconsistent terminology across a long piece of text.",
        "Bulk-correcting a repeated typo without manually editing each instance.",
      ],
      faq: [
        { q: "Can I match whole words only, to avoid partial matches?", a: "Yes — enable whole-word matching so \"cat\" doesn't also match inside \"category\"." },
        { q: "Is the replacement case-sensitive?", a: "Case sensitivity can be toggled on or off depending on whether you want an exact case match." },
      ],
    }),
  },
  {
    slug: "text-reverser",
    section, title: "Text Reverser", tag: "flip characters or words",
    component: "TextReverser",
    metaDescription: "Reverse text character by character or word by word — free, instant, and private.",
    content: () => manualToolContent({
      title: "Text Reverser",
      whatItDoes: "This tool reverses text either character by character (spelling it backward) or word by word (flipping the word order), instantly, as you type.",
      howToSteps: [
        "Type or paste your text into the box.",
        "Choose character reverse or word reverse.",
        "Copy the reversed result.",
      ],
      useCases: [
        "Checking if a word or phrase is a palindrome.",
        "Creating a fun or stylized flipped-text effect for social media.",
        "Reversing word order in a phrase for creative writing or puzzles.",
      ],
      faq: [
        { q: "What's the difference between character and word reverse?", a: "Character reverse spells the whole string backward letter by letter; word reverse keeps each word spelled normally but reverses their order." },
      ],
    }),
  },
  {
    slug: "remove-line-breaks",
    section, title: "Remove Line Breaks", tag: "flatten to one paragraph",
    component: "RemoveLineBreaks",
    metaDescription: "Remove line breaks from text and join it into a single paragraph — free and instant.",
    content: () => manualToolContent({
      title: "Remove Line Breaks",
      whatItDoes: "This tool strips line breaks out of pasted text, joining everything into a single continuous paragraph — useful when text copied from a PDF or column layout comes in broken across many short lines.",
      howToSteps: [
        "Paste text containing unwanted line breaks.",
        "Click \"Remove Line Breaks\".",
        "Copy the resulting single-paragraph text.",
      ],
      useCases: [
        "Cleaning up text copied from a PDF where every line wraps as a separate break.",
        "Preparing text for a system that treats each line break as a new paragraph.",
        "Joining a list of fragments into one flowing paragraph.",
      ],
      faq: [
        { q: "Does this remove paragraph breaks too, or just line wraps?", a: "You can choose to keep double line breaks (paragraph spacing) intact while collapsing single line wraps, depending on the option selected." },
      ],
    }),
  },
  {
    slug: "remove-duplicate-lines",
    section, title: "Remove Duplicate Lines", tag: "de-duplicate a list",
    component: "RemoveDuplicateLines",
    metaDescription: "Remove duplicate lines from a list of text — free, instant, and case-sensitive options included.",
    content: () => manualToolContent({
      title: "Remove Duplicate Lines",
      whatItDoes: "This tool scans a list of text, line by line, and removes any duplicates, leaving only unique entries in their original order.",
      howToSteps: [
        "Paste your list into the input box, one entry per line.",
        "Click \"Remove Duplicates\".",
        "Copy the cleaned, de-duplicated list.",
      ],
      useCases: [
        "Cleaning up a list of email addresses or names before sending a mailing.",
        "De-duplicating a list of URLs, keywords, or tags.",
        "Tidying up data pasted from multiple sources with overlapping entries.",
      ],
      faq: [
        { q: "Is the duplicate check case-sensitive?", a: "A case-sensitivity toggle lets you decide whether \"Apple\" and \"apple\" count as duplicates or as distinct lines." },
        { q: "Does this preserve the original order?", a: "Yes — the first occurrence of each unique line is kept in its original position." },
      ],
    }),
  },
  {
    slug: "sort-lines-alphabetically",
    section, title: "Sort Lines Alphabetically", tag: "A–Z or Z–A",
    component: "SortLines",
    metaDescription: "Sort a list of text lines alphabetically, A-Z or Z-A — free and instant.",
    content: () => manualToolContent({
      title: "Sort Lines Alphabetically",
      whatItDoes: "This tool sorts a pasted list of lines into alphabetical order, ascending (A–Z) or descending (Z–A), instantly.",
      howToSteps: [
        "Paste your list, one item per line.",
        "Choose ascending or descending order.",
        "Copy the sorted result.",
      ],
      useCases: [
        "Alphabetizing a list of names, products, or references.",
        "Sorting a glossary or index into order before publishing.",
        "Organizing a list of tags or categories for readability.",
      ],
      faq: [
        { q: "Does sorting ignore case, or treat uppercase and lowercase differently?", a: "Sorting is case-insensitive by default, so \"apple\" and \"Apple\" sort together based on letter order rather than case." },
      ],
    }),
  },
  {
    slug: "remove-extra-spaces",
    section, title: "Remove Extra Spaces", tag: "clean up whitespace",
    component: "RemoveExtraSpaces",
    metaDescription: "Remove extra spaces, tabs, and blank lines from text — free and instant cleanup.",
    content: () => manualToolContent({
      title: "Remove Extra Spaces",
      whatItDoes: "This tool cleans up messy whitespace — collapsing multiple spaces into one, trimming leading and trailing spaces, and removing extra blank lines — in one click.",
      howToSteps: [
        "Paste your text into the box.",
        "Click \"Clean Text\".",
        "Copy the cleaned-up result.",
      ],
      useCases: [
        "Cleaning up text copied from a PDF or web page that came with irregular spacing.",
        "Tidying up code or data that has inconsistent whitespace.",
        "Preparing text for import into a system sensitive to extra spaces.",
      ],
      faq: [
        { q: "Does this affect intentional formatting, like indentation?", a: "This tool targets extra spaces and blank lines; if your text relies on specific indentation (like code), review the result before using it." },
      ],
    }),
  },
  {
    slug: "slug-generator",
    section, title: "Slug Generator", tag: "text to URL slug",
    component: "SlugGenerator",
    metaDescription: "Convert any text into a clean, URL-safe slug — free and instant.",
    content: () => manualToolContent({
      title: "Slug Generator",
      whatItDoes: "This tool converts any text — a blog title, product name, or page heading — into a clean, lowercase, hyphen-separated slug suitable for use in a URL.",
      howToSteps: [
        "Type or paste your text.",
        "The URL-safe slug generates automatically as you type.",
        "Copy the slug for use in your page URL.",
      ],
      useCases: [
        "Generating a clean URL slug for a new blog post or article.",
        "Creating a consistent, readable URL for a product page.",
        "Converting a heading into a valid anchor link or file name.",
      ],
      faq: [
        { q: "What happens to special characters and accents?", a: "Special characters, punctuation, and accented letters are stripped or normalized so the result only contains lowercase letters, numbers, and hyphens." },
        { q: "Are spaces converted to hyphens or underscores?", a: "Spaces are converted to hyphens, matching the most common URL slug convention." },
      ],
    }),
  },
];

const caseConverterTools = Object.entries(TEXT_CASE_MODES).map(([mode, def]) => ({
  slug: `${def.slug}-converter`,
  section,
  title: `${def.label} Converter`,
  tag: "instant text case change",
  component: "TextCaseConverter",
  props: { mode },
  metaDescription: `Convert text to ${def.label.toLowerCase()} instantly — free, private, and works right in your browser.`,
  content: () => manualToolContent({
    title: `${def.label} Converter`,
    whatItDoes: `This tool converts any text you paste into ${def.label.toLowerCase()} instantly. Rather than manually retyping or hunting for a "change case" menu buried in a word processor, you get the converted result the moment you type or paste.`,
    howToSteps: [
      "Paste or type your text into the input box.",
      `The text converts to ${def.label.toLowerCase()} automatically.`,
      "Copy the converted result to your clipboard.",
    ],
    useCases: [
      mode === "upper" ? "Formatting a heading, warning label, or acronym in all capitals." :
      mode === "lower" ? "Normalizing inconsistently-cased text, like a list of email addresses, to lowercase." :
      mode === "title" ? "Formatting a title, heading, or book name so each major word is capitalized correctly." :
      mode === "sentence" ? "Fixing text that was typed in all caps or with no capitalization back into normal sentence structure." :
      "Creating a stylized, playful text effect for social media or messaging.",
      "Preparing text to match a style guide's capitalization rules before publishing.",
      "Cleaning up text pasted from a source with inconsistent or unwanted capitalization.",
    ],
    faq: [
      { q: `Does this work on long blocks of text, not just single words?`, a: `Yes — paste an entire paragraph or document and the whole thing converts to ${def.label.toLowerCase()} at once.` },
      { q: "Is my text stored or sent anywhere?", a: "No — the conversion runs locally in your browser; nothing is uploaded or saved." },
    ],
  }),
}));

export const textTools = [...staticTextTools, ...caseConverterTools];
