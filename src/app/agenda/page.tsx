"use client";

import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Session = {
  time: string;
  title: string;
  speaker: string;
  partner?: string;
  room: "Room A" | "Room B" | "Room C";
  slidesUrl?: string; // placeholder
};

const data: Record<string, Session[]> = {
  "day-30": [
    { time: "09:00", title: "Opening & Welcome", speaker: "Hosts", room: "Room A" },
    { time: "09:30", title: "AI in the real world", speaker: "J. Rivera", room: "Room A" },
    { time: "10:15", title: "Design systems @ scale", speaker: "L. Chen", room: "Room B" },
    { time: "11:00", title: "Partner talk: Cloud Native", speaker: "Acme Cloud", partner: "Acme", room: "Room C" },
    { time: "13:00", title: "Edge computing patterns", speaker: "M. Patel", room: "Room A" },
    { time: "14:00", title: "Security by design", speaker: "K. Novak", room: "Room B" },
    { time: "15:00", title: "Partner talk: Data Mesh", speaker: "DataCorp", partner: "DataCorp", room: "Room C" },
  ],
  "day-31": [
    { time: "09:00", title: "Day 2 Kickoff", speaker: "Hosts", room: "Room A" },
    { time: "09:30", title: "GenAI product delivery", speaker: "A. Smith", room: "Room B" },
    { time: "10:15", title: "Web performance 2025", speaker: "T. Yamamoto", room: "Room A" },
    { time: "11:00", title: "Partner talk: Observability", speaker: "Loglytics", partner: "Loglytics", room: "Room C" },
    { time: "13:00", title: "Kubernetes deep dive", speaker: "R. Müller", room: "Room B" },
    { time: "14:00", title: "Designing for trust", speaker: "F. Rossi", room: "Room C" },
    { time: "15:00", title: "Closing & Wrap-up", speaker: "Hosts", room: "Room A" },
  ],
};

const rooms = ["Room A", "Room B", "Room C"] as const;

export default function AgendaPage() {
  const [day, setDay] = useState<string>("day-30");
  const [room, setRoom] = useState<(typeof rooms)[number] | "all">("all");

  const sessions = useMemo(() => {
    const list = data[day] ?? [];
    return room === "all" ? list : list.filter((s) => s.room === room);
  }, [day, room]);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Agenda</h1>
          <p className="text-foreground/70">Three rooms. Two days. Dozens of talks.</p>
        </div>

        <div className="flex gap-2">
          <Tabs value={day} onValueChange={setDay} className="w-full sm:w-auto">
            <TabsList>
              <TabsTrigger value="day-30">Oct 30</TabsTrigger>
              <TabsTrigger value="day-31">Oct 31</TabsTrigger>
            </TabsList>
          </Tabs>

          <Select value={room} onValueChange={(v) => setRoom(v as any)}>
            <SelectTrigger className="w-[140px]"><SelectValue placeholder="Room" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All rooms</SelectItem>
              <SelectItem value="Room A">Room A</SelectItem>
              <SelectItem value="Room B">Room B</SelectItem>
              <SelectItem value="Room C">Room C</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={day} onValueChange={setDay} className="mt-6">
        <TabsContent value="day-30" className="mt-0">
          <SessionList list={sessions} day="Oct 30" />
        </TabsContent>
        <TabsContent value="day-31" className="mt-0">
          <SessionList list={sessions} day="Oct 31" />
        </TabsContent>
      </Tabs>
    </main>
  );
}

function SessionList({ list, day }: { list: Session[]; day: string }) {
  return (
    <div className="grid gap-4">
      {list.map((s, i) => (
        <Card
          key={`${day}-${s.time}-${i}`}
          className="rounded-none border-border/50 transition-transform duration-150 active:scale-95"
        >
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between gap-4 text-base sm:text-lg">
              <span>{s.title}</span>
              <span className="text-sm font-normal text-foreground/60">{s.time}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="secondary" className="bg-primary/15 text-primary">{s.room}</Badge>
              {s.partner ? (
                <Badge variant="secondary" className="bg-primary/10 text-primary">Partner</Badge>
              ) : null}
              <span className="text-foreground/70">{s.speaker}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="border-primary/40 text-foreground/80 transition-transform duration-150 active:scale-95"
                disabled
              >
                Slides available after event
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}