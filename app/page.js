import Link from "next/link";
import { ALL_TOOLS } from "@/data/registry";

const CATEGORIES = [
  {
    slug: "pdf", title: "PDF Tools",
    desc: "Merge, split, rotate and pull text or images out of any PDF — all inside your browser tab.",
    list: ["Merge", "Split", "Rotate", "PDF → Images", "PDF → Text"],
    icon: <><path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" /><path d="M15 2v5h5" /></>,
  },
  {
    slug: "image", title: "Image Tools",
    desc: "Compress, resize and convert images, generate favicons, or turn a picture into Base64 text.",
    list: ["Compressor", "Resizer", "Format Converter", "Favicon Maker", "Base64"],
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></>,
  },
  {
    slug: "text", title: "Text Tools",
    desc: "Count words, switch case, generate placeholder copy, or diff two blocks of text side by side.",
    list: ["Word Counter", "Case Converter", "Lorem Ipsum", "Text Diff"],
    icon: <><path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" /></>,
  },
  {
    slug: "convert", title: "Converters & Calculators",
    desc: "Convert units, colors and number bases, or turn CSV into clean JSON in one click.",
    list: ["Unit Converter", "Color Converter", "Base64", "CSV → JSON"],
    icon: <><path d="M17 2l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 22l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>,
  },
  {
    slug: "generate", title: "Generators",
    desc: "Create QR codes, strong passwords, unique IDs and random numbers on demand.",
    list: ["QR Code", "Password", "UUID", "Random Number"],
    icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 17h7M17.5 14v7" /></>,
  },
  {
    slug: "dev", title: "Developer Tools",
    desc: "Format JSON, test regular expressions, hash text, encode URLs and convert timestamps.",
    list: ["JSON Formatter", "Regex Tester", "Hash Generator", "URL Encoder"],
    icon: <><path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" /></>,
  },
];

export default function HomePage() {
  const total = ALL_TOOLS.length;
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="spec-tag">FIG. 00 — THE WORKBENCH</div>
            <h1>Free Online Tools for PDF, Images, Text & More</h1>
            <p className="lede">
               Free online tools for PDFs, images, text, conversions and developer tasks.Merge PDFs, compress images, generate QR codes, format JSON and convert units —
{total}+ free utilities that run entirely in your browser. No sign-up required
            </p>
            <div className="hero-actions">
              <Link href="/pdf" className="btn btn-primary">Explore PDF Tools</Link>
              <Link href="#categories" className="btn btn-ghost">See all sections</Link>
            </div>
          </div>
          <div className="schematic-strip">
            <div className="cell"><div className="num">01 · SPEED</div><div className="label">Runs client-side</div></div>
            <div className="cell"><div className="num">02 · PRIVACY</div><div className="label">Files never leave device</div></div>
            <div className="cell"><div className="num">03 · COST</div><div className="label">100% free, no limits</div></div>
            <div className="cell"><div className="num">04 · ACCESS</div><div className="label">No account required</div></div>
          </div>
        </div>
      </section>

      <div className="ruler" role="presentation" />

      <section className="section" id="categories">
        <div className="container">
          <div className="section-head">
            <div className="spec-tag">FIG. 01 — SECTIONS</div>
            <h2>Six sections, {total}+ tools</h2>
            <p>Every tool is grouped by the job it does. Pick a section, open a tool, get your result — nothing to install.</p>
          </div>

          <div className="cat-grid">
            {CATEGORIES.map((c) => (
              <article className="cat-card" key={c.slug}>
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <ul className="tool-list">
            <li><Link href="/pdf/merge-pdf">Merge PDF</Link></li>
            <li><Link href="/pdf/split-pdf">Split PDF</Link></li>
            <li><Link href="/pdf/rotate-pdf">Rotate PDF</Link></li>    
            <li><Link href="/pdf/pdf-to-images">PDF to Images</Link></li>
            <li><Link href="/pdf/pdf-to-text">PDF to Text</Link></li>
                </ul>
                <Link href={`/${c.slug}`} className="explore">
                  Explore {c.title}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="spec-tag">FIG. 02 — SPECIFICATION</div>
            <h2>Built to be trusted with your files</h2>
          </div>
        </div>
        <div className="container">
          <div className="why-grid">
            <div className="why-item"><div className="n">A</div><h4>Nothing uploaded</h4><p>Every tool processes files locally using your browser's own engine — nothing is sent to a server.</p></div>
            <div className="why-item"><div className="n">B</div><h4>No account walls</h4><p>Open a tool and use it. No sign-up, no email capture, no trial countdown.</p></div>
            <div className="why-item"><div className="n">C</div><h4>No watermarks</h4><p>Exported files are clean — no branding stamped on your PDFs, images or downloads.</p></div>
            <div className="why-item"><div className="n">D</div><h4>Works everywhere</h4><p>Responsive on phone, tablet and desktop, and works offline once a page has loaded.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Pick a section and get to work</h2>
          <p>Every tool loads instantly — no installs, no waiting rooms.</p>
          <Link href="/pdf" className="btn btn-primary">Open the PDF workbench</Link>
        </div>
      </section>
    </>
  );
}
