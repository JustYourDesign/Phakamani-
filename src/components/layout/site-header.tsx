"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide text-forest/70 transition-colors hover:text-forest",
                  active && "text-forest",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className={cn(buttonVariants({ size: "lg" }), "hidden rounded-full md:inline-flex")}
        >
          Start the Conversation
        </Link>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-forest hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "mt-4 rounded-full")}
              >
                Start the Conversation
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
