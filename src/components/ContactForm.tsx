"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";

const reasons = [
  "Free Site Visit",
  "Free Quotation",
  "Bill Analysis",
  "Subsidy Guidance",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const reason = form.get("reason");
    const location = form.get("location");
    const message = form.get("message");

    const text = [
      `Hello ${site.name}, I'd like to request: ${reason}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      location ? `Location: ${location}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${site.whatsappHref}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-lg border border-navy-900/8 bg-white p-6 shadow-[0_20px_50px_-28px_rgba(11,18,32,0.25)] sm:p-8"
    >
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-navy-900">
          Request a consultation
        </h3>
        <p className="mt-1.5 text-sm text-navy-500">
          Share a few details and we will continue the conversation on WhatsApp.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-500">
            Full Name
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="input-field mt-2"
          />
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-500">
            Phone Number
          </label>
          <input
            required
            name="phone"
            type="tel"
            placeholder="10-digit mobile number"
            className="input-field mt-2"
          />
        </div>
      </div>

      <div>
        <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-500">
          Village / Town / Area
        </label>
        <input
          name="location"
          type="text"
          placeholder="e.g. Pimpalgaon, Kolhapur"
          className="input-field mt-2"
        />
      </div>

      <div>
        <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-500">
          I&apos;m Interested In
        </label>
        <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {reasons.map((r, i) => (
            <label
              key={r}
              className="flex cursor-pointer items-center justify-center rounded-md border border-navy-900/10 px-2 py-2.5 text-center text-xs font-medium text-navy-700 transition-colors has-[:checked]:border-sun-500 has-[:checked]:bg-sun-50 has-[:checked]:text-sun-800"
            >
              <input
                type="radio"
                name="reason"
                value={r}
                defaultChecked={i === 0}
                className="sr-only"
              />
              {r}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-500">
          Message (Optional)
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your monthly electricity bill or roof type..."
          className="input-field mt-2 resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-navy-900 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-800"
      >
        Send via WhatsApp
      </button>

      {sent && (
        <p className="rounded-md bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-800">
          WhatsApp is opening with your details pre-filled — just hit send.
        </p>
      )}
    </form>
  );
}
