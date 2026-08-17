import { Check } from "lucide-react";

import { audiences } from "@/lib/site";

export function Audiences() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Who We Work With
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight tracking-wide text-forest sm:text-5xl">
          Built for every stage of becoming.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {audiences.map((audience) => (
          <div
            key={audience.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-8"
          >
            <h3 className="font-display text-2xl tracking-wide text-forest">
              {audience.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-evergreen/70">
              {audience.description}
            </p>
            <ul className="mt-6 space-y-3">
              {audience.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-sm text-evergreen/80"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
