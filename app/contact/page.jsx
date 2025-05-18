"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto my-16 px-6 py-10 bg-indigo-60 rounded-lg"
      style={{ backgroundColor: "indigo-50" }}
    >
      <h2 className="text-3xl font-semibold text-indigo-900 mb-10 text-center">Contacts</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left image */}
        <div className="flex-1">
          <img
            src="/call.jpg"
            alt="Contact"
            className="rounded-xl shadow-lg max-w-full"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Right form */}
        <form
          className="flex-1 p-8 rounded-xl shadow-md"
          style={{ maxWidth: "450px", backgroundColor: "#5A6A89" }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full mb-6 px-4 py-3 rounded-lg focus:outline-none text-gray-900 bg-white placeholder-gray-400"
            required
          />
          <input
            type="tel"
            placeholder="+92..."
            className="w-full mb-6 px-4 py-3 rounded-lg focus:outline-none text-gray-900 bg-white placeholder-gray-400"
            required
          />
          <textarea
            placeholder="Your comment"
            rows="4"
            className="w-full mb-6 px-4 py-3 rounded-lg focus:outline-none text-gray-900 bg-white placeholder-gray-400 resize-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600  hover:bg-indigo-700  text-white font-semibold py-3 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
