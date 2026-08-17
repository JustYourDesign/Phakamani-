import {
  GraduationCap,
  HeartPulse,
  Mic,
  Mountain,
  Target,
  Users,
} from "lucide-react";

import { services } from "@/lib/site";

const icons = [Target, Users, HeartPulse, GraduationCap, Mic, Mountain];

export function ServicesGrid() {
  return (
    <section className="bg-muted/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Core Programmes
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-wide text-forest sm:text-5xl">
            Ways we help you rise.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-wide text-forest">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-evergreen/70">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
