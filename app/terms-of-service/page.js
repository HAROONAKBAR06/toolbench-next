import Link from "next/link";
import ArticleContent from "@/components/ArticleContent";

const URL = "https://www.toolbench.cc/terms-of-service";
const LAST_UPDATED = "August 14, 2026";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions for using ToolBench's free, browser-based PDF, image, text, conversion and developer tools.",
  alternates: { canonical: URL },
};

const content = {
  intro:
    `These Terms of Service ("Terms") govern your use of ToolBench (the "Service"), available at toolbench.cc. By using any tool on this site, you agree to these Terms. If you don't agree, please don't use the Service. We last updated these Terms on ${LAST_UPDATED}.`,
  sections: [
    {
      heading: "1. What ToolBench is",
      paragraphs: [
        "ToolBench provides free, browser-based utilities for working with PDFs, images, text, unit conversions, generators, and everyday developer tasks. Every tool runs entirely on your device — files you open in a tool are processed locally in your browser and are not uploaded to our servers.",
        "We may add, change, or remove tools at any time without notice.",
      ],
    },
    {
      heading: "2. Using the Service",
      paragraphs: [
        "You may use ToolBench for personal or commercial purposes, free of charge, subject to these Terms. You agree not to misuse the Service, including by:",
      ],
      list: [
        "Attempting to disrupt, overload, or interfere with the site or its infrastructure",
        "Using automated systems to scrape or excessively query the site in a way that degrades performance for others",
        "Using any tool to create, process, or distribute content that is illegal, infringing, or harmful",
        "Attempting to reverse-engineer, copy, or resell the Service as your own product",
      ],
    },
    {
      heading: "3. No account, your content stays yours",
      paragraphs: [
        "ToolBench doesn't require an account and doesn't ask you to create one. Because processing happens locally in your browser, we generally never see, receive, or store the files, text, or data you run through a tool. You retain all rights to any content you process using the Service.",
        "Some tools may rely on your browser's local storage to remember preferences (such as recent settings) on your own device. This data stays on your device and is not transmitted to us.",
      ],
    },
    {
      heading: "4. Intellectual property",
      paragraphs: [
        "The ToolBench name, logo, site design, and underlying code are owned by us or our licensors and are protected by intellectual property laws. These Terms don't grant you any rights to use our branding except as necessary to use the Service as intended.",
      ],
    },
    {
      heading: "5. \"As is\" and no warranty",
      paragraphs: [
        "The Service is provided \"as is\" and \"as available,\" without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement. We don't guarantee that any tool will be error-free, uninterrupted, or produce results suitable for your specific needs.",
        "You're responsible for verifying that output from any tool (conversions, generated files, formatted text, etc.) meets your requirements before relying on it, especially for professional, legal, financial, or medical use.",
      ],
    },
    {
      heading: "6. Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by law, ToolBench and its operators won't be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, revenue, or profits, arising from your use of or inability to use the Service, even if we've been advised of the possibility of such damages.",
      ],
    },
    {
      heading: "7. Third-party links and content",
      paragraphs: [
        "The Service may contain links to third-party websites or services that we don't own or control. We're not responsible for the content, policies, or practices of any third-party site.",
      ],
    },
    {
      heading: "8. Changes to these Terms",
      paragraphs: [
        "We may update these Terms from time to time. If we make material changes, we'll update the \"last updated\" date at the top of this page. Continuing to use the Service after changes take effect means you accept the revised Terms.",
      ],
    },
    {
      heading: "9. Contact",
      paragraphs: [
        "Questions about these Terms can be sent to us via the contact details listed on our homepage.",
      ],
    },
  ],
};

export default function TermsOfServicePage() {
  return (
    <section className="section" style={{ paddingTop: 48 }}>
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span>Terms of Service</span>
        </div>
        <div className="section-head">
          <div className="spec-tag">LEGAL</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>Terms of Service</h1>
          <p>Last updated: {LAST_UPDATED}</p>
        </div>
        <ArticleContent content={content} />
      </div>
    </section>
  );
}