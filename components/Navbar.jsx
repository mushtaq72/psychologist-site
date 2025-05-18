// components/Navbar.jsx
import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      {/* Logo/Brand */}
        <div className="text-2xl font-bold text-indigo-700">
          <Link href="/">MindSpace</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Right Section: Appointment Button + Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Appointment Button - Now Left */}
          <Link
            href="/appointment"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Book Appointment
          </Link>

          {/* Social Icons - Now Right of Button */}
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-indigo-700 hover:text-indigo-900 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-indigo-700 hover:text-indigo-900 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="tel:+923001234567"
            aria-label="Call"
            className="text-indigo-700 hover:text-indigo-900 transition"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
