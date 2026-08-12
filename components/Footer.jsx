import Link from "next/link";
import { SECTIONS } from "@/data/registry";

const POPULAR = [
  { section: "pdf", slug: "merge-pdf", title: "Merge PDF" },
  { section: "image", slug: "image-compressor", title: "Image Compressor" },
  { section: "convert", slug: "celsius-to-fahrenheit", title: "Celsius to Fahrenheit" },
  { section: "generate", slug: "qr-code-generator", title: "QR Code Generator" },
  { section: "dev", slug: "json-formatter", title: "JSON Formatter" },
  { section: "text", slug: "word-counter", title: "Word Counter" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="mark">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M7 12h10M12 7v10" stroke="#E8A33D" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span>ToolBench</span>
            </Link>
            <p>A free bench of browser-based tools for PDFs, images, text, conversions and everyday developer work.</p>
          </div>
          <div className="footer-col">
            <h5>Sections</h5>
            <ul>
              {Object.values(SECTIONS).map((s) => (
                <li key={s.slug}><Link href={`/${s.slug}`}>{s.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Popular tools</h5>
            <ul>
              {POPULAR.map((t) => (
                <li key={t.slug}><Link href={`/${t.section}/${t.slug}`}>{t.title}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>About</h5>
            <ul>
              <li>Every tool runs in your browser.</li>
              <li>No file ever touches a server.</li>
              <li>Free, with no account required.</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ToolBench. All tools run client-side.</span>
        </div>
      </div>
    </footer>
  );
}
