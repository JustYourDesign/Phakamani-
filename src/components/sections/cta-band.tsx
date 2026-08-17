import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBand({
  eyebrow = "Ready?",
  heading = "Ready to become more?",
  description = "Tell us where you are and where you want to go. We'll shape a programme that fits.",
  ctaLabel = "Start the Conversation",
  ctaHref = "/contact",
}: {
  eyebrow?: string;
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-forest px-8 py-16 text-center text-cream sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--brand-via) 0%, var(--brand-to) 50%, transparent 70%)",
          }}
        />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight tracking-wide sm:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-cream/70">
          {description}
        </p>
        <Link
          href={ctaHref}
          className={cn(buttonVariants({ size: "lg" }), "mt-8 rounded-full px-8 text-base")}
        >
          {ctaLabel}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
