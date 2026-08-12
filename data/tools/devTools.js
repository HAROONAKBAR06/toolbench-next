import { manualToolContent } from "@/lib/content";
import { HASH_ALGORITHMS } from "@/data/pairFamilies";

const section = "dev";

const staticDevTools = [
  {
    slug: "json-formatter",
    section, title: "JSON Formatter & Validator", tag: "pretty-print",
    component: "JsonFormatter",
    metaDescription: "Format, validate, and pretty-print JSON for free, right in your browser. Instant error highlighting.",
    content: () => manualToolContent({
      title: "JSON Formatter & Validator",
      whatItDoes: "This tool takes minified or messy JSON and pretty-prints it with proper indentation, while validating the syntax and pointing out exactly where an error occurs if the JSON is malformed.",
      howToSteps: [
        "Paste your JSON into the input box.",
        "Click \"Format\" to pretty-print it, or check the validation message.",
        "If there's a syntax error, review the highlighted location.",
        "Copy the formatted, readable JSON.",
      ],
      useCases: [
        "Making a minified API response readable for debugging.",
        "Validating that hand-written JSON config is syntactically correct before deploying it.",
        "Formatting JSON consistently before pasting it into documentation.",
      ],
      faq: [
        { q: "What happens if my JSON has a syntax error?", a: "The tool reports the parsing error, typically pointing to the position where the invalid syntax was found, so you can fix it quickly." },
        { q: "Can I minify JSON with this tool too?", a: "Yes — alongside pretty-printing, a minify option compresses the JSON back down to a single line with no extra whitespace." },
      ],
    }),
  },
  {
    slug: "regex-tester",
    section, title: "Regex Tester", tag: "highlight matches",
    component: "RegexTester",
    metaDescription: "Test a regular expression against sample text and see matches highlighted live — free and instant.",
    content: () => manualToolContent({
      title: "Regex Tester",
      whatItDoes: "This tool runs a regular expression against sample text and highlights every match live as you type, along with capture group details, so you can build and debug a regex pattern without leaving your browser.",
      howToSteps: [
        "Enter your regular expression pattern.",
        "Set any flags you need (like global or case-insensitive).",
        "Paste your test text into the input box.",
        "Matches highlight automatically as you adjust the pattern.",
      ],
      useCases: [
        "Debugging a regex pattern that isn't matching what you expect.",
        "Testing a validation pattern (like an email or phone format) against sample inputs.",
        "Extracting or checking capture groups from a pattern before using it in code.",
      ],
      faq: [
        { q: "Which regex flavor does this use?", a: "It uses standard JavaScript regular expression syntax, which covers the vast majority of common pattern needs." },
        { q: "Can I test multiple lines of text at once?", a: "Yes — paste a full block of multi-line text and, with the appropriate flags enabled, matches across the whole block are highlighted." },
      ],
    }),
  },
  {
    slug: "timestamp-converter",
    section, title: "Timestamp Converter", tag: "Unix ⇄ human date",
    component: "TimestampConverter",
    metaDescription: "Convert between Unix timestamps and human-readable dates — free, instant, and works both directions.",
    content: () => manualToolContent({
      title: "Timestamp Converter",
      whatItDoes: "This tool converts a Unix timestamp (seconds since January 1, 1970) into a human-readable date and time, and works in reverse too — turning a date you enter into its Unix timestamp equivalent.",
      howToSteps: [
        "Enter a Unix timestamp to convert it to a readable date, or",
        "Pick a date and time to convert it into a Unix timestamp.",
        "Both the timestamp and the readable date update automatically.",
        "Copy whichever value you need.",
      ],
      useCases: [
        "Reading a raw timestamp from a database record or API response.",
        "Converting a specific date into a timestamp for use in code or a query.",
        "Debugging date-related issues in logs that record time in Unix format.",
      ],
      faq: [
        { q: "Does this handle timestamps in seconds or milliseconds?", a: "Both formats are common — the tool detects and handles either seconds-based or millisecond-based Unix timestamps." },
        { q: "Does the converted date use my local timezone?", a: "Dates display in your browser's local timezone by default, alongside the UTC equivalent for reference." },
      ],
    }),
  },
  {
    slug: "jwt-decoder",
    section, title: "JWT Decoder", tag: "inspect header & payload",
    component: "JwtDecoder",
    metaDescription: "Decode a JWT (JSON Web Token) and inspect its header and payload — free, private, no server round-trip.",
    content: () => manualToolContent({
      title: "JWT Decoder",
      whatItDoes: "This tool decodes a JSON Web Token (JWT) and displays its header and payload as readable JSON, letting you inspect the claims inside a token without needing a backend or command-line tool.",
      howToSteps: [
        "Paste the full JWT string into the input box.",
        "The header and payload decode and display automatically.",
        "Review the claims contained in the token.",
      ],
      useCases: [
        "Debugging an authentication issue by inspecting a token's claims.",
        "Checking a token's expiry time or issuer during development.",
        "Verifying what data an API is embedding inside a JWT.",
      ],
      faq: [
        { q: "Does this verify the token's signature?", a: "No — this tool decodes the header and payload for inspection only; it doesn't verify the cryptographic signature, since that requires the signing secret or public key." },
        { q: "Is my token sent to a server when I paste it here?", a: "No — decoding happens entirely in your browser; the token is never transmitted anywhere." },
      ],
    }),
  },
  {
    slug: "css-minifier",
    section, title: "CSS Minifier", tag: "strip whitespace & comments",
    component: "CssMinifier",
    metaDescription: "Minify CSS by removing whitespace and comments for free, directly in your browser.",
    content: () => manualToolContent({
      title: "CSS Minifier",
      whatItDoes: "This tool strips unnecessary whitespace, line breaks, and comments out of CSS, producing a smaller file that loads faster without changing how the styles behave.",
      howToSteps: [
        "Paste your CSS into the input box.",
        "Click \"Minify\".",
        "Copy the minified CSS for production use.",
      ],
      useCases: [
        "Reducing a stylesheet's file size before deploying it to production.",
        "Cleaning up CSS pasted from a design tool that includes excess whitespace.",
        "Speeding up page load time by shrinking render-blocking CSS.",
      ],
      faq: [
        { q: "Does minifying change how the CSS behaves?", a: "No — only formatting is removed; selectors, properties, and values are preserved exactly, so styling behavior is unchanged." },
        { q: "Should I keep an unminified copy?", a: "Yes — keep your original, readable CSS as the source file for future edits, and use the minified version only for production output." },
      ],
    }),
  },
  {
    slug: "markdown-to-html",
    section, title: "Markdown to HTML", tag: "convert & preview",
    component: "MarkdownToHtml",
    metaDescription: "Convert Markdown to HTML with a live preview — free and instant, right in your browser.",
    content: () => manualToolContent({
      title: "Markdown to HTML",
      whatItDoes: "This tool converts Markdown syntax — headings, bold and italic text, links, and lists — into clean HTML, with a live preview so you can see exactly how it will render.",
      howToSteps: [
        "Type or paste your Markdown into the input box.",
        "The HTML output and rendered preview update live.",
        "Copy the generated HTML for use in your project.",
      ],
      useCases: [
        "Converting Markdown notes into HTML for a webpage or email.",
        "Previewing how Markdown content will render before publishing.",
        "Generating HTML from a README or documentation file.",
      ],
      faq: [
        { q: "Which Markdown syntax is supported?", a: "Common elements — headings, bold, italics, links, and lists — are supported, covering the syntax used in most everyday Markdown documents." },
        { q: "Does this support tables or embedded images?", a: "Basic Markdown elements are covered; for advanced extensions like tables, check the output carefully or add the HTML manually." },
      ],
    }),
  },
];

