import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

const items = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
  },
  { icon: MapPin, label: "Location", value: siteConfig.location },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-forest p-8 text-cream">
      <p className="font-display text-3xl tracking-wide">
        Let&rsquo;s start a conversation.
      </p>
      <p className="text-sm leading-relaxed text-cream/70">
        Whether you&rsquo;re an individual, a company or a school — reach out
        and we&rsquo;ll help shape a programme around what &ldquo;more&rdquo;
        looks like for you.
      </p>

      <div className="mt-2 space-y-5">
        {items.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-primary">
                <Icon className="size-4" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-cream/50">
                  {item.label}
                </span>
                <span className="text-sm text-cream/90">{item.value}</span>
              </span>
            </>
          );
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 transition-colors hover:text-primary"
            >
              {content}
            </a>
          ) : (
            <div key={item.label} className="flex items-center gap-4">
              {content}
            </div>
          );
        })}
      </div>

      <div className="mt-auto flex gap-4 border-t border-cream/10 pt-6">
        {siteConfig.social.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-cream/70 transition-colors hover:text-primary"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
