"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Activity,
  Brain,
  Briefcase,
  ChevronDown,
  Compass,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { territories, type TerritoryCode } from "@/lib/site";
import { territoryImages } from "@/lib/images";
import { cn } from "@/lib/utils";

const icons = {
  MOVE: Activity,
  MIND: Brain,
  WORK: Briefcase,
  LIVE: Compass,
  YOUTH: GraduationCap,
  STORIES: Sparkles,
} as const;

function TerritoryCard({ territory }: { territory: (typeof territories)[number] }) {
  const [open, setOpen] = useState(false);
  const Icon = icons[territory.code as TerritoryCode];
  const image = territoryImages[territory.code as TerritoryCode];

  return (
    <div
      className={cn(
        "group rounded-2xl border border-border bg-card transition-colors",
        open && "border-primary/40",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 p-8 text-left"
      >
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="size-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display text-2xl tracking-wide text-forest">
              {territory.title}
            </h3>
            <ChevronDown
              className={cn(
                "size-5 shrink-0 text-sage transition-transform duration-300",
                open && "rotate-180 text-primary",
              )}
            />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-evergreen/70">
            {territory.description}
          </p>
        </div>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-5 px-8 pb-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="text-sm leading-relaxed text-evergreen/70">
              {territory.expanded}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Territories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          What We Do
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight tracking-wide text-forest sm:text-5xl">
          Human performance shows up everywhere.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-evergreen/80">
          Not just in sport. In classrooms, boardrooms and everyday life —
          these are the territories where Phakamani helps people become more.
          Tap a territory to learn more.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {territories.map((territory) => (
          <TerritoryCard key={territory.code} territory={territory} />
        ))}
      </div>
    </section>
  );
}