const hashTools = Object.entries(HASH_ALGORITHMS).map(([algo, def]) => ({
  slug: `${def.slug}-hash-generator`,
  section,
  title: `${def.label} Hash Generator`,
  tag: "text → hash digest",
  component: "HashGenerator",
  props: { algorithm: algo },
  metaDescription: `Generate a ${def.label} hash from any text for free, instantly, using your browser's Web Crypto API.`,
  content: () => manualToolContent({
    title: `${def.label} Hash Generator`,
    whatItDoes: `This tool computes the ${def.label} hash digest of any text you enter, using your browser's built-in Web Crypto API — the same cryptographic hashing standard used across software development, without needing a command-line tool.`,
    howToSteps: [
      "Type or paste the text you want to hash.",
      `The ${def.label} digest generates automatically.`,
      "Copy the resulting hash value.",
    ],
    useCases: [
      "Checking a file or text's integrity by comparing its hash against a known value.",
      `Generating a ${def.label} hash for use in a script, API request, or configuration.`,
      "Learning how hashing works by seeing how small input changes produce a completely different hash.",
    ],
    faq: [
      { q: `Can a ${def.label} hash be reversed back into the original text?`, a: `No — hashing is a one-way function; the ${def.label} digest cannot be converted back into the original input.` },
      { q: "Does the exact same input always produce the exact same hash?", a: "Yes — hashing is deterministic, so identical input always produces an identical hash output, which is what makes it useful for verifying integrity." },
      { q: "Is my text sent anywhere to compute the hash?", a: "No — the hash is computed locally using your browser's Web Crypto API; the text you enter never leaves your device." },
    ],
  }),
}));

