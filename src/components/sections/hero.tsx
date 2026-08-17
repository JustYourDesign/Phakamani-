import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { stockImages } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-15%] -z-10 h-[520px] w-[520px] rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, var(--brand-via) 0%, var(--brand-to) 40%, transparent 65%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="flex flex-col items-start gap-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Human Performance Company
          </span>

          <h1 className="max-w-xl font-display text-6xl leading-[0.95] tracking-wide text-forest sm:text-7xl">
            There is more
            <br />
            in you.{" "}
            <span className="text-primary">Be More.</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-evergreen/80 sm:text-xl">
            Phakamani — from the Nguni concept meaning &ldquo;Rise Up&rdquo; —
            helps individuals, organisations and communities discover,
            develop and express more of their potential. Performance in
            service of life.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className={buttonVariants({ size: "lg", className: "rounded-full px-8 text-base" })}
            >
              Explore Services
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full border-forest/30 px-8 text-base text-forest hover:bg-accent hover:text-forest",
              )}
            >
              Start the Conversation
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl shadow-forest/10">
            <Image
              src={stockImages.heroSummit.src}
              alt={stockImages.heroSummit.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/0 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden max-w-56 rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
            <p className="font-display text-3xl tracking-wide text-primary">
              Be More.
            </p>
            <p className="mt-1 text-xs leading-relaxed text-evergreen/70">
              What feels impossible can become possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
