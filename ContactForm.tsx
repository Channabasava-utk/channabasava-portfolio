"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const EMAIL = "channabasavautk@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card mt-8 grid gap-4 p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="mono text-xs text-zinc-500">
            NAME
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm outline-none focus:border-sky-400"
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="mono text-xs text-zinc-500">
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm outline-none focus:border-sky-400"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="mono text-xs text-zinc-500">
          MESSAGE
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm outline-none focus:border-sky-400"
          placeholder="What's on your mind?"
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-white"
        >
          <Send size={16} /> Send message
        </button>
        {sent && (
          <span className="inline-flex items-center gap-2 text-sm text-emerald-400">
            <CheckCircle2 size={16} /> Opening your email app…
          </span>
        )}
      </div>
    </form>
  );
}
