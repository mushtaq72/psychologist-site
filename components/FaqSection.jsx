"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long is each therapy session?",
    answer: "Each session typically lasts about 50 minutes to 1 hour depending on the type of therapy.",
  },
  {
    question: "Do you offer online sessions?",
    answer: "Yes, I offer virtual sessions through Zoom or Google Meet for clients who prefer remote therapy.",
  },
  {
    question: "Is everything I share confidential?",
    answer: "Absolutely. All sessions are 100% confidential, following ethical therapy guidelines.",
  },
  {
    question: "How do I book my first session?",
    answer: "You can use the contact form or call directly to schedule your first appointment.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-900">Frequently Asked Questions</h2>
        <p className="text-indigo-700 mt-4 max-w-xl mx-auto">
          Have questions about therapy? Here are some answers to get you started.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-indigo-100 rounded-md p-4 shadow-sm transition"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-indigo-900 font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-indigo-600 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeIndex === index && (
              <p className="mt-3 text-sm text-indigo-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
