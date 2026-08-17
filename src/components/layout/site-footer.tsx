import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo className="text-cream" />
            <p className="max-w-sm text-sm leading-relaxed text-cream/70">
              {siteConfig.description}
            </p>
            <p className="font-display text-3xl tracking-wide text-primary">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Explore
            </p>
            <nav className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-cream/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Connect
            </p>
            <div className="flex flex-col gap-2 text-sm text-cream/80">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-primary"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="transition-colors hover:text-primary"
              >
                {siteConfig.phone}
              </a>
              <span>{siteConfig.location}</span>
            </div>
            <div className="flex gap-4 pt-2">
              {siteConfig.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-cream/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Phakamani. All rights reserved.</span>
          <span>Rise up. Be more.</span>
        </div>
      </div>
    </footer>
  );
}