const encodeDecodeTools = [
  {
    slug: "url-encode-text",
    section, title: "URL Encoder", tag: "percent-encoding",
    component: "UrlEncodeDecode",
    props: { mode: "encode" },
    metaDescription: "URL-encode text into percent-encoded form for free, instantly, right in your browser.",
    content: () => manualToolContent({
      title: "URL Encoder",
      whatItDoes: "This tool percent-encodes text, converting spaces, symbols, and special characters into a URL-safe format so the string can be safely used inside a query string or URL path.",
      howToSteps: [
        "Type or paste the text you want to encode.",
        "The percent-encoded result generates automatically.",
        "Copy it for use in a URL or query parameter.",
      ],
      useCases: [
        "Encoding a search query or parameter value before adding it to a URL.",
        "Making a string with spaces or special characters safe to include in a link.",
        "Preparing form data to be passed through a URL.",
      ],
      faq: [
        { q: "What gets changed during URL encoding?", a: "Reserved and special characters (spaces, &, =, ?, and others) are replaced with a percent sign followed by their hex code, while regular letters and numbers stay unchanged." },
      ],
    }),
  },
  {
    slug: "url-decode-text",
    section, title: "URL Decoder", tag: "reverse percent-encoding",
    component: "UrlEncodeDecode",
    props: { mode: "decode" },
    metaDescription: "Decode a percent-encoded URL string back to readable text — free and instant.",
    content: () => manualToolContent({
      title: "URL Decoder",
      whatItDoes: "This tool reverses percent-encoding, turning a URL-encoded string (like name%3DJohn%20Smith) back into its original, readable text.",
      howToSteps: [
        "Paste the percent-encoded text into the input box.",
        "The decoded, readable text generates automatically.",
        "Copy the decoded result.",
      ],
      useCases: [
        "Reading a URL parameter that's been percent-encoded.",
        "Debugging a link that isn't behaving as expected due to encoding.",
        "Converting an encoded query string back into plain text for review.",
      ],
      faq: [
        { q: "What if the input isn't validly encoded?", a: "Malformed percent-encoded sequences will cause a decoding error, which the tool will flag so you can check the input." },
      ],
    }),
  },
  {
    slug: "html-entity-encoder",
    section, title: "HTML Entity Encoder", tag: "&lt; &gt; &amp;",
    component: "HtmlEntityEncodeDecode",
    props: { mode: "encode" },
    metaDescription: "Encode text into HTML entities for free, instantly — safe for embedding in raw HTML.",
    content: () => manualToolContent({
      title: "HTML Entity Encoder",
      whatItDoes: "This tool converts characters like <, >, and & into their HTML entity equivalents (&lt;, &gt;, &amp;) so text can be safely embedded inside raw HTML without breaking the markup or being interpreted as a tag.",
      howToSteps: [
        "Type or paste your text into the input box.",
        "The HTML-entity-encoded result generates automatically.",
        "Copy it for use inside your HTML source.",
      ],
      useCases: [
        "Safely displaying code snippets or angle brackets inside a webpage.",
        "Preventing user-submitted text from being interpreted as HTML markup.",
        "Preparing text to be embedded in a static HTML template.",
      ],
      faq: [
        { q: "Why does < need to be encoded in HTML?", a: "A raw < is interpreted as the start of an HTML tag; encoding it as &lt; tells the browser to display the character itself instead of treating it as markup." },
      ],
    }),
  },
  {
    slug: "html-entity-decoder",
    section, title: "HTML Entity Decoder", tag: "entities → readable text",
    component: "HtmlEntityEncodeDecode",
    props: { mode: "decode" },
    metaDescription: "Decode HTML entities back into readable text — free and instant.",
    content: () => manualToolContent({
      title: "HTML Entity Decoder",
      whatItDoes: "This tool converts HTML entities like &lt;, &gt;, and &amp; back into their original readable characters (<, >, &).",
      howToSteps: [
        "Paste text containing HTML entities into the input box.",
        "The decoded, readable text generates automatically.",
        "Copy the decoded result.",
      ],
      useCases: [
        "Reading HTML source that's full of entity codes as plain text.",
        "Cleaning up text copied from a webpage's source view.",
        "Converting entity-encoded content back to normal text for editing.",
      ],
      faq: [
        { q: "Are numeric entities like &#39; supported too?", a: "Yes — both named entities (like &amp;) and numeric character references are decoded back to their original characters." },
      ],
    }),
  },
];

export const devTools = [...staticDevTools, ...hashTools, ...encodeDecodeTools];
