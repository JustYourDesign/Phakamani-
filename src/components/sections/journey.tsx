import { journeyStages } from "@/lib/site";

export function Journey() {
  return (
    <section className="bg-forest py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Phakamani Journey
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-wide sm:text-5xl">
            Four stages. One belief.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/70">
            Every programme we run — coaching, workshops, retreats or team
            sessions — moves through the same human-performance journey.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {journeyStages.map((stage) => (
            <div
              key={stage.step}
              className="flex flex-col gap-4 bg-forest p-8 transition-colors hover:bg-evergreen/40"
            >
              <span className="font-baron text-3xl tracking-wide text-primary">
                {stage.step}
              </span>
              <h3 className="font-display text-2xl tracking-wide">
                {stage.name}
              </h3>
              <p className="text-sm leading-relaxed text-cream/70">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
