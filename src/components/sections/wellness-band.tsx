import { wellnessPillars } from "@/lib/site";

export function WellnessBand() {
  return (
    <section className="bg-muted/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Rooted in Wellness
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-wide text-forest sm:text-5xl">
            Mind, body and heart — nurtured together.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {wellnessPillars.map((pillar, index) => (
            <div key={pillar.title} className="flex flex-col gap-3">
              <span className="font-baron text-4xl text-primary/60">
                0{index + 1}
              </span>
              <h3 className="font-display text-2xl tracking-wide text-forest">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-evergreen/70">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
