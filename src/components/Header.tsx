"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { href: "/", label: "Home" },
  { href: "/agenda", label: "Agenda" },
  { href: "/coffee-calls", label: "Coffee Calls" },
  { href: "/feedback", label: "Feedback" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="font-semibold tracking-tight">Tech & Tacos</span>
          </Link>

          <nav className="hidden gap-1 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className={(pathname === item.href ? "bg-primary text-black hover:bg-primary/90" : "text-foreground/80 hover:text-foreground") + " transition-transform duration-150 active:scale-95"}
                  size="sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="transition-transform duration-150 active:scale-95">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 rounded-none">
                <div className="mt-8 grid gap-2">
                  {nav.map((item) => (
                    <Link key={item.href} href={item.href} className="w-full">
                      <Button
                        className="w-full justify-start transition-transform duration-150 active:scale-95"
                        variant={pathname === item.href ? "default" : "ghost"}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}