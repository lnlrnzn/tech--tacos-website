"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const partners = [
  {
    name: "Acme Cloud",
    blurb: "Cloud-native platforms and DevOps tooling.",
    tags: ["Cloud", "Kubernetes", "DevOps"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "DataCorp",
    blurb: "Modern data stack and analytics.",
    tags: ["Data", "Analytics", "ETL"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Loglytics",
    blurb: "Observability and logs that scale.",
    tags: ["Observability", "Logs", "Tracing"],
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CoffeeCallsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Coffee calls</h1>
        <p className="text-foreground/70">Meet our partners for 1:1 conversations. Pick a topic, grab a slot — booking opens on-site.</p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((p) => (
          <Card key={p.name} className="rounded-none overflow-hidden border-border/50 transition-transform duration-150 active:scale-95">
            <div className="h-36 w-full bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">{t}</Badge>
                ))}
              </div>
              <div className="mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-primary text-black hover:bg-primary/90 transition-transform duration-150 active:scale-95">Book coffee call</Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-none">
                    <DialogHeader>
                      <DialogTitle>Booking opens soon</DialogTitle>
                    </DialogHeader>
                    <p className="text-foreground/70">This is a demo. In production, you would pick a time slot and confirm your booking.</p>
                    <Button disabled className="bg-primary/70 text-black">Select time slot</Button>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}