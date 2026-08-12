import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          <span className="mark">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 12h10M12 7v10" stroke="#E8A33D" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span>ToolBench<br /><small>FREE ONLINE UTILITIES</small></span>
        </Link>
        <nav className="main-nav">
          <Link href="/pdf">PDF Tools</Link>
          <Link href="/image">Image Tools</Link>
          <Link href="/text">Text Tools</Link>
          <Link href="/convert">Converters</Link>
          <Link href="/generate">Generators</Link>
          <Link href="/dev">Developer</Link>
        </nav>
      </div>
    </header>
  );
}
