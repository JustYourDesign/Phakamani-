import Image from "next/image";

import { stockImages } from "@/lib/images";

export function Philosophy() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/60 lg:aspect-auto lg:h-full">
          <Image
            src={stockImages.coachingConversation.src}
            alt={stockImages.coachingConversation.alt}
            fill
            sizes="(min-width: 1024px) 35vw, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            About Us
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-wide text-forest sm:text-5xl">
            Performance in service of life.
          </h2>

          <div className="mt-6 space-y-6 text-lg leading-relaxed text-evergreen/80">
            <p>
              The philosophy behind Phakamani comes from discovering that
              perceived limits are not always actual limits. Completing an
              Ironman created a powerful realisation: what feels impossible
              can become possible with the right mindset, habits, support,
              preparation and belief.
            </p>
            <p>
              That feeling — the discovery that there is more in you —
              became the seed of Phakamani. We don&rsquo;t believe
              performance exists only for productivity or winning.
              Performance should let people live better, lead better, love
              better, and explore what is possible.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 font-display text-2xl tracking-wide text-forest">
              Human beings often have more capacity than they realise.
              Phakamani exists to help unlock it.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
