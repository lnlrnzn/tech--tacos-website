"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Entry { id: number; name: string; comment: string; }

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [items, setItems] = useState<Entry[]>([
    { id: 1, name: "Eda", comment: "Loved the AI track. Great speakers!" },
    { id: 2, name: "Jonas", comment: "Coffee calls were a fantastic idea." },
  ]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!comment.trim()) return;
    setItems((prev) => [{ id: Date.now(), name: name || "Anonymous", comment }, ...prev]);
    setName("");
    setComment("");
  }

  return (
    <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Feedback</h1>
      <p className="text-foreground/70">Share thoughts, kudos, and ideas. This is a demo — no data is stored.</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-none border border-border/50 p-4 transition-transform duration-150 active:scale-95">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name (optional)" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="comment">Comment</Label>
          <Textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="What did you think?" rows={4} />
        </div>
        <div className="flex items-center justify-between gap-2">
          <Badge className="bg-primary text-black">Public board</Badge>
          <Button type="submit" className="bg-primary text-black hover:bg-primary/90 transition-transform duration-150 active:scale-95">Post</Button>
        </div>
      </form>

      <div className="mt-8 grid gap-4">
        {items.map((it) => (
          <Card key={it.id} className="rounded-none border-border/50 transition-transform duration-150 active:scale-95">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{it.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{it.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}