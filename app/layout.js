import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  metadataBase: new URL("https://www.toolbench.cc"),
  title: {
    default: "ToolBench — Free Online PDF, Image, Text & Developer Tools",
    template: "%s | ToolBench",
  },
  description: "500+ free online tools for PDFs, images, text, unit conversion, and developer work. No sign-up, no uploads — everything runs securely in your browser.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "ToolBench",
    title: "ToolBench — Free Online Tools for Everyday Work",
    description: "PDF, image, text, conversion and developer tools that run entirely in your browser. Free, fast, private.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#101A2C" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Header />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
