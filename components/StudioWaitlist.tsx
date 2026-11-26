"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "-mt-2 box-border w-full rounded-md border border-[#AEB6BA] bg-white px-3.5 py-3 font-body text-base md:text-lg";

/** Early-access list for the Learning Design Studio. Collected by Netlify Forms, like the contact form. */
export default function StudioWaitlist() {
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
        <p className="m-0 font-display text-2xl font-bold text-navy">You&apos;re on the list.</p>
        <p className="m-0">I&apos;ll email you when the Design Studio opens.</p>
        <p className="m-0 -rotate-2 font-hand text-[28px] text-teal-dark">Cheryl</p>
      </div>
    );
  }

  return (
    <form name="studio-waitlist" onSubmit={handleSubmit} className="flex flex-col gap-4 pt-2">
      <input type="hidden" name="form-name" value="studio-waitlist" />
      <p className="hidden">
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="w-email" className="text-base font-semibold text-navy">
        Email
      </label>
      <input id="w-email" name="email" type="email" required autoComplete="email" className={inputClass} />

      <label htmlFor="w-role" className="text-base font-semibold text-navy">
        What learning design work do you do? <span className="font-normal text-muted">(optional)</span>
      </label>
      <input id="w-role" name="role" type="text" maxLength={200} className={inputClass} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full cursor-pointer self-start rounded-md border-0 bg-navy px-[22px] py-[15px] font-display text-base font-bold text-cream disabled:opacity-70 md:w-auto"
      >
        {status === "sending" ? "Adding you…" : "Tell me when it opens →"}
      </button>

      {status === "error" && (
        <p role="alert" className="m-0 text-base text-[#A23B2A]">
          Sorry, that didn&apos;t go through. Please email me at{" "}
          <a href="mailto:cheryl@shed30.com">cheryl@shed30.com</a> instead.
        </p>
      )}
    </form>
  );
}
