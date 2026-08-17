import type { Metadata } from "next";
import { Anton, Bebas_Neue, Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const displayFont = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

// Stand-in for "AA Baron" (Baron Neue) — free for commercial use, same
// bold uppercase display character, until licensed Baron Neue files exist.
const baronFont = Anton({
  variable: "--font-baron",
  weight: "400",
  subsets: ["latin"],
});

const logoFont = Quicksand({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Phakamani — Be More.",
  description:
    "Phakamani is an African human-performance company helping individuals, organisations and communities become more capable, elevate performance and live fully.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${baronFont.variable} ${logoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
