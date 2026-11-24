"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "-mt-2 box-border w-full rounded-md border border-[#AEB6BA] bg-white px-3.5 py-3 font-body text-base md:text-lg";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, String(value)));

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-3 pt-2">
        <p className="m-0 font-display text-2xl font-bold text-navy">Thanks, it&apos;s on my bench.</p>
        <p className="m-0">I&apos;ll read it properly and get back to you within two working days.</p>
        <p className="m-0 -rotate-2 font-hand text-[28px] text-teal-dark">Cheryl</p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 pt-2"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="c-name" className="text-base font-semibold text-navy">
        Your name
      </label>
      <input id="c-name" name="name" type="text" required autoComplete="name" className={inputClass} />

      <label htmlFor="c-email" className="text-base font-semibold text-navy">
        Email
      </label>
      <input id="c-email" name="email" type="email" required autoComplete="email" className={inputClass} />

      <label htmlFor="c-msg" className="text-base font-semibold text-navy">
        What do you need made, mended or handed over?
      </label>
      <textarea id="c-msg" name="message" rows={4} required className={`${inputClass} resize-y`} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full cursor-pointer self-start rounded-md border-0 bg-navy px-[22px] py-[15px] font-display text-base font-bold text-cream disabled:opacity-70 md:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send it through →"}
      </button>

      {status === "error" && (
        <p role="alert" className="m-0 text-base text-[#A23B2A]">
          Sorry, that didn&apos;t send. Please email me at{" "}
          <a href="mailto:cheryl@shed30.com">cheryl@shed30.com</a> instead.
        </p>
      )}
    </form>
  );
}
