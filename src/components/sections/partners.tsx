import { LogoMarquee, type LogoMarqueeItem } from "@/components/ui/logo-marquee";
import { partnerPlaceholders } from "@/lib/site";

const items: LogoMarqueeItem[] = partnerPlaceholders.map((name, index) => ({
  id: `partner-${index}`,
  label: name,
}));

export function Partners() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-sage">
        Organisations Pursuing More
      </p>
      <h2 className="mx-auto mt-4 max-w-xl text-center font-display text-3xl leading-tight tracking-wide text-forest sm:text-4xl">
        In partnership with
      </h2>

      <div className="mt-10">
        <LogoMarquee items={items} label="Partner organisations" />
      </div>

      <p className="mx-auto mt-4 max-w-md text-center text-xs text-evergreen/50">
        Placeholder tiles — swap in real partner names and logos when
        available.
      </p>
    </section>
  );
}
