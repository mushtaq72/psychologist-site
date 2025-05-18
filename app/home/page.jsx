"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const f = e.target;
    const payload = {
      name: f.name.value,
      email: f.email.value,
      phone: f.phone.value,
      message: f.message.value,
    };

    const res = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSubmitting(false);
    setSent(res.ok);
    if (res.ok) f.reset();
  }

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center px-6 py-24">
      {/* ── low-opacity background image ── */}
      <Image
        src="/contact-bg.jpg"          /* place any calming photo in /public */
        alt="Soft abstract background"
        fill
        priority
        className="-z-10 object-cover object-center opacity-30"
      />

      {/* ── intro headline ── */}
      <div className="absolute top-16 inset-x-0 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 drop-shadow-sm">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Have a question or ready to book a session? Fill out the form below
          and we’ll reply within <strong>24&nbsp;hours</strong>.
        </p>
      </div>

      {/* ── glass-style form card ── */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/85 backdrop-blur-lg shadow-xl rounded-2xl p-8 space-y-6 mt-40"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Input name="name" label="Full Name" />
          <Input name="email" label="Email" type="email" />
          <Input name="phone" label="Phone" type="tel" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full rounded-lg border-gray-300 focus:ring-indigo-600 focus:border-indigo-600"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full transition disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send Message"}
        </button>

        {sent && (
          <p className="text-green-700 text-center font-medium">
            Thank you! We’ll be in touch shortly.
          </p>
        )}
      </form>

      {/* ── footer note ── */}
      <div className="absolute bottom-10 inset-x-0 text-center px-6">
        <p className="text-gray-800 max-w-3xl mx-auto">
          For urgent matters please call&nbsp;
          <a href="tel:+923001234567" className="underline font-medium">
            +92&nbsp;300&nbsp;123-4567
          </a>
          &nbsp;or send a&nbsp;
          <a
            href="https://wa.me/923001234567"
            className="underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp message
          </a>
          .
        </p>
      </div>
    </section>
  );
}

/* reusable input field */
function Input({ name, label, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="rounded-lg border-gray-300 focus:ring-indigo-600 focus:border-indigo-600"
      />
    </div>
  );
}
