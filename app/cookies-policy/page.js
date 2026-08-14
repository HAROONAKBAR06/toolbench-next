import Link from "next/link";
import ArticleContent from "@/components/ArticleContent";

const URL = "https://www.toolbench.cc/cookies-policy";
const LAST_UPDATED = "August 14, 2026";

export const metadata = {
  title: "Cookies Policy",
  description:
    "How ToolBench uses cookies and similar local storage technologies, and how you can control them.",
  alternates: { canonical: URL },
};

const content = {
  intro:
    `This Cookies Policy explains how ToolBench ("we," "us") uses cookies and similar technologies on toolbench.cc, and the choices you have. We last updated this policy on ${LAST_UPDATED}.`,
  sections: [
    {
      heading: "1. What cookies are",
      paragraphs: [
        "Cookies are small text files placed on your device by a website you visit. They're widely used to make sites work, remember your preferences, and understand how a site is used. We also use related technologies like local storage, which lets a site save small pieces of data directly in your browser.",
      ],
    },
    {
      heading: "2. How ToolBench uses cookies and local storage",
      paragraphs: [
        "ToolBench's tools are designed to run entirely in your browser, so most of what happens on the site never touches a server. That said, we and our service providers use a limited set of cookies and local storage for the following purposes:",
      ],
      list: [
        "Essential — keeping the site functioning correctly, such as remembering basic display preferences",
        "Analytics — understanding aggregate, anonymized traffic patterns (for example, which tools are most used) so we can improve the Service",
        "Local tool preferences — some tools may save your recent settings (e.g. a chosen unit or output format) in your browser's local storage so you don't have to re-select them each visit; this data stays on your device",
      ],
    },
    {
      heading: "3. Third-party cookies",
      paragraphs: [
        "We may use privacy-focused analytics providers to understand overall site usage. These providers may set their own cookies or use similar technologies subject to their own privacy policies. We don't use cookies to sell your personal data or build advertising profiles, and ToolBench does not run third-party ads.",
      ],
    },
    {
      heading: "4. Managing cookies",
      paragraphs: [
        "Most browsers let you view, delete, and block cookies through their settings. You can also clear a site's local storage from your browser's developer tools or privacy settings. Blocking cookies won't prevent ToolBench's tools from working, since core functionality runs client-side, but it may reset any saved preferences.",
      ],
      list: [
        "Chrome: Settings → Privacy and security → Cookies and other site data",
        "Firefox: Settings → Privacy & Security → Cookies and Site Data",
        "Safari: Preferences → Privacy → Manage Website Data",
        "Edge: Settings → Cookies and site permissions",
      ],
    },
    {
      heading: "5. Changes to this policy",
      paragraphs: [
        "We may update this Cookies Policy from time to time to reflect changes in the technologies we use or for legal reasons. We'll update the \"last updated\" date above when we do.",
      ],
    },
    {
      heading: "6. Contact",
      paragraphs: [
        "If you have questions about this Cookies Policy, you can reach us via the contact details listed on our homepage.",
      ],
    },
  ],
};

export default function CookiesPolicyPage() {
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span>Cookies Policy</span>
        </div>
        <div className="section-head">
          <div className="spec-tag">LEGAL</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>Cookies Policy</h1>
          <p>Last updated: {LAST_UPDATED}</p>
        </div>
        <ArticleContent content={content} />
      </div>
    </section>
  );
}