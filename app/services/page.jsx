// app/services/page.jsx
"use client";

import { User, HeartHandshake, Users, Calendar, Clock, Brain } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Personal Therapy",
      desc: "One-on-one sessions focused on anxiety, depression and self-growth.",
      icon: User,
      href: "/appointment?type=personal",
    },
    {
      title: "Couple Therapy",
      desc: "Improve communication, rebuild trust and deepen connection.",
      icon: HeartHandshake,
      href: "/appointment?type=couple",
    },
    {
      title: "Family Therapy",
      desc: "Resolve conflicts and foster healthy family dynamics.",
      icon: Users,
      href: "/appointment?type=family",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Top headline */}
      <h1 className="text-4xl font-bold text-indigo-700 text-center">
        Our Services
      </h1>

      {/* Card Grid */}
      <div className="grid gap-10 md:grid-cols-3">
        {services.map(({ title, desc, icon: Icon, href }) => (
          <div
            key={title}
            className="flex flex-col bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition"
          >
            <div className="self-start mb-6 bg-indigo-100 text-indigo-700 p-4 rounded-full">
              <Icon size={30} />
            </div>
            <h2 className="text-2xl font-semibold text-indigo-800 mb-2">
              {title}
            </h2>
            <p className="text-gray-600 flex-1">{desc}</p>

            <Link
              href={href}
              className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition self-start"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>

      {/* ───────────────────────── Detailed Section ───────────────────────── */}
      <section className="bg-indigo-50/60 rounded-xl p-10">
        <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
          What to Expect in Therapy
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* left column – goals */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center gap-2">
              <Brain size={22} /> Common Goals
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Managing anxiety &amp; panic attacks</li>
              <li>Overcoming depressive thoughts</li>
              <li>Strengthening relationship bonds</li>
              <li>Parent-child communication skills</li>
            </ul>
          </div>

          {/* middle column – structure */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center gap-2">
              <Calendar size={22} /> Session Structure
            </h3>
            <p className="text-gray-700">
              Each therapy plan begins with an<br />
              <span className="font-medium">intake session (60 min)</span> to map
              out your needs. Follow-up sessions are typically 45 minutes once a
              week. We tailor frequency as progress unfolds.
            </p>
          </div>

          {/* right column – logistics */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center gap-2">
              <Clock size={22} /> Logistics &amp; Fees
            </h3>
            <p className="text-gray-700 mb-2">
              • In-clinic &amp; secure online sessions available.<br />
              • Sliding-scale fees for students &amp; low-income clients.<br />
              • 24-hour cancellation policy.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-3 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
