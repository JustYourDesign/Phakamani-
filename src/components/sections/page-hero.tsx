import Image from "next/image";

export function PageHero({
  eyebrow,
  heading,
  description,
  image,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  image?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background"
      />

      {image ? (
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight tracking-wide text-forest sm:text-6xl">
              {heading}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-evergreen/80">
              {description}
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-border/60 shadow-xl shadow-forest/10">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-10 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight tracking-wide text-forest sm:text-6xl">
            {heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-evergreen/80">
            {description}
          </p>
        </div>
      )}
    </section>
  );
}
