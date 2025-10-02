"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="relative">
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1546900703-cf06143d1239?q=80&w=2400&auto=format&fit=crop')] bg-[center_top_20%] bg-cover opacity-25"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex min-h-[72dvh] flex-col items-start justify-center py-16 sm:py-24">
            <Badge className="mb-4 bg-primary text-black">Internal Event</Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Tech & Tacos
            </h1>
            <p className="mt-3 max-w-prose text-balance text-foreground/80 sm:text-lg">
              Oct 30–31 • Eschborn — thinking, talking, teaming. Two days of
              talks across 3 rooms, partner sessions, and coffee-call
              networking.
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
              <Link href="/agenda" className="w-full sm:w-auto">
                <Button className="w-full bg-primary text-black hover:bg-primary/90 transition-transform duration-150 active:scale-95">
                  View agenda
                </Button>
              </Link>
              <Link href="/coffee-calls" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-primary/40 text-foreground hover:bg-primary/10 transition-transform duration-150 active:scale-95">
                  Coffee calls
                </Button>
              </Link>
              <Link href="/feedback" className="w-full sm:w-auto">
                <Button variant="ghost" className="w-full transition-transform duration-150 active:scale-95">
                  Leave feedback
                </Button>
              </Link>
            </div>
            <div className="mt-10 grid w-full gap-3 sm:grid-cols-3">
              <div className="rounded-none border border-border/50 p-4 transition-transform duration-150 active:scale-95">
                <p className="text-sm text-foreground/60">Motto</p>
                <p className="mt-1 text-lg font-medium">thinking, talking, teaming</p>
              </div>
              <div className="rounded-none border border-border/50 p-4 transition-transform duration-150 active:scale-95">
                <p className="text-sm text-foreground/60">Where</p>
                <p className="mt-1 text-lg font-medium">Eschborn — 3 rooms</p>
              </div>
              <div className="rounded-none border border-border/50 p-4 transition-transform duration-150 active:scale-95">
                <p className="text-sm text-foreground/60">When</p>
                <p className="mt-1 text-lg font-medium">Oct 30–31</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-none border border-border/50 p-6 transition-transform duration-150 active:scale-95">
            <h3 className="text-xl font-semibold">Three parallel stages</h3>
            <p className="mt-2 text-foreground/70">Explore tracks from AI & Engineering to Product & Design. Move freely between rooms.</p>
          </div>
          <div className="rounded-none border border-border/50 p-6 transition-transform duration-150 active:scale-95">
            <h3 className="text-xl font-semibold">Partners & coffee calls</h3>
            <p className="mt-2 text-foreground/70">Meet partners, grab a slot, and learn over a coffee. Booking opens on-site.</p>
          </div>
          <div className="rounded-none border border-border/50 p-6 transition-transform duration-150 active:scale-95">
            <h3 className="text-xl font-semibold">Slides after the event</h3>
            <p className="mt-2 text-foreground/70">Access decks from every session once the event wraps. Watch this space.</p>
          </div>
        </div>
      </section>
    </main>
  );
}