import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-start font-logo text-2xl font-semibold tracking-tight text-forest",
        className,
      )}
    >
      phakamani
      <span className="relative ml-0.5 inline-flex h-1.5 w-1.5 -translate-y-1 rounded-full bg-primary" />
    </span>
  );
}
