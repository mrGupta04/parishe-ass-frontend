"use client";

import { useState } from "react";
import { postJson } from "@/lib/api-client";

const initialForm = { name: "", email: "", message: "" };

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | undefined>(undefined);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }
    setStatus("submitting");
    setError(undefined);
    try {
      await postJson<{ ok: boolean }>("/contact", form);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setError((err as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-800" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-600"
          placeholder="Your name"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-800" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-600"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-800" htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="h-28 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-600"
          placeholder="Share details about your exam goals or support needs."
          required
        />
      </div>
      {status === "success" ? (
        <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800">
          Thanks! We received your message and will respond soon.
        </div>
      ) : null}
      {error ? (
        <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</div>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
